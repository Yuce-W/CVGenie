function KeywordCard({ keywords }) {

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl hover:border-blue-500 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Missing Keywords
      </h2>
      <div className="flex flex-wrap gap-2">
        {keywords.map((word, index) => (
          <span
            key={index}
            className="bg-red-100 text-red-700 px-3 py-1 rounded-full"
          >
            {word}
          </span>

        ))}
      </div>
    </div>
  );

}

export default KeywordCard;