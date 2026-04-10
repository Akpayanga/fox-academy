import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { resendPasswordReset } from "../services/authService";

export default function ForgotPasswordSent() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "amara@gmail.com";
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiMessage, setApiMessage] = useState("");

  const handleResend = async () => {
    setApiError("");
    setApiMessage("");
    setIsLoading(true);

    try {
      const data = await resendPasswordReset({ email });
      setApiMessage(data?.message || "Reset link sent again. Please check your inbox.");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Unable to resend reset link right now. Please try again.";
      setApiError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-6 py-10">
      <div className="w-full max-w-md rounded-[10px] border border-[#D1D5DC] bg-white p-10">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FEF3E9]">
            <Mail className="h-8 w-8 text-[#374151]" strokeWidth={1.8} />
          </div>
        </div>

        <h1 className="mb-4 text-center text-[23px] font-bold leading-[1.4] text-[#111827]">
          Reset link sent!
        </h1>
        <p className="mb-6 text-center text-[16px] leading-normal text-[#6B7280]">
          Check your inbox at <span className="font-medium text-[#111827]">{email}</span>. If
          you don&apos;t see it, check your spam folder.
        </p>

        {apiMessage ? (
          <p className="mb-4 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
            {apiMessage}
          </p>
        ) : null}

        {apiError ? (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {apiError}
          </p>
        ) : null}

        <button
          type="button"
          onClick={handleResend}
          disabled={isLoading}
          className="w-full rounded-[10px] border border-[#F38821] bg-transparent px-4 py-3.5 text-[15px] font-semibold text-[#F38821] transition hover:bg-[#F38821]/5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Reset Link"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-6 w-full text-[14px] font-medium text-[#F38821] transition hover:underline"
        >
          Back to Log In
        </button>
      </div>
    </div>
  );
}
