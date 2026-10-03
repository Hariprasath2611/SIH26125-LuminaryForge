export interface ScrubResult {
  hasSecret: boolean;
  scrubbedText: string;
  detectedType?: 'MNEMONIC_PHRASE' | 'PRIVATE_KEY_HEX' | 'SECRET_TOKEN';
  warning?: string;
}

// 64-hex private key (with or without 0x)
const HEX_PRIVATE_KEY_REGEX = /(?:0x)?[a-fA-F0-9]{64}/g;

// Common BIP-39 English word subset or sequence pattern (12 or 24 space-separated words)
const MNEMONIC_12_OR_24_REGEX = /\b([a-z]{3,8}\s+){11,23}[a-z]{3,8}\b/gi;

// Sensitive API key prefixes or JWT signatures
const SENSITIVE_TOKEN_REGEX = /(?:eyJh[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+|sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{20,})/g;

export function inspectAndScrubSecrets(input: string): ScrubResult {
  if (!input || typeof input !== 'string') {
    return { hasSecret: false, scrubbedText: '' };
  }

  // Check 1: 64-hex private keys
  if (HEX_PRIVATE_KEY_REGEX.test(input)) {
    const scrubbed = input.replace(HEX_PRIVATE_KEY_REGEX, '[REDACTED_PRIVATE_KEY]');
    return {
      hasSecret: true,
      scrubbedText: scrubbed,
      detectedType: 'PRIVATE_KEY_HEX',
      warning: 'Security Alert: A potential private key was detected in your message. For your safety, Bharosa Copilot has blocked this request. Never paste private keys into any chat or form.',
    };
  }

  // Check 2: 12 or 24-word seed phrases
  // Additional heuristic check: verify word length and word count
  const words = input.trim().toLowerCase().split(/\s+/);
  if (words.length >= 12 && words.length <= 26 && MNEMONIC_12_OR_24_REGEX.test(input)) {
    return {
      hasSecret: true,
      scrubbedText: '[REDACTED_SEED_PHRASE]',
      detectedType: 'MNEMONIC_PHRASE',
      warning: 'Security Alert: A 12 or 24-word secret recovery phrase was detected. Never share your recovery seed phrase with anyone, including Copilot or support. This request was blocked for your safety.',
    };
  }

  // Check 3: Sensitive tokens or JWTs
  if (SENSITIVE_TOKEN_REGEX.test(input)) {
    const scrubbed = input.replace(SENSITIVE_TOKEN_REGEX, '[REDACTED_TOKEN]');
    return {
      hasSecret: true,
      scrubbedText: scrubbed,
      detectedType: 'SECRET_TOKEN',
      warning: 'Security Alert: An API token or secret signature was detected and blocked. Never transmit raw tokens.',
    };
  }

  return {
    hasSecret: false,
    scrubbedText: input,
  };
}
