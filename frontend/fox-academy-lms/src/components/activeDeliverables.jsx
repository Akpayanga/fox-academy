import kofi from "../assets/images/kofi.jpg";
import tunde from "../assets/images/tunde.jpg";
import funke from "../assets/images/funke.jpg";
import phase from "../assets/images/phase2.jpg";

function NoteSection() {
  return (
    <div className="bg-[rgba(221,124,30,1)] rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
        <span className="text-[10px] font-bold tracking-widest uppercase text-white">
          Note
        </span>
      </div>
      <p className="text-xs leading-relaxed text-white/90">
        "Please ensure a clear leadership structure within the team. Appoint one
        overall team lead who will oversee the entire group and serve as the
        direct point of contact with me. In addition, each discipline should
        have its own team lead who reports to the general team lead. It is also
        important to maintain active participation across the board. Any member
        who is not contributing or remains inactive should be reported to me for
        prompt removal."
      </p>
      <div className="flex items-center gap-2 mt-4 bg-white/20 rounded-xl px-3 py-2">
        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
          <img src={phase} alt="icon" className="rounded-full" />
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-white">
          Phase 2 Coordinator
        </span>
      </div>
    </div>
  );
}

export default function ActiveDeliverablesSection() {
  const deliverables = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M4 14h10"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 14l2 2 4-4"
          />
        </svg>
      ),
      title: "Wireframes",
      sub: "Low-fidelity user flows",
      status: "NOT STARTED",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="11" cy="11" r="8" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35"
          />
        </svg>
      ),
      title: "UX Research",
      sub: "User interviews & personas",
      status: "NOT STARTED",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Usability",
      sub: "First round accessibility testing",
      status: "NOT STARTED",
    },
  ];

  const activities = [
    {
      img: kofi,
      name: "Kofi",
      action: "uploaded",
      link: "Market_Analysis_v1.pdf",
      time: "2 HOURS AGO",
    },
    {
      img: tunde,
      name: "Tunde",
      action: 'updated the project status to "In Research"',
      time: "5 HOURS AGO",
    },
    {
      img: funke,
      name: "Mentor Funke",
      action: "left a comment on your UX persona drafts",
      time: "YESTERDAY",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Active Deliverables */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-3xl font-bold text-gray-900">
                Active Deliverables
              </h2>
              <button className="text-xs font-bold tracking-widest cursor-pointer text-[rgba(221,124,30,1)] uppercase hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              {deliverables.map((d) => (
                <div
                  key={d.title}
                  className="flex flex-col gap-2 cursor-pointer group border border-stone-100 px-4 py-6 rounded-md"
                >
                  <div className="text-gray-600">{d.icon}</div>
                  <p className="text-sm font-bold text-gray-900">{d.title}</p>
                  <p className="text-xs text-gray-400">{d.sub}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-[rgba(186,26,26,1)] flex-shrink-0" />
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[rgba(186,26,26,1)]">
                      {d.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                Recent Activity
              </h2>
              <button className="text-xs font-semibold cursor-pointer text-[rgba(221,124,30,1)] hover:underline">
                View All
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-100">
              {activities.map((a) => (
                <div key={a.name} className="flex items-start gap-3 py-3">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">{a.name}</span>{" "}
                      {a.link ? (
                        <>
                          {a.action}{" "}
                          <button className="text-[rgba(221,124,30,1)] font-medium underline cursor-pointer">
                            {a.link}
                          </button>
                        </>
                      ) : (
                        a.action
                      )}
                    </p>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mt-1">
                      {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note on mobile — below recent activity */}
          <div className="lg:hidden">
            <NoteSection />
          </div>
        </div>

        {/* Right sidebar — Note on desktop */}
        <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
          <NoteSection />
        </div>
      </div>
    </div>
  );
}
