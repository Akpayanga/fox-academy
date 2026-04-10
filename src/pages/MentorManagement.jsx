import React from "react";
import AppNavbar from "../components/AppNavbar";
import MentorList from "./MentorList";
import AddMentorForm from "./AddMentorForm";
import MentorSidebar from "./MentorSidebar";

export default function MentorManagement() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <AppNavbar />

      {/* Main Grid: 1 column on mobile, 12 columns on desktop */}
      <main className="max-w-[1280px] mx-auto p-4 md:p-8 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Section: List and Form (Takes up 8 columns on large screens) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Header Texts */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Mentor Management
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Manage institutional access and roles for faculty performance.
            </p>
          </div>

          <MentorList />
          <AddMentorForm />
        </div>

        {/* Right Section: Sidebar (Takes up 4 columns on large screens) */}
        <div className="lg:col-span-4">
          <MentorSidebar />
        </div>
      </main>
    </div>
  );
}
