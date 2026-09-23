"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================================
    GIGTHINK — ULTIMATE ENTERPRISE AI CHAT COMPONENT (Tailwind v4)
    ============================================================ */

const PRIMARY = "#0091ff";
const PRIMARY_DARK = "#0077d4";
const BORDER = "#e2e8f0";
const TEXT = "#1e293b";

// ** Yahan apni custom logo image ka direct link daal sakte hain **
const LOGO_IMAGE_URL = "/giglogo.png"; // e.g., "https://yourdomain.com/logo.png"

type Role = "user" | "assistant" | "system";

interface Message {
  id: number;
  role: Role;
  content: string;
}

interface IconProps {
  className?: string;
}

/* ---------- Icons & Visual Elements ---------- */
const SparkleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
  </svg>
);

const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const UserAvatar: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
  if (LOGO_IMAGE_URL) {
    return <img src={LOGO_IMAGE_URL} alt="Logo" className={`object-contain ${className || "h-6 w-6"}`} />;
  }
  return (
    <svg className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

/* ---------- Elite Markdown Formatter ---------- */
const formatMessage = (text: string) => {
  if (!text) return null;
  
  return text.split('\n').map((line, i) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const parseBold = (strArr: string[]) => strArr.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j} style={{ color: PRIMARY, fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    const numberedMatch = line.match(/^(\d+\.)\s(.*)/);
    if (numberedMatch) {
      const parsedListContent = parseBold(numberedMatch[2].split(/(\*\*.*?\*\*)/g));
      return (
        <div key={i} className="flex gap-2.5 mt-2.5 mb-1.5 pl-1">
          <span style={{ color: PRIMARY, fontWeight: "700" }}>{numberedMatch[1]}</span>
          <span className="leading-relaxed text-[13.5px]">{parsedListContent}</span>
        </div>
      );
    }

    const bulletMatch = line.match(/^[-*]\s(.*)/);
    if (bulletMatch) {
      const parsedBulletContent = parseBold(bulletMatch[1].split(/(\*\*.*?\*\*)/g));
      return (
        <div key={i} className="flex items-start gap-2.5 mt-2 mb-1 pl-1">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full shadow-xs" style={{ background: PRIMARY }} />
          <span className="leading-relaxed text-[13.5px]">{parsedBulletContent}</span>
        </div>
      );
    }

    return (
      <div key={i} className="mb-2 last:mb-0 min-h-[1rem] leading-relaxed text-[13.5px]">
        {parseBold(parts)}
      </div>
    );
  });
};

const SUGGESTED_PROMPTS: string[] = [
  "What is GigThink?",
  "How does AI proposal generation work?",
  "Tell me about CodEarn Tech",
];

/* ============================================================
   MAIN CHAT COMPONENT
   ============================================================ */
export default function GigThinkChat() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isChatOpen]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isStreaming) return;

    const userMsg: Message = { role: "user", content: text, id: Date.now() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);
    setError(null);
    setHasStarted(true);

    try {
      const res = await fetch("/api/chat/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server error: ${res.status}`);
      }

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      const assistantId = Date.now() + 1;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "", id: assistantId },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantContent += chunk;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: assistantContent } : m
          )
        );
      }
    } catch (err: any) {
      console.error("[CHAT_STREAM_ERROR]:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setMessages((prev) => prev.filter((m) => m.content !== "" || m.role === "user"));
    } finally {
      setIsStreaming(false);
    }
  }, [messages, isStreaming]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ===== FLOATING TRIGGER BUTTON ===== */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-15 w-15 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 sm:bottom-8 sm:right-8"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
          boxShadow: "0 10px 30px rgba(0,145,255,0.45)",
        }}
        aria-label="Open GigThink AI Chat"
      >
        <SparkleIcon className="h-7 w-7 text-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white"></span>
        </span>
      </motion.button>

      {/* ===== CHAT MODAL OVERLAY ===== */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsChatOpen(false)}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 bottom-0 z-[110] flex h-[88vh] flex-col overflow-hidden rounded-t-3xl border bg-white shadow-2xl sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[600px] sm:w-[440px] sm:rounded-3xl"
              style={{
                borderColor: BORDER,
                boxShadow: "0 25px 70px rgba(0,0,0,0.22)",
                fontFamily: "var(--font-sans, system-ui, -apple-system, sans-serif)",
              }}
            >
              {/* Chat Header */}
              <div
                className="flex items-center justify-between px-5 py-4.5"
                style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})` }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white shadow-inner backdrop-blur-md">
                    <BrandLogo className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-white tracking-wide">GigThink AI</div>
                    <div className="flex items-center gap-2 text-[11.5px] font-medium text-white/95">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm animate-pulse" />
                      Engineered by CodEarn Tech
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition-all hover:bg-white/25 active:scale-95"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Chat Body */}
              <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-4.5" style={{ background: "#f8fafc" }}>
                {!hasStarted && messages.length === 0 && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
                    <div
                      className="inline-block max-w-[92%] rounded-2xl rounded-tl-xs border bg-white px-4.5 py-3.5 text-[13.5px] leading-relaxed shadow-xs"
                      style={{ borderColor: BORDER, color: TEXT }}
                    >
                      Welcome!  I am the official <b>GigThink AI</b> representative, powered by CodEarn. Ask me about our freelance job aggregation, AI proposals, or enterprise solutions!
                    </div>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {SUGGESTED_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => sendMessage(prompt)}
                          className="rounded-full border bg-white px-3.5 py-1.5 text-[12px] font-medium transition-all hover:border-[#0091ff] hover:bg-blue-50/60 hover:text-[#0091ff] active:scale-95 shadow-2xs"
                          style={{ borderColor: BORDER, color: TEXT }}
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((msg, idx) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex max-w-[92%] gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <div
                        className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full shadow-2xs"
                        style={msg.role === "user" ? { background: "rgba(0,145,255,0.12)", color: PRIMARY } : { background: PRIMARY, color: "#fff" }}
                      >
                        {msg.role === "user" ? <UserAvatar /> : <BrandLogo className="h-4 w-4 text-white" />}
                      </div>

                      <div
                        className={`relative rounded-2xl px-4.5 py-3.5 shadow-xs ${
                          msg.role === "user" ? "rounded-tr-xs text-white" : "rounded-tl-xs border bg-white"
                        }`}
                        style={msg.role === "user" ? { background: PRIMARY } : { borderColor: BORDER, color: TEXT }}
                      >
                        {msg.role === "user" ? (
                          <span className="whitespace-pre-wrap text-[13.5px] leading-relaxed">{msg.content}</span>
                        ) : (
                          <div>{formatMessage(msg.content)}</div>
                        )}

                        {isStreaming && idx === messages.length - 1 && msg.role === "assistant" && msg.content === "" && (
                          <div className="flex gap-1.5 py-1">
                            <span className="h-2 w-2 rounded-full" style={{ background: PRIMARY, animation: "gtTyping 1.2s infinite" }} />
                            <span className="h-2 w-2 rounded-full" style={{ background: PRIMARY, animation: "gtTyping 1.2s 0.2s infinite" }} />
                            <span className="h-2 w-2 rounded-full" style={{ background: PRIMARY, animation: "gtTyping 1.2s 0.4s infinite" }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {error && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-[12px] text-red-600">
                    ⚠️ {error}
                    <button onClick={() => setError(null)} className="ml-2 font-semibold underline">Dismiss</button>
                  </motion.div>
                )}
              </div>

              {/* Chat Input Footer */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2.5 border-t bg-white px-4.5 py-3.5" style={{ borderColor: BORDER }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isStreaming ? "GigThink AI is thinking..." : "Ask about GigThink or CodEarn..."}
                  disabled={isStreaming}
                  className="flex-1 rounded-xl border bg-[#f8fafc] px-4 py-3 text-[13.5px] outline-none transition-all focus:border-[#0091ff] focus:bg-white focus:ring-2 focus:ring-blue-100"
                  style={{ borderColor: BORDER, color: TEXT }}
                />
                <button
                  type="submit"
                  disabled={isStreaming || !input.trim()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition-all disabled:opacity-40 active:scale-95 shadow-sm"
                  style={{ background: isStreaming ? BORDER : PRIMARY }}
                >
                  {isStreaming ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  ) : (
                    <SendIcon className="h-5 w-5" />
                  )}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes gtTyping {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}