import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Loading from "./Loading";
import { Upload, Briefcase, FileText, Sparkles } from "lucide-react";

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
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <Loading />;
    }

    return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
            <Sparkles
                className="mx-auto text-blue-600 mb-4"
                size={42}
            />
            <h1 className="text-5xl font-extrabold">CVGenie</h1>
            <p className="text-gray-500 mt-3">AI-powered Resume Analysis</p>
        </div>

        <label
            className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-8 cursor-pointer hover:bg-blue-50 transition mb-6"
        >
            <Upload
                size={42}
                className="text-blue-600 mb-3"
            />
            <p className="font-semibold">
                {resume
                    ? resume.name
                    : "Click to upload your resume"}
            </p>
            <input
                type="file"
                className="hidden"
                onChange={(e) => setResume(e.target.files[0])}
            />

        </label>

        <div className="relative mb-5">
            <Briefcase
                className="absolute left-3 top-3 text-gray-400"
                size={20}
            />
            <input
                placeholder="Target Role"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                className="w-full border rounded-lg pl-10 p-3"
            />
        </div>

        <div className="relative mb-6">
            <FileText
                className="absolute left-3 top-3 text-gray-400"
                size={20}
            />
            <textarea
                rows={7}
                placeholder="Paste Job Description"
                value={jobDescription}
                onChange={(e)=>setJobDescription(e.target.value)}
                className="w-full border rounded-lg pl-10 p-3"
            />
        </div>

        <button
            disabled={!resume || !role || !jobDescription}
            onClick={uploadResume}
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
            🚀 Analyze Resume
        </button>

    </div>
    );
};

export default UploadBox;