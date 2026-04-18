import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Loader2, ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";
import { getApplicationStatus } from "../services/applicationService";
import Navbar from "../components/Navbar";

export default function ApplicationStatus() {
  const [email, setEmail] = useState("");
  const [statusData, setStatusData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");
    setStatusData(null);

    try {
      const data = await getApplicationStatus(email);
      setStatusData(data.data);
    } catch (err) {
      setError(err?.response?.data?.message || "Could not find an application with this email.");
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return <Clock className="text-yellow-500" size={48} />;
      case "accepted":
        return <CheckCircle className="text-green-500" size={48} />;
      case "rejected":
        return <XCircle className="text-red-500" size={48} />;
      default:
        return <Clock className="text-gray-400" size={48} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "accepted":
        return "bg-green-50 text-green-700 border-green-200";
      case "rejected":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      
      <main className="mx-auto max-w-[600px] px-5 py-20">
        <Link 
          to="/" 
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition hover:text-[#F38821]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="overflow-hidden rounded-2xl border border-[#D1D5DC] bg-white shadow-sm">
          <div className="bg-[#FEF3E9] p-8 text-center border-b border-[#D1D5DC]">
            <h1 className="text-3xl font-bold text-[#111827]">Track Application</h1>
            <p className="mt-2 text-[#4B5563]">Enter your email to check your internship status</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleCheckStatus} className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. jane.doe@example.com"
                    className="w-full rounded-xl border border-[#D1D5DC] bg-white py-4 pl-12 pr-4 text-lg outline-none transition focus:border-[#F38821] focus:ring-4 focus:ring-[#F38821]/10"
                    required
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#99A1AF]" size={20} />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F38821] py-4 text-lg font-bold text-white transition hover:bg-[#E37B1D] disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Checking...
                  </>
                ) : (
                  "Check Status"
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {statusData && (
              <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#D1D5DC] p-10 text-center">
                  <div className="mb-4">
                    {getStatusIcon(statusData.status)}
                  </div>
                  <h2 className="text-xl font-bold text-[#111827]">Your Application is</h2>
                  <div className={`mt-3 inline-block rounded-full border px-6 py-1 text-sm font-bold uppercase tracking-widest ${getStatusColor(statusData.status)}`}>
                    {statusData.status || "Unknown"}
                  </div>
                  
                  <p className="mt-6 text-sm text-[#6B7280]">
                    {statusData.status?.toLowerCase() === "pending" && "Our admissions team is currently reviewing your profile. You'll receive an email once a decision is made."}
                    {statusData.status?.toLowerCase() === "accepted" && "Congratulations! Please check your email for the next steps and your official invite code."}
                    {statusData.status?.toLowerCase() === "rejected" && "Thank you for your interest. Unfortunately, we cannot move forward with your application at this time."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
