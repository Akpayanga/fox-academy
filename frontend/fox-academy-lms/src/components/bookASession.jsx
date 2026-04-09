import progressIcon from "../assets/images/progressIcon.svg";
import bookASessionIcon from "../assets/images/bookASessionIcon.svg";
import { useState } from "react";

const stats = [
  { label: "ACTIVE", value: 0 },
  { label: "COMPLETED", value: 32 },
  { label: "DAYS REMAINING", value: 0 },
];

function BookASession() {
  const [progress] = useState(100);

  return (
    <div className=" mx-auto max-w-[1440px] px-6 py-12 p-8 font-sans">
      <div className="mb-6 flex flex-col gap-3">
        <h1 className="text-3xl md:text-6xl font-bold text-[rgba(17,24,39,1)] tracking-tight">
          My Progress
        </h1>
        <p className="text-md text-[rgba(107,114,128,1)] mt-1">
          Track your academic milestones and collaboration phases.
        </p>
      </div>

      <div className="bg-[rgba(221,124,30,1)] rounded-2xl p-6  shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          {/* <span className="w-3 h-3 rounded-full bg-green-400" /> */}
          <img
            src={progressIcon}
            alt="icon"
            //   className="h-full w-full object-cover"
          />
          <span className="text-white text-md font-semibold uppercase tracking-widest">
            Milestone Reached
          </span>
        </div>

        <h2 className="text-white md:text-5xl text-3xl font-bold mb-5">
          Phase 1 Complete
        </h2>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <p className="text-orange-200 text-xs mb-1 font-medium">
                Program Progress
              </p>
              <span className="text-white font-bold text-sm">{progress}%</span>
            </div>
            <div className="relative h-2 bg-orange-400 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button className="flex items-center gap-2 bg-white text-[rgba(221,124,30,1)] text-sm font-semibold px-4 py-2 rounded-lg shadow hover:bg-orange-50 transition-all whitespace-nowrap cursor-pointer">
            <img
              src={bookASessionIcon}
              alt="icon"
              //   className="h-full w-full object-cover"
            />
            Book a Session
          </button>
        </div>

        <div className="flex gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl px-5 py-3 text-left flex flex-col gap-2 min-w-[80px]"
            >
              <p className="text-[rgba(107,114,128,1)] text-[12px] font-semibold uppercase tracking-wider mt-0.5">
                {stat.label}
              </p>
              <p className="text-orange-700 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookASession;
