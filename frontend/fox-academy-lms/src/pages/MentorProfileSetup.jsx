import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import StepProgress from "../components/StepProgress";
import ProfileField from "../components/ProfileField";
import { uploadSingleMedia } from "../services/mediaService";

export default function MentorProfileSetup() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Track the bio text in state
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imageUploadError, setImageUploadError] = useState("");

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setImageUploadError("");
    setProfileImage(URL.createObjectURL(file));
    setIsUploadingImage(true);

    try {
      const response = await uploadSingleMedia(file, { type: "mentor-profile-photo" });
      const remoteUrl =
        response?.data?.url || response?.url || response?.data?.secure_url || response?.secure_url;

      if (remoteUrl) {
        setProfileImage(remoteUrl);
      }
    } catch (error) {
      setImageUploadError(
        error?.response?.data?.message || "Photo upload failed. You can still continue."
      );
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleFinishSetup = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center py-10 px-4 md:px-8 font-sans w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[22px] font-black text-gray-900 tracking-[0.2em] mb-8">
          FOX ACADEMY
        </h2>
        <StepProgress currentStep={2} />
      </div>

      <div className="w-full max-w-200 bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.03)] focus-within:shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-shadow">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-[26px] font-bold text-gray-900 mb-2.5">
              Set Up Your Profile
            </h1>
            <p className="text-[14px] text-gray-400 font-medium leading-relaxed max-w-120 mx-auto">
              This information will be visible to your assigned interns. Take a
              moment to make a good first impression.
            </p>
          </div>

          <div className="flex flex-col items-center mb-10">
            <p className="text-[10px] font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Upload a profile photo
            </p>
            <div className="w-27.5 h-27.5 rounded-2xl bg-[#FFF4E8] border-2 border-dashed border-gray-200 flex items-center justify-center mb-4 overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Mentor Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-[28px] font-bold text-gray-400">FA</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleImageClick}
                className="text-[13px] font-bold text-gray-900 hover:underline underline-offset-4"
              >
                {isUploadingImage ? "Uploading Photo..." : "Upload Photo"}
              </button>
              <span className="text-gray-200 text-[10px]">•</span>
              <button
                type="button"
                className="text-[13px] font-bold text-[#F38821] hover:text-[#d35400] transition-colors"
                onClick={() => {}}
              >
                Skip for now
              </button>
            </div>
            {imageUploadError ? (
              <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                {imageUploadError}
              </p>
            ) : null}
          </div>

          <form className="flex flex-col gap-6" onSubmit={handleFinishSetup}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
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
                placeholder="linkedin.com/in/yourname"
              />
            </div>

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
              <p className="text-right text-[10px] font-bold text-gray-400 mt-2 tracking-wide uppercase">
                {bio.length} / 300
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-4 mb-2">
              <div className="flex flex-col gap-0.5">
                <p className="text-[13px] font-bold text-gray-900">
                  Availability for Check-ins
                </p>
                <p className="text-[11px] text-gray-400 font-medium">
                  Interns will see your availability status on their dashboard.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-bold text-gray-900">
                  Available for intern check-ins
                </span>
                <button
                  type="button"
                  className="w-10.5 h-5.5 bg-[#4CAF50] rounded-full relative transition-colors cursor-pointer shrink-0"
                >
                  <div className="absolute right-1 top-1 w-3.5 h-3.5 bg-white rounded-full shadow-sm"></div>
                </button>
              </div>
            </div>
            <button type="submit" className="hidden"></button>
          </form>
        </div>

        {/* Gray footer section */}
        <div className="bg-[#F9FAFB] border-t border-gray-100 px-8 md:px-12 py-6 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="text-[14px] font-bold text-[#F38821] hover:underline text-left tracking-tight"
            >
              Skip & Go to Dashboard
            </button>
            <span className="text-[10px] text-gray-400 font-medium">
              You can complete your profile later in settings
            </span>
          </div>

          <button
            type="button"
            onClick={handleFinishSetup}
            className="bg-[#F38821] text-white px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-[#d35400] transition-all shadow-sm flex items-center gap-2 group"
          >
            Save & Go to Dashboard
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
