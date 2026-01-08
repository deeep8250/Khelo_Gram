const ChatBotButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
      
      {/* Button */}
      <button
        className="
          h-14 w-14
          bg-transparent
          bg-primary
          flex items-center justify-center
          shadow-xl
          transition-all duration-300
          hover:scale-110
          hover:shadow-2xl
          active:scale-95
        "
        aria-label="Chat Bot"
      >
        <img
          className="
            h-full w-full
            object-cover rounded-full
            transition-transform duration-300
            hover:rotate-8
          "
          src="/robot2.png"
          alt="Chat Bot"
        />
      </button>

      {/* Green dot + text */}
      <span className="flex items-center gap-1 text-xs font-medium text-slate-800 dark:text-white">
        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        Get help
      </span>

    </div>
  );
};

export default ChatBotButton;
