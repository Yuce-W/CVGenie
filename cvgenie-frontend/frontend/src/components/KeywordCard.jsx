function KeywordCard({ keywords }) {

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">
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