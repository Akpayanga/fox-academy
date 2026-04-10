import { Check, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function ApplicationReceived() {
  const location = useLocation();
  const inviteLink = location.state?.inviteLink;
  const emailSent = location.state?.emailSent;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-8">
      <div className="relative w-full max-w-xl rounded-xl bg-white px-6 py-10 text-center md:px-10 md:py-14">
        <Link
          to="/"
          aria-label="Close and return home"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-[#4B5563] transition hover:text-[#111827]"
        >
          <X size={22} strokeWidth={2.25} />
        </Link>

        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#FEF3E9] md:h-24 md:w-24">
          <Check size={42} strokeWidth={2.75} className="text-[#1F2937] md:size-12" />
        </div>

        <p className="mb-3 text-[12px] font-medium uppercase tracking-[2.4px] text-transparent">
          Application received
        </p>
        <h1 className="mx-auto max-w-130 text-[39px] font-bold leading-9 tracking-[-0.75px] text-[#111827] md:text-[42px]">
          Application Success
        </h1>
        <p className="mx-auto mt-3 max-w-148.75 text-[20px] leading-6 text-[#6B7280]">
          We have successfully received your application. Our team is currently reviewing it. If accepted, your invite code will be sent to your email within 24 hours.
        </p>

        {inviteLink ? (
          <div className="mx-auto mt-5 max-w-148.75 rounded-[10px] border border-[#F9C899] bg-[#FFF8F2] px-4 py-3 text-left text-[13px] text-[#6B7280]">
            <p className="font-semibold text-[#111827]">Dev test link:</p>
            <a href={inviteLink} className="break-all text-[#F38821] underline">
              {inviteLink}
            </a>
          </div>
        ) : null}

        {emailSent === false ? (
          <p className="mx-auto mt-4 max-w-148.75 rounded-[10px] border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-[13px] text-[#B91C1C]">
            Invite email could not be sent. Configure SMTP in backend env, then retry.
          </p>
        ) : null}

        <Link
          to="/"
          className="mt-8 inline-flex w-full max-w-115 items-center justify-center rounded-[10px] border border-[#F9C899] px-4 py-3 text-[16px] font-medium text-[#FB8C00] transition hover:bg-[#FFF8F2]"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
