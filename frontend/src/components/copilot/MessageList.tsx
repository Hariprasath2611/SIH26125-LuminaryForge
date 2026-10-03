import React, { useState } from 'react';
import { Copy, Check, ThumbsUp, ThumbsDown, BookOpen, Bot, User } from 'lucide-react';
import { ChatMessage } from '../../hooks/useCopilot';
import { ActionCard } from './ActionCard';

interface MessageListProps {
  messages: ChatMessage[];
  isStreaming: boolean;
  onSendFeedback: (messageId: string, vote: 'up' | 'down') => void;
}

// Simple markdown formatter without heavy third-party bundle
function renderFormattedContent(text: string) {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    // Bold parsing: **text**
    const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);

    const renderedLine = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={pIdx} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={pIdx} className="bg-lime-50 text-lime-900 px-1.5 py-0.5 rounded text-[11px] font-mono border border-lime-200">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });

    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-base font-bold text-gray-900 my-1">{renderedLine}</h1>;
    }
    if (line.startsWith('## ') || line.startsWith('### ')) {
      return <h2 key={index} className="text-sm font-semibold text-gray-800 my-1">{renderedLine}</h2>;
    }
    if (/^\d+\.\s/.test(line)) {
      return (
        <div key={index} className="ml-3 my-0.5 flex gap-2">
          <span className="font-medium text-lime-700">{line.match(/^\d+\./)?.[0]}</span>
          <span>{renderedLine.slice(1)}</span>
        </div>
      );
    }
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return (
        <div key={index} className="ml-3 my-0.5 flex gap-2 items-start">
          <span className="text-lime-600 font-bold">•</span>
          <span>{renderedLine.slice(1)}</span>
        </div>
      );
    }
    if (!line.trim()) {
      return <div key={index} className="h-2" />;
    }

    return <p key={index} className="my-1">{renderedLine}</p>;
  });
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isStreaming,
  onSendFeedback,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'up' | 'down'>>({});

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (id: string, vote: 'up' | 'down') => {
    setFeedbackGiven((prev) => ({ ...prev, [id]: vote }));
    onSendFeedback(id, vote);
  };

  return (
    <div className="space-y-4 py-2">
      {messages.map((msg, idx) => {
        const isUser = msg.role === 'user';
        const isLastAssistant = !isUser && idx === messages.length - 1;

        return (
          <div
            key={msg.id}
            className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-in fade-in duration-200`}
          >
            {/* Header info */}
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1 px-1">
              {isUser ? (
                <>
                  <span>You</span>
                  <User className="w-3 h-3 text-gray-500" />
                </>
              ) : (
                <>
                  <Bot className="w-3.5 h-3.5 text-lime-600" />
                  <span className="font-medium text-lime-800">Bharosa Copilot</span>
                </>
              )}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[92%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-xs ${
                isUser
                  ? 'bg-lime-600 text-white rounded-br-xs'
                  : msg.isBlockedSecret
                  ? 'bg-amber-50 text-amber-900 border border-amber-300 rounded-bl-xs'
                  : 'bg-white text-gray-800 border border-gray-200/80 rounded-bl-xs'
              }`}
            >
              {isUser ? (
                <p className="whitespace-pre-wrap">{msg.content}</p>
              ) : (
                <>
                  <div className="prose prose-xs max-w-none text-xs">
                    {renderFormattedContent(msg.content)}
                  </div>

                  {/* Typing Indicator for active streaming chunk */}
                  {isStreaming && isLastAssistant && msg.content.length === 0 && (
                    <div className="flex items-center gap-1.5 py-1 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse delay-150" />
                      <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse delay-300" />
                      <span className="text-[11px] text-gray-400 ml-1">Analyzing knowledge base...</span>
                    </div>
                  )}

                  {/* Action Cards (UI intents) */}
                  {msg.intents && msg.intents.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {msg.intents.map((intent, iIdx) => (
                        <ActionCard key={iIdx} intent={intent} />
                      ))}
                    </div>
                  )}

                  {/* Citations */}
                  {msg.citations && msg.citations.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                      {msg.citations.map((cite, cIdx) => (
                        <span
                          key={cIdx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime-50 text-lime-800 rounded-md text-[10px] font-medium border border-lime-200"
                        >
                          <BookOpen className="w-2.5 h-2.5 text-lime-600" />
                          {cite}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Actions Toolbar for Assistant */}
            {!isUser && msg.content && (
              <div className="flex items-center gap-2 mt-1 px-1 text-[11px] text-gray-400">
                <button
                  onClick={() => handleCopy(msg.id, msg.content)}
                  className="hover:text-gray-600 flex items-center gap-1 transition-colors"
                  title="Copy response"
                >
                  {copiedId === msg.id ? (
                    <>
                      <Check className="w-3 h-3 text-green-600" />
                      <span className="text-green-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1 border-l border-gray-200 pl-2">
                  <button
                    onClick={() => handleFeedback(msg.id, 'up')}
                    className={`hover:text-lime-600 p-0.5 rounded ${
                      feedbackGiven[msg.id] === 'up' ? 'text-lime-600 font-bold' : ''
                    }`}
                    title="Helpful"
                  >
                    <ThumbsUp className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => handleFeedback(msg.id, 'down')}
                    className={`hover:text-red-500 p-0.5 rounded ${
                      feedbackGiven[msg.id] === 'down' ? 'text-red-500 font-bold' : ''
                    }`}
                    title="Not helpful"
                  >
                    <ThumbsDown className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
