import { Check, Lock, ChevronRight, HelpCircle } from "lucide-react";
import auth2 from "../assets/images/auth2.png";
import { Link } from "react-router-dom";

function SyllabusItem({ moduleNumber, title, status, progress }) {
  const isCompleted = status === "Completed";
  const isCurrent = status === "Current";
  const isLocked = status === "Locked";

  return (
    <Link 
      to={isLocked ? "#" : "/mylearning/module"}
      className={`block p-4 transition-all ${isCurrent ? 'bg-orange-50/50 border-y border-orange-100' : 'hover:bg-gray-50'} ${isLocked ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="flex gap-4">
        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ring-2 ring-offset-2 
          ${isCompleted ? 'bg-[#F38821] text-white ring-[#F38821]' : 
            isCurrent ? 'bg-white text-[#F38821] ring-[#F38821]' : 
            'bg-gray-100 text-gray-400 ring-gray-100'}`}>
          {isCompleted ? <Check size={14} strokeWidth={3} /> : moduleNumber}
        </div>
        
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-[9px] font-black uppercase tracking-widest ${isCurrent ? 'text-[#F38821]' : 'text-gray-400'}`}>
              MODULE {moduleNumber} {isCurrent && "• CURRENT"}
            </span>
          </div>
          
          <h4 className={`text-[13px] font-bold leading-tight ${isLocked ? 'text-gray-300' : 'text-[#111827]'}`}>
            {title}
          </h4>

          {isCurrent && (
            <div className="pt-2">
              <div className="h-1 w-full bg-orange-100 rounded-full">
                <div className="h-full w-[2%] bg-[#F38821] rounded-full" />
              </div>
              <p className="mt-1 text-[9px] font-bold text-[#F38821] uppercase tracking-tighter">
                {progress}% watched
              </p>
            </div>
          )}
        </div>

        {isLocked && <Lock size={14} className="text-gray-200" />}
      </div>
    </Link>
  );
}

export default function SyllabusSidebar() {
  const syllabus = [
    { moduleNumber: 1, title: "Synthesizing Feedback Loops", status: "Completed" },
    { moduleNumber: 2, title: "Conducting UX Research at Scale", status: "Current", progress: "02" },
    { moduleNumber: 3, title: "Synthesizing Feedback Loops", status: "Locked" },
    { moduleNumber: 4, title: "Synthesizing Feedback Loops", status: "Locked" },
    { moduleNumber: 5, title: "Final Assessment Quiz", status: "Locked", isQuiz: true },
  ];

  return (
    <aside className="space-y-6">
      {/* Course Progress Card */}
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#4A4DE7]">COURSE PROGRESS</p>
          <span className="text-2xl font-black text-[#4A4DE7]">02%</span>
        </div>
        <div className="mt-4 h-1.5 w-full bg-indigo-100 rounded-full">
          <div className="h-full w-[2%] bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
        </div>
      </div>

      {/* Syllabus Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="bg-[#F38821] px-6 py-4">
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-white">COURSE SYLLABUS</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {syllabus.map((item, idx) => (
            <SyllabusItem key={idx} {...item} />
          ))}
        </div>
      </div>

      {/* Up Next Card */}
      <Link 
        to="/mylearning"
        className="relative block overflow-hidden rounded-2xl bg-[#F38821] p-6 text-white shadow-lg shadow-orange-100 transition-transform hover:scale-[1.02] cursor-pointer"
      >
        <div className="relative z-10 flex gap-4">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white/20 backdrop-blur-md">
            <img src={auth2} alt="Next" className="h-full w-full object-cover grayscale brightness-200" />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-white/60">UP NEXT IN PATHWAY</p>
            <h4 className="text-sm font-bold leading-tight mt-1">Advanced Information Architecture</h4>
            <p className="text-[10px] font-medium text-white/50 mt-1">Next Course • 12 Lessons</p>
          </div>
        </div>
        <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      </Link>
    </aside>
  );
}
