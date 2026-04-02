import { BadgeCheck, CalendarDays, ChevronRight } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import welcome1 from "../assets/images/welcome1.png";

const HERO_IMAGE = welcome1;

export default function ApplicationReceived() {
  const { token } = useParams();
  const location = useLocation();
  const queryToken = new URLSearchParams(location.search).get("token");
  const accessToken = token || queryToken;

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#F3F3F3] px-4 py-8 md:px-6"
      data-link-access={accessToken ? "email" : "direct"}
    >
      <div className="w-full max-w-[576px]">
        <div className="flex flex-col gap-10 overflow-hidden rounded-[12px] bg-white p-6 shadow-[0px_24px_48px_-12px_rgba(0,0,0,0.06)] md:p-12">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#FEF3E9] px-6 py-3">
              <BadgeCheck size={16} className="text-[#F38821]" />
              <p className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#6B7280] md:text-[14px]">
                CODE VALIDATED: TM-2026-UX-1906
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[8px] bg-[#EEEEEE]">
            <img
              src={HERO_IMAGE}
              alt="Celebrating colleagues in an office"
              className="h-[220px] w-full object-cover opacity-90 grayscale md:h-[270px]"
            />
          </div>

          <div className="space-y-2 text-center">
            <p className="text-[12px] uppercase tracking-[2.4px] text-[#6B7280]">
              Onboarding Sequence Complete
            </p>
            <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-1.2px] text-[#111827] md:text-[56px]">
              Welcome, Amara.
            </h1>
          </div>

          <div className="rounded-[8px] bg-[rgba(254,243,233,0.5)] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Position
                </p>
                <p className="text-[24px] font-semibold leading-[1.2] text-[#111827] md:text-[30px]">
                  UI/UX Design Intern
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Cohort Status
                </p>
                <p className="text-[24px] font-semibold leading-[1.2] text-[#111827] md:text-[30px]">
                  Phase 1
                </p>
              </div>

              <div className="space-y-1 border-t border-[rgba(198,198,198,0.2)] pt-4 md:col-span-2 md:pt-[17px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#6B7280]">
                  Duration
                </p>
                <div className="flex items-center gap-2 text-[14px] font-medium text-[#374151]">
                  <CalendarDays size={14} />
                  <p>March 17 - June 10, 2024</p>
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
