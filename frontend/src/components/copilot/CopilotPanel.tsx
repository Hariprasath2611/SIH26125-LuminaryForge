import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  X,
  Send,
  Square,
  Trash2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Info,
  CornerDownLeft,
} from 'lucide-react';
import { useCopilot } from '../../hooks/useCopilot';
import { MessageList } from './MessageList';
import { SuggestedPrompts } from './SuggestedPrompts';
import { useAuth } from '../../providers/AuthProvider';

interface CopilotPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopilotPanel: React.FC<CopilotPanelProps> = ({ isOpen, onClose }) => {
  const [inputText, setInputText] = useState('');
  const location = useLocation();
  const { account } = useAuth();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    isStreaming,
    error,
    sendMessage,
    stopGenerating,
    clearHistory,
    sendFeedback,
  } = useCopilot();

  const activeRole = account?.persona || 'HOLDER';

  // ESC key listener to close panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  const handleSend = () => {
    if (!inputText.trim() || isStreaming) return;
    sendMessage(inputText);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSelectPrompt = (promptText: string) => {
    sendMessage(promptText);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-xs z-50 sm:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <aside
        id="bharosa-copilot-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Bharosa Copilot Assistant"
        className="fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-white text-[#1A2E05] shadow-2xl flex flex-col border-l border-lime-200/80 animate-in slide-in-from-right duration-200 focus:outline-none"
      >
        {/* Header */}
        <header className="px-5 py-4 border-b border-lime-100 flex items-center justify-between bg-[#F7FBEF]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#84CC16] text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm font-bold text-[#1A2E05]">Bharosa Copilot</h2>
                <span className="text-[10px] font-semibold bg-lime-100 text-lime-800 px-1.5 py-0.5 rounded">
                  {activeRole}
                </span>
              </div>
              <p className="text-[11px] text-gray-500">In-App Sovereign Assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <button
                onClick={clearHistory}
                aria-label="Clear chat conversation"
                title="Clear conversation"
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-lime-100/60 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Close Copilot Panel"
              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-lime-100/60 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Messages Body */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gradient-to-b from-[#F7FBEF]/40 to-white"
        >
          {messages.length === 0 ? (
            <div className="pt-2 space-y-4">
              {/* Dynamic Greeting */}
              <div className="p-4 bg-[#F7FBEF] rounded-2xl border border-lime-200/80">
                <div className="flex items-center gap-2 text-lime-800 font-semibold text-xs mb-1">
                  <Sparkles className="w-4 h-4 text-lime-600" />
                  <span>Welcome, {account?.displayName || activeRole}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  I can assist you with understanding verification failures, preparing access grants,
                  explaining zero-knowledge proofs, or navigating the platform.
                </p>
              </div>

              {/* Suggested Prompts */}
              <SuggestedPrompts
                route={location.pathname}
                role={activeRole}
                onSelectPrompt={handleSelectPrompt}
              />
            </div>
          ) : (
            <MessageList
              messages={messages}
              isStreaming={isStreaming}
              onSendFeedback={sendFeedback}
            />
          )}

          {/* Error notice */}
          {error && (
            <div className="p-3 bg-red-50 text-red-800 text-xs rounded-xl border border-red-200 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Footer / Input Area */}
        <footer className="p-4 border-t border-gray-100 bg-white">
          {isStreaming ? (
            <div className="flex justify-center mb-3">
              <button
                onClick={stopGenerating}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full transition-colors border border-gray-200"
              >
                <Square className="w-3 h-3 text-red-500 fill-red-500" />
                <span>Stop generating</span>
              </button>
            </div>
          ) : null}

          <div className="relative rounded-xl border border-gray-200 focus-within:border-lime-500 focus-within:ring-2 focus-within:ring-lime-200 transition-all bg-white">
            <textarea
              ref={inputRef}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Bharosa (English / हिंदी / தமிழ்)..."
              rows={2}
              className="w-full resize-none p-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
            />
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-50 bg-gray-50/50 rounded-b-xl">
              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                <CornerDownLeft className="w-2.5 h-2.5" />
                <span>Enter to send</span>
              </span>
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isStreaming}
                aria-label="Send message"
                className="p-1.5 bg-[#84CC16] hover:bg-[#65A30D] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Honest UI disclaimer */}
          <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] text-gray-400 text-center">
            <Info className="w-3 h-3 text-gray-400 shrink-0" />
            <span>
              Copilot can make mistakes. It can&apos;t see your keys or files and can&apos;t sign anything.
            </span>
          </div>
        </footer>
      </aside>
    </>
  );
};
