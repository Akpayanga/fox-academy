import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";

export default function AdminLanding() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] font-sans">
      {/* Navbar */}
      <nav className="border-b border-[#E5E7EB] bg-transparent">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={foxLogo} alt="Fox Academy Logo" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-[#D97706]">
                Fox Academy
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                By Trueminds Innovations Ltd
              </span>
            </div>
          </div>
          <Link
            to="/admin/login"
            className="rounded-lg bg-[#D97706] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#B45309]"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center max-w-4xl mx-auto w-full">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center rounded bg-[#FFF3E0] px-3 py-1 font-semibold tracking-widest text-[#D97706] text-[10px] uppercase">
            Operational Status: Secure
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl md:text-7xl font-black tracking-tight text-[#5A3B1C] leading-[1.1] uppercase font-serif">
            The Control Room For<br />Fox Academy
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-base md:text-lg text-gray-600 max-w-2xl font-medium">
            Precision management of educational ecosystems. High-density data
            visualization and administrative command for the modern learning academy.
          </p>

          {/* Button */}
          <Link
            to="/admin/login"
            className="inline-flex items-center gap-2 rounded-lg bg-[#D97706] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#B45309]"
          >
            Sign in to Your Portal <ArrowRight size={18} />
          </Link>
        </section>

        {/* Info Section */}
        <section className="flex-grow flex items-center justify-center pb-24 px-6 w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center w-full gap-16 lg:gap-32">
            
            {/* Left Column (Text) */}
            <div className="flex-1 text-left">
              <h2 className="mb-4 text-3xl md:text-4xl font-black text-[#5A3B1C] uppercase font-serif tracking-tight">
                Defined Operational Access
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-md">
                Access levels are restricted based on defined roles. Ensure roles are
                properly assigned based on authorized credentials. Roles are assigned
                strictly by global admins.
              </p>
            </div>

            {/* Right Column (Cards) */}
            <div className="flex-1 flex flex-col gap-4 w-full">
              {/* Mentor Card */}
              <div className="flex items-center gap-6 bg-[#FFF8EE] p-6 rounded-sm w-full">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-[#D97706] text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#374151] text-lg uppercase tracking-tight">
                    Mentor
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                    Access Tier 2
                  </p>
                </div>
              </div>

              {/* Global Admin Card */}
              <div className="flex items-center gap-6 bg-[#FFF8EE] p-6 rounded-sm w-full">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-[#D97706] text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#374151] text-lg uppercase tracking-tight">
                    Global Admin
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                    Access Tier 1
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#5A3B1C] py-8 px-6 mt-auto">
        <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
              Fox Academy
            </h4>
            <p className="text-[10px] text-[#A8988A] uppercase tracking-widest">
              © 2024 Fox Academy Control Room. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] text-[#A8988A] font-bold uppercase tracking-widest">
            <Link to="#" className="hover:text-white transition-colors">
              Security Protocol
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              System Status
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Audit Logs
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Contact Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
