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
      text: "Ask me anything . 💬 ",
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
    <div className="fixed bottom-2 right-6 z-50 flex w-[250px] h-[500px] md:h-[530px] md:w-[350px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between bg-black px-4 py-3 text-white">
        {/* Header */}
        <div className="flex ">
          
          <FaRobot size={20} className="text-shadow-white" />
          <h3 className="font-semibold ml-2 mt-0">Chatbot</h3>
        </div>
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
              className={`max-w-[80%] rounded-xl px-4 py-2 text-[13px]  md:text-[15px] tracking-wider ${msg.role === "user" ? "bg-black text-white" : "bg-gray-100 text-black"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-500">Typing...</div>
        )}
      </div>
      {/* Input */}
      <div className=" p-3 flex gap-2">
        <input
          type="text"
          value={input}
          placeholder="Ask anything..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 min-w-0 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black tracking-wider text-[13px] md:text[15px]"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className=" flex-shrink-0
          rounded-lg bg-black px-4 text-white"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
