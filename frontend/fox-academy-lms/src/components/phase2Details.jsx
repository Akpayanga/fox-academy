const orange = "rgba(221,124,30,1)";
const blue = "rgba(70, 66, 229, 1)";
const fadedBlue = "rgba(237, 237, 255, 1)";

const disciplines = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
    name: "Project",
    desc: "Planning, coordination, and delivery",
    status: "IN PROGRESS",
    active: false,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z"
        />
      </svg>
    ),
    name: "UX Design",
    desc: "User flows, wireframing, and hi-fi prototyping.",
    status: "IN PROGRESS",
    active: true,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
      </svg>
    ),
    name: "Graphic Design",
    desc: "Brand identity and marketing collateral.",
    status: "IN PROGRESS",
    active: false,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    name: "Frontend",
    desc: "React implementation and UI components.",
    status: "NOT STARTED",
    active: false,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <ellipse cx="12" cy="7" rx="8" ry="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5"
        />
      </svg>
    ),
    name: "Backend",
    desc: "API architecture and database security.",
    status: "NOT STARTED",
    active: false,
  },
];

const files = [
  {
    name: "FinEase_Project_Scope_v2.pdf",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Market_Research_Analysis_2024.xlsx",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    name: "Brand_Assets_Kit.zip",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"
        />
      </svg>
    ),
  },
  {
    name: "Sprint_1_Update_Deck.pptx",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 21h8M12 17v4"
        />
      </svg>
    ),
  },
];

export default function Phase2Details() {
  return (
    <div className="max-w-[1440px] mx-auto  p-4 md:p-8 font-sans py-20 md:py-16">
      <div className="mx-auto flex flex-col lg:flex-row gap-6">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Discipline Contributions */}
          <div>
            <h2 className="text-sm font-bold mb-4" style={{ color: orange }}>
              Discipline Contributions
            </h2>
            <div className="flex flex-col gap-3">
              {disciplines.map((d) => (
                <div
                  key={d.name}
                  className="bg-white rounded-xl border flex items-center justify-between px-4 py-4 gap-4"
                  style={{
                    borderColor: d.active ? orange : "#e5e7eb",
                    borderWidth: d.active ? "2px" : "1px",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: orange }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {d.name}
                      </p>
                      <p className="text-xs text-gray-400">{d.desc}</p>
                    </div>
                  </div>
                  {d.status === "IN PROGRESS" ? (
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-md whitespace-nowrap text-white"
                      style={{ backgroundColor: blue }}
                    >
                      IN PROGRESS
                    </span>
                  ) : (
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-md whitespace-nowrap"
                      style={{
                        backgroundColor: fadedBlue,
                        color: blue,
                      }}
                    >
                      NOT STARTED
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Shared Project Files */}
          <div>
            <h2 className="text-sm font-bold mb-4" style={{ color: orange }}>
              Shared Project Files
            </h2>
            <div className="flex flex-col gap-3">
              {files.map((f) => (
                <div
                  key={f.name}
                  className="bg-white rounded-xl border border-gray-100 flex items-center justify-between px-4 py-3 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: orange }}
                    >
                      {f.icon}
                    </div>
                    <p className="text-sm text-gray-700 font-medium break-all">
                      {f.name}
                    </p>
                  </div>
                  <button
                    className="text-sm font-semibold shrink-0 cursor-pointer"
                    style={{ color: orange }}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Instructor Note */}
        <div className="lg:w-72">
          <div
            className="rounded-2xl p-5 text-white"
            style={{ backgroundColor: orange }}
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                className="w-4 h-4 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01"
                />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">
                Instructor Note
              </span>
            </div>
            <p className="text-sm leading-relaxed italic mb-4 opacity-95">
              "Ensure your research methodology explicitly mentions how you
              address the low-trust environment in Nigerian fintech. This is
              critical for the MVP's success."
            </p>
            <p className="text-sm font-semibold">— Prof. Adebayo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
