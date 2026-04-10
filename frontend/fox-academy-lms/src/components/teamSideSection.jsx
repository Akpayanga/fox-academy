import esther from "../assets/images/esther.png";

function TimelineDot({ label, date, done }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${done ? "bg-[rgba(221,124,30,1)] border-[rgba(221,124,30,1)]" : "bg-white border-[rgba(221,124,30,1)]"}`}
      >
        {done && (
          <svg
            className="w-2.5 h-2.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          {date}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <div className="flex flex-col gap-5 mx-auto max-w-[1440px]">
      {/* Your Team */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <p className="text-[10px] font-bold tracking-widest text-black uppercase mb-1">
          Your Team
        </p>
        <p className="text-[10px] font-bold tracking-widest text-[rgba(221,124,30,1)] uppercase mb-4">
          Team Foxtrot
        </p>
        <div className="flex items-center gap-3 mb-4">
          <img
            src={esther}
            alt="Esther K."
            className="w-11 h-11 rounded-full object-cover border border-gray-200"
          />
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-900">Esther K.</p>
            <p className="text-xs text-gray-400">UX Design</p>
            <span className="inline-block mt-1 bg-blue-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-md uppercase">
              Team Lead
            </span>
          </div>
          <button className="text-xs font-semibold text-[rgba(221,124,30,1)] hover:underline whitespace-nowrap cursor-pointer">
            Send Message
          </button>
        </div>
        <button className="w-full border border-orange-400 text-[rgba(221,124,30,1)] text-sm font-semibold py-2.5 rounded-xl hover:bg-[#f37d07] transition-colors cursor-pointer hover:text-white">
          View Team
        </button>
      </div>

      {/* Project Timeline */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
          Project Timeline
        </p>
        <div className="flex flex-col gap-5 relative pl-1">
          <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gray-200" />
          <TimelineDot label="Project Kickoff" date="July 12" done={true} />
          <TimelineDot
            label="Project Completion"
            date="September 16"
            done={false}
          />
          <TimelineDot
            label="Project Presentation"
            date="September 18"
            done={false}
          />
        </div>
      </div>
    </div>
  );
}
