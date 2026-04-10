import React from 'react';

export default function AuthInput({ label, placeholder, showStrength }) {
  return (
    <div className="flex flex-col gap-2 mb-6 w-full">
      <label className="text-[13px] font-bold text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input 
          type="password" 
          placeholder={placeholder}
          className="w-full border border-gray-200 rounded-lg px-4 py-4 text-[14px] focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all placeholder:text-gray-300"
        />
        {/* Eye Icon */}
        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </div>
      
      {showStrength && (
        <div className="flex items-center gap-3 mt-2">
          <div className="flex gap-1.5 flex-1 max-w-[140px]">
            <div className="h-1 w-full bg-[#27C93F] rounded-full"></div>
            <div className="h-1 w-full bg-gray-100 rounded-full"></div>
            <div className="h-1 w-full bg-gray-100 rounded-full"></div>
            <div className="h-1 w-full bg-gray-100 rounded-full"></div>
          </div>
          <span className="text-[11px] font-medium text-gray-500">Password strength</span>
        </div>
      )}
    </div>
  );
}