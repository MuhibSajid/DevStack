const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
      </div>
      <p className="mt-5 text-gray-400 text-sm tracking-widest uppercase">
        Loading
      </p>
    </div>
  );
};

export default Loading;
