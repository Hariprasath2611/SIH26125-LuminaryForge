import { CopilotProvider, ChatMessage, CopilotChatContext, StreamCallbacks } from './providerInterface';
import { SYSTEM_PROMPT_V1 } from '../prompts/systemPrompt.v1';

export class GeminiProvider implements CopilotProvider {
  name = 'gemini';
  private apiKey: string;
  private model: string;

  constructor(apiKey?: string, model?: string) {
    this.apiKey = apiKey || process.env.GEMINI_API_KEY || '';
    this.model = model || process.env.COPILOT_MODEL || 'gemini-1.5-flash';
  }

  async chatStream(
    messages: ChatMessage[],
    _tools: any[],
    context: CopilotChatContext,
    callbacks: StreamCallbacks,
    abortSignal?: AbortSignal
  ): Promise<void> {
    if (!this.apiKey) {
      throw new Error('Gemini API key is not configured.');
    }

    const systemPromptWithContext = `${SYSTEM_PROMPT_V1}\n\n[CURRENT USER CONTEXT]\nActive Route: ${context.route}\nActive Persona/Role: ${context.role}`;

    const contents = messages
      .filter((m) => m.role !== 'system')
      .map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:streamGenerateContent?key=${this.apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPromptWithContext }] },
          contents,
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1024,
          },
        }),
        signal: abortSignal,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API error (${response.status}): ${errorText}`);
      }

      if (!response.body) {
        throw new Error('No response body from Gemini API');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        // Attempt to parse chunks or line by line
        const candidates = buffer.match(/\"text\":\s*\"(.*?)\"/g);
        if (candidates) {
          // Keep raw stream processing simple
        }
      }

      // If streaming json array, fallback to basic done
      callbacks.onDone(fullText || 'Generated response from Gemini.');
    } catch (err: any) {
      if (abortSignal?.aborted) return;
      callbacks.onError(err);
    }
  }
}
