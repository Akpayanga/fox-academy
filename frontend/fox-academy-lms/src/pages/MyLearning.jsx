import DashboardNavbar from "../components/DashboardNavbar";
import ModuleCard from "../components/ModuleCard";
import { ChevronDown, Search } from "lucide-react";

export default function MyLearning() {
  const cohortProgress = 18;

  const modules = [
    { moduleNumber: 1, title: "Conduct UX Research and design your initial wireframes", progress: 100, status: "Completed" },
    { moduleNumber: 2, title: "Foundations of UI/UX Design: Visual Hierarchy & Grids", progress: 2, status: "InProgress" },
    { moduleNumber: 3, title: "Conduct UX Research and design your initial wireframes", progress: 0, status: "NotStarted" },
    { moduleNumber: 4, title: "Conduct UX Research and design your initial wireframes", progress: 0, status: "NotStarted" },
    { moduleNumber: 5, title: "Conduct UX Research and design your initial wireframes", progress: 0, status: "NotStarted" },
    { moduleNumber: 6, title: "Conduct UX Research and design your initial wireframes", progress: 0, status: "Locked" },
    { moduleNumber: 7, title: "Conduct UX Research and design your initial wireframes", progress: 0, status: "Locked" },
    { moduleNumber: 8, title: "Conduct UX Research and design your initial wireframes", progress: 0, status: "Locked" },
    { moduleNumber: 9, title: "Conduct UX Research and design your initial wireframes", progress: 0, status: "Locked" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <DashboardNavbar />
      
      <main className="mx-auto max-w-[1440px] px-6 py-12">
        {/* Header Section */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-[#111827]">My Learning</h1>
            <p className="text-lg text-gray-400">Trueminds Cohort — Your assigned curriculum for Phase 1</p>
          </div>

          <div className="flex h-16 w-full max-w-[320px] items-center justify-between rounded-xl border border-gray-100 bg-white px-6 shadow-sm">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">COHORT PROGRESS</p>
              <div className="h-1.5 w-40 rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-indigo-600 transition-all duration-1000" style={{ width: `${cohortProgress}%` }} />
              </div>
            </div>
            <span className="text-2xl font-bold text-indigo-600">{cohortProgress}%</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {["All Courses", "In Progress", "Not Started", "Completed", "Locked"].map((filter, idx) => (
              <button 
                key={idx} 
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${idx === 0 ? "bg-[#3341C1] text-white shadow-lg shadow-indigo-100" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 text-xs font-bold text-[#3341C1]">
            Sort by: <span className="underline">Week Order</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, idx) => (
            <ModuleCard key={idx} {...module} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-100 pt-12 pb-8">
           <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-end">
              {["PRIVACY", "TERMS", "SUPPORT"].map((link) => (
                <button key={link} className="text-xs font-black tracking-widest text-[#F38821] hover:underline">
                  {link}
                </button>
              ))}
           </div>
        </footer>
      </main>
    </div>
  );
}