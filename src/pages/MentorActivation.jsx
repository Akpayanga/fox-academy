import React from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";

export default function MentorActivation() {
  const navigate = useNavigate();

  // This function runs when the button is clicked
  const handleActivate = (e) => {
    e.preventDefault(); // Prevents the browser from reloading
    navigate("/profile-setup"); // Routes to the second screen
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4 py-12 font-sans">
      {/* Brand Header */}
      <div className="text-center mb-10">
        <h2 className="text-[18px] font-black text-gray-900 tracking-[0.2em] mb-1">
          FOX ACADEMY
        </h2>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
          ADMIN PORTAL
        </p>
      </div>

      {/* Main Activation Card - 512px Width */}
      <div className="w-full max-w-[512px] bg-white border border-gray-100 rounded-[12px] p-8 md:p-12 shadow-sm">
        <h1 className="text-[26px] font-bold text-gray-900 mb-3 tracking-tight">
          Activate Your Account
        </h1>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
          Welcome to Fox Academy, Dr. Adeyemi. You've been added as a{" "}
          <br className="hidden sm:block" />
          UX Design Mentor for Cohort 3. Set your password below to{" "}
          <br className="hidden sm:block" />
          get started.
        </p>

        {/* User Status Badge */}
        <div className="border border-gray-100 rounded-[12px] p-4 flex items-center justify-between mb-8 bg-[#FDFDFD]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[10px] bg-[#F38821] text-white flex items-center justify-center font-bold text-[14px]">
              FA
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[13px] font-bold text-gray-900">
                Dr. Funke Adeyemi
              </p>
              <p className="text-[11px] text-gray-500 font-medium">
                UX Design Mentor • Cohort 3
              </p>
            </div>
          </div>
          <div className="text-gray-300 pr-2">
            {/* Lock Icon */}
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
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        </div>

        {/* Activation Form */}
        <form className="flex flex-col gap-2" onSubmit={handleActivate}>
          <AuthInput
            label="New Password"
            placeholder="Create a strong password"
          />

          <AuthInput
            label="Confirm Password"
            placeholder="Re-enter your password"
            showStrength={true}
          />

          {/* Terms Checkbox */}
          <label className="flex items-start gap-3 mt-4 mb-8 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="mt-0.5 w-[18px] h-[18px] rounded border-gray-300 text-[#F38821] focus:ring-[#F38821] cursor-pointer"
            />
            <span className="text-[13px] text-gray-500 font-medium">
              I agree to the Fox Academy{" "}
              <span className="text-gray-900 font-bold hover:underline transition-all">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="text-gray-900 font-bold hover:underline transition-all">
                Privacy Policy
              </span>
            </span>
          </label>

          {/* Submit Button triggers handleActivate */}
          <button
            type="submit"
            className="w-full bg-[#F38821] text-white py-4 rounded-lg font-bold text-[14px] hover:bg-[#d35400] transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            Activate and continue
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
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Expiration Text */}
          <p className="text-center mt-6 text-[10px] text-gray-400 font-medium leading-relaxed px-4">
            This activation link{" "}
            <span className="text-[#F38821] font-bold">expires 48 hours</span>{" "}
            after it was sent. If your link has expired, contact your Global
            Admin.
          </p>
        </form>
      </div>

      {/* Outside Card Sign-in Link */}
      <div className="mt-8 text-center">
        <p className="text-[13px] text-gray-500 font-medium">
          Already activated?{" "}
          <span className="text-[#F38821] font-bold cursor-pointer hover:underline ml-1">
            Sign in →
          </span>
        </p>
      </div>
    </div>
  );
}
