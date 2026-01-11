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
    { from: "bot", text: "Hello there! What can I do to lend a hand?" },
    { from: "bot", text: "Hello! What brings you here? How can I assist?" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    // Optional: fake bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks for your message! I’m here to help 😊" },
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

      {/* Info */}
      <div className=" py-2 ">
       
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-2 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.from === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            {/* Robot avatar for bot */}
            {msg.from === "bot" && (
              <img
                src="/robot2.png"
                alt="Robot"
                className="w-8 h-8 rounded-full"
              />
            )}

            {/* Message bubble */}
          <div className="max-w-[80%] px-3 py-2 rounded-lg text-sm bg-sky-600 text-white"> Hi! My name is PlayCo, I'm your virtual assistant for Khelo gram. How can I help you? </div>
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
