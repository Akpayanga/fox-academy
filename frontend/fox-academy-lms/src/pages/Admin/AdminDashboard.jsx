import React from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  ArrowRight,
  Plus,
  Info,
  GraduationCap,
  Users,
  CheckSquare,
  Layers,
} from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";
import amara from "../../assets/images/amara.jpg"; // Placeholder for Bola Aseyan

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-16">
      {/* Navbar segment mimicking the specific Admin Navbar */}
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
              className="text-[#D97706] border-b-2 border-[#D97706] pb-1"
            >
              Dashboard
            </Link>
            <Link to="/control-room/mentors" className="hover:text-gray-800 pb-1">Mentors</Link>
            <Link to="/control-room/interns" className="hover:text-gray-800 pb-1">Interns</Link>
            <Link to="/control-room/cohorts" className="hover:text-gray-800 pb-1">Cohorts</Link>
            <Link to="/control-room/analytics" className="hover:text-gray-800 pb-1">Analytics</Link>
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

      {/* Dashboard Main View */}
      <main className="mx-auto max-w-[1400px] px-6 pt-10">
        <h1 className="text-3xl font-bold text-[#111827] mb-8">
          Admin Overview
        </h1>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Main Left Content Area */}
          <div className="flex-1 space-y-8 min-w-0">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Stat 1 */}
              <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent hover:border-[#FDE68A] transition-colors">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Total Interns
                </p>
                <p className="text-4xl font-black text-[#D97706] mb-1 leading-none">
                  450
                </p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  +14 This Week
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent hover:border-[#FDE68A] transition-colors">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Total Mentors
                </p>
                <p className="text-4xl font-black text-[#D97706] mb-1 leading-none">
                  30
                </p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Across 8 Fields
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent hover:border-[#FDE68A] transition-colors">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Cohort Status
                </p>
                <p className="text-2xl font-black text-[#D97706] mb-[11px] leading-tight mt-1.5">
                  Cohort 3
                </p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Active
                </p>
              </div>

              {/* Stat 4 */}
              <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent hover:border-[#FDE68A] transition-colors">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Course Completion Rate
                </p>
                <p className="text-4xl font-black text-[#D97706] mb-1 leading-none">
                  64%
                </p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Target: 75%
                </p>
              </div>
            </div>

            {/* Intern Progress Snapshot */}
            <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-lg font-bold text-[#111827]">
                  Intern Progress Snapshot
                </h2>
                <Link
                  to="/control-room/interns"
                  className="text-xs font-bold text-[#111827] uppercase tracking-wider hover:text-[#D97706] flex items-center gap-1 border-b border-[#111827] pb-0.5"
                >
                  View All Interns <ArrowRight size={14} />
                </Link>
              </div>

              {/* Progress Bar Component */}
              <div className="h-8 flex w-full mb-6 relative gap-[2px]">
                <div
                  className="h-full bg-[#A7D7A9]" // Light Green Target
                  style={{ width: "65%" }}
                ></div>
                <div
                  className="h-full bg-[#E58999]" // Soft Red
                  style={{ width: "20%" }}
                ></div>
                <div
                  className="h-full bg-[#9DA8BA]" // grayish blue
                  style={{ width: "15%" }}
                ></div>
              </div>

              {/* Progress Labels */}
              <div className="flex gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-[#A7D7A9]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      On Track
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#111827] pl-4">321</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-[#E58999]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      At Risk
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#111827] pl-4">89</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-[#9DA8BA]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Inactive
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#111827] pl-4">49</p>
                </div>
              </div>
            </div>

            {/* Mentor Overview Section */}
            <div>
              <div className="flex justify-between items-end mb-4 px-1">
                <h2 className="text-lg font-bold text-[#111827]">
                  Mentor Overview
                </h2>
                <Link
                  to="/control-room/mentors"
                  className="text-xs font-bold text-[#D97706] uppercase tracking-wider hover:text-[#B45309] flex items-center gap-1 border-b border-[#D97706] pb-0.5"
                >
                  Manage Mentors <ArrowRight size={14} />
                </Link>
              </div>

              {/* Table wrapper */}
              <div className="bg-white border border-gray-100 rounded-md overflow-hidden mb-4 shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#FFF8EE] border-b border-gray-100">
                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                          Mentor
                        </th>
                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                          Discipline
                        </th>
                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold text-center">
                          Assigned Interns
                        </th>
                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                          Last Active
                        </th>
                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                          Status
                        </th>
                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-medium">
                      {/* Row 1 */}
                      <tr className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="px-6 py-4 text-[#111827] font-bold">
                          Dr. Funke Adeyemi
                        </td>
                        <td className="px-6 py-4 text-gray-500">Product Design</td>
                        <td className="px-6 py-4 text-gray-500 text-center">150</td>
                        <td className="px-6 py-4 text-gray-500"></td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-white">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="#" className="text-[#D97706] hover:underline font-bold text-xs">View</Link>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="px-6 py-4 text-[#111827] font-bold">
                          Elena Njoku
                        </td>
                        <td className="px-6 py-4 text-gray-500">Front-End</td>
                        <td className="px-6 py-4 text-gray-500 text-center">72</td>
                        <td className="px-6 py-4 text-gray-500">Just now</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-white">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="#" className="text-[#D97706] hover:underline font-bold text-xs">View</Link>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="px-6 py-4 text-[#111827] font-bold">
                          Alex Akuzu
                        </td>
                        <td className="px-6 py-4 text-gray-500">Back-End</td>
                        <td className="px-6 py-4 text-gray-500 text-center">70</td>
                        <td className="px-6 py-4 text-gray-500">1d ago</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-sm bg-gray-300 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-gray-600">
                            Inactive
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="#" className="text-[#D97706] hover:underline font-bold text-xs">View</Link>
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-[#111827] font-bold">
                          Sarah Ajileti
                        </td>
                        <td className="px-6 py-4 text-gray-500">Graphics Design</td>
                        <td className="px-6 py-4 text-gray-500 text-center">45</td>
                        <td className="px-6 py-4 text-gray-500">4h ago</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-white">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="#" className="text-[#D97706] hover:underline font-bold text-xs">View</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Link to="/control-room/mentors/add" className="flex items-center gap-2 rounded-md bg-[#D97706] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#B45309] w-max">
                <Plus size={16} /> Add New Mentor
              </Link>
            </div>

            {/* Cohort Activity Feed */}
            <div className="pt-4">
              <div className="flex justify-between items-end mb-4 px-1">
                <h2 className="text-lg font-bold text-[#111827]">
                  Cohort Activity Feed
                </h2>
                <Link
                  to="#"
                  className="text-xs font-bold text-[#111827] uppercase tracking-wider hover:text-[#D97706] flex items-center gap-1 border-b border-[#111827] pb-0.5"
                >
                  View All <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-white rounded-md border border-gray-100 shadow-sm flex flex-col">
                {/* Event 1 */}
                <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#D97706] text-white">
                    <GraduationCap size={20} />
                  </div>
                  <p className="flex-1 text-sm text-[#111827]">
                    Cohort 3 updated curriculum for{" "}
                    <span className="font-bold text-[#D97706]">
                      Phase 1: Foundations.
                    </span>
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    10:45 AM
                  </p>
                </div>

                {/* Event 2 */}
                <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#D97706] text-white">
                    <Users size={20} />
                  </div>
                  <p className="flex-1 text-sm text-[#111827]">
                    <span className="font-bold text-[#D97706]">
                      12 new interns
                    </span>{" "}
                    verified for upcoming Cohort 4 launch.
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    09:12 AM
                  </p>
                </div>

                {/* Event 3 */}
                <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#D97706] text-white">
                    <CheckSquare size={20} />
                  </div>
                  <p className="flex-1 text-sm text-[#111827]">
                    Mentor{" "}
                    <span className="font-bold text-[#D97706]">
                      Elena Njoku
                    </span>{" "}
                    approved 5 capstone proposals.
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    08:12 AM
                  </p>
                </div>

                {/* Event 4 */}
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#D97706] text-white">
                    <CheckSquare size={20} />
                  </div>
                  <p className="flex-1 text-sm text-[#111827]">
                    <span className="font-bold">System Alert:</span> Completion
                    rate drop detected in Design track.
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    YESTERDAY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[320px] flex-shrink-0 space-y-6">
            {/* Quick Action */}
            <div className="mb-8">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Quick Action
              </h3>
              <button className="w-full flex items-center justify-center gap-2 rounded-md border border-[#D97706] bg-white py-3.5 text-sm font-bold text-[#D97706] transition hover:bg-[#FFF8EE]">
                <Layers size={16} /> Create New Cohort
              </button>
            </div>

            {/* Current Cohort Tracker */}
            <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                Current Cohort
              </h3>

              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-[#111827] leading-none mb-1">
                    Cohort 3
                  </h4>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Phase 1: Fundamentals
                  </p>
                </div>
                <span className="text-sm font-black text-[#111827]">64%</span>
              </div>

              <div className="h-2 w-full bg-gray-100 rounded-full mt-4 mb-4 overflow-hidden">
                <div
                  className="h-full bg-[#4F46E5] rounded-full"
                  style={{ width: "64%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center mb-6 text-[9px] font-bold text-[#111827] uppercase tracking-widest border-b border-gray-100 pb-4">
                <span>Started: May 12</span>
                <span>Ends: Sep 20</span>
              </div>

              <Link
                to="#"
                className="text-xs font-bold text-[#D97706] uppercase tracking-wider hover:text-[#B45309] flex items-center gap-1 border-b border-[#D97706] pb-0.5 w-max"
              >
                View Cohort <ArrowRight size={14} />
              </Link>
            </div>

            {/* Admin Notice Card */}
            <div className="bg-[#D97706] rounded-md p-6 text-white shadow-sm mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={16} className="text-white" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest">
                  Admin Notice
                </h3>
              </div>
              <p className="text-xs leading-relaxed opacity-90 mb-6 font-medium">
                You are currently logged in with{" "}
                <strong className="font-bold">Global Privileges</strong>. All
                actions are logged for compliance. Ensure sensitive intern data
                is handled according to the Institutional Privacy Policy.
              </p>
              <Link
                to="#"
                className="text-xs font-bold uppercase tracking-wider hover:opacity-80 flex items-center gap-1 border-b border-white pb-0.5 w-max"
              >
                Privacy Policy <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
