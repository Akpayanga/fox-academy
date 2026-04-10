import React from "react";
import { ChevronRight, CheckCircle2, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import celebrationHero from "../assets/images/celebration_hero.png";

/**
 * Onboarding Step 5: Onboarding Complete
 * Final celebration page matching the latest design precisely.
 */
const OnboardingComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] p-4 font-sans">
      <div className="w-full max-w-[540px] rounded-[24px] bg-white p-10 shadow-[0_10px_50px_rgba(0,0,0,0.06)]">
        
        {/* 1. Validation Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4EB] px-5 py-2.5 text-[11px] font-bold tracking-widest text-[#D97706]">
            <CheckCircle2 size={14} className="fill-[#D97706] text-[#FFF4EB]" />
            CODE VALIDATED: TM-2026-UX-1906
          </div>
        </div>

        {/* 2. Hero Image Section */}
        <div className="mb-10 overflow-hidden rounded-[16px]">
          <img
            src={celebrationHero}
            alt="Success celebration"
            className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* 3. Header Section */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-[#9CA3AF] uppercase">
            ONBOARDING SEQUENCE COMPLETE
          </p>
          <h1 className="text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Welcome, Amara.
          </h1>
        </div>

        {/* 4. Information Card */}
        <div className="mb-10 rounded-[20px] bg-[#FEFBF9] p-8 border border-[#FFF0E5]">
          <div className="grid grid-cols-2 gap-10 mb-8">
            <div>
              <p className="mb-2 text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase">
                POSITION
              </p>
              <p className="text-[17px] font-bold text-[#1E293B]">
                UI/UX Design Intern
              </p>
            </div>
            <div>
              <p className="mb-2 text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase">
                COHORT STATUS
              </p>
              <p className="text-[17px] font-bold text-[#1E293B]">
                Phase 1
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-[#FFF0E5]">
            <p className="mb-3 text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase">
              DURATION
            </p>
            <div className="flex items-center gap-2 text-[15px] font-bold text-[#334155]">
              <Calendar size={16} className="text-[#9CA3AF]" />
              <span>March 17 - June 10, 2024</span>
            </div>
          </div>
        </div>

        {/* 5. Action Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="group flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#F38821] py-5 text-[16px] font-bold text-white shadow-[0_8px_30px_rgba(243,136,33,0.3)] transition-all hover:bg-[#e37b1d] active:scale-[0.98]"
        >
          Complete My Registration
          <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingComplete;

