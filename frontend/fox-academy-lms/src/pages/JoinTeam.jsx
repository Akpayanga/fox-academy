import React from "react";
import { ChevronRight, Users } from "lucide-react";

import { useNavigate } from "react-router-dom";
import amara from "../assets/images/amara.jpg";


/**
 * Onboarding Step 3: Join Team
 * Replicating the "You're Part of a Team" layout with pixel-perfect attention.
 */
const JoinTeam = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: "Amara Okafor",
      role: "UI/UX Design",
      image: amara,
      isMe: true,
    },
    {
      id: 2,
      name: "*****",
      role: "Front End",
      isPlaceholder: true,
    },
    {
      id: 3,
      name: "*****",
      role: "Back End",
      isPlaceholder: true,
    },
    {
      id: 4,
      name: "*****",
      role: "UI/UX Design",
      isPlaceholder: true,
    },
  ];

  const footerAvatars = [
    { color: "bg-[#FFD8A8]" },
    { color: "bg-[#FFD8A8]" },
    { color: "bg-[#FFD8A8]" },
    { color: "bg-[#FFD8A8]" },
    { color: "bg-[#FFD8A8]" },
    { text: "+6", color: "bg-[#FFD8A8]" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-4 py-12 md:py-16">
      {/* 1. Progress Indicator (Step 3 of 5) */}
      <div className="mb-12 w-full max-w-2xl px-6">
        <div className="mb-3 flex gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
        </div>
        <p className="text-center text-sm font-medium text-[#6B7280]">
          Step 3 of 5
        </p>
      </div>

      {/* 2. Header Section */}
      <div className="mb-12 max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#111827]">
          You're Part of a Team
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#6B7280]">
          Here's who you'll be working with in the UI/UX team this cohort. You'll also collaborate with interns from Frontend, Backend, Project Management, Graphic Design, and Social Media — because real products need all of these disciplines working together.
        </p>
      </div>

      {/* 3. Team grid */}
      <div className="mb-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 md:gap-x-12 lg:gap-x-16">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            {/* Avatar Circle */}
            <div className={`relative mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full ${member.isPlaceholder ? "bg-[#FFCC99] opacity-70" : "bg-gray-100"}`}>
              {member.isPlaceholder ? (
                <Users size={44} className="text-white" />
              ) : (
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              )}
            </div>


            {/* Name/Stars */}
            <h3 className="mb-2 text-base font-bold text-[#111827]">
              {member.name}
            </h3>

            {/* Role Label */}
            <div className="mb-3 rounded-full bg-[#EEF2FF] px-4 py-1">
              <span className="text-xs font-semibold text-[#6366F1]">
                {member.role}
              </span>
            </div>

            {/* Badge (That's You!) */}
            {member.isMe && (
              <div className="rounded-full bg-[#F38821] px-6 py-1.5 shadow-md">
                <span className="text-xs font-bold text-white whitespace-nowrap">
                  That's You!
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 4. Footer Avatar Stack */}
      <div className="mb-12 flex items-center justify-center -space-x-3">
        {footerAvatars.map((avatar, i) => (
          <div 
            key={i} 
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#F38821] bg-[#FFF8F1] text-[10px] font-bold text-[#4B5563] sm:h-12 sm:w-12 sm:text-xs`}
          >
            {avatar.text || ""}
          </div>
        ))}
      </div>

      {/* 5. Action Buttons */}
      <div className="flex w-full max-w-3xl flex-col items-center space-y-6">
        <button
          onClick={() => navigate("/onboarding/step4")} // Assumed next step
          className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#F38821] bg-white py-4 text-lg font-bold text-[#F38821] transition-all hover:bg-[#FFF8F1] active:scale-[0.98]"
        >
          Continue
          <ChevronRight size={22} className="transition-transform group-hover:translate-x-1" />
        </button>
        <button
          onClick={() => navigate("/onboarding/skip")} // Placeholder
          className="text-sm font-semibold text-[#6B7280] transition-colors hover:text-[#111827]"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;
