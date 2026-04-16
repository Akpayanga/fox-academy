import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import { 
  AlertCircle, 
  FileText, 
  HelpCircle, 
  CheckCircle, 
  Eye, 
  ChevronRight,
  Link as LinkIcon 
} from "lucide-react";

const Assignments = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <DashboardNavbar />
      
      <main className="mx-auto max-w-275 px-6 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <div>
            <h1 className="text-[44px] font-black tracking-tight leading-none mb-4">
              ASSIGNMENTS
            </h1>
            <p className="text-gray-500 max-w-xl text-lg">
              Your individual deliverables for Phase 1 — complete and submit each assignment to progress
            </p>
          </div>
          
          {/* Course Progress Card */}
          <div className="mt-8 md:mt-0 bg-[#E0E7FF]/40 rounded-xl p-5 w-full md:w-70">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold tracking-widest text-[#4338CA]/70 uppercase">
                Course Progress
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-2 bg-[#E0E7FF] rounded-full overflow-hidden relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#4338CA] rounded-full" 
                  style={{ width: '18%' }}
                ></div>
                {/* Progress Dot */}
                <div 
                  className="absolute h-3 w-3 bg-[#4338CA] rounded-full border-2 border-white top-1/2 -translate-y-1/2 shadow-sm"
                  style={{ left: 'calc(18% - 6px)' }}
                ></div>
              </div>
              <span className="text-lg font-black text-[#111827]">18%</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-12 border-b border-gray-100">
          <button 
            className="pb-4 text-xs font-bold tracking-widest text-[#F38821] border-b-2 border-[#F38821]"
          >
            ALL
          </button>
          <button 
            className="pb-4 text-xs font-bold tracking-widest text-gray-400 hover:text-[#F38821] transition-colors cursor-pointer"
          >
            PENDING
          </button>
          <button 
            onClick={() => navigate('/assignments/submitted')}
            className="pb-4 text-xs font-bold tracking-widest text-gray-400 hover:text-[#F38821] transition-colors cursor-pointer"
          >
            SUBMITTED
          </button>
          <button 
            className="pb-4 text-xs font-bold tracking-widest text-gray-400 hover:text-[#F38821] transition-colors cursor-pointer"
          >
            GRADED
          </button>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {/* Pending Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xs font-black tracking-widest text-gray-500 uppercase">PENDING</h2>
              <span className="bg-[#F38821] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">4</span>
              <div className="flex-1 h-px bg-gray-100 ml-2"></div>
            </div>

            <div className="space-y-4">
              {/* Card 1: Interview Script */}
              <AssignmentCard 
                icon={<AlertCircle className="text-[#FF4D4D]" size={20} />}
                iconBg="bg-[#FFF1F1]"
                title="Interview Script"
                tag="URGENT"
                tagBg="bg-[#B91C1C]"
                module="Module 2"
                dueDate="Due Mar 22"
                actionText="Complete Task"
                actionType="primary"
                onClick={() =>
                  navigate('/submit-deliverable', {
                    state: {
                      assignmentId: 'interview-script',
                      title: 'Interview Script',
                      module: 'Module 2',
                      dueDate: 'Due Mar 22',
                      brief:
                        'Write a structured interview script that captures user pain points, motivations, and context for research.',
                    },
                  })
                }
              />

              {/* Card 2: User Persona Document */}
              <AssignmentCard 
                icon={<FileText className="text-[#F38821]" size={20} />}
                iconBg="bg-[#FFF7ED]"
                title="User Persona Document"
                tag="IN PROGRESS"
                tagBg="bg-[#EEF2FF]"
                tagColor="text-[#4338CA]"
                module="Module 1"
                dueDate="Due Mar 24"
                actionText="Continue Draft"
                actionType="primary"
                onClick={() =>
                  navigate('/submit-deliverable', {
                    state: {
                      assignmentId: 'user-persona',
                      title: 'User Persona Document',
                      module: 'Module 3: Synthesizing Research Data',
                      dueDate: 'Due Mar 24',
                      brief:
                        'Synthesize your user research into three distinct personas with goals, behaviors, and workflows.',
                    },
                  })
                }
              />

              {/* Card 3: Usability Quiz */}
              <AssignmentCard 
                icon={<HelpCircle className="text-[#F38821]" size={20} />}
                iconBg="bg-[#FFF7ED]"
                title="Usability Quiz"
                module="Module 3"
                dueDate="Due Mar 26"
                actionText="Start Task"
                actionType="secondary"
                onClick={() =>
                  navigate('/submit-deliverable', {
                    state: {
                      assignmentId: 'usability-quiz',
                      title: 'Usability Quiz',
                      module: 'Module 3',
                      dueDate: 'Due Mar 26',
                      brief:
                        'Complete the quiz and submit any supporting notes or files requested by the mentor.',
                    },
                  })
                }
              />

              {/* Card 4: UX Foundations Reflection */}
              <AssignmentCard 
                icon={<HelpCircle className="text-[#F38821]" size={20} />}
                iconBg="bg-[#FFF7ED]"
                title="UX Foundations Reflection"
                module="Module 1"
                dueDate="Due Mar 28"
                actionText="Start Quiz"
                actionType="secondary"
                onClick={() =>
                  navigate('/submit-deliverable', {
                    state: {
                      assignmentId: 'ux-foundations-reflection',
                      title: 'UX Foundations Reflection',
                      module: 'Module 1',
                      dueDate: 'Due Mar 28',
                      brief:
                        'Share your reflection on the foundational UX concepts covered in the module.',
                    },
                  })
                }
              />
            </div>
          </section>

          {/* Submitted Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xs font-black tracking-widest text-gray-500 uppercase">SUBMITTED</h2>
              <span className="bg-[#F38821] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">1</span>
              <div className="flex-1 h-px bg-gray-100 ml-2"></div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-lg bg-[#FFF7ED] flex items-center justify-center">
                  <CheckCircle className="text-[#F38821]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827] mb-1">Week 1 Research Notes</h3>
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <span className="text-[#4338CA]">Under review by instructor</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-gray-400">Submitted Mar 15</span>
                  </div>
                </div>
              </div>
              <button className="text-[10px] font-black tracking-widest text-[#F38821] flex items-center gap-2 hover:underline">
                VIEW DETAILS <ChevronRight size={14} />
              </button>
            </div>
          </section>

          {/* Graded Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xs font-black tracking-widest text-gray-500 uppercase">GRADED</h2>
              <span className="bg-[#F38821] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">1</span>
              <div className="flex-1 h-px bg-gray-100 ml-2"></div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#FFF7ED] flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-xl bg-[#F38821] flex items-center justify-center text-white text-2xl font-black">
                  A
                </div>
                <div className="max-w-md">
                  <h3 className="text-xl font-black text-[#111827] mb-2 uppercase tracking-tight">WEEK 1 REFLECTION</h3>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    "Excellent depth in your analysis of user pain points. Your synthesis of the research data is top-tier."
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-[10px] font-black tracking-widest text-gray-400 mb-1 uppercase">YOUR GRADE</p>
                  <p className="text-4xl font-black text-[#059669]">
                    92<span className="text-gray-300 text-xl">/100</span>
                  </p>
                </div>
                <button className="h-12 w-12 rounded-full bg-[#F38821] flex items-center justify-center text-white shadow-lg shadow-orange-200">
                  <Eye size={24} />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-100 flex justify-end gap-8">
          {['PRIVACY', 'TERMS', 'SUPPORT'].map(link => (
            <button key={link} className="text-[10px] font-black tracking-widest text-[#F38821] hover:underline">
              {link}
            </button>
          ))}
        </footer>
      </main>
    </div>
  );
};

const AssignmentCard = ({ 
  icon, 
  iconBg, 
  title, 
  tag, 
  tagBg, 
  tagColor = "text-white", 
  module, 
  dueDate, 
  actionText, 
  actionType,
  onClick
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-50 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex items-center gap-5 w-full">
        <div className={`h-12 w-12 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-bold text-[#111827]">{title}</h3>
            {tag && (
              <span className={`${tagBg} ${tagColor} text-[8px] font-black px-2 py-0.5 rounded tracking-widest`}>
                {tag}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-[11px] font-bold">
            <span className="text-gray-400 flex items-center gap-1">
              <LinkIcon size={12} className="rotate-45" /> {module}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-200"></span>
            <span className="text-[#FF4D4D]">{dueDate}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 sm:mt-0 w-full sm:w-auto">
        {actionType === 'primary' ? (
          <button 
            onClick={onClick}
            type="button"
            className="w-full sm:w-40 bg-[#F38821] hover:bg-[#E07A1D] text-white text-xs font-black py-3 rounded-full transition-colors shadow-lg shadow-orange-100"
          >
            {actionText}
          </button>
        ) : (
          <button 
            onClick={onClick}
            type="button"
            className="w-full sm:w-40 border-2 border-[#FFF7ED] hover:border-[#F38821] text-[#F38821] text-xs font-black py-3 rounded-full transition-colors"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Assignments;
