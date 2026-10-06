"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCopilotProvider = getCopilotProvider;
const offlineKbProvider_1 = require("./offlineKbProvider");
const anthropicProvider_1 = require("./anthropicProvider");
const geminiProvider_1 = require("./geminiProvider");
function getCopilotProvider() {
    const mode = process.env.COPILOT_MODE || '';
    const providerType = (process.env.COPILOT_PROVIDER || '').toLowerCase();
    // If COPILOT_MODE=kb-only, always use offline knowledge base provider
    if (mode === 'kb-only') {
        return new offlineKbProvider_1.OfflineKbProvider();
    }
    if (providerType === 'anthropic' && process.env.ANTHROPIC_API_KEY) {
        return new anthropicProvider_1.AnthropicProvider();
    }
    if (providerType === 'gemini' && process.env.GEMINI_API_KEY) {
        return new geminiProvider_1.GeminiProvider();
    }
    // Fallback to offline KB provider if no keys or default
    return new offlineKbProvider_1.OfflineKbProvider();
}
