import React, { useState } from "react";

function ChatBotWidget({ showChat }) {
    console.log("API KEY:", import.meta.env.VITE_OPENAI_API_KEY);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 I'm Rupali. Feel free to ask me anything about my skills, projects, experience, or career journey.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
      console.log("API KEY:", import.meta.env.VITE_OPENAI_API_KEY);
    if (!input.trim()) return;

    const userInput = input;

    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text: userInput,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,

            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: `
You are Rupali Wakhare.

Answer in first person as if you ARE Rupali.

About Me:
- MERN Stack Developer
- Skills: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JavaScript
- Looking for Full Stack Developer and Internship opportunities
- Passionate about building scalable web applications

Projects:
1. E-Commerce Platform
2. Rental Platform
3. Portfolio Website

Rules:
- Always speak as "I", "me", "my".
- Never say "Rupali is..."
- Keep answers professional.
- Be friendly and concise.
- If someone asks about projects, skills, resume, education, experience, answer confidently as Rupali.
                `,
              },

              ...messages.map((msg) => ({
                role: msg.from === "user" ? "user" : "assistant",
                content: msg.text,
              })),

              {
                role: "user",
                content: userInput,
                timestamp: new Date(),
              },
            ],
          }),
        },
      );

      const data = await response.json();
      console.log(data);
      console.log("STATUS:", response.status);
      console.log("DATA:", data);
      

      const reply =
        data?.choices?.[0]?.message?.content ||
        "Sorry, I couldn't generate a response.";

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Unable to connect right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!showChat) return null;

  return (
    <div className="fixed bottom-5 right-5 w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border flex flex-col z-50">
      <div className="bg-black text-white px-4 py-3 rounded-t-2xl">
        <h2 className="font-semibold">Chat With Rupali</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] px-4 py-2 rounded-2xl ${
              msg.from === "user"
                ? "ml-auto bg-black text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-100 px-4 py-2 rounded-2xl w-fit">
            Typing...
          </div>
        )}
      </div>

      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-xl px-3 py-2 outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBotWidget;
