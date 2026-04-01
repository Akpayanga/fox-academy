import React from "react";
import GreetingCard from "../../components/GreetingCard";
import ActiveCourses from "../../components/ActiveCourses";
import UpcomingProject from "../../components/UpcomingProject";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 lg:gap-[4%]">
      {/* This is JUST the grid layout, no TopNav! */}
      <div className="flex flex-col gap-8 md:gap-12">
        <GreetingCard />
        <ActiveCourses />
        <UpcomingProject />
      </div>
      <div className="w-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
