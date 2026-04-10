import { BadgeCheck, CalendarDays, ChevronRight } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import welcome1 from "../assets/images/welcome1.png";

const HERO_IMAGE = welcome1;

export default function ApplicationAccepted() {
  const { token } = useParams();
  const location = useLocation();
  const queryToken = new URLSearchParams(location.search).get("token");
  const accessToken = token || queryToken;
  const applicant = location.state?.applicant;
  const firstName = applicant?.fullName?.split(" ")?.[0] || "Applicant";
  const position = applicant?.primaryDiscipline
    ? `${applicant.primaryDiscipline} Intern`
    : "Intern";

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#F3F3F3] px-4 py-8 md:px-6"
      data-link-access={accessToken ? "email" : "direct"}
    >
      <div className="w-full max-w-xl">
        <div className="flex flex-col gap-10 overflow-hidden rounded-xl bg-white p-6 shadow-[0px_24px_48px_-12px_rgba(0,0,0,0.06)] md:p-12">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#FEF3E9] px-6 py-3">
              <BadgeCheck size={16} className="text-[#F38821]" />
              <p className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#6B7280] md:text-[14px]">
                CODE VALIDATED: {applicant?.inviteCode || "N/A"}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-[#EEEEEE]">
            <img
              src={HERO_IMAGE}
              alt="Celebrating colleagues in an office"
              className="h-55 w-full object-cover opacity-90 grayscale md:h-67.5"
            />
          </div>

          <div className="space-y-2 text-center">
            <p className="text-[12px] uppercase tracking-[2.4px] text-[#6B7280]">
              Onboarding Sequence Complete
            </p>
            <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-1.2px] text-[#111827] md:text-[56px]">
              Welcome, {firstName}.
            </h1>
          </div>

          <div className="rounded-lg bg-[rgba(254,243,233,0.5)] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Position
                </p>
                <p className="text-[24px] font-semibold leading-[1.2] text-[#111827] md:text-[30px]">
                  {position}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Cohort Status
                </p>
                <p className="text-[24px] font-semibold leading-[1.2] text-[#111827] md:text-[30px]">
                  {applicant?.status || "accepted"}
                </p>
              </div>

              <div className="space-y-1 border-t border-[rgba(198,198,198,0.2)] pt-4 md:pt-4.25">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Email
                </p>
                <p className="text-[16px] font-medium text-[#374151]">{applicant?.email || "N/A"}</p>
              </div>

              <div className="space-y-1 border-t border-[rgba(198,198,198,0.2)] pt-4 md:pt-4.25">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Phone Number
                </p>
                <p className="text-[16px] font-medium text-[#374151]">{applicant?.phoneNumber || "N/A"}</p>
              </div>

              <div className="space-y-1 border-t border-[rgba(198,198,198,0.2)] pt-4 md:col-span-2 md:pt-4.25">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Expertise Level
                </p>
                <div className="flex items-center gap-2 text-[14px] font-medium text-[#374151]">
                  <CalendarDays size={14} />
                  <p>{applicant?.expertiseLevel || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/signup"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-medium text-white transition hover:bg-[#e47d1e]"
          >
            Complete My Registration
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
