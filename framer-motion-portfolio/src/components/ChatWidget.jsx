import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { FiSend, FiX } from "react-icons/fi";
import { askAI } from "../services/ai";

const ChatWidget = ({onClose}) => {
//   const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm Rupali AI Assistant. Ask me anything.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userText,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const reply = await askAI(userText);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[550px] w-[380px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between bg-black px-4 py-3 text-white">
        <h3 className="font-semibold">Rupali AI Assistant</h3>
        <button onClick={onClose} className="text-xl">
          <FiX />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${msg.role === "user" ? "bg-black text-white" : "bg-gray-100 text-black"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-500">AI is typing...</div>
        )}
      </div>

      {/* Input */}
      <div className="border-t p-3 flex gap-2">
        <input
          type="text"
          value={input}
          placeholder="Ask anything..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="rounded-lg bg-black px-4 text-white"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
