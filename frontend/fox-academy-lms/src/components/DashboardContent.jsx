import success_graph from "../assets/images/success_graph.png";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function WelcomeBanner({ name, progress }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="z-10 flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">
            Good morning, {name}! <span className="inline-block">👋</span>
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-gray-500">
            You've completed <span className="font-bold text-[#111827]">{progress}%</span> of your Phase 1 learning journey. Keep the momentum going!
          </p>
          
          <div className="space-y-2">
             <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#F38821]">
                <span>PHASE 1 PROGRESS</span>
                <span>{progress}%</span>
             </div>
             <div className="h-2 w-full max-w-[320px] rounded-full bg-gray-100">
               <div 
                 className="h-full rounded-full bg-[#F38821] shadow-sm shadow-orange-200 transition-all duration-1000" 
                 style={{ width: `${progress}%` }}
               />
             </div>
          </div>

          <Link 
            to="/mylearning/module"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#F38821] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#e37b1d] hover:shadow-lg hover:shadow-orange-100"
          >
            Continue Learning <ChevronRight size={18} />
          </Link>
        </div>

        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl md:h-56 md:w-80">
          <img 
            src={success_graph} 
            alt="Hero" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function CapstoneProjectCard() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-orange-50/30 p-8 shadow-sm">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-lg bg-[#F38821] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            CAPSTONE PROJECT
          </span>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#111827]">Fox Academy LMS Redesign</h2>
            <p className="text-sm leading-relaxed text-gray-500">
              Redesign the internal learning experience focusing on mentorship accessibility and student engagement metrics.
            </p>
          </div>

          <div className="space-y-2">
             <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>PHASE 1 REQUIREMENT</span>
                <span className="text-[#111827]">18/100%</span>
             </div>
             <div className="h-2 w-full rounded-full bg-gray-100">
               <div 
                 className="h-full rounded-full bg-[#111827] transition-all" 
                 style={{ width: `18%` }}
               />
             </div>
          </div>

          <button disabled className="mt-4 flex items-center gap-2 rounded-xl bg-gray-200 px-6 py-3 text-sm font-bold text-gray-400 cursor-not-allowed">
            View Project Details <ChevronRight size={18} className="opacity-50" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F38821] p-6 text-center text-white">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em]">YOUR TEAM</p>
          
          <div className="mb-6 flex -space-x-3 overflow-hidden">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#F38821] bg-white/20 backdrop-blur-sm">
                 <span className="text-sm font-bold">?</span>
               </div>
             ))}
          </div>

          <p className="max-w-[200px] text-xs font-medium leading-relaxed opacity-80">
            Your teammates will be revealed when you complete Phase 1.
          </p>
        </div>
      </div>
    </div>
  );
}
