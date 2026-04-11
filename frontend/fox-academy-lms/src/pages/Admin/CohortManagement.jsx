import React from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  Plus,
  Info,
} from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";
import amara from "../../assets/images/amara.jpg"; // Placeholder avatar

export default function CohortManagement() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-16">
      {/* Navbar segment */}
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
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Mentors
            </Link>
            <Link
              to="/control-room/interns"
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Interns
            </Link>
            <Link 
              to="/control-room/cohorts" 
              className="text-[#D97706] border-b-2 border-[#D97706] pb-1"
            >
              Cohorts
            </Link>
            <Link 
              to="/control-room/analytics" 
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Analytics
            </Link>
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
            <h2 className="text-xs font-bold text-gray-400 mb-1">
              Global Administrator
            </h2>
            <h1 className="text-3xl font-bold text-[#111827]">
              Cohort Management
            </h1>
          </div>
          <button className="flex items-center gap-2 rounded-md bg-[#D97706] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#B45309] w-max shadow-sm">
            <Plus size={16} /> Create New
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Main Left Content Area */}
          <div className="flex-1 w-full min-w-0">
            {/* Search and Filters Segment */}
            <div className="mb-6 relative">
              <div className="relative bg-white rounded-md flex items-center border border-gray-300 shadow-sm overflow-hidden">
                <Search size={18} className="text-gray-400 ml-4 border-none" />
                <input
                  type="text"
                  placeholder="Search by cohort name, phase, or status..."
                  className="w-full bg-transparent border-none py-3.5 px-3 text-sm focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <button className="bg-[#D97706] text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                All
              </button>
              <button className="bg-transparent text-gray-600 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 border border-transparent">
                Active
              </button>
              <button className="bg-transparent text-gray-600 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 border border-transparent">
                Completed
              </button>
              <button className="bg-transparent text-gray-600 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 border border-transparent">
                Upcoming
              </button>
            </div>

            {/* Cohorts List */}
            <div className="space-y-4">
              {/* Cohort 1 */}
              <div className="bg-white rounded-md p-6 lg:p-8 shadow-sm flex flex-col lg:flex-row items-center gap-6 justify-between transform transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-center w-full lg:w-auto">
                    <div className="w-48">
                        <h3 className="text-xl font-bold text-[#111827] mb-1">Cohort 1</h3>
                        <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Jan 11- Mar 23, 2025</p>
                    </div>
                    <div className="w-24">
                        <span className="inline-flex rounded-sm bg-[#4CAF50] px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-sm">
                            Completed
                        </span>
                    </div>
                    <div className="flex gap-10 sm:gap-16">
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Interns</p>
                            <p className="text-xl font-black text-[#111827]">420</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Progress</p>
                            <p className="text-xl font-black text-[#111827]">64%</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Mentors</p>
                            <p className="text-xl font-black text-[#111827]">8</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 self-start lg:self-center mt-4 lg:mt-0 w-full lg:w-auto border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#D97706] border-b border-[#D97706] pb-0.5 hover:text-[#B45309] hover:border-[#B45309] transition-colors">
                      View Details
                    </Link>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                      Archive
                    </button>
                </div>
              </div>

              {/* Cohort 2 */}
              <div className="bg-white rounded-md p-6 lg:p-8 shadow-sm flex flex-col lg:flex-row items-center gap-6 justify-between transform transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-center w-full lg:w-auto">
                    <div className="w-48">
                        <h3 className="text-xl font-bold text-[#111827] mb-1">Cohort 2</h3>
                        <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Aug 14- Nov 28, 2025</p>
                    </div>
                    <div className="w-24">
                        <span className="inline-flex rounded-sm bg-[#4CAF50] px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-sm">
                            Completed
                        </span>
                    </div>
                    <div className="flex gap-10 sm:gap-16">
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Interns</p>
                            <p className="text-xl font-black text-[#111827]">500</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Progress</p>
                            <p className="text-xl font-black text-[#111827]">71.2%</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Mentors</p>
                            <p className="text-xl font-black text-[#111827]">9</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 self-start lg:self-center mt-4 lg:mt-0 w-full lg:w-auto border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#D97706] border-b border-[#D97706] pb-0.5 hover:text-[#B45309] hover:border-[#B45309] transition-colors">
                      View Details
                    </Link>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                      Archive
                    </button>
                </div>
              </div>

              {/* Cohort 3 */}
              <div className="bg-white rounded-md p-6 lg:p-8 shadow-sm flex flex-col lg:flex-row items-center gap-6 justify-between transform transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-center w-full lg:w-auto">
                    <div className="w-48">
                        <h3 className="text-xl font-bold text-[#111827] mb-1">Cohort 3</h3>
                        <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Jan 21- Apr 28, 2026</p>
                    </div>
                    <div className="w-24">
                        <span className="inline-flex rounded-sm bg-[#D97706] px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-sm">
                            Active
                        </span>
                    </div>
                    <div className="flex gap-10 sm:gap-16">
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Interns</p>
                            <p className="text-xl font-black text-[#111827]">800</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Progress</p>
                            <p className="text-xl font-black text-[#111827]">82.6%</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Mentors</p>
                            <p className="text-xl font-black text-[#111827]">14</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 self-start lg:self-center mt-4 lg:mt-0 w-full lg:w-auto border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#D97706] border-b border-[#D97706] pb-0.5 hover:text-[#B45309] hover:border-[#B45309] transition-colors">
                      View Details
                    </Link>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                      Archive
                    </button>
                </div>
              </div>

               {/* Cohort 4 */}
               <div className="bg-white rounded-md p-6 lg:p-8 shadow-sm flex flex-col lg:flex-row items-center gap-6 justify-between transform transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-center w-full lg:w-auto">
                    <div className="w-48">
                        <h3 className="text-xl font-bold text-[#111827] mb-1">Cohort 4</h3>
                        <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Jun 19 - Sep 30, 2026</p>
                    </div>
                    <div className="w-24">
                        <span className="inline-flex rounded-sm bg-[#5C6BC0] px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-sm">
                            Upcoming
                        </span>
                    </div>
                    <div className="flex gap-10 sm:gap-16">
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Interns</p>
                            <p className="text-xl font-black text-[#111827]">0</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Capacity</p>
                            <p className="text-xl font-black text-[#111827]">850</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-gray-400 tracking-wider mb-1">Mentors</p>
                            <p className="text-xl font-black text-[#111827]">15</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 self-start lg:self-center mt-4 lg:mt-0 w-full lg:w-auto border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                    <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-[#D97706] border-b border-[#D97706] pb-0.5 hover:text-[#B45309] hover:border-[#B45309] transition-colors">
                      View Details
                    </Link>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                      Archive
                    </button>
                </div>
              </div>


            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[280px] flex-shrink-0 space-y-12">
            
            {/* Cohort Summary Text block */}
            <div>
              <h3 className="text-[10px] font-bold text-[#8A5A4A] uppercase tracking-widest mb-6">
                Cohort Summary
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-xs font-bold text-[#111827] uppercase tracking-widest">Active</p>
                    <p className="text-xs font-bold text-[#111827]">1</p>
                  </div>
                  <div className="h-[3px] w-full bg-gray-100 flex overflow-hidden">
                     <div className="h-full bg-[#D97706]" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-xs font-bold text-[#111827] uppercase tracking-widest">Completed</p>
                    <p className="text-xs font-bold text-[#111827]">2</p>
                  </div>
                  <div className="h-[3px] w-full bg-gray-100 flex overflow-hidden">
                     <div className="h-full bg-[#D97706]" style={{ width: '10%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-xs font-bold text-[#111827] uppercase tracking-widest">Upcoming</p>
                    <p className="text-xs font-bold text-[#111827]">1</p>
                  </div>
                  <div className="h-[3px] w-full bg-gray-100 flex overflow-hidden">
                     <div className="h-full bg-[#FDE68A]" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Cohort Activity Card */}
            <div>
              <h3 className="text-[10px] font-bold text-[#8A5A4A] uppercase tracking-widest mb-6">
                Recent Cohort Activity
              </h3>

              <div className="border-l-2 border-[#111827]">
                
                {/* Event 1 */}
                <div className="relative pl-6 pb-8">
                   <div className="absolute left-[-2px] top-1 bottom-0 w-0.5 bg-[#111827]"></div>
                   <div>
                     <p className="text-sm font-bold text-[#111827] mb-0.5">Cohort 3</p>
                     <p className="text-xs text-gray-500 font-medium mb-1">Phase 2 Assessments started</p>
                     <p className="text-[10px] text-gray-400 italic">2 hours ago</p>
                   </div>
                </div>
                
                {/* Event 2 */}
                <div className="relative pl-6 pb-8">
                   <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-[#111827]"></div>
                   <div>
                     <p className="text-sm font-bold text-[#111827] mb-0.5">Cohort 4</p>
                     <p className="text-xs text-gray-500 font-medium mb-1">New Mentor 'Dr. Arinze' assigned</p>
                     <p className="text-[10px] text-gray-400 italic">Yesterday</p>
                   </div>
                </div>
                
                {/* Event 3 */}
                <div className="relative pl-6 pb-2">
                   <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-[#111827]"></div>
                   <div>
                     <p className="text-sm font-bold text-[#111827] mb-0.5">System Update</p>
                     <p className="text-xs text-gray-500 font-medium mb-1">Pioneer Archive Process initiated</p>
                     <p className="text-[10px] text-gray-400 italic">April 24, 2026</p>
                   </div>
                </div>
              </div>

            </div>

            {/* System Note Card */}
            <div className="bg-[#D97706] rounded-md p-6 text-white shadow-sm mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={16} className="text-white" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest">
                  System Note
                </h3>
              </div>
              <h4 className="font-bold text-sm mb-2">Q4 Enrollment Strategy</h4>
              <p className="text-xs leading-relaxed opacity-95 mb-6 font-medium">
                Cohort 4 enrollment is capped at 850. Ensure all regional leads have approved their intern quotas before May 15th, 2026.
              </p>
              <Link
                to="#"
                className="text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-opacity border-b border-white pb-0.5"
              >
                Read Full Brief
              </Link>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
