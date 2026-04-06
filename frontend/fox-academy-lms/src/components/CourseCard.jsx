import { PlayCircle, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ thumbnail, category, title, progress, isUnlocked = true, unlockMessage, to = "/learning/module" }) {
  return (
    <div className={`flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:flex-row md:items-center ${!isUnlocked ? 'opacity-80' : ''}`}>
      {/* Thumbnail */}
      <div className="relative h-[100px] w-[180px] shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <img 
          src={thumbnail} 
          alt={title} 
          className={`h-full w-full object-cover ${!isUnlocked ? 'grayscale' : ''}`}
        />
        {!isUnlocked && (
           <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
             <Lock size={20} className="text-white" />
           </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-center gap-2">
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#F38821]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F38821]">
            {category}
          </span>
        </div>
        <h3 className="text-base font-bold text-[#111827]">{title}</h3>
        
        {isUnlocked ? (
          <div className="flex items-center gap-3">
             <div className="h-1.5 flex-1 rounded-full bg-gray-100">
               <div 
                 className="h-full rounded-full bg-[#F38821] transition-all" 
                 style={{ width: `${progress}%` }}
               />
             </div>
             <span className="text-[12px] font-medium text-gray-500 whitespace-nowrap">
               {progress}% complete
             </span>
          </div>
        ) : (
          <p className="flex items-center gap-1.5 text-xs text-gray-400">
            <Lock size={12} />
            {unlockMessage}
          </p>
        )}
      </div>

      {/* Action */}
      <div className="shrink-0">
        <Link 
          to={isUnlocked ? to : "#"}
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all md:w-auto
            ${isUnlocked 
              ? 'bg-[#F38821] text-white hover:bg-[#e37b1d] shadow-md shadow-orange-200' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
            }`}
        >
          {isUnlocked ? (
            <>
              <PlayCircle size={18} fill="currentColor" fillOpacity={0.2} />
              Resume Video
            </>
          ) : (
             <>
               <PlayCircle size={18} className="opacity-40" />
               Start Video
             </>
          )}
        </Link>
      </div>
    </div>
  );
}
