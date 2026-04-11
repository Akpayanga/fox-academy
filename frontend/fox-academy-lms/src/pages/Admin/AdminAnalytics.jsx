import React from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  MessageSquare,
  PlayCircle,
  CheckCircle,
  Users,
} from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";
import amara from "../../assets/images/amara.jpg";

export default function AdminAnalytics() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-16 flex flex-col">
      {/* Navbar segment */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-10 w-full">
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-3">
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
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Cohorts
            </Link>
            <Link 
              to="/control-room/analytics" 
              className="text-[#D97706] border-b-2 border-[#D97706] pb-1"
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

      {/* Main Grid Wrapper */}
      <div className="flex-1 w-full max-w-[1500px] mx-auto flex flex-col xl:flex-row">
        
        {/* Left Main Dashboard Area */}
        <main className="flex-1 px-6 pt-8 pb-12 w-full min-w-0">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#111827]">Analytics</h1>
                <button className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50">
                    Cohort 3 <ChevronDown size={14} />
                </button>
            </div>

            {/* Top 4 Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-[#FFF8EE] rounded-lg p-5 border border-transparent shadow-sm">
                    <p className="text-[10px] font-bold text-gray-500 mb-2">Total Interns</p>
                    <p className="text-3xl font-black text-[#D97706]">800</p>
                </div>
                <div className="bg-[#FFF8EE] rounded-lg p-5 border border-transparent shadow-sm">
                    <p className="text-[10px] font-bold text-gray-500 mb-2">Completion Rate</p>
                    <p className="text-3xl font-black text-[#D97706]">71.6%</p>
                </div>
                <div className="bg-[#FFF8EE] rounded-lg p-5 border border-transparent shadow-sm">
                    <p className="text-[10px] font-bold text-gray-500 mb-2">Total Mentors</p>
                    <p className="text-3xl font-black text-[#D97706]">14</p>
                </div>
                <div className="bg-[#FFF8EE] rounded-lg p-5 border border-transparent shadow-sm">
                    <p className="text-[10px] font-bold text-gray-500 mb-2">Progress</p>
                    <p className="text-3xl font-black text-[#D97706]">82.6%</p>
                </div>
            </div>

            {/* Intern Performance */}
            <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-[#111827]">Intern Performance</h2>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Vitals Check</span>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    {/* Progress Bar Container */}
                    <div className="mb-4">
                        <div className="h-4 w-full flex gap-1 rounded overflow-hidden mb-3">
                            <div className="h-full bg-[#A7D7A9]" style={{width: '72%'}}></div>
                            <div className="h-full bg-[#E58999]" style={{width: '18%'}}></div>
                            <div className="h-full bg-[#D1D5DB]" style={{width: '10%'}}></div>
                        </div>
                        <div className="flex gap-6 text-[10px] font-bold text-gray-500 uppercase">
                            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#A7D7A9]"></span> On Track (72%)</div>
                            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#E58999]"></span> At Risk (18%)</div>
                            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#D1D5DB]"></span> Inactive (10%)</div>
                        </div>
                    </div>
                    {/* Inner Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-gray-50">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Submission Rate</p>
                            <p className="text-xl font-black text-[#111827]">94.2%</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Avg. Grade</p>
                            <p className="text-xl font-black text-[#111827]">A- <span className="text-sm text-gray-400 font-bold">(78%)</span></p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Avg. Watch Time</p>
                            <p className="text-xl font-black text-[#111827]">2.4 hrs</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Engagement</p>
                            <p className="text-xl font-black text-[#111827]">High</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentor Perf & Engagement Split */}
            <div className="flex flex-col lg:flex-row gap-8 mb-10 items-stretch">
                {/* Mentor Performance */}
                <div className="lg:w-[55%] flex flex-col">
                    <h2 className="text-lg font-bold text-[#111827] mb-4">Mentor Performance</h2>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 flex-1 overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#FFF8EE] border-b border-gray-50">
                                    <th className="px-5 py-3 text-[10px] uppercase font-bold text-[#D97706]">Mentor Name</th>
                                    <th className="px-5 py-3 text-[10px] uppercase font-bold text-[#D97706]">Cohorts</th>
                                    <th className="px-5 py-3 text-[10px] uppercase font-bold text-[#D97706]">Activity Score</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-bold text-[#111827]">
                                <tr className="border-b border-gray-50">
                                    <td className="px-5 py-4 font-bold">Dr. Funke Adeyemi</td>
                                    <td className="px-5 py-4 text-gray-500">C1, C3</td>
                                    <td className="px-5 py-4">
                                        <div className="h-[3px] w-24 bg-gray-100 rounded-full"><div className="h-full bg-[#D97706]" style={{width: '90%'}}></div></div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="px-5 py-4 font-bold">Kunle Ojo</td>
                                    <td className="px-5 py-4 text-gray-500">C2</td>
                                    <td className="px-5 py-4">
                                        <div className="h-[3px] w-24 bg-gray-100 rounded-full"><div className="h-full bg-[#D97706]" style={{width: '75%'}}></div></div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="px-5 py-4 font-bold">Chioma Eze</td>
                                    <td className="px-5 py-4 text-gray-500">C1, C3</td>
                                    <td className="px-5 py-4">
                                        <div className="h-[3px] w-24 bg-gray-100 rounded-full"><div className="h-full bg-[#D97706]" style={{width: '85%'}}></div></div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="px-5 py-4 font-bold">Ibrahim Sule</td>
                                    <td className="px-5 py-4 text-gray-500">C3</td>
                                    <td className="px-5 py-4">
                                        <div className="h-[3px] w-24 bg-gray-100 rounded-full"><div className="h-full bg-[#D97706]" style={{width: '60%'}}></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-4 font-bold">Linda Osifo</td>
                                    <td className="px-5 py-4 text-gray-500">C1</td>
                                    <td className="px-5 py-4">
                                        <div className="h-[3px] w-24 bg-gray-100 rounded-full"><div className="h-full bg-[#D97706]" style={{width: '85%'}}></div></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Engagement */}
                <div className="flex-1 flex flex-col">
                    <h2 className="text-lg font-bold text-[#111827] mb-4">Engagement</h2>
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col justify-center">
                            <MessageSquare size={18} className="text-gray-400 mb-2"/>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Forum Posts</p>
                            <p className="text-2xl font-black text-[#111827]">740</p>
                        </div>
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col justify-center">
                            <PlayCircle size={18} className="text-gray-400 mb-2"/>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Video Watchtime</p>
                            <p className="text-2xl font-black text-[#111827]">4,822h</p>
                        </div>
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col justify-center">
                            <CheckCircle size={18} className="text-gray-400 mb-2"/>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Quiz Attempts</p>
                            <p className="text-2xl font-black text-[#111827]">4,105</p>
                        </div>
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col justify-center">
                            <Users size={18} className="text-gray-400 mb-2"/>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Submitted Tasks</p>
                            <p className="text-2xl font-black text-[#111827]">3,512</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cohort Comparison */}
            <div className="mb-10">
                <h2 className="text-lg font-bold text-[#111827] mb-4">Cohort Comparison</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
                     <table className="w-full text-left min-w-[700px]">
                            <thead>
                                <tr className="bg-[#FFF8EE] border-b border-gray-50">
                                    <th className="px-6 py-4 text-[10px] uppercase font-bold text-[#D97706]">Cohort</th>
                                    <th className="px-6 py-4 text-[10px] uppercase font-bold text-[#D97706]">Total Interns</th>
                                    <th className="px-6 py-4 text-[10px] uppercase font-bold text-[#D97706]">Avg Grade</th>
                                    <th className="px-6 py-4 text-[10px] uppercase font-bold text-[#D97706]">Retention Rate</th>
                                    <th className="px-6 py-4 text-[10px] uppercase font-bold text-[#D97706]">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-bold text-[#111827]">
                                <tr className="border-b border-gray-50">
                                    <td className="px-6 py-5">Cohort 1</td>
                                    <td className="px-6 py-5 text-gray-600">420</td>
                                    <td className="px-6 py-5 text-gray-600">82%</td>
                                    <td className="px-6 py-5 text-gray-600">81%</td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex rounded-full border border-[#4CAF50] text-[#4CAF50] px-3 py-1 text-[9px] uppercase tracking-widest font-bold">Completed</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="px-6 py-5">Cohort 2</td>
                                    <td className="px-6 py-5 text-gray-600">500</td>
                                    <td className="px-6 py-5 text-gray-600">79%</td>
                                    <td className="px-6 py-5 text-gray-600">88%</td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex rounded-full border border-[#4CAF50] text-[#4CAF50] px-3 py-1 text-[9px] uppercase tracking-widest font-bold">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5">Cohort 3 (Active)</td>
                                    <td className="px-6 py-5 text-gray-600">800</td>
                                    <td className="px-6 py-5 text-gray-600">78%</td>
                                    <td className="px-6 py-5 text-gray-600">92%</td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex rounded-full border border-[#D97706] text-[#D97706] px-3 py-1 text-[9px] uppercase tracking-widest font-bold bg-[#FFF8EE]">In Progress</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>

            {/* Bottom Split Row (Trends & Grades) */}
            <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Submission Trends */}
                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-[#111827] mb-6">Submission Trends</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-bold text-gray-400 w-8">Wk 01</span>
                            <div className="h-4 flex-1 bg-[#FDE68A] flex overflow-hidden">
                                <div className="h-full bg-[#B48464]" style={{width: '95%'}}></div>
                            </div>
                            <span className="text-[10px] font-bold text-[#111827]">95%</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-bold text-gray-400 w-8">Wk 02</span>
                            <div className="h-4 flex-1 bg-[#FDE68A] flex overflow-hidden">
                                <div className="h-full bg-[#966C52]" style={{width: '88%'}}></div>
                            </div>
                            <span className="text-[10px] font-bold text-[#111827]">88%</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-bold text-gray-400 w-8">Wk 03</span>
                            <div className="h-4 flex-1 bg-[#FDE68A] flex overflow-hidden">
                                <div className="h-full bg-[#70503D]" style={{width: '72%'}}></div>
                            </div>
                            <span className="text-[10px] font-bold text-[#111827]">72%</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-bold text-gray-400 w-8">Wk 04</span>
                            <div className="h-4 flex-1 bg-[#FDE68A] flex overflow-hidden">
                                <div className="h-full bg-[#4A342B]" style={{width: '65%'}}></div>
                            </div>
                            <span className="text-[10px] font-bold text-[#111827]">65%</span>
                        </div>
                    </div>
                </div>

                {/* Grade Distribution */}
                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-[#111827] mb-8">Grade Distribution</h3>
                    
                    {/* Segmented Bar */}
                    <div className="h-8 w-full flex mb-6">
                        <div className="h-full bg-[#834A20] flex items-center justify-center text-white text-[10px] font-bold" style={{width: '15%'}}>A</div>
                        <div className="h-full bg-[#A35921] flex items-center justify-center text-white text-[10px] font-bold" style={{width: '45%'}}>B</div>
                        <div className="h-full bg-[#C16D25] flex items-center justify-center text-white text-[10px] font-bold" style={{width: '25%'}}>C</div>
                        <div className="h-full bg-[#D97706] flex items-center justify-center text-white text-[10px] font-bold" style={{width: '15%'}}>D</div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[10px] font-bold text-gray-500 uppercase">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-[#834A20]"></span> 90-100 (15%)</div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-[#A35921]"></span> 75-89 (45%)</div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-[#C16D25]"></span> 60-74 (25%)</div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-[#D97706]"></span> 50-59 (15%)</div>
                    </div>
                </div>
            </div>
        </main>

        {/* Right Sidebar Wrapper (A distinct background panel) */}
        <aside className="w-full xl:w-[300px] flex-shrink-0 bg-[#F4F4F5] border-l border-gray-200 p-8 min-h-screen">
            
            {/* Top Avatar Profile Match */}
            <div className="flex items-center gap-3 mb-10 mt-2">
                <div className="h-10 w-10 bg-black text-white rounded flex items-center justify-center font-bold text-sm">
                    BA
                </div>
                <div>
                   <p className="text-sm font-bold text-[#111827]">Bola Aseyan</p>
                   <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Global Admin</p>
                </div>
            </div>

            {/* Analytics Summary */}
            <div className="mb-10">
                <h3 className="text-xs font-bold text-[#8A5A4A] mb-5">Analytics Summary</h3>
                <div className="space-y-4">
                    <div>
                        <p className="text-[10px] font-bold text-[#111827] uppercase tracking-widest mb-1.5">Success Rate</p>
                        <div className="h-[2px] w-full bg-gray-200">
                            <div className="h-full bg-[#D97706]" style={{width: '85%'}}></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Drop-off</p>
                        <div className="flex items-center gap-2">
                            <span className="w-[8px] h-[3px] bg-[#D97706] rounded-full inline-block"></span>
                            <span className="text-xs font-bold">4%</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                           <p className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Certification</p>
                           <span className="text-xs font-bold">73%</span>
                        </div>
                        <div className="h-[2px] w-full bg-gray-200">
                            <div className="h-full bg-[#D97706]" style={{width: '73%'}}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-10">
                <h3 className="text-xs font-bold text-[#8A5A4A] mb-5">Recent Activity</h3>
                <div className="border-l border-gray-300 pl-4 py-1 space-y-6">
                    <div className="relative">
                        <span className="absolute -left-[20px] top-1 h-2 w-2 rounded-full bg-[#8A5A4A]"></span>
                        <p className="text-xs font-bold text-[#111827] mb-0.5">Cohort 2 grade summary generated</p>
                        <p className="text-[9px] font-medium text-gray-400 italic">2 hours ago</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[20px] top-1 h-2 w-2 rounded-full bg-[#8A5A4A]"></span>
                        <p className="text-xs font-bold text-[#111827] mb-0.5">New mentor Sarah Amupitan assigned</p>
                        <p className="text-[9px] font-medium text-gray-400 italic">Yesterday</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[20px] top-1 h-2 w-2 rounded-full bg-[#8A5A4A]"></span>
                        <p className="text-xs font-bold text-[#111827] mb-0.5">System-wide performance backup</p>
                        <p className="text-[9px] font-medium text-gray-400 italic">Jan 12, 2024</p>
                    </div>
                </div>
            </div>

            {/* Report Notice Box */}
            <div className="bg-[#D97706] rounded-md p-5 text-white shadow-sm">
                <p className="text-xs font-medium leading-relaxed opacity-95 mb-4">
                    Weekly performance reports are now available for all active cohorts in the regional hub.
                </p>
                <button className="w-full bg-[#F3F4F6] text-[#D97706] rounded py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Export Report
                </button>
            </div>

        </aside>

      </div>
    </div>
  );
}
