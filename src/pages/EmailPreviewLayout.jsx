import React from "react";
import InvitationEmail from "./InvitationEmail";

export default function EmailPreviewLayout() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans p-4 md:p-8 flex justify-center items-start">
      {/* Gmail Interface Wrapper */}
      <div className="w-full max-w-[850px] bg-white border border-gray-200 rounded-[12px] shadow-sm overflow-hidden mt-4 md:mt-10">
        {/* macOS Window Controls */}
        <div className="bg-white px-5 pt-5 pb-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>

        <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between">
          {/* Left: Back to Inbox */}
          <div className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors pl-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-[14px] font-bold">Inbox</span>
          </div>

          {/* Center: Search */}
          <div className="hidden sm:flex flex-1 max-w-[400px] bg-[#F1F3F4] rounded-lg px-4 py-2 items-center gap-3 mx-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5f6368"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="text-[13px] text-[#5f6368] font-medium">
              Search Mail
            </span>
          </div>

          {/* Right: Actions (Red Trash, Archive, Three Dots) */}
          <div className="flex items-center gap-[10px] text-gray-500 pr-2">
            {/* Red Trash Can */}
            <button
              className="text-[#D93025] hover:bg-red-50 p-2 rounded-lg transition-colors flex items-center justify-center"
              title="Delete"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>

            {/* Archive Box */}
            <button
              className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors flex items-center justify-center"
              title="Archive"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 8v13H3V8"></path>
                <rect x="1" y="3" width="22" height="5"></rect>
                <polyline points="10 12 12 14 14 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="14"></line>
              </svg>
            </button>

            {/* Three Vertical Dots */}
            <button
              className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors flex items-center justify-center"
              title="More"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="5" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="19" r="2"></circle>
              </svg>
            </button>
          </div>
        </div>

        {/* Sender Info Area */}
        <div className="px-6 md:px-10 pt-8 pb-6 bg-white">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">
              You've been invited to Fox Academy as a UX Design Mentor
            </h1>
            <span className="text-[12px] text-gray-500 mt-2 whitespace-nowrap">
              Today, 9:47 AM
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFE8D1] flex items-center justify-center shrink-0">
              <span className="text-xl">🦊</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-[14px] font-bold text-gray-900">
                  Fox Academy
                </p>
                <p className="text-[12px] text-gray-500 hidden sm:block">
                  &lt;noreply@foxacademy.com&gt;
                </p>
              </div>
              <p className="text-[12px] text-gray-700">
                To: funke.adeyemi@email.com
              </p>
            </div>
          </div>
        </div>

        {/* The Email Canvas */}
        <div className="bg-[#F1F3F4] p-6 md:p-12 lg:px-20 flex justify-center border-t border-gray-100">
          <InvitationEmail />
        </div>
      </div>
    </div>
  );
}
