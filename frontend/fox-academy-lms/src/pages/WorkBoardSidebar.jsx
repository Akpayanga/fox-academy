import React from "react";

export default function WorkBoardSidebar() {
  return (
    <div className="space-y-8 w-full">
      {/* Board Summary - Exact Replica of image_2032c6.jpg */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm">
        <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-[0.2em] mb-10">
          Board Summary
        </h3>

        {/* Total Tasks Row */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Total Tasks
          </p>
          <p className="text-3xl font-bold text-[#22C55E]">15</p>
        </div>

        {/* Completion Row */}
        <div className="flex items-center justify-between mb-10">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Completion
          </p>
          <p className="text-3xl font-bold text-[#3B82F6]">53%</p>
        </div>

        {/* The Grid at the bottom */}
        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">
              In Progress
            </p>
            <p className="text-2xl font-bold text-[#F38821]">2</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">
              Overdue
            </p>
            <p className="text-2xl font-bold text-[#EF4444]">0</p>
          </div>
        </div>
      </div>

      {/* My Tasks Section - Matching CAPTION text styles */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.15em] mb-8">
          My Tasks (Amara)
        </h3>
        <div className="flex flex-col gap-8">
          <MyTaskCard title="User Flow & Information Architecture" days="2" />
          <MyTaskCard title="Conduct Stakeholder Interviews" days="4" />
          <MyTaskCard
            title="Low-Fi Designs For Authentication Screens & Homepage"
            days="4"
          />
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.15em] mb-8">
          Project Timeline
        </h3>
        <div className="space-y-0">
          <TimelineStep title="Discovery Phase" status="completed" />
          <TimelineStep title="Prototyping v1" status="active" />
          <TimelineStep
            title="Internal Testing"
            status="upcoming"
            isLast={true}
          />
        </div>
      </div>

      {/* Note Card - Brand Foundation Color #F38821 */}
      <div className="bg-[#F38821] rounded-[24px] p-6 md:p-8 text-white shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
            <path d="M9 18h6"></path>
            <path d="M10 22h4"></path>
          </svg>
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] mt-0.5">
            Note
          </h3>
        </div>
        <p className="text-[13px] font-medium leading-relaxed text-white/95">
          "Phase 2 requires all disciplines to document interdependencies.
          Ensure Backend schemas are verified by UX designers before sprint 3
          begins."
        </p>
      </div>
    </div>
  );
}

// 1:1 Helper for Task Cards
function MyTaskCard({ title, days }) {
  return (
    <div className="flex flex-col items-start">
      <p className="text-xs font-bold text-gray-900 leading-snug mb-2">
        {title}
      </p>
      <span className="bg-[#B91C1C] text-white text-[9px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
        Due in {days} days
      </span>
    </div>
  );
}

// Helper for Timeline
function TimelineStep({ title, status, isLast }) {
  const isCompleted = status === "completed";
  const isActive = status === "active";

  return (
    <div className="flex gap-4 min-h-[60px]">
      <div className="flex flex-col items-center mt-1">
        <div
          className={`w-3 h-3 rounded-full z-10 shrink-0 ${
            isCompleted
              ? "bg-[#22C55E]"
              : isActive
                ? "bg-[#F38821] ring-4 ring-orange-50"
                : "bg-gray-200"
          }`}
        ></div>
        {!isLast && <div className="w-[1.5px] flex-1 bg-gray-100 my-1"></div>}
      </div>
      <div className="pb-8 -mt-0.5">
        <p
          className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5 ${
            isCompleted
              ? "text-[#22C55E]"
              : isActive
                ? "text-[#F38821]"
                : "text-gray-400"
          }`}
        >
          {status}
        </p>
        <p
          className={`text-sm font-bold ${isCompleted ? "text-gray-400" : "text-gray-900"}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
