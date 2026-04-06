import { Play, Maximize, Volume2, Pause } from "lucide-react";
import auth4 from "../assets/images/auth4.png";

export default function VideoPlayer({ currentTime = "0:12", totalTime = "39:27" }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[24px] bg-black shadow-2xl group">
      {/* Video Placeholder Image */}
      <img 
        src={auth4} 
        alt="Video Thumbnail" 
        className="h-full w-full object-cover opacity-80"
      />

      {/* Play Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity group-hover:bg-black/30">
        <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-105 shadow-2xl ring-8 ring-white/10 active:scale-95">
          <Play size={32} fill="white" />
        </button>
      </div>

      {/* Video Controls Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
        {/* Progress Bar */}
        <div className="relative mb-4 h-1.5 w-full bg-white/20 rounded-full cursor-pointer group/progress">
          <div 
            className="absolute h-full rounded-full bg-[#F38821] shadow-[0_0_10px_rgba(243,136,33,0.8)] transition-all" 
            style={{ width: "2%" }} 
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-[2%] h-4 w-4 bg-white rounded-full shadow-lg scale-0 group-hover/progress:scale-100 transition-transform" />
        </div>

        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-6">
            <button className="hover:text-[#F38821] transition-colors">
              <Play size={20} fill="currentColor" />
            </button>
            <div className="flex items-center gap-3">
              <Volume2 size={20} className="hover:text-[#F38821] cursor-pointer" />
              <div className="h-1 w-16 bg-white/20 rounded-full">
                <div className="h-full w-3/4 bg-white rounded-full" />
              </div>
            </div>
            <span className="text-[12px] font-bold tracking-widest text-white/90 font-mono">
              {currentTime} <span className="text-white/40">/</span> {totalTime}
            </span>
          </div>

          <button className="hover:text-[#F38821] transition-colors">
            <Maximize size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
