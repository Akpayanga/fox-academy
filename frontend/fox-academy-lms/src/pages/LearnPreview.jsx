import React from "react";
import { ChevronRight, Play, BookOpen, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Onboarding Step 4: Learn Preview
 * Visualizing the upcoming learning path with "Start Learning" section.
 */
const LearnPreview = () => {
  const navigate = useNavigate();

  const learningItems = [
    {
      id: 1,
      type: "Watch",
      title: "Introduction to Fox Academy",
      duration: "5 mins",
      icon: <Play size={20} className="text-[#374151]" />,
      isNew: true,
    },
    {
      id: 2,
      type: "Read",
      title: "UI/UX Intern Handbook — Phase 2",
      duration: "10 min read",
      icon: <BookOpen size={20} className="text-[#374151]" />,
      isNew: true,
    },
    {
      id: 3,
      type: "Watch",
      title: "How Cross-Functional Teams Work at Truemind",
      duration: "8 mins",
      icon: <Video size={20} className="text-[#374151]" />,
      isNew: true,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-4 py-12 md:py-16">
      {/* 1. Progress Indicator (Step 4 of 5) */}
      <div className="mb-12 w-full max-w-2xl px-6">
        <div className="mb-3 flex gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
        </div>
        <p className="text-center text-sm font-medium text-[#6B7280]">
          Step 4 of 5
        </p>
      </div>

      {/* 2. Header Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#111827]">
          Here's What's Waiting for You
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#6B7280]">
          Fox Academy has two sides — things to learn and things to build. Both start now.
        </p>
      </div>

      {/* 3. Section Content */}
      <div className="w-full max-w-4xl px-4">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-[#111827]">
          📚 Start Learning
        </h2>

        <div className="space-y-4">
          {learningItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-start gap-4 rounded-xl border border-[#E5E7EB] px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mt-1 mr-2 shrink-0">
                {item.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="mb-2 text-base font-bold text-[#111827]">
                  {item.type}: {item.title}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-bold text-[#6B7280]">
                    {item.duration}
                  </span>
                  {item.isNew && (
                    <span className="rounded bg-[#F38821] px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-tight">
                      New
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Footer & Action Buttons */}
      <div className="mt-16 flex w-full max-w-4xl flex-col items-center space-y-6 px-4 text-center">
        <p className="max-w-[760px] text-sm font-medium text-[#6B7280]">
          You'll find all your learning materials and project tasks on your dashboard.
        </p>
        
        <button
          onClick={() => navigate("/onboarding/complete")} 
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#F38821] py-4.5 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#e37b1d] active:scale-[0.98]"
        >
          Go to My Dashboard
          <ChevronRight size={22} className="transition-transform group-hover:translate-x-1" />
        </button>
        
        <button
          onClick={() => navigate("/dashboard")} // Skip to dashboard
          className="text-sm font-semibold text-[#6B7280] transition-colors hover:text-[#111827]"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default LearnPreview;
