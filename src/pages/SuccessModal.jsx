import React from "react";

export default function SuccessModal({ onClose, onAddAnother }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      {/* PIXEL-PERFECT FIXES:
        1. Width: Locked to max-w-[460px] to match the exact Figma card proportions.
        2. Height: Uses h-fit so it naturally hugs the content without stretching, 
           but keeps max-h-[90vh] just in case the user is on a tiny laptop.
        3. Padding: Exact p-8 (32px) all around to match the 8pt Figma grid.
      */}
      <div className="bg-white rounded-[24px] p-8 max-w-[460px] w-full h-fit max-h-[90vh] overflow-y-auto shadow-2xl relative text-center">
        {/* Success Icon */}
        <div className="w-[60px] h-[60px] bg-white border-[2px] border-green-500 rounded-[18px] flex items-center justify-center mx-auto mb-6 shadow-sm">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Heading & Intro */}
        <h2 className="text-[22px] font-bold text-gray-900 mb-2 leading-tight">
          Invite Sent Successfully!
        </h2>
        <p className="text-[13px] text-gray-500 mb-8 leading-relaxed">
          An invitation email has been sent to: <br />
          <span className="font-bold text-gray-900 text-[14px]">
            funke.adeyemi@email.com
          </span>
        </p>

        {/* Details Grid Container */}
        <div className="bg-[#FEF3E933] border border-gray-100 rounded-[20px] p-5 mb-8 text-left grid grid-cols-2 gap-y-5 gap-x-4">
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">Name</p>
            <p className="text-[13px] font-bold text-gray-900">
              Dr. Funke Adeyemi
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">
              Discipline
            </p>
            <p className="text-[13px] font-bold text-gray-900">UX Design</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">Role</p>
            <p className="text-[13px] font-bold text-gray-900">
              Senior UX Mentor
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">Cohort</p>
            <p className="text-[13px] font-bold text-gray-900">Cohort 3</p>
          </div>
          <div className="col-span-2">
            <p className="text-[11px] font-bold text-gray-500 mb-1">
              Access Level
            </p>
            <p className="text-[13px] font-bold text-gray-900">Mentor</p>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-[12px] text-gray-500 font-medium leading-[1.6] mb-8">
          Dr. Adeyemi will receive an email with a link to activate their
          account and set their password. Their account will appear as Pending
          until they complete activation.
        </p>

        {/* Actions - Locked to side-by-side flex */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[13px] font-bold text-[#F38821] bg-white border-[1.5px] border-[#F38821] rounded-xl hover:bg-orange-50 transition"
          >
            Back to Mentor List
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onAddAnother}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#F38821] text-white text-[13px] font-bold rounded-xl hover:bg-orange-600 transition shadow-sm"
          >
            Add Another Mentor
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
