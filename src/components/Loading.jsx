import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="mt-4 text-white text-center">Loading...</div>
      </div>
    </div>
  );
}

export default Loading;
