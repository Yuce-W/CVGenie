import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function ScoreCard({ score }) {

    let color = "#ef4444";
    let label = "Needs Work";

    if (score >= 85) {
        color = "#16a34a";
        label = "Excellent";
    } else if (score >= 70) {
        color = "#2563eb";
        label = "Good";
    } else if (score >= 50) {
        color = "#f59e0b";
        label = "Average";
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">

            <h2 className="text-2xl font-bold mb-8">
                🎯 ATS Match Score
            </h2>

            <div className="w-44 h-44">

                <CircularProgressbar
                    value={score}
                    text={`${score}%`}
                    styles={buildStyles({
                        pathColor: color,
                        textColor: color,
                        trailColor: "#e5e7eb",
                        textSize: "18px",
                    })}
                />

            </div>

            <p
                className="mt-6 text-xl font-semibold"
                style={{ color }}
            >
                {label}
            </p>

        </div>
    );
}

export default ScoreCard;