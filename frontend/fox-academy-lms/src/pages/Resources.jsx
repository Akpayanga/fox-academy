import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { 
  Search, 
  Download, 
  Play, 
  ExternalLink, 
  FileText, 
  Video, 
  Link as LinkIcon,
  ChevronRight,
  Eye
} from "lucide-react";

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    "All", 
    "Handbooks", 
    "Templates", 
    "Recorded Sessions", 
    "Reference Docs"
  ];

  const resources = [
    {
      id: 1,
      type: "PDF",
      title: "UI/UX Intern Handbook",
      description: "Your comprehensive guide to navigating the TalentFlow design ecosystem and expectations.",
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&q=80&w=600",
      category: "Handbooks",
      action: "Download"
    },
    {
      id: 2,
      type: "VIDEO",
      title: "Welcome from Dr. Funke Adeyemi",
      description: "An inspiring introduction to the vision of TalentFlow Architectural Archive.",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      category: "Recorded Sessions",
      action: "Watch"
    },
    {
      id: 3,
      type: "PDF",
      title: "UI/UX Intern Handbook",
      description: "Your comprehensive guide to navigating the TalentFlow design ecosystem and expectations.",
      thumbnail: "https://images.unsplash.com/photo-1541462608141-ad1557d685b5?auto=format&fit=crop&q=80&w=600",
      category: "Handbooks",
      action: "Download"
    },
    {
      id: 4,
      type: "LINK",
      title: "Figma Starter File",
      description: "Jumpstart your assignments with our pre-configured design system library.",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
      category: "Templates",
      action: "Open"
    },
    {
      id: 5,
      type: "PDF",
      title: "UI/UX Intern Handbook",
      description: "Your comprehensive guide to navigating the TalentFlow design ecosystem and expectations.",
      thumbnail: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600",
      category: "Handbooks",
      action: "Download"
    },
    {
      id: 6,
      type: "VIDEO",
      title: "Welcome from Dr. Funke Adeyemi",
      description: "An inspiring introduction to the vision of TalentFlow Architectural Archive.",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      category: "Recorded Sessions",
      action: "Watch"
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesFilter = activeFilter === "All" || res.category === activeFilter;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <DashboardNavbar />
      
      <main className="mx-auto max-w-[1440px] px-6 py-12 md:px-12">
        {/* Header Section */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-[42px] font-black tracking-tight text-[#111827]">
              Resources
            </h1>
            <p className="text-lg font-medium text-gray-500 leading-relaxed">
              Explore our curated archive of tools, templates, and 
              recorded wisdom to accelerate your growth.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-100 bg-white py-4 pl-12 pr-4 text-sm font-medium shadow-sm outline-none transition-all placeholder:text-gray-300 focus:border-[#F38821] focus:ring-4 focus:ring-[#F38821]/5"
            />
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12 flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-3 text-xs font-black tracking-widest uppercase transition-all
                ${activeFilter === filter 
                  ? 'bg-[#4338CA] text-white shadow-lg shadow-indigo-100' 
                  : 'bg-[#EEF2FF] text-[#4338CA] hover:bg-[#E0E7FF]'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="mt-24 flex justify-center gap-8 border-t border-gray-100 pt-8">
          {['PRIVACY', 'TERMS', 'SUPPORT'].map((item) => (
            <button 
              key={item} 
              className="text-[10px] font-black tracking-widest text-[#F38821] hover:underline"
            >
              {item}
            </button>
          ))}
        </footer>
      </main>
    </div>
  );
};

const ResourceCard = ({ type, title, description, thumbnail, action }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-gray-100">
      {/* Thumbnail */}
      <div className="relative h-[220px] overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Type Badge */}
        <div className="absolute left-4 top-4 rounded-lg bg-orange-500/20 px-3 py-1.5 backdrop-blur-md">
          <span className="text-[10px] font-black tracking-widest text-white uppercase">
            {type}
          </span>
        </div>

        {/* Video Overlay */}
        {type === "VIDEO" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#111827] shadow-xl">
              <Play size={20} fill="currentColor" />
            </div>
          </div>
        )}

        {/* Link Overlay (Figma special) */}
        {type === "LINK" && (
          <div className="absolute inset-0 flex items-center justify-center bg-orange-500/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl">
              <LinkIcon size={32} className="text-[#111827]" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">
        <h3 className="mb-3 text-xl font-extrabold text-[#111827] leading-tight">
          {title}
        </h3>
        <p className="mb-8 text-sm font-medium text-gray-500 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto pt-2">
          {/* Dynamic Action Button */}
          {action === "Download" ? (
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F38821] py-4 text-[12px] font-black tracking-widest text-white uppercase transition-all hover:bg-[#e37b1d] shadow-lg shadow-orange-100">
              <Download size={16} />
              Download
            </button>
          ) : action === "Watch" ? (
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#FFF2E5] bg-white py-4 text-[12px] font-black tracking-widest text-[#F38821] uppercase transition-all hover:border-[#F38821]">
              <Eye size={16} />
              Watch
            </button>
          ) : (
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-gray-100 bg-white py-4 text-[12px] font-black tracking-widest text-gray-500 uppercase transition-all hover:border-gray-200">
              <ExternalLink size={16} />
              Open
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
