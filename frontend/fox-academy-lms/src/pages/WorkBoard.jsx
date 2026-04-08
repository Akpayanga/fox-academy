import React, { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import KanbanBoard from "./ToDoBoard";
import WorkBoardSidebar from "./WorkBoardSidebar";

export default function WorkBoard() {
  const [activeFilter, setActiveFilter] = useState("All Disciplines");
  const filters = [
    "All Disciplines",
    "UI Design",
    "Frontend",
    "Backend",
    "Graphics",
    "Social Media",
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <AppNavbar />

      <main className="max-w-[1216px] mx-auto p-4 md:p-8 mt-4 relative">
        {/* Breadcrumbs - Kept outside the grid so it stays at the very top */}
        <button className="text-[10px] font-bold text-[#F38821] uppercase tracking-widest flex items-center gap-2 mb-6 hover:underline">
          <span>←</span> Back to Project Overview
        </button>

        {/* The 12-Column Grid now wraps the Header, Filters, AND the Boards! */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Takes up 9 Columns */}
          <div className="lg:col-span-9">
            {/* Header & Toggle Section */}
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                  Work Board
                </h1>
                <p className="text-base font-normal text-[#F38821]">
                  FinEase • Team Foxtrot • All tasks across 5 disciplines
                </p>
              </div>

              {/* Full Board / My Tasks Toggle */}
              <div className="flex bg-orange-50/30 p-1.5 rounded-lg border border-orange-100 w-max">
                <button className="bg-[#F38821] text-white px-8 py-2.5 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  Full Board
                </button>
                <button className="text-[#F38821] px-8 py-2.5 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-orange-50 transition">
                  My Tasks
                </button>
              </div>
            </header>

            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-6 mb-8 border-b border-gray-100 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-[10px] font-bold tracking-wider transition-colors uppercase ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Kanban Board */}
            <KanbanBoard />
          </div>

          {/* RIGHT SIDE: Sidebar takes 3 Columns */}
          <div className="lg:col-span-3">
            <WorkBoardSidebar />
          </div>
        </div>

        {/* Floating Action Button (Black Plus) */}
        <button className="fixed bottom-10 right-10 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-2xl shadow-xl hover:bg-gray-800 transition transform hover:scale-105 z-50">
          +
        </button>
      </main>
    </div>
  );
}
