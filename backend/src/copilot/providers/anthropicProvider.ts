import { CopilotProvider, ChatMessage, CopilotChatContext, StreamCallbacks } from './providerInterface';
import { SYSTEM_PROMPT_V1 } from '../prompts/systemPrompt.v1';

export class AnthropicProvider implements CopilotProvider {
  name = 'anthropic';
  private apiKey: string;
  private model: string;

  constructor(apiKey?: string, model?: string) {
    this.apiKey = apiKey || process.env.ANTHROPIC_API_KEY || '';
    this.model = model || process.env.COPILOT_MODEL || 'claude-3-5-sonnet-20240620';
  }

  async chatStream(
    messages: ChatMessage[],
    tools: any[],
    context: CopilotChatContext,
    callbacks: StreamCallbacks,
    abortSignal?: AbortSignal
  ): Promise<void> {
    if (!this.apiKey) {
      throw new Error('Anthropic API key is not configured.');
    }

    const systemPromptWithContext = `${SYSTEM_PROMPT_V1}\n\n[CURRENT USER CONTEXT]\nActive Route: ${context.route}\nActive Persona/Role: ${context.role}\n${context.selectedItemId ? `Selected Item ID: ${context.selectedItemId}` : ''}`;

    const formattedMessages = messages
      .filter((m) => m.role !== 'system')
      .map((m) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      }));

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: this.model,
          system: systemPromptWithContext,
          messages: formattedMessages,
          max_tokens: 1024,
          temperature: 0.2,
          stream: true,
        }),
        signal: abortSignal,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Anthropic API error (${response.status}): ${errorText}`);
      }

      if (!response.body) {
        throw new Error('No response body received from Anthropic API');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data: ')) {
            const dataStr = trimmed.slice(6);
            if (dataStr === '[DONE]') break;
            try {
              const data = JSON.parse(dataStr);
              if (data.type === 'content_block_delta' && data.delta?.text) {
                fullText += data.delta.text;
                callbacks.onChunk(data.delta.text);
              }
            } catch (e) {
              // Ignore partial JSON parse errors in SSE stream
            }
          }
        }
      }

      callbacks.onDone(fullText);
    } catch (err: any) {
      if (abortSignal?.aborted) {
        return;
      }
      callbacks.onError(err);
    }
  }
}
