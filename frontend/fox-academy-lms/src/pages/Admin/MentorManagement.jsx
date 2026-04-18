import React from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  Plus,
  Info,
} from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";
import amara from "../../assets/images/amara.jpg"; // Placeholder avatar used for everything

export default function MentorManagement() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-16">
      {/* Navbar area */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={foxLogo} alt="Fox Academy Logo" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-[#D97706]">
                Fox Academy
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#111827] uppercase mt-1">
                Global Admin
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
            <Link
              to="/control-room/dashboard"
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Dashboard
            </Link>
            <Link
              to="/control-room/mentors"
              className="text-[#D97706] border-b-2 border-[#D97706] pb-1"
            >
              Mentors
            </Link>
            <Link to="/control-room/interns" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">Interns</Link>
            <Link to="/control-room/cohorts" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">Cohorts</Link>
            <Link to="/control-room/analytics" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">Analytics</Link>
          </div>

          {/* Profile Segment */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-black">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#111827] leading-tight">
                  Bola Aseyan
                </p>
                <p className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-widest leading-tight">
                  Global Admin
                </p>
              </div>
              <img
                src={amara}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border border-gray-200"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content View */}
      <main className="mx-auto max-w-[1400px] px-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-[12px] font-bold text-[#D97706] uppercase tracking-widest mb-1">
              Global Administration
            </h2>
            <h1 className="text-3xl font-bold text-[#111827]">
              Mentor Management
            </h1>
          </div>
          <Link to="/control-room/mentors/add" className="flex items-center gap-2 rounded-md bg-[#D97706] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#B45309] w-max">
            <Plus size={16} /> Create New
          </Link>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* Main Left Content Area */}
          <div className="flex-1 w-full min-w-0">
            {/* Search and Filters Segment */}
            <div className="bg-[#F3F4F6] rounded-md p-3 mb-6 relative">
              <div className="relative bg-white rounded flex items-center shadow-sm">
                <Search size={18} className="text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Search by name, discipline, or intern..."
                  className="w-full bg-transparent border-none py-3 px-3 text-sm focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <button className="bg-[#D97706] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                All
              </button>
              <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 border border-gray-200">
                Active
              </button>
              <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 border border-gray-200">
                Inactive
              </button>
              <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 border border-gray-200">
                Pending
              </button>
            </div>

            {/* Mentors List */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                <img
                  src={amara}
                  alt="Avatar"
                  className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-[#111827]">
                      Dr. Funke Adeyemi
                    </h3>
                    <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
                      Active
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                     Senior Product Design Mentor & Researcher
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Assigned Interns
                      </p>
                      <p className="text-sm font-bold text-[#111827]">12 Interns</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Avg. Progress
                      </p>
                      <p className="text-sm font-bold text-[#111827]">88.4%</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Last Active
                      </p>
                      <p className="text-sm font-bold text-[#111827]">2h ago</p>
                    </div>
                  </div>
                </div>
                {/* Right side textual notes */}
                <div className="md:w-64 flex flex-col justify-center md:items-end md:text-right mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <p className="text-xs italic text-gray-400 mb-3">
                    "Completed the review for the UI/UX cohort."
                  </p>
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] hover:underline">
                      View Profile
                    </Link>
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:underline">
                      Remove
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                <img
                  src={amara}
                  alt="Avatar"
                  className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-[#111827]">
                      Mr. Kunle Ojo
                    </h3>
                    <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
                      Active
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                     UX/UI Design Associate & Systems Architect
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Assigned Interns
                      </p>
                      <p className="text-sm font-bold text-[#111827]">8 Interns</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Avg. Progress
                      </p>
                      <p className="text-sm font-bold text-[#111827]">92.1%</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Last Active
                      </p>
                      <p className="text-sm font-bold text-[#111827]">Just now</p>
                    </div>
                  </div>
                </div>
                {/* Right side textual notes */}
                <div className="md:w-64 flex flex-col justify-center md:items-end md:text-right mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <p className="text-xs italic text-gray-400 mb-3">
                    "Started the new 'Advanced Figma' masterclass."
                  </p>
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] hover:underline">
                      View Profile
                    </Link>
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:underline">
                      Remove
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 opacity-60">
                <img
                  src={amara}
                  alt="Avatar"
                  className="h-16 w-16 rounded-md object-cover flex-shrink-0 grayscale"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-[#111827]">
                      Ms. Chioma Eze
                    </h3>
                    <span className="inline-flex rounded-sm bg-gray-300 px-2 py-0.5 text-[9px] font-bold tracking-wider text-gray-600 uppercase">
                      Inactive
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                     Front-End Engineering Specialist
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Assigned Interns
                      </p>
                      <p className="text-sm font-bold text-gray-500">0 Interns</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Avg. Progress
                      </p>
                      <p className="text-sm font-bold text-gray-500">--</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Last Active
                      </p>
                      <p className="text-sm font-bold text-[#111827]">12 days ago</p>
                    </div>
                  </div>
                </div>
                {/* Right side textual notes */}
                <div className="md:w-64 flex flex-col justify-center md:items-end md:text-right mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <p className="text-xs italic text-gray-400 mb-3">
                    "Away on sabbatical leave until next cohort."
                  </p>
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] hover:underline">
                      View Profile
                    </Link>
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:underline">
                      Remove
                    </Link>
                  </div>
                </div>
              </div>

               {/* Card 4 */}
               <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                <img
                  src={amara}
                  alt="Avatar"
                  className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-[#111827]">
                      Mr. Ibrahim Sule
                    </h3>
                    <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
                      Active
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                     Backend Development Lead
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Assigned Interns
                      </p>
                      <p className="text-sm font-bold text-[#111827]">15 Interns</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Avg. Progress
                      </p>
                      <p className="text-sm font-bold text-[#111827]">76.8%</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Last Active
                      </p>
                      <p className="text-sm font-bold text-[#111827]">4h ago</p>
                    </div>
                  </div>
                </div>
                {/* Right side textual notes */}
                <div className="md:w-64 flex flex-col justify-center md:items-end md:text-right mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <p className="text-xs italic text-gray-400 mb-3">
                    "Graded 15 SQL fundamentals assignments."
                  </p>
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] hover:underline">
                      View Profile
                    </Link>
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:underline">
                      Remove
                    </Link>
                  </div>
                </div>
              </div>

               {/* Card 5 */}
               <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                <img
                  src={amara}
                  alt="Avatar"
                  className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-[#111827]">
                      Dr. Linda Osifo
                    </h3>
                    <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
                      Active
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                     Project Management & Strategy
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Assigned Interns
                      </p>
                      <p className="text-sm font-bold text-[#111827]">5 Interns</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Avg. Progress
                      </p>
                      <p className="text-sm font-bold text-[#111827]">82.0%</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Last Active
                      </p>
                      <p className="text-sm font-bold text-[#111827]">14h ago</p>
                    </div>
                  </div>
                </div>
                {/* Right side textual notes */}
                <div className="md:w-64 flex flex-col justify-center md:items-end md:text-right mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <p className="text-xs italic text-gray-400 mb-3">
                    "Scheduled 1-on-1 mentorship sessions for week 8."
                  </p>
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] hover:underline">
                      View Profile
                    </Link>
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:underline">
                      Remove
                    </Link>
                  </div>
                </div>
              </div>

               {/* Card 6 */}
               <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                <img
                  src={amara}
                  alt="Avatar"
                  className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-[#111827]">
                      Mr. Fred Attang
                    </h3>
                    <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
                      Active
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                     Brand Identity designer and strategist
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Assigned Interns
                      </p>
                      <p className="text-sm font-bold text-[#111827]">5 Interns</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Avg. Progress
                      </p>
                      <p className="text-sm font-bold text-[#111827]">88.0%</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        Last Active
                      </p>
                      <p className="text-sm font-bold text-[#111827]">1d ago</p>
                    </div>
                  </div>
                </div>
                {/* Right side textual notes */}
                <div className="md:w-64 flex flex-col justify-center md:items-end md:text-right mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <p className="text-xs italic text-gray-400 mb-3">
                    "Scheduled 1-on-1 mentorship sessions for week 8."
                  </p>
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] hover:underline">
                      View Profile
                    </Link>
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:underline">
                      Remove
                    </Link>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[320px] flex-shrink-0 space-y-6">
            
            {/* Mentor Summary Card */}
            <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                Mentor Summary
              </h3>

              <div className="space-y-5">
                {/* Row 1 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-[#111827]">Data Analysis</p>
                    <p className="text-xs font-bold text-[#111827]">08</p>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full flex gap-[1px]">
                     <div className="h-full bg-[#D97706] rounded-l-full" style={{ width: '40%' }}></div>
                     <div className="h-full bg-gray-200 rounded-r-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                {/* Row 2 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-[#111827]">Design / UX</p>
                    <p className="text-xs font-bold text-[#111827]">14</p>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full flex gap-[1px]">
                     <div className="h-full bg-[#D97706] rounded-l-full" style={{ width: '20%' }}></div>
                     <div className="h-full bg-gray-200 rounded-r-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-[#111827]">Engineering</p>
                    <p className="text-xs font-bold text-[#111827]">22</p>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full flex gap-[1px]">
                     <div className="h-full bg-[#D97706] rounded-l-full" style={{ width: '30%' }}></div>
                     <div className="h-full bg-[#D97706]" style={{ width: '30%' }}></div>
                     <div className="h-full bg-[#D97706] rounded-r-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-4 flex justify-between items-center">
                 <p className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Total Capacity</p>
                 <p className="text-xl font-black text-[#D97706] tracking-tight">44 <span className="text-sm text-gray-400">/ 60</span></p>
              </div>

            </div>

            {/* Recent Mentor Activity Card */}
            <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                Recent Mentor Activity
              </h3>

              <div className="space-y-5 mb-8">
                {/* Event 1 */}
                <div className="flex gap-3">
                   <div className="w-[3px] bg-[#D97706] rounded-full self-stretch flex-shrink-0"></div>
                   <div>
                     <p className="text-xs font-bold text-[#111827] leading-tight mb-1">Adeyemi reviewed Intern #012</p>
                     <p className="text-[10px] font-medium text-gray-400">15 mins ago</p>
                   </div>
                </div>
                {/* Event 2 */}
                <div className="flex gap-3">
                   <div className="w-[3px] bg-[#D97706] rounded-full self-stretch flex-shrink-0 opacity-50"></div>
                   <div>
                     <p className="text-xs font-bold text-[#111827] leading-tight mb-1">Kunle Ojo uploaded assets</p>
                     <p className="text-[10px] font-medium text-gray-400">1 hour ago</p>
                   </div>
                </div>
                {/* Event 3 */}
                <div className="flex gap-3">
                   <div className="w-[3px] bg-[#D97706] rounded-full self-stretch flex-shrink-0"></div>
                   <div>
                     <p className="text-xs font-bold text-[#111827] leading-tight mb-1">New mentor application: Sarah . A</p>
                     <p className="text-[10px] font-medium text-gray-400">4 hours ago</p>
                   </div>
                </div>
              </div>

              <button className="w-full flex items-center justify-center rounded-md border border-[#FDE68A] bg-white py-3 text-sm font-bold text-[#D97706] transition hover:bg-[#FFF8EE]">
                Full Logs
              </button>
            </div>

            {/* Note Card */}
            <div className="bg-[#D97706] rounded-md p-6 text-white shadow-sm mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={16} className="text-white" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest">
                  Note
                </h3>
              </div>
              <p className="text-xs leading-relaxed opacity-95 mb-6 font-medium pr-2">
                The Q4 Enrollment cycle begins in 14 days. Ensure all mentors have updated their availability and session limits in the system settings before the cohort launch.
              </p>
              <Link
                to="#"
                className="text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                Update Availability
              </Link>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
