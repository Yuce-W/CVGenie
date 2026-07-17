import {Lightbulb} from "lucide-react";
function SuggestionCard({ suggestions }) {

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl hover:border-blue-500 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
          <Lightbulb
              className="text-yellow-400"
              size={28}
              strokeWidth={2.2}
          />

          <h2 className="text-2xl font-bold text-white">
              Suggestions
          </h2>
      </div>
      <ul className="space-y-2 text-white">

        {suggestions.map((item, index) => (

          <li key={index}>
            • {item}
          </li>

        ))}
      </ul>
    </div>
  );
}

export default SuggestionCard;