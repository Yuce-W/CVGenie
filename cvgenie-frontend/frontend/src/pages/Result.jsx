import { Navigate, useLocation } from "react-router-dom";

import ScoreCard from "../components/ScoreCard";
import KeywordCard from "../components/KeywordCard";
import StrengthCard from "../components/StrengthCard";
import WeaknessCard from "../components/WeaknessCard";
import SuggestionCard from "../components/SuggestionCard";

function Result() {

    const location = useLocation();

    const data = location.state;

    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (

        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    CVGenie Analysis
                </h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <ScoreCard score={data.match_score} />
                    <KeywordCard keywords={data.missing_keywords} />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <StrengthCard strengths={data.strengths} />
                    <WeaknessCard weaknesses={data.weaknesses} />
                </div>
                <div className="mt-6">

                    <SuggestionCard suggestions={data.suggestions} />
                </div>
            </div>
        </div>

    );

}

export default Result;