"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your virtual parking assistant. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I’m still a prototype and learning to assist you better!",
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-md bg-white/70 dark:bg-gray-800/60 shadow-2xl rounded-2xl w-80 flex flex-col h-96 border border-gray-300 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-600 text-gray-800 dark:text-white font-semibold">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Virtual Assistant
              </div>
              <button onClick={() => setIsOpen(false)}>
                <XCircle className="w-5 h-5 text-red-500 hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Chat Area */}
            <div
              ref={chatRef}
              className="flex-1 overflow-y-auto px-4 py-3 space-y-2 text-sm custom-scrollbar"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[75%] px-3 py-2 rounded-xl ${
                    msg.sender === "bot"
                      ? "bg-blue-100 text-gray-800 self-start"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1 text-xs text-gray-500 animate-pulse">
                  <span className="bg-blue-200 w-2 h-2 rounded-full"></span>
                  <span className="bg-blue-300 w-2 h-2 rounded-full"></span>
                  <span className="bg-blue-400 w-2 h-2 rounded-full"></span>
                  <span className="ml-2">Bot is typing...</span>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t dark:border-gray-700 flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend} className="text-blue-600 hover:scale-110 transition">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
          >
            <Bot className="w-5 h-5" />
            Ask Assistant
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
