import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepProgress from "../components/StepProgress";
import ProfileField from "../components/ProfileField";

export default function MentorProfileSetup() {
  const navigate = useNavigate();

  // Track the bio text in state
  const [bio, setBio] = useState("");

  const handleFinishSetup = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center py-12 px-4 md:px-8 font-sans w-full">
      <h2 className="text-[20px] font-black text-gray-900 tracking-[0.2em] mb-10">
        FOX ACADEMY
      </h2>

      <StepProgress currentStep={2} />

      <div className="w-full max-w-[768px] bg-white border border-gray-100 rounded-[8px] p-8 md:p-12 shadow-sm drop-shadow-sm">
        <div className="text-center mb-12">
          <h1 className="text-[28px] font-bold text-gray-900 mb-3">
            Set Up Your Profile
          </h1>
          <p className="text-[14px] text-gray-500 leading-relaxed max-w-[460px] mx-auto">
            This information will be visible to your assigned interns. Take a
            moment to make a good first impression.
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <p className="text-[11px] font-bold text-gray-900 mb-3">
            Upload a profile photo
          </p>
          <div className="w-[128px] h-[128px] rounded-[12px] bg-[#FEF3E9]/50 border-2 border-dashed border-[#C6C6C6] flex items-center justify-center mb-4">
            <span className="text-[32px] font-bold text-gray-400">FA</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-[13px] font-bold text-gray-900 hover:underline underline-offset-4"
            >
              Upload Photo
            </button>
            <span className="text-gray-200 text-[10px]">•</span>
            <button
              type="button"
              className="text-[13px] font-bold text-[#F38821] hover:text-[#d35400] transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleFinishSetup}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            <ProfileField
              label="Full Name"
              value="Dr. Funke Adeyemi"
              isReadOnly
            />
            <ProfileField
              label="Discipline"
              value="UX Design"
              isReadOnly
              helperText="Set by your Global Admin"
            />
            <ProfileField
              label="Role Title"
              value="Senior UX Mentor"
              isReadOnly
            />
            <ProfileField label="Cohort" value="Cohort 3" isReadOnly />
            <ProfileField
              label="Phone Number (Optional)"
              placeholder="+234 800 000 0000"
            />
            <ProfileField
              label="LinkedIn Profile (Optional)"
              placeholder="linkedin.com/in/username"
            />
          </div>

          {/* === DYNAMIC BIO SECTION === */}
          <div className="mt-2">
            <ProfileField
              label="Short Bio"
              placeholder={
                "Tell your interns a little about yourself — background, expertise, and what they can expect.\n\nI'm a Senior UX Designer with 8 years of experience across fintech and edtech. I'm passionate about helping the next generation of designers think critically and ship great work."
              }
              isTextArea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={300}
            />
            {/* Real-time character counter */}
            <p
              className={`text-right text-[11px] font-medium mt-1.5 ${bio.length === 300 ? "text-red-500" : "text-gray-400"}`}
            >
              {bio.length} / 300
            </p>
          </div>

          <div className="flex items-center justify-between py-6 border-t border-gray-100 mt-2">
            <div className="flex flex-col gap-1 max-w-[60%]">
              <p className="text-[13px] font-bold text-gray-900">
                Availability for Check-ins
              </p>
              <p className="text-[12px] text-gray-500">
                Interns will see your availability status on their dashboard.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-bold text-gray-900">
                Available for intern check-ins
              </span>
              <button
                type="button"
                className="w-[42px] h-[24px] bg-[#27C93F] rounded-full relative transition-colors cursor-pointer shrink-0"
              >
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </button>
            </div>
          </div>

          <button type="submit" className="hidden"></button>
        </form>
      </div>

      <div className="w-full max-w-[768px] flex items-center justify-between pt-8 pb-12">
        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="text-[14px] font-bold text-[#F38821] hover:underline text-left"
          >
            Skip & Go to Dashboard
          </button>
          <span className="text-[11px] text-gray-400 font-medium">
            You can complete your profile later in settings
          </span>
        </div>

        <button
          type="button"
          onClick={handleFinishSetup}
          className="bg-[#F38821] text-white px-8 py-3.5 rounded-lg font-bold text-[14px] hover:bg-[#d35400] transition-colors shadow-sm flex items-center gap-2"
        >
          Save & Go to Dashboard
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
