import React from "react";
import uxToDoImg from "../assets/images/ux-to-do.png";
import backendAImg from "../assets/images/backend-a.png";
import backendBImg from "../assets/images/backend-b.png";
import socialAImg from "../assets/images/social-a.png";
import socialBImg from "../assets/images/social-b.png";

export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Column 1: TO DO */}
      <div className="space-y-4">
        <ColumnHeader title="TO DO" count="1" />
        <TaskCard
          discipline="UX Design"
          title="Conduct Stakeholder Interviews for FinEase"
          date="OCT 24"
          img={uxToDoImg} // Changed from imgId
        />
      </div>

      {/* Column 2: IN PROGRESS (Backend) */}
      <div className="space-y-4">
        <ColumnHeader title="IN PROGRESS" count="4" />
        <TaskCard
          discipline="Backend"
          title="Wireframe User Dashboard Flow"
          date="OCT 22"
          img={backendAImg}
          barColor="bg-blue-600"
        />
        <TaskCard
          discipline="Backend"
          title="Schema Design for Transactions"
          date="OCT 23"
          img={backendBImg}
          barColor="bg-blue-600"
        />
      </div>

      {/* Column 3: IN PROGRESS (Social Media) */}
      <div className="space-y-4">
        <ColumnHeader title="IN PROGRESS" count="1" />
        <TaskCard
          discipline="Social Media"
          title="Content Strategy for launch phase"
          date="OCT 20"
          img={socialAImg}
          doubleAvatar={true}
        />
      </div>

      {/* Column 4: IN PROGRESS (Graphics - Done) */}
      <div className="space-y-4">
        <ColumnHeader title="IN PROGRESS" count="1" />
        <TaskCard
          discipline="Graphics"
          title="Brand-colour identity and logo-design for FinEase"
          date="OCT 15"
          isDone={true}
        />
      </div>
    </div>
  );
}

// --- Helpers ---

function ColumnHeader({ title, count }) {
  return (
    <div className="flex items-center justify-between mb-6 px-1">
      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em]">
        {title}
      </h3>
      <span className="w-5 h-5 rounded-full bg-[#F38821] text-white flex items-center justify-center text-[10px] font-bold">
        {count}
      </span>
    </div>
  );
}

function TaskCard({
  discipline,
  title,
  date,
  img, // Changed from imgId to match the new prop
  doubleAvatar,
  isDone,
  barColor,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-[20px] p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col min-h-[160px]">
      <p className="text-[9px] font-extrabold text-[#F38821] uppercase tracking-widest mb-2">
        {discipline}
      </p>

      <h4 className="text-sm font-bold text-gray-900 leading-snug mb-3">
        {title}
      </h4>

      {barColor ? (
        <div className={`w-12 h-1 ${barColor} rounded-full mb-6`}></div>
      ) : (
        <div className="mb-7"></div>
      )}

      <div className="flex items-center justify-between mt-auto">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {date}
        </span>

        {isDone ? (
          <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
            <span className="text-green-500 text-[10px] font-bold">✓</span>
          </div>
        ) : (
          <div className="flex -space-x-2">
            {doubleAvatar && (
              <img
                src={socialBImg} // I used socialB here as a placeholder for the second avatar
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
                alt="User"
              />
            )}
            <img
              src={img} // Now uses the actual imported image variable
              className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 object-cover"
              alt="User"
            />
          </div>
        )}
      </div>
    </div>
  );
}
