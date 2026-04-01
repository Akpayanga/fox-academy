import { useState } from "react";
import { NavLink } from "react-router-dom"; // <-- Imported NavLink here
import profile from "../assets/profile.png";

const TopNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white h-[64px] border-b border-gray-100 sticky top-0 z-50 relative">
      <div className="w-full max-w-[1280px] mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
          <div className="flex flex-col font-bold text-base md:text-xl text-[#f38821] leading-none">
            <span>Fox</span>
            <span>Academy</span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex justify-center items-center gap-8 h-full">
          {/* DASHBOARD LINK */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center text-sm font-bold text-[#f38821] relative"
                : "h-full flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition relative"
            }
          >
            {({ isActive }) => (
              <>
                Dashboard
                {/* Only show the orange line if this page is active! */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f38821] rounded-t-full"></span>
                )}
              </>
            )}
          </NavLink>

          {/* MY LEARNING LINK */}
          <NavLink
            to="/my-learning"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center text-sm font-bold text-[#f38821] relative"
                : "h-full flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition relative"
            }
          >
            {({ isActive }) => (
              <>
                My Learning
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f38821] rounded-t-full"></span>
                )}
              </>
            )}
          </NavLink>

          <a
            href="#"
            className="h-full flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            Assignments
          </a>
          <a
            href="#"
            className="h-full flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            Progress
          </a>
          <a
            href="#"
            className="h-full flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            Resources
          </a>
          <a
            href="#"
            className="h-full flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            Community
          </a>
        </nav>

        {/* USER PROFILE & MOBILE MENU BUTTON */}
        <div className="flex items-center gap-3 md:gap-6">
          <button
            className="text-gray-500 lg:hidden p-1 transition-colors hover:bg-gray-50 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-200 object-cover flex-shrink-0"
          />
        </div>
      </div>

      {/* THE MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[64px] left-0 w-full bg-white border-b border-gray-100 shadow-lg flex flex-col py-2 px-4 animate-fade-in">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)} // Closes menu when clicked
            className={({ isActive }) =>
              isActive
                ? "py-4 text-sm font-bold text-[#f38821] border-b border-gray-50"
                : "py-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition border-b border-gray-50"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/my-learning"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "py-4 text-sm font-bold text-[#f38821] border-b border-gray-50"
                : "py-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition border-b border-gray-50"
            }
          >
            My Learning
          </NavLink>

          <a
            href="#"
            className="py-4 text-sm font-medium text-gray-500 border-b border-gray-50"
          >
            Assignments
          </a>
          <a
            href="#"
            className="py-4 text-sm font-medium text-gray-500 border-b border-gray-50"
          >
            Progress
          </a>
          <a
            href="#"
            className="py-4 text-sm font-medium text-gray-500 border-b border-gray-50"
          >
            Resources
          </a>
          <a href="#" className="py-4 text-sm font-medium text-gray-500">
            Community
          </a>
        </div>
      )}
    </header>
  );
};

export default TopNav;
