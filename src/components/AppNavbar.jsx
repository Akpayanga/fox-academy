import React, { useState, useRef, useEffect } from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function AppNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => currentPath.startsWith(path);

  return (
    <nav className="border-b border-[#D1D5DC] bg-white sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 md:px-10 h-16">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-start gap-3">
            <span className="mt-1 h-6 w-6 bg-[#F38821]" aria-hidden="true" />
            <div>
              <h1 className="text-[20px] md:text-[24px] font-bold leading-none text-[#F38821]">
                Fox<br />Academy
              </h1>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 h-full">
            <Link 
              to="/dashboard" 
              className={`h-full flex items-center text-sm pt-0.5 ${isActive('/dashboard') ? 'border-b-2 border-[#F38821] text-[#F38821] font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              My Learning
            </Link>
            <Link 
              to="#assignments" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Assignments
            </Link>
            <Link 
              to="#progress" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Progress
            </Link>
            <Link 
              to="#resources" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Resources
            </Link>
            <Link 
              to="#community" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Community
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-[#6B7280] hover:text-[#111827]">
            <Bell className="h-6 w-6" />
          </button>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden outline-none focus:ring-2 focus:ring-[#F38821] focus:ring-offset-2 transition-all block cursor-pointer border border-transparent"
            >
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50">
                <div className="py-1">
                  <Link 
                    to="/settings" 
                    className="group flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#F38821] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Settings className="mr-3 h-4 w-4 text-gray-400 group-hover:text-[#F38821] transition-colors" />
                    Settings
                  </Link>
                </div>
                <div className="py-1">
                  <Link 
                    to="/login" 
                    className="group flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <LogOut className="mr-3 h-4 w-4 text-red-500 group-hover:text-red-600 transition-colors" />
                    Log out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
