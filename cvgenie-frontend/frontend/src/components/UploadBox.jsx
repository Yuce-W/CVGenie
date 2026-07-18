import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Loading from "./Loading";
import {
    Upload,
    Briefcase,
    FileText,
    Sparkles,
    ArrowRight
} from "lucide-react";

function UploadBox() {

    const navigate = useNavigate();

    const [resume, setResume] = useState(null);
    const [role, setRole] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadResume = async () => {
        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("resume", resume);
            formData.append("role", role);
            formData.append("job_description", jobDescription);

            const response = await api.post(
                "upload/",
                formData
            );

            navigate("/result", {
                state: response.data,
            });

        } catch (error) {

            console.error(error);

            alert("Something went wrong. Please try again.");

        } finally {

            setLoading(false);

        }
    };

    if (loading) {
        return <Loading />;
    }

    return (

        <div className="w-[1500px] max-w-[95vw] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-1">

            <div className="text-center mb-8">

                <Sparkles
                    className="mx-auto text-blue-500 mb-4"
                    size={42}
                />

                <h1 className="text-5xl font-extrabold text-white">
                    CVGenie
                </h1>

                <p className="text-zinc-400 mt-3">
                    AI-powered Resume Analysis
                </p>

            </div>

            <label
                className="
                flex flex-col items-center justify-center
                border-2 border-dashed border-zinc-700
                rounded-2xl
                p-8
                cursor-pointer
                hover:border-blue-500
                hover:bg-zinc-800
                transition
                mb-10
                max-w-3xl mx-auto"
            >

                <Upload
                    size={42}
                    className="text-blue-500 mb-3"
                />

                <p className="font-medium text-zinc-200">

                    {resume
                        ? resume.name
                        : "Click to upload your resume"}

                </p>

                <p className="text-sm text-zinc-500 mt-2">
                    PDF files only
                </p>

                <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => setResume(e.target.files[0])}
                />

            </label>

            <div className="relative mb-5 max-w-3xl mx-auto">

                <Briefcase
                    className="absolute left-3 top-3.5 text-zinc-500"
                    size={20}
                />

                <input
                    placeholder="Target Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="
                    w-full
                    rounded-xl
                    bg-zinc-800
                    border
                    border-zinc-700
                    text-white
                    placeholder:text-zinc-500
                    pl-10
                    p-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500"
                />

            </div>

            <div className="relative mb-6 max-w-3xl mx-auto">

                <FileText
                    className="absolute left-3 top-3.5 text-zinc-500"
                    size={20}
                />

                <textarea
                    rows={7}
                    placeholder="Paste Job Description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="
                    w-full
                    rounded-xl
                    bg-zinc-800
                    border
                    border-zinc-700
                    text-white
                    placeholder:text-zinc-500
                    pl-10
                    p-3
                    resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500"
                />

            </div>

            <button
                disabled={!resume || !role || !jobDescription}
                onClick={uploadResume}
                className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-linear-to-r
                from-blue-600
                to-indigo-600
                text-white
                p-4
                rounded-xl
                font-semibold
                transition-all
                hover:scale-[1.02]
                disabled:opacity-50
                disabled:cursor-not-allowed
                max-w-3xl mx-auto"
            >

                Analyze Resume

                <ArrowRight size={18} />

            </button>

        </div>

    );

}

export default UploadBox;