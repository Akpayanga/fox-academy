import React, { useState, useRef } from "react";
import { Camera, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Onboarding Step 2: Set Up Your Profile
 * Industry-standard implementation with premium visual aesthetics.
 */
const SetProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboarding/team");
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-4 py-12 md:py-16">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />

      {/* 1. Progress Indicator (Step 2 of 5) */}
      <div className="mb-12 w-full max-w-2xl px-6">
        <div className="mb-3 flex gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
        </div>
        <p className="text-center text-sm font-medium text-[#6B7280]">
          Step 2 of 5
        </p>
      </div>

      {/* 2. Header Section */}
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-[#111827]">
          Set Up Your Profile
        </h1>
        <p className="text-[#6B7280]">
          Help your teammates, mentors, and instructors know who you are.
        </p>
      </div>

      {/* 3. Profile Photo Upload */}
      <div className="mb-12 flex flex-col items-center">
        <div 
          onClick={handleImageClick}
          className="mb-4 flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#FEF3E9] transition-transform hover:scale-105 active:scale-95"
        >
          {profileImage ? (
            <img src={profileImage} alt="Profile Preview" className="h-full w-full object-cover" />
          ) : (
            <Camera size={40} className="text-[#374151]" />
          )}
        </div>
        <button 
          type="button" 
          onClick={handleImageClick}
          className="text-sm font-medium text-[#6B7280] hover:text-[#111827]"
        >
          Upload a profile photo
        </button>
      </div>

      {/* 4. Form Section */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">

        {/* What do you go by? */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#111827]">
            What do you go by?
          </label>
          <input
            type="text"
            placeholder="Your preferred name or nickname"
            className="w-full rounded-xl border border-[#D1D5DC] px-4 py-3 text-sm focus:border-[#F38821] focus:outline-none focus:ring-1 focus:ring-[#F38821]"
          />
        </div>

        {/* A short bio */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#111827]">
            A short bio
          </label>
          <textarea
            rows={4}
            placeholder="e.g. UI/UX designer passionate about fintech products. Based in Lagos."
            className="w-full resize-none rounded-xl border border-[#D1D5DC] px-4 py-3 text-sm focus:border-[#F38821] focus:outline-none focus:ring-1 focus:ring-[#F38821]"
          />
        </div>

        {/* LinkedIn Profile */}
        <div className="space-y-1">
          <label className="text-sm font-bold text-[#111827]">
            LinkedIn Profile
          </label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/yourname"
            className="w-full rounded-xl border border-[#D1D5DC] px-4 py-3 text-sm focus:border-[#F38821] focus:outline-none focus:ring-1 focus:ring-[#F38821]"
          />
          <p className="text-xs font-medium text-[#99A1AF]">Optional</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center space-y-4 pt-4">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F38821] py-4 text-base font-bold text-white shadow-lg shadow-orange-100 transition-all hover:bg-[#e37b1d] active:scale-[0.98]"
          >
            Save and Continue
            <ChevronRight size={20} />
          </button>
          <button
            type="button"
            className="text-sm font-bold text-[#F38821] hover:text-[#e37b1d]"
          >
            Skip for now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetProfile;
