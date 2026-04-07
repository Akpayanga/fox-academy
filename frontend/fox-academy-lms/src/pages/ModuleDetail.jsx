import DashboardNavbar from "../components/DashboardNavbar";
import VideoPlayer from "../components/VideoPlayer";
import ResourceCard from "../components/ResourceCard";
import SyllabusSidebar from "../components/SyllabusSidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ModuleDetail() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <DashboardNavbar />
      
      <main className="mx-auto max-w-[1440px] px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <Link to="/mylearning" className="hover:text-[#F38821]">MY LEARNING</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-300">CONDUCT UX RESEARCH...</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#3341C1]">MODULE 2</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          {/* Main Column */}
          <div className="space-y-10">
            {/* Module Header */}
            <header className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F38821]">USER RESEARCH</span>
              <h1 className="text-4xl font-black subpixel-antialiased tracking-tight text-[#111827]">
                Conduct UX Research and Test Early Concepts
              </h1>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3341C1]">MODULE 2 OF 5</p>
            </header>

            {/* Video Player */}
            <VideoPlayer />

            {/* About this module */}
            <section className="space-y-4 max-w-3xl">
              <h2 className="text-xl font-bold text-[#111827]">About this module</h2>
              <p className="text-sm leading-relaxed text-gray-500 font-medium">
                In this module, we transition from theoretical planning to the execution of primary user research. You will learn the nuances of moderating usability studies, identifying behavioural patterns, and documenting "pains and gains" without introducing researcher bias.
              </p>
            </section>

            {/* Learning Resources */}
            <section className="space-y-6">
              <h3 className="text-[12px] font-black uppercase tracking-widest text-gray-400">LEARNING RESOURCES</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ResourceCard 
                  title="Research Checklist" 
                  type="PDF" 
                  size="1.2 MB" 
                />
                <ResourceCard 
                  title="Interview Template" 
                  type="PDF" 
                  size="0.2 MB" 
                />
              </div>
            </section>

            {/* Module Navigation */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-10 border-t border-gray-100">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-[#F38821] transition-all hover:bg-orange-50 hover:border-[#F38821]">
                <ChevronLeft size={18} />
                Previous Module
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-[#F38821] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-orange-100 transition-all hover:bg-[#e37b1d] hover:shadow-2xl">
                Next Module
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Footer */}
            <footer className="mt-12 flex justify-end gap-8 pb-12">
              {["PRIVACY", "TERMS", "SUPPORT"].map((link) => (
                <button key={link} className="text-[10px] font-black tracking-widest text-[#F38821] hover:underline">
                  {link}
                </button>
              ))}
            </footer>
          </div>

          {/* Sidebar Column */}
          <SyllabusSidebar />
        </div>
      </main>
    </div>
  );
}
