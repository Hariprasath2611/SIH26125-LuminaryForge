import { useState, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { resolveApiUrl } from '../lib/api/client';
import { CopilotIntent } from '../lib/copilot-intents';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: string[];
  intents?: CopilotIntent[];
  isBlockedSecret?: boolean;
  createdAt: number;
}

export function useCopilot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const location = useLocation();
  const { account, getIdToken } = useAuth();

  const stopGenerating = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
  }, []);

  const clearHistory = useCallback(() => {
    stopGenerating();
    setMessages([]);
    setError(null);
  }, [stopGenerating]);

  const sendMessage = useCallback(
    async (userText: string, selectedItemId?: string) => {
      const text = userText.trim();
      if (!text || isStreaming) return;

      setError(null);
      const userMessageId = `msg_user_${Date.now()}`;
      const assistantMessageId = `msg_asst_${Date.now() + 1}`;

      const newUserMsg: ChatMessage = {
        id: userMessageId,
        role: 'user',
        content: text,
        createdAt: Date.now(),
      };

      const updatedHistory = [...messages, newUserMsg];
      setMessages(updatedHistory);
      setIsStreaming(true);

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      try {
        const token = (await getIdToken()) || 'demo_token';
        const url = resolveApiUrl('/copilot/chat');

        // Only send the last 12 messages and only { route, role, selectedItemId }
        const historyForBackend = updatedHistory.slice(-12).map((m) => ({
          role: m.role,
          content: m.content.slice(0, 2000),
        }));

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            messages: historyForBackend,
            context: {
              route: location.pathname,
              role: account?.persona || 'HOLDER',
              selectedItemId,
            },
          }),
          signal: abortController.signal,
        });

        if (response.status === 429) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || 'Rate limit reached. Please wait a moment before sending more messages.');
        }

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || `Copilot request failed (${response.status})`);
        }

        if (!response.body) {
          throw new Error('No streaming response body available');
        }

        // Initialize assistant message container
        let currentAssistantText = '';
        let currentCitations: string[] = [];
        let currentIntents: CopilotIntent[] = [];
        let isBlocked = false;

        setMessages((prev) => [
          ...prev,
          {
            id: assistantMessageId,
            role: 'assistant',
            content: '',
            createdAt: Date.now(),
          },
        ]);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
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
              try {
                const data = JSON.parse(dataStr);

                if (data.chunk) {
                  currentAssistantText += data.chunk;
                  if (data.isBlockedSecret) isBlocked = true;
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === assistantMessageId
                        ? { ...m, content: currentAssistantText, isBlockedSecret: isBlocked }
                        : m
                    )
                  );
                }

                if (data.done) {
                  if (data.citations) currentCitations = data.citations;
                  if (data.intents) currentIntents = data.intents;
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === assistantMessageId
                        ? {
                            ...m,
                            content: currentAssistantText,
                            citations: currentCitations,
                            intents: currentIntents,
                          }
                        : m
                    )
                  );
                }

                if (data.error) {
                  throw new Error(data.error);
                }
              } catch (parseErr) {
                // Ignore SSE partial json parse error
              }
            }
          }
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          // User intentionally stopped generation
        } else {
          setError(err.message || 'Unable to connect to Bharosa Copilot. Check network connection.');
        }
      } finally {
        setIsStreaming(false);
        abortControllerRef.current = null;
      }
    },
    [messages, isStreaming, location.pathname, account?.persona, getIdToken]
  );

  const sendFeedback = useCallback(
    async (messageId: string, vote: 'up' | 'down', comment?: string) => {
      try {
        const token = (await getIdToken()) || 'demo_token';
        const url = resolveApiUrl('/copilot/feedback');
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ messageId, vote, comment }),
        });
      } catch (e) {
        console.warn('[Copilot Feedback Error]', e);
      }
    },
    [getIdToken]
  );

  return {
    messages,
    isStreaming,
    error,
    sendMessage,
    stopGenerating,
    clearHistory,
    sendFeedback,
  };
}
