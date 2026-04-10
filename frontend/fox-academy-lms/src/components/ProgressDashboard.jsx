import gpaIcon from "../assets/images/gpaIcon.png";
import courseModules from "../assets/images/courseModules.png";
import videoContent from "../assets/images/videoContent.png";
import knowledgeChecks from "../assets/images/knowledgeChecks.png";
import checkIcon from "../assets/images/checkIcon.png";

const learningItems = [
  {
    // icon: <BookOpen size={16} />,
    icon: <img src={courseModules} alt="icon" />,
    label: "Course Modules",
    progress: 100,
    display: "6 of 6",
  },
  {
    // icon: <Video size={16} />,
    icon: <img src={videoContent} alt="icon" />,
    label: "Video Content",
    progress: 100,
    display: "100%",
  },
  {
    // icon: <CheckSquare size={16} />,
    icon: <img src={knowledgeChecks} alt="icon" />,
    label: "Knowledge Checks",
    progress: 100,
    display: "12 of 12",
  },
];

const assignmentStats = [
  { label: "GRADES", value: 14 },
  { label: "PENDING", value: 0 },
  { label: "OVERDUE", value: 0 },
];

export default function ProgressDashboard() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm  mx-auto max-w-[1440px]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Learning Progress */}
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-lg font-bold text-gray-900">
              Learning Progress
            </h2>
            <span className="text-xs font-semibold text-white bg-[rgba(76,175,80,1)] rounded-full px-2 py-0.5">
              VERIFIED
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {learningItems.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div>{item.icon}</div>
                <div className="w-full flex flex-col gap-1">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <span className="text-md font-bold text-gray-800">
                        {item.label}
                      </span>
                    </div>
                    <div>
                      <span className="text-md text-[rgba(55,65,81,1)]">
                        {item.display}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[rgba(221,124,30,1)] rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <h3>All Learning objectives met</h3>
            <img src={checkIcon} alt="icon" />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-100" />

        {/* Assignment Progress */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900">
              Assignment Progress
            </h2>
            <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Summary
            </span>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mb-5 items-center justify-between ">
            {assignmentStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-between border border-stone-100 py-3 px-10 rounded-md"
              >
                <p
                  className={`text-4xl font-extrabold text-[rgba(221,124,30,1)]`}
                >
                  {stat.value}
                </p>
                <p className="text-[10px] text-[rgba(55,65,81,1)] uppercase tracking-wider font-semibold mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* GPA Card */}
          <div className="bg-[rgba(254,243,233,0.5)] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              {/* <span className="w-2.5 h-2.5 rounded-full bg-orange-400" /> */}
              <img src={gpaIcon} alt="icon" />
              <p className="text-sm font-semibold text-gray-700">
                GPA Performance
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              4.6{" "}
              <span className="text-base font-semibold text-orange-700">/ 5.0</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Outstanding academic achievement across all phase 1 metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
