import {CheckCircle2,} from "lucide-react";

function StrengthCard({ strengths }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl hover:border-blue-500 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5" >
          <CheckCircle2
          className="text-green-500 mb-4"
          size={28}
          strokeWidth={2.2}
        />
        <h2 className="text-2xl font-bold mb-4 text-white">
          Strengths
        </h2>
      </div>
      <ul className="space-y-2 text-white">

        {strengths.map((item, index) => (

          <li key={index}>
            • {item}
          </li>

        ))}
      </ul>
    </div>
  );
}

export default StrengthCard;