import UploadBox from "../components/UploadBox";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Blue Blob */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-25 animate-pulse"></div>

      {/* Purple Blob */}
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-25 animate-pulse"></div>

      {/* Cyan Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      {/* Upload Card */}
      <div className="relative z-10">
        <UploadBox />
      </div>

    </div>
  );
}

export default Home;