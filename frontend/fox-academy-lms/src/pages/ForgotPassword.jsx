import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    navigate("/forgot-password/sent", { state: { email } });
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
          Forgot Password?
        </h1>
        <p className="mb-6 text-center text-[16px] leading-normal text-[#6B7280]">
          Enter your email address and we&apos;ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#111827]">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="e.g. amara@email.com"
              className="w-full rounded-[10px] border border-[#D1D5DC] px-4 py-3 text-[13px] text-[#111827] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
            />
            {error ? <p className="mt-2 text-xs text-red-500">{error}</p> : null}
          </div>

          <button
            type="submit"
            className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-medium text-white transition hover:bg-[#e37b1d]"
          >
            Send Reset Link
          </button>
        </form>

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
