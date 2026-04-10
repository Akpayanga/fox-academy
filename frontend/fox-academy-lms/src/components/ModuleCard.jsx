import { Play, Lock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ModuleCard({ moduleNumber, title, progress, status }) {
  const isLocked = status === "Locked";
  const isNotStarted = status === "NotStarted";
  const isCompleted = status === "Completed";
  const isInProgress = status === "InProgress";

  return (
    <div className={`flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md ${isLocked ? "opacity-75" : ""}`}>
      {/* Header Info */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
          MODULE {moduleNumber.toString().padStart(2, '0')}
        </span>
        
        <div className="flex items-center gap-1.5">
          {isLocked ? (
            <Lock size={12} className="text-gray-400" />
          ) : (
            <span className={`text-[10px] font-bold ${isCompleted ? "text-green-500" : isInProgress ? "text-[#F38821]" : "text-gray-400"}`}>
              {isCompleted ? "100% Complete" : isInProgress ? `${progress}% Complete` : "Not Started"}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className={`mb-6 min-h-[48px] text-base font-bold leading-snug text-[#111827] ${isLocked ? "text-gray-400" : ""}`}>
        {title}
      </h3>

      {/* Progress Indicator */}
      <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-gray-100">
        {!isLocked && (
          <div 
            className={`h-full transition-all duration-500 ${isCompleted ? "bg-[#F38821]" : "bg-[#F38821]"}`} 
            style={{ width: `${progress}%` }}
          />
        )}
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        {isLocked ? (
          <button disabled className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 py-3 text-sm font-bold text-gray-400 cursor-not-allowed">
            <Lock size={16} />
            Locked
          </button>
        ) : isNotStarted ? (
          <Link 
            to="/mylearning/module"
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-sm font-bold text-[#F38821] transition-all hover:bg-orange-50 hover:border-[#F38821]"
          >
            <Play size={14} className="fill-[#F38821]" />
            Start Course
            <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <Link 
            to="/mylearning/module"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F38821] py-3 text-sm font-bold text-white shadow-md shadow-orange-100 transition-all hover:bg-[#e37b1d] hover:shadow-lg"
          >
            <Play size={14} fill="currentColor" fillOpacity={0.4} />
            Replay Video
          </Link>
        )}
      </div>
    </div>
  );
}