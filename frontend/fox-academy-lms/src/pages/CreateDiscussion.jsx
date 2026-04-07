import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import { 
  ChevronDown, 
  Hash, 
  ChevronLeft,
  Bold,
  Italic,
  Link as LinkIcon,
  Paperclip,
  Upload,
  Info
} from "lucide-react";

const CreateDiscussion = () => {
  const navigate = useNavigate();
  const [activeChannel, setActiveChannel] = useState("UX-DESIGN");
  const [activeSubChannel, setActiveSubChannel] = useState("GENERAL");
  const [selectedTag, setSelectedTag] = useState("Wireframing");
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const channels = [
    { name: "UX-DESIGN", subChannels: ["GENERAL", "SOCIALS", "SHOWCASE"], expanded: true },
    { name: "FRONTEND", subChannels: [], expanded: false },
    { name: "BACKEND", subChannels: [], expanded: false },
    { name: "PROJECT MANAGEMENT", subChannels: [], expanded: false },
    { name: "GRAPHICS DESIGN", subChannels: [], expanded: false },
    { name: "DATA ANALYSIS", subChannels: [], expanded: false },
    { name: "VIDEO EDITING", subChannels: [], expanded: false },
  ];

  const tags = ["Wireframing", "User Research", "Feedback", "Career", "Tools"];

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <DashboardNavbar />
      
      <main className="flex-1 flex max-w-[1440px] mx-auto w-full">
        {/* Left Sidebar - Channels (Shared) */}
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

        {/* Main Creation Form */}
        <section className="flex-1 bg-[#FDFDFD] p-8 md:p-12 overflow-y-auto">
          {/* Back Button */}
          <Link 
            to="/community" 
            className="mb-8 inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-gray-400 uppercase hover:text-[#F38821] transition-colors"
          >
            <ChevronLeft size={16} />
            Back to # ux-design
          </Link>

          <header className="mb-10">
            <h1 className="text-4xl font-black text-[#111827] tracking-tight mb-4">Start a Discussion</h1>
            <div className="inline-flex rounded-full bg-[#4F46E5] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-100">
              Posting in # ux-design • UX Design Channel
            </div>
          </header>

          <div className="space-y-10 max-w-3xl">
            {/* Title Input */}
            <div className="space-y-3">
              <label className="text-[12px] font-black text-[#111827] uppercase tracking-widest ml-1">Discussion Title</label>
              <input 
                type="text" 
                placeholder="Give your discussion a clear, specific title..."
                className="w-full rounded-2xl border border-gray-100 bg-white px-6 py-4 text-sm font-medium outline-none transition-all focus:border-[#F38821] focus:ring-4 focus:ring-orange-50 shadow-sm"
              />
            </div>

            {/* Body Content */}
            <div className="space-y-3">
              <label className="text-[12px] font-black text-[#111827] uppercase tracking-widest ml-1">What's on your mind?</label>
              <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm transition-all focus-within:border-[#F38821] focus-within:ring-4 focus-within:ring-orange-50">
                <div className="flex items-center gap-6 border-b border-gray-50 px-8 py-4 bg-gray-50/30">
                  <button className="text-gray-400 hover:text-[#111827] transition-colors"><Bold size={18} /></button>
                  <button className="text-gray-400 hover:text-[#111827] transition-colors"><Italic size={18} /></button>
                  <button className="text-gray-400 hover:text-[#111827] transition-colors"><LinkIcon size={18} /></button>
                  <button className="text-gray-400 hover:text-[#111827] transition-colors"><Paperclip size={18} /></button>
                </div>
                <textarea 
                  placeholder="Ask a question, share a resource..."
                  rows={8}
                  className="w-full px-8 py-6 text-sm font-medium outline-none bg-transparent resize-none"
                />
              </div>
            </div>

            {/* Tag Selector */}
            <div className="space-y-3">
              <label className="text-[12px] font-black text-[#111827] uppercase tracking-widest ml-1">TAG (OPTIONAL)</label>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`rounded-full px-5 py-2 text-[10px] font-black tracking-widest transition-all
                      ${selectedTag === tag ? 'bg-[#F38821] text-white shadow-lg shadow-orange-100' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* File Attachment */}
            <div className="space-y-3">
              <label className="text-[12px] font-black text-[#111827] uppercase tracking-widest ml-1">ATTACH A FILE (OPTIONAL)</label>
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
                className={`flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed p-12 transition-all cursor-pointer
                  ${isDragging ? 'border-[#F38821] bg-orange-50/50' : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50/30'}`}
              >
                <input 
                  type="file" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                />
                <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center text-[#F38821] mb-4">
                  <Upload size={32} />
                </div>
                <p className="text-sm font-bold text-gray-500">
                  {fileName ? fileName : <>Drag and drop or <span className="text-[#F38821]">click to upload</span></>}
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-gray-300">
                  PDF, JPG, PNG, FIG UP TO 10MB
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between border-t border-gray-50">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-gray-300 text-[#F38821] focus:ring-[#F38821]" />
                <span className="text-sm font-bold text-gray-500 group-hover:text-[#111827] transition-colors">Notify me when someone replies</span>
              </label>

              <div className="flex items-center gap-4">
                <Link 
                  to="/community"
                  className="px-8 py-4 rounded-2xl border border-orange-100 text-[12px] font-black uppercase tracking-widest text-[#F38821] transition-all hover:bg-orange-50"
                >
                  Cancel
                </Link>
                <button className="px-10 py-4 rounded-2xl bg-[#F38821] text-[12px] font-black uppercase tracking-widest text-white shadow-xl shadow-orange-100 transition-all hover:bg-[#e37b1d]">
                  Post
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar - Tips & Rules */}
        <aside className="w-[340px] shrink-0 p-8 pt-12 space-y-10 hidden xl:block border-l border-gray-50">
          <div className="rounded-[32px] bg-white border border-gray-50 p-8 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">TIPS FOR A GOOD POST</h3>
            <div className="space-y-8">
              {[
                { num: "01", text: "Be descriptive with your title. Use keywords that make it easy to find." },
                { num: "02", text: "Provide context or screenshots if you're asking for feedback on designs." },
                { num: "03", text: "Tag your post correctly to ensure the right experts see your question." }
              ].map((tip) => (
                <div key={tip.num} className="flex gap-4">
                  <span className="text-sm font-black text-[#F38821]">{tip.num}</span>
                  <p className="text-[13px] font-medium leading-relaxed text-gray-500">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#F38821] p-8 text-white shadow-2xl shadow-orange-100/50">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Info size={20} />
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-60">NOTE</p>
                 <p className="text-[13px] font-bold leading-relaxed">
                   Be mindful of the Fox Academy Code of Conduct. Keep discussions professional, supportive, and focused on collective growth. Avoid sharing sensitive personal data.
                 </p>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default CreateDiscussion;
