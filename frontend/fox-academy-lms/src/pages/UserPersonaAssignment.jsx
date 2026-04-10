import React, { useState, useRef } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { 
  ChevronRight, 
  Download, 
  CheckCircle, 
  CloudUpload, 
  HelpCircle,
  FileText,
  BookOpen,
  X,
  Loader
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserPersonaAssignment = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.add('border-[#F38821]');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.remove('border-[#F38821]');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.remove('border-[#F38821]');
    
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file && !link) {
      setMessage({ type: 'error', text: 'Please upload a file or provide a link' });
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      if (file) formData.append('file', file);
      if (link) formData.append('link', link);
      if (note) formData.append('note', note);
      formData.append('status', 'submitted');

      const response = await axios.post(
        'http://localhost:8000/api/assignments/user-persona/submit',
        formData,
        { 
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true 
        }
      );

      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      const dateString = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
      
      setSubmissionData({
        fileName: file?.name || 'Document',
        fileSize: file ? (file.size / (1024 * 1024)).toFixed(1) : '0',
        time: timeString,
        date: dateString,
        mentor: 'Dr. Funke Adeyemi'
      });
      
      setFile(null);
      setLink("");
      setNote("");
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Submission error:', error);
      setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to submit assignment' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = async () => {
    if (!file && !link && !note) {
      setMessage({ type: 'error', text: 'Nothing to save' });
      return;
    }

    setIsSaving(true);
    try {
      const formData = new FormData();
      if (file) formData.append('file', file);
      if (link) formData.append('link', link);
      if (note) formData.append('note', note);
      formData.append('status', 'draft');

      await axios.post(
        'http://localhost:8000/api/assignments/user-persona/submit',
        formData,
        { 
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true 
        }
      );

      setMessage({ type: 'success', text: 'Draft saved successfully!' });
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error('Draft save error:', error);
      setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to save draft' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <DashboardNavbar />
      
      <main className="flex-1 mx-auto w-full max-w-[1440px] px-6 py-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-medium mb-12">
          <Link 
            to="/assignments" 
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            Assignments
          </Link>
          <ChevronRight size={16} className="text-gray-300" />
          <span className="text-[#F38821]">User Persona Document</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          {/* Left Column: Assignment Details */}
          <div className="space-y-12">
            {/* Header & Description */}
            <section>
              <h1 className="text-4xl font-extrabold text-[#111827] mb-6 tracking-tight">
                User Persona Document
              </h1>
              <div className="space-y-6 text-gray-500 leading-relaxed max-w-2xl">
                <p>
                  For this assignment, you are required to synthesize your user research into three distinct User Personas. 
                  These personas will serve as the foundational archetypes for the rest of your product development cycle.
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Identify core user motivations and pain points based on your interview data</li>
                  <li>Create one primary persona and two secondary personas representing different demographics</li>
                  <li>Include professional goals, technical proficiency, and typical daily workflows for each</li>
                </ul>
              </div>
            </section>

            {/* Linked Learning Section */}
            <section>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 rounded-xl bg-[#F38821] flex items-center justify-center text-white">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-1">
                      LINKED LEARNING
                    </p>
                    <h3 className="text-lg font-bold text-[#111827]">
                      Module 3: Synthesizing Research Data
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-[#F38821] uppercase bg-orange-50 px-3 py-1.5 rounded-full">
                  <CheckCircle size={14} className="fill-[#F38821] text-white" />
                  COMPLETED
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section>
              <h2 className="text-xl font-bold text-[#111827] mb-6">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResourceCard 
                  title="Fox Academy Persona Template.pdf"
                  info="PDF • 2.4 MB"
                />
                <ResourceCard 
                  title="Example User Personas"
                  info="Compressed Archive • 15.8 MB"
                />
              </div>
            </section>

            {/* How You'll Be Graded Section */}
            <section>
              <h2 className="text-xl font-bold text-[#111827] mb-8">How You'll Be Graded</h2>
              <div className="space-y-8">
                <GradingStep 
                  number="01"
                  title="Empathetic Depth"
                  description="Personas clearly demonstrate a deep understanding of the user's emotional state and core frustrations."
                />
                <GradingStep 
                  number="02"
                  title="Visual Hierarchy"
                  description="Information is structured logically, making key demographic data easy to scan and digest."
                />
                <GradingStep 
                  number="03"
                  title="Data-Driven Archetypes"
                  description="All traits listed in the personas are directly traceable back to the research interviews conducted in Module 3."
                />
              </div>
            </section>
          </div>

          {/* Right Column: Submission Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-orange-50/50">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-xl font-black text-[#111827]">Your Submission</h2>
                <div className="text-right">
                  <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Due Date</p>
                  <p className="font-bold text-[#111827]">March 24th</p>
                </div>
              </div>

              {/* Countdown Banner */}
              <div className="bg-[#FFF1F1] rounded-xl p-3 flex items-center gap-3 mb-6">
                <div className="h-5 w-5 bg-[#FFDADA] rounded-full flex items-center justify-center text-[#FF4D4D]">
                   <span className="text-[10px] font-black">!</span>
                </div>
                <span className="text-[10px] font-black tracking-widest text-[#FF4D4D] uppercase">
                  3 DAYS LEFT
                </span>
              </div>

              {/* Upload Area */}
              <input 
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip"
              />
              
              {!file ? (
                <div 
                  ref={dropZoneRef}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-[#FFF7ED] rounded-2xl p-10 flex flex-col items-center justify-center text-center group hover:border-[#F38821] transition-colors cursor-pointer mb-8"
                >
                  <div className="h-16 w-16 rounded-full bg-orange-50 flex items-center justify-center text-[#F38821] mb-4 group-hover:scale-110 transition-transform">
                    <CloudUpload size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-1">Drop your file here</h3>
                  <p className="text-xs text-gray-400 font-medium">or click to browse</p>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center mb-8">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                    <CheckCircle size={32} fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-1">File uploaded</h3>
                  <p className="text-sm text-gray-600 font-medium mb-4">{file.name}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setFile(null); }}
                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
                  >
                    <X size={14} /> Remove file
                  </button>
                </div>
              )}

              {/* Paste Link */}
              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                  PASTE A LINK
                </label>
                <input 
                  type="text" 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://figma.com/..."
                  className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-[#F38821]/20 outline-none placeholder:text-gray-300"
                />
              </div>

              {/* Mentor Note */}
              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                  ADD A NOTE FOR YOUR MENTOR
                </label>
                <textarea 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Any specific areas you'd like feedback on?"
                  rows={4}
                  className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-[#F38821]/20 outline-none placeholder:text-gray-300 resize-none"
                />
              </div>

              {/* Message Display */}
              {message && (
                <div className={`p-4 rounded-xl mb-6 flex items-center gap-3 ${
                  message.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700' 
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  <span className="text-sm font-semibold">{message.text}</span>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-4 text-center">
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#F38821] hover:bg-[#E07A1D] disabled:bg-gray-300 text-white text-sm font-black py-5 rounded-2xl transition-all shadow-lg shadow-orange-100 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                  {isSubmitting && <Loader size={16} className="animate-spin" />}
                  {isSubmitting ? 'Submitting...' : 'Submit Assignment'}
                </button>
                <button 
                  onClick={handleSaveDraft}
                  disabled={isSaving}
                  className="text-[10px] font-black tracking-widest text-gray-400 hover:text-[#F38821] uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 disabled:text-gray-300"
                >
                  {isSaving && <Loader size={12} className="animate-spin" />}
                  {isSaving ? 'Saving...' : 'Save Draft'}
                </button>
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4">
               <div className="h-10 w-10 flex-shrink-0 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#F38821]">
                 <HelpCircle size={20} />
               </div>
               <p className="text-xs font-medium text-gray-500 leading-relaxed">
                 Stuck? <Link to="/faq" className="text-[#F38821] font-bold underline underline-offset-2">Check the FAQ</Link> or message your mentor.
               </p>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-[#F38821] flex items-center justify-center">
                <CheckCircle size={40} className="text-white fill-white" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-[#111827] text-center mb-4">
              Assignment Submitted!
            </h2>

            {/* Message */}
            <p className="text-center text-gray-600 mb-6 text-sm leading-relaxed">
              Your <span className="font-bold text-[#111827]">"User Persona Document"</span> has been successfully sent to <span className="font-bold text-[#F38821]">{submissionData?.mentor}</span> for review.
            </p>

            {/* File Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center text-[#F38821]">
                <FileText size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#111827]">{submissionData?.fileName}</p>
                <p className="text-xs text-gray-500">{submissionData?.fileSize} MB</p>
              </div>
            </div>

            {/* Submission Time */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 ml-1">
              <span>📅 Submitted {submissionData?.date}, {submissionData?.time}</span>
            </div>

            {/* Next Steps Box */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
              <p className="text-xs font-black tracking-widest text-[#F38821] uppercase mb-3">Next Steps</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Your mentor will review your work within 48 hours. You'll receive a notification once your grade and feedback are ready.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => navigate('/assignments')}
                className="w-full bg-[#F38821] hover:bg-[#E07A1D] text-white text-sm font-bold py-4 rounded-2xl transition-all shadow-lg shadow-orange-100 hover:-translate-y-0.5"
              >
                Back to Assignments
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full text-[#F38821] text-sm font-bold py-4 rounded-2xl transition-colors hover:bg-orange-50"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-10 px-6 mt-20">
        <div className="mx-auto max-w-[1440px] flex justify-end gap-10">
          {['PRIVACY', 'TERMS', 'SUPPORT'].map(link => (
            <button 
              key={link} 
              className="text-[10px] font-black tracking-widest text-[#F38821] hover:underline"
            >
              {link}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

const ResourceCard = ({ title, info }) => (
  <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center justify-between group hover:shadow-md transition-all cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#F38821]">
        <FileText size={24} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#111827] mb-0.5">{title}</h4>
        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-tight">{info}</p>
      </div>
    </div>
    <div className="text-gray-300 group-hover:text-[#F38821] transition-colors">
      <Download size={18} />
    </div>
  </div>
);

const GradingStep = ({ number, title, description }) => (
  <div className="flex gap-6 items-start">
    <div className="h-12 w-12 flex-shrink-0 bg-orange-50 rounded-full flex items-center justify-center text-[#F38821] text-xs font-black ring-8 ring-[#FDFDFD]">
      {number}
    </div>
    <div className="pt-1">
      <h4 className="text-lg font-bold text-[#111827] mb-1">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default UserPersonaAssignment;
