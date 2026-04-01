import React from "react";
import folder from "../../assets/folder.png";

const ModuleDetails = () => {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* 1. About This Module */}
      <div className="flex flex-col gap-3">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">
          About this module
        </h2>
        <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed max-w-3xl">
          In this module, we transition from theoretical planning to the
          execution of primary user research. You will learn the nuances of
          moderating usability studies, identifying behavioral patterns, and
          documenting "pains and gains" without introducing researcher bias.
        </p>
      </div>

      {/* 2. Learning Resources Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
          Learning Resources
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Resource Card 1 */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#f38821]/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#f38821] p-2">
                <img
                  src={folder}
                  alt="Folder"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#f38821] transition-colors">
                  Research Checklist
                </p>
                <p className="text-[8px] sm:text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mt-0.5">
                  PDF • 1.2MB
                </p>
              </div>
            </div>
            <div className="text-[#f38821] pr-2">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </div>
          </div>

          {/* Resource Card 2 */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#f38821]/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#f38821] p-2">
                <img
                  src={folder}
                  alt="Folder"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#f38821] transition-colors">
                  Interview Template
                </p>
                <p className="text-[8px] sm:text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mt-0.5">
                  PDF • 800KB
                </p>
              </div>
            </div>
            <div className="text-[#f38821] pr-2">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Navigation Buttons - Reverted to your previous logic */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 mt-4 pt-8 border-t border-gray-100">
        <button className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg border-2 border-[#f38821] text-xs sm:text-sm font-bold text-[#f38821] hover:bg-[#f38821]/5 transition-all flex items-center justify-center sm:justify-start gap-2">
          &lt; Prev Module
        </button>

        <button className="w-full sm:w-auto bg-[#f38821] text-white px-4 sm:px-8 md:px-10 py-3 rounded-lg text-xs sm:text-sm font-bold shadow-md hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
          Next Module &gt;
        </button>
      </div>
    </div>
  );
};

export default ModuleDetails;
