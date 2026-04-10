import { Video, ChevronRight, MessageSquare, Calendar, Star } from "lucide-react";
import mentor from "../assets/images/mentor.png";

function AssignmentsCard() {
  const assignments = [
    { title: "User Flow Video" },
    { title: "Usability Quiz" },
    { title: "Interview Script" },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[12px] font-bold uppercase tracking-wider text-gray-400">ASSIGNMENT(S)</h3>
        <span className="rounded bg-[#F38821] px-2 py-0.5 text-[10px] font-bold text-white shadow-sm shadow-orange-200">3 NEW</span>
      </div>

      <ul className="space-y-4">
        {assignments.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F38821] text-white">
                <Video size={20} fill="currentColor" fillOpacity={0.2} />
              </div>
              <span className="text-sm font-bold text-[#111827] group-hover:text-[#F38821] transition-colors">{item.title}</span>
            </div>
            <ChevronRight size={16} className="text-gray-300 group-hover:text-[#F38821]" />
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-xl border border-gray-100 bg-white py-3 text-[12px] font-bold uppercase tracking-widest text-[#F38821] transition hover:bg-[#F38821]/5">
        VIEW ALL TASKS <ChevronRight size={14} className="inline ml-1 stroke-[3px]" />
      </button>
    </div>
  );
}

function RecentFeedbackCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 className="mb-6 text-[12px] font-bold uppercase tracking-wider text-gray-400">RECENT FEEDBACK</h3>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200">
           <img src={mentor} alt="Mentor" className="h-full w-full object-cover" />
        </div>
        <div>
           <p className="text-sm font-bold text-[#111827]">Mentor Funke Adeyemi</p>
           <p className="text-[10px] font-medium text-gray-400">2h ago</p>
        </div>
      </div>

      <div className="relative rounded-xl bg-indigo-50/50 p-4 mb-6">
        <span className="absolute -left-1 top-2 text-2xl text-gray-300 font-serif">"</span>
        <p className="text-[12px] leading-relaxed text-gray-600 italic">
          Great job on the user personas, Amara. The depth of pain points for the 'Executive' persona shows real empathy...
        </p>
      </div>

      <button className="w-full rounded-xl bg-[#F38821] py-3 text-[12px] font-bold uppercase tracking-widest text-white transition hover:bg-[#e37b1d] shadow-md shadow-orange-100">
        VIEW ALL FEEDBACKS <ChevronRight size={14} className="inline ml-1 stroke-[3px]" />
      </button>
    </div>
  );
}

function MentorCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm text-center">
      <h3 className="mb-6 text-left text-[12px] font-bold uppercase tracking-wider text-gray-400">YOUR MENTOR</h3>
      
      <div className="relative mx-auto mb-4 h-20 w-20">
        <div className="h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl ring-1 ring-gray-100">
          <img src={mentor} alt="Dr. Funke" className="h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-sm" />
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-bold text-[#111827]">Dr. Funke Adeyemi</h4>
        <p className="text-[12px] font-medium text-gray-500">Senior UX Mentor</p>
        
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-green-600">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
          AVAILABLE FOR CHECK-INS
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full rounded-xl border border-gray-100 py-3 text-[13px] font-bold text-gray-400 transition hover:bg-gray-50 hover:text-[#F38821]">
          Send Message
        </button>
        <button className="w-full rounded-xl bg-[#F38821] py-3 text-[13px] font-bold text-white transition hover:bg-[#e37b1d] shadow-lg shadow-orange-100">
          Book a Session
        </button>
      </div>
    </div>
  );
}

export default function DashboardSidebar() {
  return (
    <aside className="space-y-6">
      <AssignmentsCard />
      <RecentFeedbackCard />
      <MentorCard />
    </aside>
  );
}
