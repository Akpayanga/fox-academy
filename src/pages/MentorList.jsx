import React from "react";

// 1. Import the images directly from your assets folder
// Adjust the '../assets/' path if your folders are structured differently
import okaforImg from "../assets/images/okafor.png";
import lindaImg from "../assets/images/linda.png";
import ezeImg from "../assets/images/eze.png";
import ibrahimImg from "../assets/images/ibrahim.png";
import fredImg from "../assets/images/fred.png";

export default function MentorList() {
  // 2. Use the imported variables without quotes
  const mentors = [
    {
      name: "Dr. Amara Okafor",
      role: "UX Design • Cohort 1",
      img: okaforImg,
    },
    {
      name: "Dr. Linda Osifo",
      role: "Project Management • Cohort 1",
      img: lindaImg,
    },
    {
      name: "Chioma Eze",
      role: "Frontend Engineering • Cohort 1",
      img: ezeImg,
    },
    {
      name: "Ibrahim Sule",
      role: "Backend Engineering • Cohort 1",
      img: ibrahimImg,
    },
    {
      name: "Fred Attang",
      role: "Graphic Design • Cohort 1",
      img: fredImg,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search mentors by name, email, or discipline..."
            className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#F38821] shadow-sm"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-[#F38821] rounded-xl text-sm font-bold hover:bg-orange-50 transition shadow-sm w-full sm:w-auto">
          Filter
        </button>
      </div>

      {/* Mentor Roster */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              {/* 3. The img src now points directly to the imported variable */}
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-10 h-10 rounded-full object-cover bg-gray-100"
              />
              <div>
                <p className="text-sm font-bold text-gray-900">{mentor.name}</p>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                  {mentor.role}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-[#F38821] transition px-2">
              ⋮
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
