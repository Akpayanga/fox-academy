import React from "react";

const CourseSidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. COURSE PROGRESS BOX */}
      <div className="bg-[#F3F4FF] p-4 sm:p-6 rounded-2xl flex items-center justify-between shadow-sm relative overflow-hidden">
        {/* Tiny decorative blue shape on the left */}
        <div className="absolute left-4 sm:left-6 bottom-4 w-1.5 h-3 bg-[#F38821] rounded-r-full"></div>
        <h3 className="text-xs sm:text-sm font-bold tracking-widest text-gray-800 uppercase pl-2 sm:pl-4">
          Course Progress
        </h3>
        <div className="text-2xl sm:text-4xl font-bold text-[#5542F6]">02%</div>
      </div>

      {/* 2. COURSE SYLLABUS BOX */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Header Area */}
        <div className="bg-[#f38821] p-4 sm:p-5">
          <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-white uppercase">
            Course Syllabus
          </h3>
        </div>

        {/* Syllabus List */}
        <div className="flex flex-col pb-2">
          {/* COMPLETED ITEM */}
          <div className="p-3 sm:p-5 flex gap-3 sm:gap-4 items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f38821] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-[14px] sm:h-[14px]"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-0.5">
                Module 4
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-500">
                Synthesizing Feedback Loops
              </p>
            </div>
          </div>

          {/* CURRENT ACTIVE ITEM */}
          <div className="bg-[#FFF8F3] p-3 sm:p-5 flex gap-3 sm:gap-4 border-l-4 border-[#f38821] items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#f38821] flex items-center justify-center flex-shrink-0 mt-0.5 bg-white">
              <span className="text-[#f38821] font-bold text-[10px] sm:text-xs">
                2
              </span>
            </div>
            <div className="w-full">
              <p className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-[#f38821] mb-0.5">
                Module 2 • Current
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-600 mb-2 sm:mb-3">
                Conducting UX Research at Scale
              </p>

              {/* Inner Progress Bar */}
              <div className="w-full h-1 bg-blue-100 rounded-full mb-1">
                <div className="w-[2%] h-full bg-[#F38821] rounded-full"></div>
              </div>
              <p className="text-[8px] sm:text-[10px] text-blue-500 font-bold">
                02% watched
              </p>
            </div>
          </div>

          {/* COMPLETED ITEM (Repeated per Figma) */}
          <div className="p-3 sm:p-5 flex gap-3 sm:gap-4 items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f38821] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-[14px] sm:h-[14px]"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-0.5">
                Module 4
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-500">
                Synthesizing Feedback Loops
              </p>
            </div>
          </div>

          {/* LOCKED/UPCOMING ITEM */}
          <div className="p-3 sm:p-5 flex gap-3 sm:gap-4 items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-300">
              <span className="text-gray-400 font-bold text-[8px] sm:text-xs">
                ?
              </span>
            </div>
            <div>
              <p className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-0.5">
                Module 5
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-500">
                Final Assessment Quiz
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. UP NEXT IN PATHWAY CARD */}
      <div className="bg-[#f38821] rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col gap-3 sm:gap-4">
        <h3 className="text-[8px] sm:text-[10px] font-bold tracking-[0.15em] text-white/90 uppercase">
          Up Next In Pathway
        </h3>
        <div className="flex gap-3 sm:gap-4 items-center">
          {/* White Image Placeholder */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex-shrink-0 opacity-90"></div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-white mb-1">
              Advanced Information
              <br /> Architecture
            </p>
            <p className="text-[10px] sm:text-xs text-white/80">
              Next Course • 12 Lessons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
