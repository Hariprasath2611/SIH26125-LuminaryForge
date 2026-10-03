export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface CopilotChatContext {
  route: string;
  role: string;
  selectedItemId?: string;
}

export interface StreamCallbacks {
  onChunk: (text: string) => void;
  onToolCall?: (toolCall: { name: string; args: any }) => void;
  onDone: (fullText: string, metadata?: { citations?: string[]; intents?: any[] }) => void;
  onError: (err: any) => void;
}

export interface CopilotProvider {
  name: string;
  chatStream(
    messages: ChatMessage[],
    tools: any[],
    context: CopilotChatContext,
    callbacks: StreamCallbacks,
    abortSignal?: AbortSignal
  ): Promise<void>;
}
