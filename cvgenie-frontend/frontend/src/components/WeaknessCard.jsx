import {XCircle,} from "lucide-react";

function WeaknessCard({ weaknesses }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl hover:border-blue-500 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <XCircle
          className="text-red-500 mb-4"
          size={28}
          strokeWidth={2.2}/>
        <h2 className="text-2xl font-bold mb-4 text-white">
            Weaknesses
        </h2>
      </div>
      <ul className="space-y-2 text-white">

        {weaknesses.map((item, index) => (

          <li key={index}>
            • {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default WeaknessCard;