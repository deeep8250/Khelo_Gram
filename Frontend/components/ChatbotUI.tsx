import { useState } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
};

type ChatbotUIProps = {
  onClose: () => void;
};

const ChatbotUI = ({ onClose }: ChatbotUIProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! My name is PlayCo. I'm your virtual assistant for Khelo Gram. How can I help you?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // User message
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    // Fake bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for your message! I’m here to help 😊",
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-sky-600 text-white">
        <div className="flex items-center gap-2">
          <img src="/robot2.png" className="h-8 w-8 rounded-full" />
          <span className="font-semibold">Khelo Gram Assistant</span>
        </div>

        <button onClick={onClose} className="text-xl font-bold">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-3 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.from === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            {/* Bot Avatar */}
            {msg.from === "bot" && (
              <img
                src="/robot2.png"
                alt="Robot"
                className="w-8 h-8 rounded-full"
              />
            )}

            {/* Message Bubble */}
            <div
              className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                msg.from === "bot"
                  ? "bg-sky-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Khelo Gram"
          className="flex-1 px-3 py-2 border rounded-lg text-sm outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="px-3 py-2 bg-sky-600 text-white rounded-lg"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatbotUI;
