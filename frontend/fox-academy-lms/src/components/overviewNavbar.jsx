import { useState } from "react";
import member1 from "../assets/images/member-a.png";
import member2 from "../assets/images/member-b.png";
import member3 from "../assets/images/member-c.png";
import member4 from "../assets/images/member-d.png";
import obi from "../assets/images/obi.png";
import amara from "../assets/images/amara.jpg";

const orange = "rgba(221,124,30,1)";

const teamMembers = [
  {
    name: "Amara Obi",
    role: "Project Lead",
    img: obi,
  },
  {
    name: "You",
    role: "UX Researcher",
    img: amara,
  },
];

const deliverables = [
  {
    title: "Stakeholder Interviews Report",
    status: "SUBMITTED JUL 14",
    done: true,
  },
  {
    title: "User Persona Synthesis",
    status: "DUE TOMORROW",
    done: false,
  },
  {
    title: "Information Architecture Map",
    status: "DUE JUL 28",
    done: false,
  },
];

const avatarColors = [member1, member2, member3, member4];

function OverviewNavbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto font-sans p-4 md:p-8">
      <div className=" mx-auto flex flex-col lg:flex-row gap-6">
        {/* LEFT / MAIN SECTION */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Badge + Team Label */}
          <div className="flex items-center gap-3">
            <span
              className="text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider"
              style={{ backgroundColor: orange }}
            >
              Capstone Project
            </span>
            <span className="text-gray-500 text-sm font-medium">
              Team Foxtrot
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            FinEase — A Financial Wellness App for Young Nigerians
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke={orange}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>
                Deadline:{" "}
                <span className="font-semibold text-gray-800">August 2nd</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke={orange}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                <span className="font-semibold text-gray-800">
                  20 Team Members
                </span>
              </span>
            </div>
            {/* Avatar Stack */}
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {avatarColors.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`member ${i + 1}`}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span
                className="ml-2 text-xs font-semibold"
                style={{ color: orange }}
              >
                +17
              </span>
            </div>
          </div>

          {/* Project Brief Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Project Brief
            </span>
            <p className="text-gray-700 text-sm leading-relaxed">
              FinEase aims to bridge the financial literacy gap for Gen-Z
              Nigerians through an intuitive, gamified wellness platform. Over
              this 8-week intensive sprint, your team will research, design, and
              develop a functional MVP that handles micro-savings and automated
              expense tracking.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-gray-400 mr-1">Duration</span>
                  <span className="font-bold" style={{ color: orange }}>
                    8 Weeks
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 mr-1">Output</span>
                  <span className="font-bold" style={{ color: orange }}>
                    Live MVP
                  </span>
                </div>
              </div>
              <button
                className="text-white text-sm font-semibold px-5 py-2 rounded-xl transition-opacity hover:opacity-90  cursor-pointer active:scale-95"
                style={{ backgroundColor: orange }}
              >
                Download PRD
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT / SIDEBAR */}
        <div className="lg:w-72 flex flex-col gap-5">
          {/* Your Team */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Your Team
            </p>
            <div className="flex flex-col gap-3">
              {teamMembers.map((m) => (
                <div key={m.name} className="flex items-center gap-3">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {m.name}
                    </p>
                    <p className="text-xs text-gray-400">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-4 flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80 cursor-pointer"
              style={{ color: orange }}
            >
              View full team
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Your Deliverables */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Your Deliverables
            </p>
            <div className="flex flex-col gap-4">
              {deliverables.map((d) => (
                <div key={d.title} className="flex items-start gap-3">
                  {d.done ? (
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: orange }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {d.title}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-0.5">
                      {d.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-5 w-full text-white text-sm font-semibold py-3 rounded-xl transition-opacity hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ backgroundColor: orange }}
            >
              Enter collaborative workspace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewNavbar;
