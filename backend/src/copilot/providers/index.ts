import { CopilotProvider } from './providerInterface';
import { OfflineKbProvider } from './offlineKbProvider';
import { AnthropicProvider } from './anthropicProvider';
import { GeminiProvider } from './geminiProvider';

export function getCopilotProvider(): CopilotProvider {
  const mode = process.env.COPILOT_MODE || '';
  const providerType = (process.env.COPILOT_PROVIDER || '').toLowerCase();

  // If COPILOT_MODE=kb-only, always use offline knowledge base provider
  if (mode === 'kb-only') {
    return new OfflineKbProvider();
  }

  if (providerType === 'anthropic' && process.env.ANTHROPIC_API_KEY) {
    return new AnthropicProvider();
  }

  if (providerType === 'gemini' && process.env.GEMINI_API_KEY) {
    return new GeminiProvider();
  }

  // Fallback to offline KB provider if no keys or default
  return new OfflineKbProvider();
}
