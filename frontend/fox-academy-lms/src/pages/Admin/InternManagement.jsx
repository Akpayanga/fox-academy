import React from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  Download,
  Info,
  ChevronDown,
  Trash2,
} from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";
import amara from "../../assets/images/amara.jpg"; // Placeholder avatar

export default function InternManagement() {
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
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Mentors
            </Link>
            <Link
              to="/control-room/applications"
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Applications
            </Link>
            <Link
              to="/control-room/interns"
              className="text-[#D97706] border-b-2 border-[#D97706] pb-1"
            >
              Interns
            </Link>
            <Link to="/control-room/cohorts" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">
              Cohorts
            </Link>
            <Link to="/control-room/analytics" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">
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
            <h1 className="text-3xl font-bold text-[#111827] mb-1">
              All Interns
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Managing the current cohort of 42 active learners.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-md border border-[#FDE68A] bg-transparent hover:bg-[#FFF8EE] px-4 py-2.5 text-sm font-bold text-[#D97706] transition w-max shadow-sm">
            <Download size={16} /> Export Report
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111827] mb-2">
              Total Interns
            </p>
            <p className="text-4xl font-black text-[#D97706] leading-none">
              450
            </p>
          </div>
          <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111827] mb-2">
              On Track
            </p>
            <p className="text-4xl font-black text-[#D97706] leading-none">
              312
            </p>
          </div>
          <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111827] mb-2">
              At Risk
            </p>
            <p className="text-4xl font-black text-[#D97706] leading-none">
              89
            </p>
          </div>
          <div className="bg-[#FFF8EE] rounded-md p-5 border border-transparent shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111827] mb-2">
              Inactive
            </p>
            <p className="text-4xl font-black text-[#D97706] leading-none">
              49
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* Main Left Content Area */}
          <div className="flex-1 w-full min-w-0 bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
            
            {/* Toolbar (Search & Filters) */}
            <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between bg-white">
              <div className="relative w-full md:max-w-md">
                <Search size={16} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  className="w-full bg-gray-50 border border-gray-200 rounded py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#D97706] text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-32 border border-gray-200 rounded bg-white">
                  <select className="w-full appearance-none bg-transparent py-2.5 pl-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none">
                    <option>Discipline</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                <div className="relative flex-1 md:w-32 border border-gray-200 rounded bg-white">
                  <select className="w-full appearance-none bg-transparent py-2.5 pl-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none">
                    <option>Mentor</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                <div className="relative flex-1 md:w-32 border border-gray-200 rounded bg-white">
                  <select className="w-full appearance-none bg-transparent py-2.5 pl-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none">
                    <option>Status</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#FFF8EE] border-b border-gray-100">
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Intern
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Discipline
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Mentor
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Phase 1 Progress
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Last Active
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Status
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {/* Row 1 */}
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Amara Obi</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-001</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">UX Design</td>
                    <td className="px-5 py-4 text-gray-600">Funke<br/>Adeyemi</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">85%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">2h ago</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        On Track
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Kofi Mensah</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-002</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Fullstack Eng</td>
                    <td className="px-5 py-4 text-gray-600">David<br/>Ibunge</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '42%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">42%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">5h ago</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#E53935] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        At Risk
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Selena Macaulay</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-003</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Project<br/>Management</td>
                    <td className="px-5 py-4 text-gray-600">Linda<br/>Osifo</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">92%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Yesterday</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        On Track
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Marcus Ihekuna</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-004</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Backend Dev</td>
                    <td className="px-5 py-4 text-gray-600">Ibrahim<br/>Sule</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">78%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Yesterday</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        On Track
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Ewa Adekanbi</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-005</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">UI Design</td>
                    <td className="px-5 py-4 text-gray-600">Kunle<br/>Ojo</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">65%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Yesterday</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#F59E0B] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        Warning
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Uko Courage</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-006</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Frontend Dev</td>
                    <td className="px-5 py-4 text-gray-600">Chioma<br/>Eze</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '88%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">88%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Yesterday</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        On Track
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>

                  {/* Row 7 */}
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Victor Eze</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-007</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">DevOps</td>
                    <td className="px-5 py-4 text-gray-600">Famakinde<br/>Oso</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '30%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">30%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Yesterday</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#E53935] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        At Risk
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>

                  {/* Row 8 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={amara} alt="" className="h-10 w-10 rounded-md object-cover flex-shrink-0" />
                        <div>
                          <p className="text-[#111827] font-bold leading-tight">Abigail Banks</p>
                          <p className="text-[10px] italic text-gray-400">#FA-2024-008</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">UX Research</td>
                    <td className="px-5 py-4 text-gray-600">Stella<br/>Agu</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4F46E5]" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-[#111827] font-bold text-xs">95%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">Yesterday</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-sm bg-[#4CAF50] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                        On Track
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Link to="#" className="text-[#D97706] hover:underline font-medium text-xs">Profile</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-100 bg-white">
               <p className="text-xs text-[#D97706] font-medium">
                  Showing 1 to 8 of 124 interns
               </p>
               <div className="flex items-center gap-1">
                  <button className="px-3 py-1 text-xs font-bold text-[#111827] hover:bg-gray-50 border border-transparent rounded">Previous</button>
                  <button className="h-7 w-7 flex items-center justify-center text-xs font-bold text-white bg-[#D97706] rounded shadow-sm">1</button>
                  <button className="h-7 w-7 flex items-center justify-center text-xs font-bold text-[#111827] hover:bg-gray-50 rounded">2</button>
                  <button className="h-7 w-7 flex items-center justify-center text-xs font-bold text-[#111827] hover:bg-gray-50 rounded">3</button>
                  <button className="px-3 py-1 text-xs font-bold text-[#111827] hover:bg-gray-50 border border-transparent rounded">Next</button>
               </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[320px] flex-shrink-0 space-y-6">
            
            {/* Progress Breakdown Card */}
            <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                Progress Breakdown
              </h3>

              <div className="h-4 w-full flex gap-[1px] mb-6">
                 <div className="h-full bg-[#4CAF50] rounded-l-sm" style={{ width: '65%' }}></div>
                 <div className="h-full bg-[#818CF8]" style={{ width: '25%' }}></div>
                 <div className="h-full bg-[#D1D5DB] rounded-r-sm" style={{ width: '10%' }}></div>
              </div>

              <div className="space-y-3">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-sm bg-[#4CAF50]"></span>
                       <span className="text-xs font-medium text-gray-700">Phase 1 (Learning Mode)</span>
                    </div>
                    <span className="text-xs font-bold text-[#111827]">65%</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-sm bg-[#818CF8]"></span>
                       <span className="text-xs font-medium text-gray-700">Phase 2 (Capstone Project)</span>
                    </div>
                    <span className="text-xs font-bold text-[#111827]">25%</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-sm bg-[#D1D5DB]"></span>
                       <span className="text-xs font-medium text-gray-700">Presentation</span>
                    </div>
                    <span className="text-xs font-bold text-[#111827]">10%</span>
                 </div>
              </div>
            </div>

            {/* By Discipline Card */}
            <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                By Discipline
              </h3>

              <div className="space-y-5">
                {/* Discipline 1 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-[#111827]">Product Design</p>
                    <p className="text-xs font-medium text-gray-500">24 Interns</p>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full flex overflow-hidden">
                     <div className="h-full bg-[#D97706]" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                {/* Discipline 2 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-[#111827]">Software Eng.</p>
                    <p className="text-xs font-medium text-gray-500">42 Interns</p>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full flex overflow-hidden">
                     <div className="h-full bg-[#D97706]" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Discipline 3 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-[#111827]">Data Analytics</p>
                    <p className="text-xs font-medium text-gray-500">18 Interns</p>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full flex overflow-hidden">
                     <div className="h-full bg-[#D97706]" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                 <button className="w-full text-left px-5 py-3 rounded border border-[#FDE68A] text-sm font-bold text-[#D97706] hover:bg-[#FFF8EE] transition shadow-sm">
                   Assign New Mentor
                 </button>
                 <button className="w-full flex items-center justify-between px-5 py-3 rounded border border-red-200 text-sm font-bold text-red-600 hover:bg-red-50 transition shadow-sm bg-white top">
                   Archive Cohort
                   <Trash2 size={16} />
                 </button>
              </div>
            </div>

            {/* Global Note Card */}
            <div className="bg-[#D97706] rounded-md p-6 text-white shadow-sm mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={16} className="text-white" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest">
                  Global Note
                </h3>
              </div>
              <p className="text-xs leading-relaxed opacity-95 mb-6 font-medium pr-2">
                The Q1 Performance review cycle begins in 14 days. Ensure all "Phase 1" progress bars are finalized before the system lock on Friday evening.
              </p>
              <Link
                to="#"
                className="text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                Review Protocol
              </Link>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
