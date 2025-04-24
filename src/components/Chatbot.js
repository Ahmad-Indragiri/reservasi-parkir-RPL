"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, XCircle } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your virtual parking assistant. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Prototype response (static)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "user", text: input },
        {
          sender: "bot",
          text: "Sorry, I am still a prototype and learning to assist you better!"
        }
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl w-80 flex flex-col h-96 transition-all">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center gap-2 text-gray-800 dark:text-white font-semibold">
              <Bot className="w-5 h-5" />
              Virtual Assistant
            </div>
            <button onClick={() => setIsOpen(false)}>
              <XCircle className="w-5 h-5 text-red-500" />
            </button>
          </div>

          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-4 space-y-2 text-sm"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-blue-100 text-gray-800 self-start"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t dark:border-gray-700 flex gap-2">
            <input
              type="text"
              className="flex-1 rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="text-blue-600">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
        >
          <Bot className="w-5 h-5" />
          Ask Assistant
        </button>
      )}
    </div>
  );
}
