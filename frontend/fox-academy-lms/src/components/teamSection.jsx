import { Link } from "react-router-dom";
import TeamSection from "./teamSideSection";

export default function Phase2Dashboard() {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {/* Left: heading + meta */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Welcome to Phase 2, Amara!
            </h1>
            <div className="flex flex-wrap gap-8 mt-5">
              {[
                { label: "Team Size", value: "20 Members" },
                { label: "Disciplines", value: "5 Tracks" },
                { label: "Final Deadline", value: "Aug 2nd" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] font-bold tracking-widest text-[rgba(221,124,30,1)] uppercase">
                    {m.label}
                  </p>
                  <p className="text-xl font-bold text-gray-900 mt-0.5">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Capstone Card */}
            <div className="mt-6 bg-[rgba(221,124,30,1)] rounded-2xl p-6 text-white relative overflow-hidden py-6">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
              <div className="flex items-start justify-between gap-4">
                <span className="text-[9px] font-bold tracking-widest uppercase bg-white text-[rgba(221,124,30,1)] px-3 py-1 rounded-full">
                  Capstone Project
                </span>
                {/* Stacked avatars */}
                <div className="flex -space-x-2 flex-shrink-0">
                  {["Kofi", "Tunde", "Funke", "Amara", "Seun"].map((s) => (
                    <img
                      key={s}
                      src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${s}`}
                      alt={s}
                      className="w-7 h-7 rounded-full border-2 border-orange-500 object-cover"
                    />
                  ))}
                  <div className="w-7 h-7 rounded-full bg-orange-300 border-2 border-orange-500 flex items-center justify-center text-[10px] font-bold text-[rgba(221,124,30,1)]">
                    +15
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-extrabold leading-snug mt-5 max-w-sm">
                FinEase - A Financial Wellness App for Young Nigerians
              </h2>
              <Link to='/overview' className="mt-6 bg-white text-orange-500 font-semibold text-sm px-5 py-2 rounded-xl transition-colors cursor-pointer">
                Project Overview
              </Link>
            </div>

            {/* Team section on mobile — sits right below meta */}
            <div className="mt-6 lg:hidden">
              <TeamSection />
            </div>
          </div>

          {/* Right: Team section on desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0 mt-2">
            <TeamSection />
          </div>
        </div>
      </div>
    </div>
  );
}
