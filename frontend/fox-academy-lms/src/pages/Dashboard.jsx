import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import { WelcomeBanner, CapstoneProjectCard } from "../components/DashboardContent";
import CourseCard from "../components/CourseCard";
import { ChevronRight } from "lucide-react";

// Importing demo images
import auth1 from "../assets/images/auth1.png";
import auth2 from "../assets/images/auth2.png";
import auth3 from "../assets/images/auth3.png";

export default function Dashboard() {
  const activeCourses = [
    {
      thumbnail: auth1,
      category: "USER RESEARCH",
      title: "Conduct UX Research and Test Early Concepts",
      progress: 98,
      isUnlocked: true,
    },
    {
      thumbnail: auth2,
      category: "FUNDAMENTALS",
      title: "Foundation of UI/UX Design",
      progress: 2,
      isUnlocked: true,
    },
    {
      thumbnail: auth3,
      category: "DESIGN THEORY",
      title: "Visual Design Essentials",
      progress: 0,
      isUnlocked: false,
      unlockMessage: "Unlocks in Week 4",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <DashboardNavbar />
      
      <main className="mx-auto max-w-360 px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left Column: Main Content */}
          <div className="space-y-12">
            {/* Welcome Section */}
            <WelcomeBanner name="Amara" progress={18} />

            {/* Courses Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#111827]">My Active Courses (Phase 1)</h2>
                <button className="flex items-center gap-1 text-sm font-bold text-[#F38821] hover:underline">
                  View All Curriculum <ChevronRight size={14} />
                </button>
              </div>

              <div className="grid gap-4">
                {activeCourses.map((course, idx) => (
                  <CourseCard key={idx} {...course} />
                ))}
              </div>
            </div>

            {/* Capstone Project Section */}
            <CapstoneProjectCard />
          </div>

          {/* Right Column: Sidebar */}
          <DashboardSidebar />
        </div>
      </main>
    </div>
  );
}
