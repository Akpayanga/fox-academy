import React from "react";

export default function ProfileField({
  label,
  value,
  placeholder,
  isReadOnly,
  isTextArea,
  helperText,
}) {
  const inputClasses =
    "w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-900 focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821] transition-all placeholder:text-gray-400";

  return (
    <div className="flex flex-col w-full">
      <label className="text-[12px] font-bold text-gray-900 mb-1.5">
        {label}
      </label>

      {isReadOnly ? (
        <div className="bg-[#F9FAFB] border border-gray-100 rounded-lg px-4 py-3.5 flex justify-between items-center">
          <span className="text-[14px] font-bold text-gray-500">{value}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2.5"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      ) : isTextArea ? (
        <textarea
          placeholder={placeholder}
          className={`${inputClasses} resize-none min-h-[160px] leading-[1.6]`}
        />
      ) : (
        <input type="text" placeholder={placeholder} className={inputClasses} />
      )}

      {helperText && (
        <div className="flex items-center gap-1.5 mt-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <p className="text-[11px] text-gray-500 font-medium">{helperText}</p>
        </div>
      )}
    </div>
  );
}
