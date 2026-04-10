import React from "react";

export default function StepProgress({ currentStep }) {
  const steps = [
    { id: 1, subtitle: "Step 1", title: "Activate Account" },
    { id: 2, subtitle: "Step 2", title: "Set Up Profile" },
    { id: 3, subtitle: "Step 3", title: "Go to Dashboard" },
  ];

  return (
    <div className="w-full max-w-[672px] mb-12">
      <div className="flex items-start justify-between relative">
        {/* Connecting Lines */}
        <div className="absolute top-4 left-[15%] right-[15%] h-[2px] flex items-center z-0">
          <div
            className={`h-full w-1/2 ${currentStep > 1 ? "bg-[#27C93F]" : "bg-gray-200"}`}
          ></div>
          <div
            className={`h-full w-1/2 ${currentStep > 2 ? "bg-[#27C93F]" : "bg-gray-200"}`}
          ></div>
        </div>

        {/* Step Items */}
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center relative z-10 w-32"
          >
            {/* Icon */}
            <div
              className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-all mb-3
              ${
                step.id < currentStep
                  ? "bg-[#27C93F] text-white"
                  : step.id === currentStep
                    ? "bg-[#27C93F] text-white shadow-md shadow-green-100"
                    : "bg-[#FDFDFD] border-2 border-gray-200 text-gray-300"
              }
            `}
            >
              {step.id < currentStep ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : step.id === currentStep ? (
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              ) : null}
            </div>

            {/* Text Labels */}
            <span
              className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${step.id <= currentStep ? "text-gray-900" : "text-gray-400"}`}
            >
              {step.subtitle}
            </span>
            <span
              className={`text-[12px] font-medium text-center leading-tight ${step.id <= currentStep ? "text-gray-900" : "text-gray-400"}`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
