import React from "react";
import ObiImg from "../assets/images/obi.png";

export default function DirectorySidebar() {
  return (
    <div className="space-y-8 w-full">
      {/* Your Profile Card - Updated Image */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.15em]">
            Your Profile
          </h3>
          <button className="text-blue-600 text-[10px] font-bold hover:underline">
            Edit
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={ObiImg} // Updated to use your local asset
            className="w-12 h-12 rounded-full bg-gray-100 object-cover"
            alt="Amara Obi"
          />
          <div>
            <p className="text-sm font-bold text-gray-900 leading-none mb-1.5">
              Amara Obi
            </p>
            <p className="text-[10px] text-gray-500 font-medium leading-none">
              Frontend
            </p>
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 md:p-8 shadow-sm">
        <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.15em] mb-8">
          Project Timeline
        </h3>
        <div className="space-y-0">
          <TimelineStep
            week="Week 09 - Current"
            title="Research & Low-fidelity"
            status="current"
          />
          <TimelineStep
            week="Week 10 - Next"
            title="Prototyping Phase"
            status="next"
          />
          <TimelineStep
            week="Week 11 - Milestone"
            title="Internal Review"
            status="milestone"
            isLast={true}
          />
        </div>
      </div>

      {/* Note Card - Updated to Brand Color #F38821 */}
      <div className="bg-[#F38821] rounded-[24px] p-6 md:p-8 text-white shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
          Individual 1-on-1 performance reviews are scheduled for next Friday.
          Please ensure your personal progress logs are updated in the directory
          system by Wednesday EOD.
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Helper for the Timeline (Handles the hollow/filled circles and lines)
// ---------------------------------------------------------
function TimelineStep({ week, title, status, isLast }) {
  const isCurrent = status === "current";

  return (
    <div className="flex gap-4 min-h-[70px]">
      <div className="flex flex-col items-center mt-1">
        <div
          className={`w-3 h-3 rounded-full border-[2.5px] z-10 shrink-0 ${
            isCurrent
              ? "bg-[#F38821] border-[#F38821]"
              : "bg-white border-gray-300"
          }`}
        ></div>
        {!isLast && <div className="w-[1.5px] flex-1 bg-gray-100 my-1"></div>}
      </div>

      <div className="pb-8">
        <p className="text-[10px] text-gray-400 font-bold mb-1 tracking-wide">
          {week}
        </p>
        <p
          className={`text-sm font-bold ${
            isCurrent ? "text-gray-900" : "text-gray-500"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
