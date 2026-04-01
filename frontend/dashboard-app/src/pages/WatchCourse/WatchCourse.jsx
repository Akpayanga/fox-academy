import React from "react";

// Import our child components (we will build these files next!)
import VideoPlayer from "./VideoPlayer";
import ModuleDetails from "./ModuleDetails";
import CourseSidebar from "./CourseSidebar";

const WatchCourse = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50/50 pb-10 sm:pb-20">
      {/* Max-width container that centers everything and adds padding on the sides */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4 md:px-8 pt-6 sm:pt-8">
        {/* BREADCRUMBS: Text shrinks on mobile (text-[10px]) and grows on tablets (md:text-xs) */}
        <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 sm:mb-6 flex flex-wrap gap-1.5 sm:gap-2">
          <span className="hover:text-[#f38821] cursor-pointer transition-colors">
            My Learning
          </span>
          <span>&gt;</span>
          <span className="hover:text-[#f38821] cursor-pointer transition-colors line-clamp-1">
            Conduct UX Research...
          </span>
          <span>&gt;</span>
          <span className="text-[#5542F6]">Module 1</span>
        </div>

        {/* MAIN LAYOUT GRID: Stacks as 1 column on mobile, splits into 3 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* LEFT COLUMN: Takes up 2 of the 3 grid columns on large screens */}
          <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">
            {/* Render the video and title area */}
            <VideoPlayer />
            {/* Render the module description and resources */}
            <ModuleDetails />
          </div>

          {/* RIGHT COLUMN: Takes up 1 of the 3 grid columns on large screens */}
          <div className="lg:col-span-1">
            {/* Render the progress bar and syllabus list */}
            <CourseSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchCourse;
