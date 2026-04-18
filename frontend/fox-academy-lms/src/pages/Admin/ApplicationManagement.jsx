import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Search, Info, Check, X, RefreshCw } from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";
import amara from "../../assets/images/amara.jpg";
import {
  getPendingApplications,
  approveApplication,
  rejectApplication,
} from "../../services/managementService";

export default function ApplicationManagement() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await getPendingApplications();
      setApplications(res.data || []);
    } catch (err) {
      console.error("Failed to fetch applications", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleApprove = async (id) => {
    setActionLoading(id);
    try {
      await approveApplication(id);
      fetchApplications();
    } catch (err) {
      console.error("Approval failed", err);
      setActionLoading(null);
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Are you sure you want to reject this application?")) return;
    setActionLoading(id);
    try {
      await rejectApplication(id);
      fetchApplications();
    } catch (err) {
      console.error("Rejection failed", err);
      setActionLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-16">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src={foxLogo} alt="Fox Academy Logo" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-[#D97706]">
                Fox Academy
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#111827] uppercase mt-1">
                Global Admin
              </span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
            <Link to="/control-room/dashboard" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">
              Dashboard
            </Link>
            <Link to="/control-room/applications" className="text-[#D97706] border-b-2 border-[#D97706] pb-1">
              Applications
            </Link>
            <Link to="/control-room/mentors" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">
              Mentors
            </Link>
            <Link to="/control-room/interns" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">
              Interns
            </Link>
            <Link to="/control-room/cohorts" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">
              Cohorts
            </Link>
            <Link to="/control-room/analytics" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">
              Analytics
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-black">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#111827] leading-tight">
                  Bola Aseyan
                </p>
                <p className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-widest leading-tight">
                  Global Admin
                </p>
              </div>
              <img
                src={amara}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border border-gray-200"
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1400px] px-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#111827] mb-1">
              Pending Applications
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Review and approve prospective candidates into the Academy.
            </p>
          </div>
          <button 
            onClick={fetchApplications}
            className="flex items-center gap-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 px-4 py-2.5 text-sm font-bold text-gray-700 transition w-max shadow-sm"
          >
            <RefreshCw size={16} /> Refresh
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start">
          <div className="flex-1 w-full min-w-0 bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between bg-white">
              <div className="relative w-full md:max-w-md">
                <Search size={16} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search applicants..."
                  className="w-full bg-gray-50 border border-gray-200 rounded py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#D97706] text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#FFF8EE] border-b border-gray-100">
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Applicant Name
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Email
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Discipline
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Experience
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Submitted Date
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold">
                      Status
                    </th>
                    <th className="px-5 py-4 text-[10px] uppercase tracking-widest text-[#5A3B1C] font-bold text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="px-5 py-8 text-center text-gray-500">
                        Loading applications...
                      </td>
                    </tr>
                  ) : applications.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-5 py-8 text-center text-gray-500">
                        No pending applications available.
                      </td>
                    </tr>
                  ) : (
                    applications.map((app) => (
                      <tr key={app._id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="px-5 py-4 text-[#111827] font-bold">
                          {app.fullName}
                        </td>
                        <td className="px-5 py-4 text-gray-600">{app.email}</td>
                        <td className="px-5 py-4 text-gray-600">{app.primaryDiscipline}</td>
                        <td className="px-5 py-4 text-gray-600">{app.expertiseLevel}</td>
                        <td className="px-5 py-4 text-gray-600">
                          {new Date(app.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-5 py-4">
                          <span className="inline-flex rounded-sm bg-[#F59E0B] px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider text-white">
                            {app.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleApprove(app._id)}
                              disabled={actionLoading === app._id}
                              className="bg-[#4CAF50] text-white p-1.5 rounded-sm hover:bg-[#388E3C] transition disabled:opacity-50"
                              title="Approve & Send Invitation"
                            >
                              <Check size={16} />
                            </button>
                            <button
                              onClick={() => handleReject(app._id)}
                              disabled={actionLoading === app._id}
                              className="bg-[#E53935] text-white p-1.5 rounded-sm hover:bg-[#D32F2F] transition disabled:opacity-50"
                              title="Reject Application"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full xl:w-[320px] flex-shrink-0 space-y-6">
            <div className="bg-[#D97706] rounded-md p-6 text-white shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Info size={16} className="text-white" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest">
                  Approval Process
                </h3>
              </div>
              <p className="text-xs leading-relaxed opacity-95 mb-6 font-medium pr-2">
                Approving an application will automatically generate a unique Fox Academy identifier, create their system profile, and email them a verified invitation link with their code. They will have 10 minutes to verify.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
