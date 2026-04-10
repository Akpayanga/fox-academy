import React from "react";
import { ChevronRight, Library, Users, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import auth6 from "../assets/images/auth6.png";

/**
 * Onboarding Step 5: Onboarding Complete
 * final celebration page with onboarding summary and final entry button.
 */
const OnboardingComplete = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Learn from structured materials",
      icon: <Library size={32} className="text-[#F38821]" />,
    },
    {
      id: 2,
      title: "Build with your cross-functional team",
      icon: <Users size={32} className="text-[#F38821]" />,
    },
    {
      id: 3,
      title: "Track your growth every step of the way",
      icon: <BarChart3 size={32} className="text-[#F38821]" />,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-4 py-12 md:py-16">
      {/* 1. Progress Indicator (Step 5 of 5) */}
      <div className="mb-12 w-full max-w-2xl px-6">
        <div className="mb-3 flex gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
        </div>
        <p className="text-center text-sm font-medium text-[#6B7280]">
          Step 5 of 5
        </p>
      </div>

      {/* 2. Hero Image Section */}
      <div className="mb-8 w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg">
        <img
          src={auth6}
          alt="Collaboration Session"
          className="h-[400px] w-full object-cover"
        />
      </div>

      {/* 3. Header Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-[#F38821]">
          You're Ready to Go, Amara!
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#6B7280]">
          Your profile is set up, your team is waiting, your learning materials are live, and your project tasks are waiting for you upon completion of phase 1. Fox Academy is where you learn by doing and build by collaborating. Make it count.
        </p>
      </div>

      {/* 4. Features Grid */}
      <div className="mb-16 grid w-full max-w-6xl grid-cols-1 gap-12 sm:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF8F1]">
              {feature.icon}
            </div>
            <p className="max-w-[180px] text-sm font-semibold leading-snug text-[#374151]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>

      {/* 5. Action Button */}
      <div className="flex w-full max-w-sm flex-col items-center">
        <button
          onClick={() => navigate("/dashboard")} // Final destination
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#F38821] py-4 text-lg font-bold text-white shadow-lg shadow-orange-100 transition-all hover:bg-[#e37b1d] active:scale-[0.98]"
        >
          Enter Fox Academy
          <ChevronRight size={22} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingComplete;
