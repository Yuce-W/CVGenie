function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950">

      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="text-3xl font-bold mt-8">
        Analyzing Resume...
      </h2>

      <p className="text-gray-500 mt-3">
        CVGenie is reading your resume with AI.
      </p>

    </div>
  );
}

export default Loading;