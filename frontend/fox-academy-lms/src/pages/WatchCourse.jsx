import React, { useMemo, useEffect } from 'react';
import { ChevronRight, Play, FileText, Download, Maximize, CheckCircle2 } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import { coursesData, userProgress } from '../data/courses';

export default function WatchCourse() {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();

  const activeCourseId = courseId || "ux-research";
  const activeModuleId = moduleId || "m2";

  const course = coursesData[activeCourseId];
  const progress = userProgress[activeCourseId];

  useEffect(() => {
    if (!course) {
      navigate('/dashboard');
    }
  }, [course, navigate]);

  if (!course) return null;

  const currentModuleIndex = course.modules.findIndex(m => m.id === activeModuleId);
  const activeModule = course.modules[currentModuleIndex] || course.modules[0];

  const hasNext = currentModuleIndex < course.modules.length - 1;
  const hasPrev = currentModuleIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      navigate(`/course/${activeCourseId}/module/${course.modules[currentModuleIndex + 1].id}`);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      navigate(`/course/${activeCourseId}/module/${course.modules[currentModuleIndex - 1].id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#111827]">
      <AppNavbar />

      <main className="mx-auto w-full max-w-[1280px] px-5 py-6 md:px-10 lg:flex lg:gap-8">
        
        <div className="flex-1 flex flex-col gap-6">
          
          <div className="text-[10px] md:text-xs font-bold text-[#6B7280] tracking-wider uppercase flex items-center gap-2 flex-wrap">
            <span>MY LEARNING</span>
            <ChevronRight className="w-3 h-3 text-[#D1D5DC]" />
            <span className="truncate max-w-[150px] md:max-w-[200px]">{course.title}</span>
            <ChevronRight className="w-3 h-3 text-[#D1D5DC]" />
            <span className="text-[#4F46E5] whitespace-nowrap">MODULE {activeModule.moduleNumber}</span>
          </div>
          <div>
            <span className="text-[#4F46E5] text-[10px] md:text-xs font-bold tracking-wider uppercase inline-block mb-3">
              {course.categoryId}
            </span>
            <h1 className="text-[28px] md:text-[36px] font-bold leading-tight mb-2">
              {activeModule.title}
            </h1>
            <h2 className="text-[#6B7280] text-xs font-bold tracking-wider uppercase mt-4 mb-2">
              MODULE {activeModule.moduleNumber} OF {course.totalModules}
            </h2>
          </div>
          <div className="w-full bg-[#D1D5DC] rounded-xl aspect-video relative flex flex-col justify-end overflow-hidden group shadow-sm">
            {activeModule.type === 'quiz' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-center p-6">
                <FileText className="w-16 h-16 text-[#F38821] mb-4" />
                <h3 className="text-xl font-bold mb-2">Time for a Quiz</h3>
                <p className="text-sm text-gray-500 max-w-sm mb-6">Complete this assessment to prove your knowledge and move forward.</p>
                <button className="bg-[#F38821] text-white px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-[#E37A1D]">
                  Start Quiz
                </button>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center bg-orange-500/5">
                  <button className="w-16 h-16 md:w-20 md:h-20 bg-orange-700 rounded-full flex items-center justify-center text-white hover:bg-orange-700/90 transition-transform hover:scale-105 shadow-lg relative left-1">
                    <Play className="w-8 h-8 md:w-10 md:h-10 fill-white" />
                  </button>
                </div>
                
                <div className="bg-linear-to-t from-orange-600/50 to-transparent p-4 flex items-center gap-4 relative z-10 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-white hover:text-[#F38821]">
                    <Play className="w-5 h-5 fill-white" />
                  </button>
                  
                  <div className="flex-1 h-1.5 bg-white/30 rounded-full cursor-pointer relative">
                    <div className="absolute top-0 left-0 h-full bg-white rounded-full w-[2%]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow translate-x-1.5"></div>
                    </div>
                  </div>

                  <span className="text-white text-xs font-medium">{activeModule.videoUrl}</span>
                  <button className="text-white hover:text-white/80 ml-2">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-[22px] font-bold mb-4">About this module</h3>
            <p className="text-[#6B7280] text-[15px] leading-relaxed max-w-[800px]">
              {activeModule.description}
            </p>
          </div>

          <hr className="border-[#E5E7EB] my-2" />

          {activeModule.resources && activeModule.resources.length > 0 && (
            <div>
              <h3 className="text-xs font-bold tracking-wider uppercase mb-5">
                LEARNING RESOURCES
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {activeModule.resources.map((res) => (
                  <div key={res.id} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow flex-1">
                    <div className="w-12 h-12 bg-[#F38821] rounded-xl flex items-center justify-center text-white shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{res.title}</h4>
                      <p className="text-xs text-[#6B7280] mt-1">{res.size}</p>
                    </div>
                    <button className="text-[#F38821] hover:text-[#E37A1D] p-2 hover:bg-[#FFF7ED] rounded-lg transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeModule.resources && activeModule.resources.length > 0 && (
            <hr className="border-[#E5E7EB] my-4" />
          )}

          <div className="flex items-center justify-between pb-10 mt-4">
            <button 
              onClick={handlePrev}
              disabled={!hasPrev}
              className={`border px-5 md:px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 text-sm shadow-sm transition-colors
                ${hasPrev ? 'border-[#F38821] text-[#F38821] hover:bg-[#FFF7ED]' : 'border-gray-200 text-gray-400 cursor-not-allowed'}
              `}
            >
              <ChevronRight className="w-4 h-4 rotate-180" /> Previous Module
            </button>
            
            <button 
              onClick={handleNext}
              disabled={!hasNext}
              className={`px-5 md:px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 text-sm shadow-sm transition-colors
                ${hasNext ? 'bg-[#F38821] text-white hover:bg-[#E37A1D]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
              `}
            >
              Next Module <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
        </div>
        <div className="w-full lg:w-[340px] flex flex-col gap-6 lg:shrink-0 mt-8 lg:mt-0">
          
          <div className="bg-[#EEF2FF] rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold tracking-wider uppercase mb-3 text-[#111827]">COURSE PROGRESS</h3>
              <div className="w-20 bg-[#D1D5DC] rounded-full h-1 mt-1">
                <div className="bg-[#4F46E5] h-1 rounded-full relative" style={{ width: `${progress?.progressPercent || 0}%` }}></div>
              </div>
            </div>
            <span className="text-[32px] font-bold text-[#4F46E5] leading-none">
              {String(progress?.progressPercent || 0).padStart(2, '0')}%
            </span>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="bg-[#F38821] px-5 py-4">
              <h3 className="text-white text-[11px] font-bold tracking-wider uppercase">COURSE SYLLABUS</h3>
            </div>
            
            <div className="flex flex-col">
              {course.modules.map((mod, index) => {
                const isActive = mod.id === activeModuleId;
                const isCompleted = progress?.completedModules?.includes(mod.id);
                const isLocked = !isCompleted && !isActive && mod.type === 'quiz';

                return (
                  <Link
                    key={mod.id}
                    to={`/course/${activeCourseId}/module/${mod.id}`}
                    className={`
                      relative p-5 flex gap-4 transition-colors hover:bg-gray-50
                      ${isActive ? 'bg-[#FFF7ED] hover:bg-[#FFF7ED]' : ''}
                      ${index !== course.modules.length - 1 && !isActive && course.modules[index + 1]?.id !== activeModuleId ? 'border-b border-gray-50' : ''}
                    `}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F38821]"></div>
                    )}
                    
                    <div className="shrink-0 mt-0.5 relative z-10 w-6 h-6 flex justify-center">
                      {isCompleted && !isActive && (
                        <div className="w-5 h-5 bg-[#F38821] rounded-full flex items-center justify-center text-white mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                      )}
                      {(isActive || (!isCompleted && !isLocked)) && (
                        <div className={`w-6 h-6 border-[1.5px] rounded-full flex items-center justify-center text-[10px] font-bold 
                          ${isActive ? 'border-[#F38821] text-[#F38821] bg-[#FFF7ED]' : 'border-[#9CA3AF] text-[#6B7280] bg-white'}
                        `}>
                          {mod.moduleNumber}
                        </div>
                      )}
                      {isLocked && (
                        <div className="w-5 h-5 bg-[#F3F4F6] border border-gray-200 rounded-md flex items-center justify-center text-[#9CA3AF] mt-0.5">
                          <span className="text-[11px] font-bold">?</span>
                        </div>
                      )}                      
                      {index !== course.modules.length - 1 && (
                        <div className={`absolute top-6 bottom-[-20px] w-px ${isActive ? 'bg-[#F38821]/30' : 'bg-gray-100'} left-1/2 -mt-0.5 z-0`}></div>
                      )}
                    </div>

                    <div className="flex-1 pb-1">
                      <h4 className={`text-[10px] font-bold tracking-wider uppercase mb-1.5 flex items-center gap-1.5 ${isActive ? 'text-[#F38821]' : 'text-[#6B7280]'}`}>
                        MODULE {mod.moduleNumber} 
                        {isActive && <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-[#F38821] rounded-full"></span> CURRENT</span>}
                      </h4>
                      <p className={`text-sm ${isActive ? 'font-semibold text-[#111827]' : 'text-[#6B7280]'}`}>
                        {mod.title}
                      </p>
                      
                      {isActive && mod.type !== 'quiz' && (
                        <div className="mt-3.5 mb-1">
                          <div className="w-full bg-[#FFEDD5] rounded-full h-[3px]">
                            <div className="bg-[#F38821] h-[3px] rounded-full relative" style={{ width: '2%' }}></div>
                          </div>
                          <p className="text-[#4F46E5] text-[10px] font-bold mt-2">
                            02% watched
                          </p>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {course.upNext && (
            <div className="bg-[#F38821] rounded-xl p-5 md:p-6 text-white shadow-sm flex flex-col gap-4">
              <h3 className="text-[10px] font-bold tracking-wider uppercase">UP NEXT IN PATHWAY</h3>
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-white rounded-xl shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[15px] leading-tight mb-2">{course.upNext.title}</h4>
                  <p className="text-white/80 text-[11px] font-medium">{course.upNext.info}</p>
                </div>
              </div>
            </div>
          )}    
        </div>
      </main>
      <div className="flex max-w-[1280px] w-full mx-auto justify-end gap-5 mt-16 pb-8 text-[11px] font-bold tracking-wider uppercase">
            <Link to="#privacy" className="text-[#F38821] hover:text-[#E37A1D] hover:underline">PRIVACY</Link>
            <Link to="#terms" className="text-[#F38821] hover:text-[#E37A1D] hover:underline">TERMS</Link>
            <Link to="#support" className="text-[#F38821] hover:text-[#E37A1D] hover:underline">SUPPORT</Link>
          </div>
    </div>
  );
}
