import { Target } from "lucide-react";

function HeroCard({ data }) {

    return (

        <div className="rounded-3xl bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 p-8 shadow-2xl">

            <div className="flex items-center gap-3">

                <Target className="w-8 h-8 text-white" />

                <h1 className="text-4xl font-bold text-white">
                    CVGenie Analysis
                </h1>
            </div>
            <p className="text-blue-100 mt-3 text-lg">
                Your resume has been successfully analyzed.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">

                <div>
                    <p className="text-blue-200 text-sm">
                        Match Score
                    </p>

                    <h2 className="text-4xl font-bold text-white">
                        {data.match_score}%
                    </h2>
                </div>
                <div>
                    <p className="text-blue-200 text-sm">Strengths</p>

                    <h2 className="text-4xl font-bold text-white">
                        {data.strengths.length}
                    </h2>
                </div>

                <div>
                    <p className="text-blue-200 text-sm">
                        Missing Keywords
                    </p>

                    <h2 className="text-4xl font-bold text-white">
                        {data.missing_keywords.length}
                    </h2>
                </div>
            </div>
        </div>
    );
}
export default HeroCard;