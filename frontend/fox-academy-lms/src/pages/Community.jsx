import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { 
  ChevronDown, 
  Hash, 
  MessageSquare, 
  Users, 
  Pin, 
  MoreHorizontal, 
  Eye, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Info
} from "lucide-react";

import amara from "../assets/images/amara.jpg";

const Community = () => {
  const [activeChannel, setActiveChannel] = useState("UX-DESIGN");
  const [activeSubChannel, setActiveSubChannel] = useState("GENERAL");
  const [activeTab, setActiveTab] = useState("Discussions");
  const [sortBy, setSortBy] = useState("RECENT");

  const channels = [
    { name: "UX-DESIGN", subChannels: ["GENERAL", "SOCIALS", "SHOWCASE"], expanded: true },
    { name: "FRONTEND", subChannels: [], expanded: false },
    { name: "BACKEND", subChannels: [], expanded: false },
    { name: "PROJECT MANAGEMENT", subChannels: [], expanded: false },
    { name: "GRAPHICS DESIGN", subChannels: [], expanded: false },
    { name: "DATA ANALYSIS", subChannels: [], expanded: false },
    { name: "VIDEO EDITING", subChannels: [], expanded: false },
  ];

  const activeUsers = [
    { name: "Anthony Ugwu", avatar: "https://i.pravatar.cc/150?u=anthony" },
    { name: "Titilayo Olanrewaju", avatar: "https://i.pravatar.cc/150?u=titi" },
    { name: "Adekunle Olamide J", avatar: "https://i.pravatar.cc/150?u=ade" },
    { name: "Qudus Sulaiman", avatar: "https://i.pravatar.cc/150?u=qudus" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <DashboardNavbar />
      
      <main className="flex-1 flex max-w-[1440px] mx-auto w-full">
        {/* Left Sidebar - Channels */}
        <aside className="w-[280px] shrink-0 border-r border-gray-50 p-8 hidden lg:block">
          <div className="mb-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
              STUDENT PORTAL
              <span className="block font-medium text-gray-300 mt-1">FOX ACADEMY</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">CHANNELS</p>
              
              <div className="space-y-2">
                {channels.map((channel) => (
                  <div key={channel.name} className="space-y-1">
                    <button 
                      onClick={() => setActiveChannel(channel.name)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all
                        ${activeChannel === channel.name ? 'bg-orange-50/50 text-[#F38821]' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      <span className="uppercase tracking-widest text-[11px]">{channel.name}</span>
                      <ChevronDown size={14} className={activeChannel === channel.name ? '' : '-rotate-90 text-gray-300'} />
                    </button>
                    
                    {activeChannel === channel.name && channel.subChannels.length > 0 && (
                      <div className="space-y-1 pl-4">
                        {channel.subChannels.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setActiveSubChannel(sub)}
                            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-[11px] font-black tracking-widest transition-all
                              ${activeSubChannel === sub ? 'bg-[#F38821] text-white shadow-lg shadow-orange-100' : 'text-gray-400 hover:text-[#111827]'}`}
                          >
                            <Hash size={14} className={activeSubChannel === sub ? 'text-white' : 'text-gray-300'} />
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Feed */}
        <section className="flex-1 bg-[#FDFDFD] p-8 md:p-12 overflow-y-auto">
          {/* Channel Header */}
          <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black text-[#111827] tracking-tight"># ux-design</h1>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="h-full w-full object-cover" />
                  </div>
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#F38821] text-[10px] font-bold text-white">
                  +97
                </div>
              </div>
            </div>
            
            <button className="rounded-2xl bg-[#F38821] px-6 py-4 text-[12px] font-black tracking-widest text-white uppercase transition-all hover:bg-[#e37b1d] shadow-xl shadow-orange-100">
              Start Discusion
            </button>
          </div>

          {/* Feed Controls */}
          <div className="mb-10 flex flex-col gap-8">
            <div className="flex gap-8 border-b border-gray-100">
              {["Discussions", "Shared Files"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-black uppercase tracking-widest transition-all
                    ${activeTab === tab ? 'border-b-2 border-[#F38821] text-[#F38821]' : 'text-gray-400'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">SORT BY:</span>
              <div className="flex gap-2">
                {["RECENT", "UNREAD", "POPULAR"].map((sort) => (
                  <button
                    key={sort}
                    onClick={() => setSortBy(sort)}
                    className={`rounded-xl px-5 py-2 text-[10px] font-black tracking-widest transition-all
                      ${sortBy === sort ? 'bg-[#F38821] text-white shadow-lg shadow-orange-100' : 'bg-[#FFF7ED] text-[#F38821] hover:bg-orange-50'}`}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {/* Pinned Post */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#4F46E5] p-10 text-white shadow-2xl shadow-indigo-100">
              <Pin className="absolute right-8 top-8 opacity-40" size={24} />
              
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <img src={amara} alt="mentor" className="h-full w-full object-cover rounded-2xl" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">PINNED BY MENTOR • 2 hours ago</p>
                    <h2 className="text-2xl font-black tracking-tight leading-none">Phase 2 Internship</h2>
                 </div>
              </div>

              <p className="mb-10 max-w-2xl text-base font-medium leading-relaxed opacity-90">
                Keep up with your courses and finish all assignments to get qualify for the 
                next stage of the internship where you get paired with interns from other 
                discipline in the cohort. Phase 2 kicks off next week Wednesday.
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <MessageSquare size={16} /> 42 replies
                </div>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Eye size={16} /> 1.2k views
                </div>
              </div>
            </div>

            {/* Normal Discussion Post */}
            <div className="rounded-[32px] bg-white border border-gray-100 p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-50 group">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl overflow-hidden shadow-md">
                    <img src="https://i.pravatar.cc/150?u=alex" alt="Alex" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#111827]">Alex Livinus</h4>
                    <p className="text-[10px] font-black text-gray-400 tracking-widest mt-0.5">2 HOURS AGO</p>
                  </div>
                </div>
                <button className="text-gray-300 hover:text-gray-600">
                  <MoreHorizontal size={24} />
                </button>
              </div>

              <h3 className="text-xl font-extrabold text-[#111827] mb-3 leading-tight group-hover:text-[#F38821] transition-colors">
                How do you reduce video quality. My data ooo!!! 😔😭
              </h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed mb-10 line-clamp-2">
                Hey everyone, I'm currently going through the curriculum but I noticed that the video 
                player is consuming a lot of data. Is there a way to manually...
              </p>

              <button className="flex items-center gap-2 text-[11px] font-black text-[#F38821] tracking-widest uppercase py-3 px-6 rounded-xl bg-orange-50/50 hover:bg-orange-50">
                <MessageSquare size={14} /> 8 replies
              </button>
            </div>

            {/* Another Discussion Post */}
            <div className="rounded-[32px] bg-white border border-gray-100 p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-50 group">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl overflow-hidden shadow-md">
                    <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#111827]">Sarah Udo</h4>
                    <p className="text-[10px] font-black text-gray-400 tracking-widest mt-0.5">4 HOURS AGO</p>
                  </div>
                </div>
                <button className="text-gray-300 hover:text-gray-600">
                  <MoreHorizontal size={24} />
                </button>
              </div>

              <h3 className="text-xl font-extrabold text-[#111827] mb-3 leading-tight group-hover:text-[#F38821] transition-colors">
                Having problems mastering auto layout
              </h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed mb-10 line-clamp-2">
                Designing with auto layout skews my design. I am more comfortable with using 
                absolute positioning but I know it's not the best practice for responsive...
              </p>

              <button className="flex items-center gap-2 text-[11px] font-black text-[#F38821] tracking-widest uppercase py-3 px-6 rounded-xl bg-orange-50/50 hover:bg-orange-50">
                <MessageSquare size={14} /> 22 replies
              </button>
            </div>
          </div>
        </section>

        {/* Right Sidebar - Status & Pinned */}
        <aside className="w-[340px] shrink-0 p-8 pt-12 space-y-10 hidden xl:block border-l border-gray-50">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">ACTIVE NOW</h3>
            <div className="space-y-6">
              {activeUsers.map((user) => (
                <div key={user.name} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-2xl overflow-hidden shadow-sm">
                        <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 shadow-sm" />
                    </div>
                    <span className="text-sm font-bold text-[#111827] group-hover:text-[#F38821] transition-colors">{user.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">PINNED RESOURCES</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 bg-white shadow-sm hover:border-gray-100 transition-all cursor-pointer">
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-[#111827]">UX_Challenge_Brief.pdf</h4>
                  <p className="text-[10px] font-black text-gray-300 tracking-widest mt-0.5">2.4 MB</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 bg-white shadow-sm hover:border-gray-100 transition-all cursor-pointer">
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-[#111827]">Wireframing_Checklist</h4>
                  <p className="text-[10px] font-black text-gray-300 tracking-widest mt-0.5">NOTION LINK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#F38821] p-8 text-white shadow-2xl shadow-orange-100">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Info size={20} />
              </div>
              <p className="text-[13px] font-bold leading-relaxed">
                Spamming the group or posting contents not related to the internship can 
                get you kicked out of the cohort. Be guided accordingly!
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Community;
