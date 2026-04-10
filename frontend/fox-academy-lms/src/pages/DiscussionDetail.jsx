import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  ChevronLeft,
  ChevronRight,
  Info,
  Bold,
  Italic,
  Paperclip,
  Send
} from "lucide-react";

import amara from "../assets/images/amara.jpg";

const DiscussionDetail = () => {
  const { id } = useParams();
  const [activeChannel, setActiveChannel] = useState("UX-DESIGN");
  const [activeSubChannel, setActiveSubChannel] = useState("GENERAL");
  const [replyText, setReplyText] = useState("");

  const originalPost = {
    author: "Alex Livinus",
    avatar: "https://i.pravatar.cc/150?u=alex",
    time: "2 hours ago",
    title: "How do you reduce video quality. My data ooo!!! 😔😭",
    content: "Hey everyone, I'm currently going through the curriculum but I noticed the videos are playing at very high resolution. Is there a setting I'm missing to throttle this down? My data sub is crying right now and I really need to finish this module before the weekend.",
    replies: 8,
    views: 324,
    channel: "# ux-design"
  };

  const replies = [
    {
      id: 1,
      author: "Miracle Kalu",
      avatar: "https://i.pravatar.cc/150?u=miracle",
      time: "1h ago",
      content: "I think you can click the gear icon at the bottom right of the video player. There should be a 480p option there."
    },
    {
      id: 2,
      author: "Dr. Funke Adeyemi",
      avatar: "https://i.pravatar.cc/150?u=funke",
      time: "45m ago",
      isMentor: true,
      content: "Hi Alex, we are working on a global data-saver toggle for the dashboard. For now, Miracle's suggestion is the quickest fix!"
    },
    {
      id: 3,
      author: "Amara O.",
      avatar: amara,
      time: "Now",
      isCurrentUser: true,
      content: "Has anyone tried using the mobile app? I feel like it uses less data compared to the web browser version."
    },
    {
      id: 4,
      author: "Sarah Udo",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      time: "1h ago",
      content: "The mobile app actually has an offline download feature too!"
    }
  ];

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

        {/* Main Discussion Thread */}
        <section className="flex-1 bg-[#FDFDFD] p-8 md:p-12 overflow-y-auto">
          {/* Back Button */}
          <Link 
            to="/community" 
            className="mb-10 inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-gray-400 uppercase hover:text-[#F38821] transition-colors"
          >
            <ChevronLeft size={16} />
            Back to # ux-design
          </Link>

          {/* Original Post */}
          <div className="rounded-[40px] bg-white border border-gray-100 p-10 shadow-sm mb-12">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl overflow-hidden shadow-md">
                  <img src={originalPost.avatar} alt="Alex" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#111827]">{originalPost.author}</h4>
                  <p className="text-[10px] font-black text-gray-400 tracking-widest mt-0.5 uppercase">
                    {originalPost.time}
                  </p>
                </div>
              </div>
              <button className="text-gray-300 hover:text-gray-600">
                <MoreHorizontal size={24} />
              </button>
            </div>

            <h3 className="text-2xl font-black text-[#111827] mb-4 leading-tight tracking-tight capitalize">
              {originalPost.title}
            </h3>
            <p className="text-base font-medium text-gray-500 leading-relaxed mb-10">
              {originalPost.content}
            </p>

            <div className="flex items-center gap-8 text-[11px] font-black tracking-widest text-gray-400 uppercase">
              <div className="flex items-center gap-2 text-[#F38821]">
                <MessageSquare size={16} /> {originalPost.replies} replies
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} /> {originalPost.views} views
              </div>
            </div>
          </div>

          {/* Replies Section */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-black tracking-[0.2em] text-[#4F46E5] uppercase mb-8 ml-4">
              {replies.length} REPLIES
            </h3>
            
            <div className="space-y-6">
              {replies.map((reply) => (
                <div 
                  key={reply.id} 
                  className={`rounded-[32px] p-8 border transition-all
                    ${reply.isCurrentUser ? 'bg-white border-orange-100 border-l-4 border-l-[#F38821]' : 'bg-white border-gray-50 shadow-sm'}
                  `}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl overflow-hidden shadow-sm">
                        <img src={reply.avatar} alt={reply.author} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#111827]">{reply.author}</h4>
                          {reply.isMentor && (
                            <span className="rounded bg-[#4F46E5] px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white">
                              Mentor
                            </span>
                          )}
                        </div>
                        <p className="text-[9px] font-black text-gray-400 tracking-widest uppercase">
                          {reply.time}
                        </p>
                      </div>
                    </div>
                    
                    {reply.isCurrentUser && (
                      <div className="flex gap-4">
                        <button className="text-[10px] font-black text-[#F38821] tracking-widest uppercase hover:underline">Edit</button>
                        <button className="text-[10px] font-black text-red-500 tracking-widest uppercase hover:underline">Delete</button>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm font-medium text-gray-600 leading-relaxed pl-1">
                    {reply.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Reply Input Bar */}
          <div className="mt-12 sticky bottom-0 bg-[#FDFDFD]/90 backdrop-blur-md pt-4 pb-8">
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-[32px] p-3 shadow-xl shadow-gray-100/50">
              <div className="h-10 w-10 rounded-full overflow-hidden shrink-0">
                <img src={amara} alt="Amara" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 flex items-center gap-4">
                <input 
                  type="text" 
                  placeholder="Write a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="flex-1 text-sm font-medium text-gray-700 outline-none bg-transparent"
                />
                <div className="flex items-center gap-4 pr-2">
                  <button className="text-gray-300 hover:text-gray-600 transition-colors">
                    <Bold size={18} />
                  </button>
                  <button className="text-gray-300 hover:text-gray-600 transition-colors">
                    <Italic size={18} />
                  </button>
                  <button className="text-gray-300 hover:text-gray-600 transition-colors">
                    <Paperclip size={18} />
                  </button>
                  <button className="h-10 px-6 rounded-2xl bg-[#F38821] text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-[#e37b1d] shadow-lg shadow-orange-100">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar - Status & Pinned (Same as Community) */}
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

          <div className="relative overflow-hidden rounded-[32px] bg-[#F38821] p-8 text-white shadow-2xl shadow-orange-100/50">
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

export default DiscussionDetail;
