type ChatBotButtonProps = {
  onOpen: () => void;
};

const ChatBotButton = ({ onOpen }: ChatBotButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
      <button
        onClick={onOpen}
        className="h-14 w-14 rounded-full bg-transparent shadow-xl hover:scale-110 transition"
        aria-label="Open Chatbot"
      >
        <img
          src="/robot2.png"
          alt="Chatbot"
          className="h-full w-full rounded-full object-cover"
        />
      </button>

      {/* Green dot */}
      <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
    </div>
  );
};

export default ChatBotButton;
