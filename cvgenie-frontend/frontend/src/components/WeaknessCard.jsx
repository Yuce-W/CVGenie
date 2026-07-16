function WeaknessCard({ weaknesses }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-4">
        ❌ Weaknesses
      </h2>
      <ul className="space-y-2">

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