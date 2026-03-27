import { useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

export default function ForgotPasswordSent() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "amara@gmail.com";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-6 py-10">
      <div className="w-full max-w-[448px] rounded-[10px] border border-[#D1D5DC] bg-white p-10">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FEF3E9]">
            <Mail className="h-8 w-8 text-[#374151]" strokeWidth={1.8} />
          </div>
        </div>

        <h1 className="mb-4 text-center text-[23px] font-bold leading-[1.4] text-[#111827]">
          Reset link sent!
        </h1>
        <p className="mb-6 text-center text-[16px] leading-[1.5] text-[#6B7280]">
          Check your inbox at <span className="font-medium text-[#111827]">{email}</span>. If
          you don&apos;t see it, check your spam folder.
        </p>

        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-medium text-white transition hover:bg-[#e37b1d]"
        >
          Reset Link
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-4 w-full rounded-[10px] px-4 py-3 text-[16px] font-medium text-[#F38821] transition hover:bg-[#FEF3E9]"
        >
          Back to Log In
        </button>
      </div>
    </div>
  );
}
