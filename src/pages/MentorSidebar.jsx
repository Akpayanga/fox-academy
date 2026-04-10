import React from "react";

export default function MentorSidebar() {
  return (
    <div className="space-y-6">
      {/* Mentor Summary */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-6">
          Mentor Summary
        </h3>
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 font-medium">
              Total Active Mentors
            </span>
            <span className="text-sm font-bold text-gray-900">24</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 font-medium">
              Pending Invitations
            </span>
            <span className="text-sm font-bold text-gray-900">03</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 font-medium">
              Top Discipline
            </span>
            <span className="text-sm font-bold text-gray-900">UX Design</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-6">
          Recent Activity
        </h3>
        <div className="space-y-6">
          <ActivityRow
            title="Sarah Ajileti assigned to Cohort 2"
            desc="2 hours ago"
            color="bg-[#F38821]"
          />
          <ActivityRow
            title="Dr. Okafor updated Curriculum"
            desc="5 hours ago"
            color="bg-[#F38821]"
          />
          <ActivityRow
            title="Invite accepted by Marcus Ukonu"
            desc="Yesterday"
            color="bg-[#F38821]"
          />
        </div>
      </div>

      {/* Institutional Note */}
      <div className="bg-[#E67E22] rounded-[24px] p-8 text-white shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-white text-lg">💡</span>
          <h3 className="text-xs font-bold uppercase tracking-widest mt-0.5">
            Institutional Note
          </h3>
        </div>
        <p className="text-xs font-medium leading-relaxed text-white/95">
          Mentors added to the portal are subject to Fox Academy's Data
          Protection Policy. Ensure disciplines match the current academic
          roadmap before assignment.
        </p>
      </div>
    </div>
  );
}

// Updated helper component for the activity list items
function ActivityRow({ title, desc, color }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${color}`}></div>
      <div>
        <p className="text-sm font-bold text-gray-900 mb-0.5">{title}</p>
        <p className="text-xs text-gray-500 font-medium">{desc}</p>
      </div>
    </div>
  );
}
