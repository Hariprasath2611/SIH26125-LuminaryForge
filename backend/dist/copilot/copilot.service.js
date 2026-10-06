"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copilotService = exports.CopilotService = exports.chatRequestSchema = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
const secretScrubber_1 = require("./guards/secretScrubber");
const rateLimiter_1 = require("./guards/rateLimiter");
const providers_1 = require("./providers");
const toolDefinitions_1 = require("./tools/toolDefinitions");
exports.chatRequestSchema = zod_1.z.object({
    messages: zod_1.z
        .array(zod_1.z.object({
        role: zod_1.z.enum(['system', 'user', 'assistant']),
        content: zod_1.z.string().max(2500, 'Message cannot exceed 2500 characters'),
    }))
        .min(1, 'At least one message is required')
        .max(12, 'Conversation history capped at 12 turns'),
    context: zod_1.z.object({
        route: zod_1.z.string().default('/'),
        role: zod_1.z.string().default('HOLDER'),
        selectedItemId: zod_1.z.string().optional(),
    }),
});
class CopilotService {
    async handleChatStream(body, caller, clientIp, res, abortSignal) {
        const startTime = Date.now();
        // 1. Rate Limiting
        const rateCheck = (0, rateLimiter_1.checkRateLimit)({ uid: caller.uid, ip: clientIp });
        if (!rateCheck.allowed) {
            res.writeHead(429, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: 'RATE_LIMITED',
                message: `Too many requests. Please wait ${rateCheck.retryAfterSec || 30} seconds.`,
            }));
            return;
        }
        // 2. Secret Pattern Scrubbing on the latest user message
        const lastUserMsg = [...body.messages].reverse().find((m) => m.role === 'user');
        if (lastUserMsg) {
            const scrubCheck = (0, secretScrubber_1.inspectAndScrubSecrets)(lastUserMsg.content);
            if (scrubCheck.hasSecret) {
                // Trigger report for abuse monitoring
                await (0, rateLimiter_1.reportSecretViolation)(caller.uid, caller.walletAddress);
                // Immediate rejection before touching LLM or logging content
                res.writeHead(200, {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    Connection: 'keep-alive',
                });
                res.write(`data: ${JSON.stringify({
                    chunk: `⚠️ **${scrubCheck.warning}**\n\nPlease remove any secret keys or seed phrases from your prompt and try again.`,
                    isBlockedSecret: true,
                })}\n\n`);
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
        const provider = (0, providers_1.getCopilotProvider)();
        let accumulatedText = '';
        const toolsCalled = [];
        try {
            await provider.chatStream(body.messages, toolDefinitions_1.ALL_TOOLS, body.context, {
                onChunk: (chunk) => {
                    res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
                },
                onToolCall: (toolCall) => {
                    toolsCalled.push(toolCall.name);
                    res.write(`data: ${JSON.stringify({ toolCall })}\n\n`);
                },
                onDone: async (fullText, metadata) => {
                    accumulatedText = fullText;
                    res.write(`data: ${JSON.stringify({
                        done: true,
                        citations: metadata?.citations || [],
                        intents: metadata?.intents || [],
                    })}\n\n`);
                    res.end();
                    // 4. Observability: Audit Log (without private content)
                    const latencyMs = Date.now() - startTime;
                    try {
                        await prisma_1.prisma.auditEvent.create({
                            data: {
                                eventType: 'COPILOT_MESSAGE',
                                actor: caller.walletAddress || `uid:${caller.uid}`,
                                target: body.context.route,
                                payload: {
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
                    }
                    catch (auditErr) {
                        console.warn('[CopilotService] Audit event logging error:', auditErr);
                    }
                },
                onError: (err) => {
                    console.error('[CopilotService Stream Error]', err);
                    res.write(`data: ${JSON.stringify({ error: err.message || 'Stream processing failed' })}\n\n`);
                    res.end();
                },
            }, abortSignal);
        }
        catch (err) {
            console.error('[CopilotService Error]', err);
            res.write(`data: ${JSON.stringify({ error: err.message || 'Failed to complete Copilot chat' })}\n\n`);
            res.end();
        }
    }
}
exports.CopilotService = CopilotService;
exports.copilotService = new CopilotService();
