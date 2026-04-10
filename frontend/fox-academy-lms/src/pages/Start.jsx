import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import auth3 from "../assets/images/auth3.png";
import { resendInviteCode, verifyInviteCode } from "../services/applicationService";

export default function Start() {
  const RESEND_COOLDOWN_SECONDS = 30;
  const isDev = import.meta.env.DEV;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailParam = searchParams.get("email") || (isDev ? "dev@example.com" : "");
  const codeParam = searchParams.get("code") || (isDev ? "TM-DEV-0000" : "");
  const hasInviteAccess = Boolean(emailParam && codeParam);
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  useEffect(() => {
    if (!hasInviteAccess) {
      navigate("/", { replace: true });
      return;
    }

    setEmail(emailParam);
    setInviteCode(codeParam);
  }, [codeParam, emailParam, hasInviteAccess, navigate]);

  useEffect(() => {
    if (resendCooldown <= 0) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [resendCooldown]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setInfoMessage("");
    setIsSubmitting(true);

    try {
      const response = await verifyInviteCode({
        email,
        code: inviteCode,
      });

      navigate("/application/accepted", {
        state: {
          applicant: response?.data,
        },
      });
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          "We could not verify this code. Please check your email link and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasInviteAccess) {
    return null;
  }

  const handleResend = async () => {
    setError("");
    setInfoMessage("");

    if (resendCooldown > 0) {
      return;
    }

    if (!email) {
      setError("Enter your email first, then resend the code.");
      return;
    }

    setIsResending(true);
    try {
      const response = await resendInviteCode({ email });
      if (response?.invite?.code) {
        setInviteCode(response.invite.code);
      }
      setInfoMessage("A new verification email has been sent. Check your inbox.");
      setResendCooldown(RESEND_COOLDOWN_SECONDS);
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          "We could not resend your code right now. Please try again shortly."
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid h-screen md:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gray-100 md:block">
          <img
            src={auth3}
            alt="Professionals using TalentFlow"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center bg-white px-6 py-10 md:px-21">
          <div className="w-full max-w-md space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-[#F38821]" />
              <span className="text-[20px] font-bold leading-normal text-[#F38821]">
                TalentFlow
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F38821] text-[14px] font-medium text-white">
                1
              </span>
              <span className="h-1 flex-1 bg-[#D1D5DC]" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1D5DC] text-[14px] font-medium text-[#364153]">
                2
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-[28px] font-bold leading-[1.4] text-[#111827]">
                You&apos;ve Been Invited
              </h1>
              <p className="text-[16px] leading-normal text-[#374151]">
                TalentFlow is an invite-only platform. Enter the invite code shared by your cohort coordinator to get started.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-[13px] font-medium text-[#111827]">Email</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[13px] font-medium text-[#111827]">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  required
                  placeholder="e.g. TM-2025-COHORT4"
                  className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                />
                <p className="text-[11px] text-[#6B7280]">
                  Use the link from your email or paste the verification code here.
                </p>
              </div>

              {error ? (
                <p className="rounded-[10px] border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-[13px] text-[#B91C1C]">
                  {error}
                </p>
              ) : null}

              {infoMessage ? (
                <p className="rounded-[10px] border border-[#86EFAC] bg-[#F0FDF4] px-4 py-3 text-[13px] text-[#166534]">
                  {infoMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-bold text-white transition hover:bg-[#e37b1d]"
              >
                {isSubmitting ? "Validating..." : "Validate Code"}
              </button>

              <button
                type="button"
                onClick={handleResend}
                disabled={isResending || resendCooldown > 0}
                className="w-full rounded-[10px] border border-[#F9C899] px-4 py-3 text-[14px] font-semibold text-[#F38821] transition hover:bg-[#FFF8F2]"
              >
                {isResending
                  ? "Resending..."
                  : resendCooldown > 0
                    ? `Resend in ${resendCooldown}s`
                    : "Resend Code"}
              </button>
            </form>

            <p className="text-center text-[13px] text-[#6B7280]">
              Already have an account?{" "}
              <a href="/login" className="font-bold text-[#F38821] hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



