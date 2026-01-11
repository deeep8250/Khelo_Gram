const ChatBotButton = () => {

  const openChatbot = () => {
    window.open(
      "https://anindasau-playco-retrivalbased-chatbot-app-vr2u7w.streamlit.app/",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">

      {/* Button */}
      <button
        onClick={openChatbot}
        className="
          h-14 w-14
          rounded-full
          bg-transparent
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

      {/* Status */}
      <span className="flex items-center gap-1 text-xs font-medium text-slate-800 dark:text-white">
        <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
        Get Help
      </span>

    </div>
  );
};

export default ChatBotButton;
