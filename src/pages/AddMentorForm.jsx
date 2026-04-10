import React from "react";
import SuccessModal from "./SuccessModal";

export default function AddMentorForm() {
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const handleAddAnother = () => {
    setShowSuccessModal(false);
    // You could also add logic here to clear the form fields later!
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[24px] p-6 md:p-8 shadow-sm relative mt-10">
      {/* Form Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            Add New Mentor
          </h2>
          <p className="text-xs text-gray-500 font-medium">
            Fill in the mentor's details below. They will receive an email
            invitation with instructions to join the platform.
          </p>
        </div>
        <button className="text-red-500 hover:text-red-700 transition font-bold text-xl leading-none">
          ×
        </button>
      </div>

      <form className="space-y-6">
        {/* Input Grid: 1 col on mobile, 2 cols on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-900 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Dr. Funke Adeyemi"
              className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
              Discipline
            </label>
            <select className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-500 bg-white focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]">
              <option>Select discipline</option>
              <option>UX Design</option>
              <option>Frontend Engineering</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. mentor@foxacademy.com"
              className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
              Role Title
            </label>
            <input
              type="text"
              placeholder="e.g. Senior UX Mentor"
              className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              placeholder="+234 000 000 0000"
              className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
              Cohort Assignment
            </label>
            <select className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-500 bg-white focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]">
              <option>Select cohort</option>
              <option>Cohort 1</option>
              <option>Cohort 2</option>
            </select>
          </div>
        </div>

        {/* Access Level Cards */}
        <div className="pt-2">
          <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-3">
            Access Level
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Active Card - Mentor */}
            <div className="border-[1.5px] border-[#F38821] bg-white rounded-xl p-5 relative cursor-pointer shadow-sm">
              <div className="absolute top-5 right-5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[12px] font-bold">
                ✓
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Mentor</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed pr-8">
                Can manage assigned interns, grade assignments, give feedback,
                and book sessions.
              </p>
            </div>

            {/* Inactive Card - Senior Mentor */}
            <div className="border-[1.5px] border-gray-200 bg-white rounded-xl p-5 relative cursor-pointer hover:border-gray-300 transition">
              <div className="absolute top-5 right-5 w-5 h-5 border-[1.5px] border-gray-200 rounded-full"></div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                Senior Mentor
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed pr-8">
                All Mentor permissions plus ability to post announcements and
                manage shared resources across disciplines.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 mt-4 border-t border-gray-100">
          {/* Custom Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer w-full sm:w-auto">
            <div className="w-5 h-5 bg-[#F38821] rounded flex items-center justify-center text-white text-xs font-bold shadow-sm">
              ✓
            </div>
            <span className="text-sm text-gray-800 font-medium">
              Send welcome email with activation link immediately
            </span>
          </label>

          {/* Action Buttons */}
          <div className="flex gap-4 w-full sm:w-auto">
            <button
              type="button"
              className="flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold text-[#F38821] bg-white border border-[#F38821] rounded-lg hover:bg-orange-50 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setShowSuccessModal(true)}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#F38821] text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition shadow-sm flex items-center justify-center gap-2"
            >
              Send Invite
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </form>

      {/* Conditionally Render the Modal */}
      {showSuccessModal && (
        <SuccessModal
          onClose={() => setShowSuccessModal(false)}
          onAddAnother={handleAddAnother}
        />
      )}
    </div>
  );
}
