import React from "react";
import { Link } from "react-router-dom"; // <-- NEW IMPORT

export default function InvitationEmail() {
  return (
    <div className="w-full max-w-[600px] bg-white border border-gray-200 shadow-sm rounded-[12px] overflow-hidden flex flex-col">
      {/* Email Header */}
      <div className="bg-[#E67E22] py-10 text-center px-6">
        <div className="inline-block border-[1.5px] border-white px-5 py-2.5 mb-3">
          <h2 className="text-xl md:text-2xl font-black text-white tracking-[0.15em] m-0 leading-none">
            FOX ACADEMY
          </h2>
        </div>
        <p className="text-[10px] font-bold text-white/90 uppercase tracking-[0.25em]">
          ADMIN PORTAL
        </p>
      </div>

      {/* Email Body */}
      <div className="p-8 md:p-10 text-left flex-1">
        {/* Greeting & Message */}
        <p className="text-[15px] font-bold text-gray-900 mb-4">
          Hello Dr. Funke Adeyemi,
        </p>
        <p className="text-[14px] text-gray-600 leading-[1.7] mb-8">
          You have been invited to join Fox Academy as a{" "}
          <span className="font-bold text-gray-900">UX Design Mentor</span> for{" "}
          <span className="font-bold text-gray-900">Cohort 3</span>. Your
          account has been created and is ready for activation.
        </p>

        {/* Details Grid (White bg, subtle border, Title Case labels) */}
        <div className="bg-[#FEF3E933] border border-gray-100 rounded-[12px] p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">Name</p>
            <p className="text-[13px] font-bold text-gray-900">
              Dr. Funke Adeyemi
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">Role</p>
            <p className="text-[13px] font-bold text-gray-900">
              UX Design Mentor
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">Cohort</p>
            <p className="text-[13px] font-bold text-gray-900">Cohort 3</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-500 mb-1">
              Assigned Interns
            </p>
            <p className="text-[13px] font-bold text-gray-900">24</p>
          </div>
        </div>

        {/* Instructions (Left Aligned) */}
        <p className="text-[13px] text-gray-600 leading-[1.7] mb-10">
          To get started, click the button below to activate your account and
          set your password.
          <br className="hidden sm:block" />
          This link will expire in 48 hours.
        </p>

        {/* Call to Action Button - NOW A LINK */}
        <div className="flex justify-center mb-12">
          <Link
            to="/activate"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E67E22] text-white text-[13px] font-bold rounded-[8px] hover:bg-orange-600 transition shadow-sm w-full sm:w-auto"
          >
            Activate Your Account
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
          </Link>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-[10.5px] text-gray-400 font-medium leading-relaxed max-w-[450px] mx-auto">
            If you did not expect this invitation, please ignore this email or
            contact{" "}
            <a
              href="mailto:support@foxacademy.com"
              className="text-[#E67E22] font-bold hover:underline"
            >
              support@foxacademy.com
            </a>
          </p>
        </div>
      </div>

      {/* Decorative Bottom Line matching Figma */}
      <div className="mx-10 mb-10 border-b border-[#E67E22]/30"></div>
    </div>
  );
}
