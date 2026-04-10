import React, { useState } from "react";
import EstherImg from "../assets/images/Esther.png";
import DavidImg from "../assets/images/David.png";
import TomImg from "../assets/images/tom.png";
import ObiImg from "../assets/images/obi.png";
import JohnImg from "../assets/images/john.png";
import MayowaImg from "../assets/images/mayowa.png";
import SarahImg from "../assets/images/sarah.png";
import AliceImg from "../assets/images/alice.png";
import MemberA from "../assets/images/member-a.png";
import MemberB from "../assets/images/member-b.png";
import MemberC from "../assets/images/member-c.png";
import MemberD from "../assets/images/member-d.png";

export default function TeamList() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "UI Design",
    "Frontend",
    "Backend",
    "Project",
    "Social Media",
    "Graphics Design",
  ];

  return (
    <div className="lg:col-span-2 space-y-10">
      {/* Header Area */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Team Foxtrot</h1>
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-semibold text-[#F38821] lowercase tracking-wide">
            20 members <span className="mx-1">•</span> 5 disciplines
          </p>

          {/* Header Avatars - Updated to use your local member assets */}
          <div className="flex -space-x-2">
            <img
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
              src={MemberA}
              alt="Member"
            />
            <img
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
              src={MemberB}
              alt="Member"
            />
            <img
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
              src={AliceImg}
              alt="Member"
            />
            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-600">
              +17
            </div>
          </div>
        </div>

     
      <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search members..."
            className="w-full bg-white border border-gray-100 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-[11px] font-bold tracking-wide transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

     
      <section>
        <h2 className="text-[10px] font-bold text-[#F38821] uppercase tracking-[0.15em] mb-4">
          Overall Team Lead
        </h2>
        <div className="bg-[#DD7C1E] rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-sm gap-4">
          <div className="flex items-center gap-4">
            <img
              src={ObiImg}
              className="w-14 h-14 rounded-full border-2 border-white/30 object-cover"
              alt="Amara Obi"
            />
            <div>
              <h3 className="text-lg font-bold">Amara Obi</h3>
              <p className="text-[11px] font-semibold text-orange-100 tracking-wide mt-0.5">
                UX Design • Strategic Lead
              </p>
            </div>
          </div>
          <button className="w-full md:w-auto bg-white text-[#E67E22] px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-orange-50 transition">
            Send Message
          </button>
        </div>
      </section>

      
      <section>
        <h2 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.15em] mb-4">
          UI/UX Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MemberCard
            name="Esther Kolawole"
            role="UX Design"
            img={EstherImg}
            isLead={true}
          />
          <MemberCard name="John Sopuruchukwu" role="UX Design" img={JohnImg} />
          <MemberCard
            name="Amara Obi"
            role="UX Design"
            img={ObiImg}
            isYou={true}
          />
          <MemberCard name="Mayowa Williams" role="UX Design" img={MayowaImg} />
        </div>
      </section>

     
      <section>
        <h2 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.15em] mb-4">
          Frontend
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MemberCard
            name="David Leonard"
            role="Frontend"
            img={DavidImg}
            isLead={true}
          />
          <MemberCard name="Sarah Richards" role="Frontend" img={SarahImg} />
          <MemberCard name="Tom Holland" role="Frontend" img={TomImg} />
          <MemberCard name="Alice Chris" role="Frontend" img={AliceImg} />
        </div>
      </section>

     
      <section>
        <h2 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.15em] mb-4">
          Backend & Systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MemberCard
            name="Backend Member"
            role="Database Admin"
            img={MemberC}
          />
          <MemberCard name="System Architect" role="DevOps" img={MemberD} />
        </div>
      </section>
    </div>
  );
}

// Helper Component
function MemberCard({ name, role, img, isLead, isYou }) {
  return (
    <div className="bg-white border border-gray-100 rounded-[20px] p-5 flex items-start justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <img
          src={img}
          className="w-10 h-10 rounded-full bg-gray-100 object-cover mt-0.5"
          alt={name}
        />
        <div className="flex flex-col items-start">
          <p className="text-sm font-bold text-gray-900 leading-none mb-1.5">
            {name}
          </p>
          <p className="text-[10px] text-gray-500 font-medium mb-2 leading-none uppercase">
            {role}
          </p>

          <div className="flex flex-col gap-1">
            {isLead && (
              <span className="bg-[#E67E22] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                Team Lead
              </span>
            )}
            {isYou && (
              <span className="bg-[#E67E22] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                You
              </span>
            )}
          </div>
        </div>
      </div>
      <button className="text-[#E67E22] text-[10px] font-bold hover:underline mt-0.5">
        Send Message
      </button>
    </div>
  );
}
