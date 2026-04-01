import React from "react";
// Import the picture for the video background
import videoPoster from "../../assets/conduct.png";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Title Section */}
      <div>
        {/* Updated text details to match the new screenshot */}
        <p className="text-[9px] sm:text-[11px] font-bold text-[#f38821] uppercase tracking-wide mb-1.5">
          User Research
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Conduct UX Research and Test Early Concepts
        </h1>
        <p className="text-[9px] sm:text-[11px] text-[#5542F6] font-bold tracking-wide">
          MODULE 2 OF 5
        </p>
      </div>

      {/* 2. Video Box Container */}
      <div className="w-full aspect-video rounded-2xl relative shadow-lg group cursor-pointer overflow-hidden border-4 border-[#4F9EFF]">
        {/* THE PICTURE (poster) */}
        <img
          src={videoPoster}
          alt="Video course lesson"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-gray-900/10 rounded-2xl transition-opacity group-hover:bg-gray-900/30"></div>

        {/* The Center Button (Play Icon) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
          {/* Play Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
            className="sm:w-[24px] sm:h-[24px]"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gray-400/30 z-10 border border-gray-400 rounded-full">
          <div className="h-full w-1/4 bg-white rounded-full"></div>
        </div>

        {/* Timestamp in bottom-right */}
        <div className="absolute bottom-4 right-3 sm:bottom-5 sm:right-6 text-white text-[9px] sm:text-[10px] font-medium bg-black/40 px-2 py-0.5 rounded z-20">
          0:12 / 39:27
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
