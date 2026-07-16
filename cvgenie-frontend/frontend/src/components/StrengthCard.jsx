function StrengthCard({ strengths }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-4">
        ✅ Strengths
      </h2>
      <ul className="space-y-2">

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