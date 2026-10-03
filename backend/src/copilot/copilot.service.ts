import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { inspectAndScrubSecrets } from './guards/secretScrubber';
import { checkRateLimit, reportSecretViolation } from './guards/rateLimiter';
import { getCopilotProvider } from './providers';
import { CallerContext } from './guards/roleGuard';
import { ALL_TOOLS } from './tools/toolDefinitions';

export const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['system', 'user', 'assistant']),
        content: z.string().max(2500, 'Message cannot exceed 2500 characters'),
      })
    )
    .min(1, 'At least one message is required')
    .max(12, 'Conversation history capped at 12 turns'),
  context: z.object({
    route: z.string().default('/'),
    role: z.string().default('HOLDER'),
    selectedItemId: z.string().optional(),
  }),
});

export type ChatRequestBody = z.infer<typeof chatRequestSchema>;

export class CopilotService {
  async handleChatStream(
    body: ChatRequestBody,
    caller: CallerContext,
    clientIp: string,
    res: Response,
    abortSignal?: AbortSignal
  ): Promise<void> {
    const startTime = Date.now();

    // 1. Rate Limiting
    const rateCheck = checkRateLimit({ uid: caller.uid, ip: clientIp });
    if (!rateCheck.allowed) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          error: 'RATE_LIMITED',
          message: `Too many requests. Please wait ${rateCheck.retryAfterSec || 30} seconds.`,
        })
      );
      return;
    }

    // 2. Secret Pattern Scrubbing on the latest user message
    const lastUserMsg = [...body.messages].reverse().find((m) => m.role === 'user');
    if (lastUserMsg) {
      const scrubCheck = inspectAndScrubSecrets(lastUserMsg.content);
      if (scrubCheck.hasSecret) {
        // Trigger report for abuse monitoring
        await reportSecretViolation(caller.uid, caller.walletAddress);

        // Immediate rejection before touching LLM or logging content
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        });

        res.write(
          `data: ${JSON.stringify({
            chunk: `⚠️ **${scrubCheck.warning}**\n\nPlease remove any secret keys or seed phrases from your prompt and try again.`,
            isBlockedSecret: true,
          })}\n\n`
        );
        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
        res.end();
        return;
      }
    }

    // 3. Prepare SSE headers
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    });

    const provider = getCopilotProvider();
    let accumulatedText = '';
    const toolsCalled: string[] = [];

    try {
      await provider.chatStream(
        body.messages,
        ALL_TOOLS,
        body.context,
        {
          onChunk: (chunk: string) => {
            res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
          },
          onToolCall: (toolCall) => {
            toolsCalled.push(toolCall.name);
            res.write(`data: ${JSON.stringify({ toolCall })}\n\n`);
          },
          onDone: async (fullText: string, metadata?: { citations?: string[]; intents?: any[] }) => {
            accumulatedText = fullText;
            res.write(
              `data: ${JSON.stringify({
                done: true,
                citations: metadata?.citations || [],
                intents: metadata?.intents || [],
              })}\n\n`
            );
            res.end();

            // 4. Observability: Audit Log (without private content)
            const latencyMs = Date.now() - startTime;
            try {
              await prisma.auditEvent.create({
                data: {
                  eventType: 'COPILOT_MESSAGE' as any,
                  caller: caller.walletAddress || `uid:${caller.uid}`,
                  details: {
                    uid: caller.uid,
                    route: body.context.route,
                    role: caller.role,
                    toolsCalled,
                    latencyMs,
                    turnsCount: body.messages.length,
                    hasIntents: !!(metadata?.intents && metadata.intents.length > 0),
                  },
                },
              });
            } catch (auditErr) {
              console.warn('[CopilotService] Audit event logging error:', auditErr);
            }
          },
          onError: (err: any) => {
            console.error('[CopilotService Stream Error]', err);
            res.write(`data: ${JSON.stringify({ error: err.message || 'Stream processing failed' })}\n\n`);
            res.end();
          },
        },
        abortSignal
      );
    } catch (err: any) {
      console.error('[CopilotService Error]', err);
      res.write(`data: ${JSON.stringify({ error: err.message || 'Failed to complete Copilot chat' })}\n\n`);
      res.end();
    }
  }
}

export const copilotService = new CopilotService();
