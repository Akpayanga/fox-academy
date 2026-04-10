import React from "react";
import AppNavbar from "../components/AppNavbar";
import TeamList from "./TeamList";
import DirectorySidebar from "./DirectorySidebar";

export default function TeamDirectory() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <AppNavbar />

      <main className="max-w-6xl mx-auto p-4 md:p-10 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <TeamList />
          <DirectorySidebar />
        </div>
      </main>
    </div>
  );
}
