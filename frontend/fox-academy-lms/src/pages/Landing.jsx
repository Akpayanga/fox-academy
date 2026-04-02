import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import auth1 from "../assets/images/auth1.png";
import { AppWindow, UsersRound, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />

      <section className="border-t border-[#F38821]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-14 md:grid-cols-[1fr_540px] md:items-center md:px-10">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-[#4B5563]">
              FOXACADEMY INNOVATIONS — INTERNAL LEARNING PLATFORM
            </p>

            <h1 className="text-5xl font-bold leading-[1.2] text-[#374151] md:text-[48px]">
              Where <span className="text-orange-500">Talent</span> Gets
              <br />
              Trained, Tested, and
              <br />
              Transformed
            </h1>

            <p className="mt-8 max-w-[640px] text-[16px] leading-relaxed text-[#374151]">
              TalentFlow is Trueminds&apos; official learning environment for interns,
              mentors, and team leads. Access your courses, track your progress,
              collaborate with your cohort, and build real products that solve real
              business problems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/application"
                className="rounded-xl bg-[#F38821] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#e37b1d]"
              >
                Join with Invite Code
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-[#F38821] px-6 py-3 text-lg font-semibold text-[#F38821] transition hover:bg-[#FFF7ED]"
              >
                Log In to Your Account
              </Link>
            </div>

            <p className="mt-5 text-base text-[#6B7280]">
              Don&apos;t have an invite? Speak to your cohort coordinator.
            </p>
          </div>

          <img
            src={auth1}
            alt="Student on TalentFlow"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-14 md:grid-cols-3 md:px-10">
        <FeatureCard
          title="Structured Learning"
          text="Access video lessons, PDF resources, text modules, and live sessions - all organized by your discipline and cohort phase."
          icon={<AppWindow size={20} strokeWidth={2.2} />}
        />

        <FeatureCard
          title="Cross-Team Collaboration"
          text="Work alongside interns from other disciplines on real projects that simulate actual product teams solving real business problems."
          icon={<UsersRound size={20} strokeWidth={2.2} />}
        />

        <FeatureCard
          title="Track Everything"
          text="Monitor both your learning progress and your project deliverables in one place. See exactly how far you've come since Day 1."
          icon={<Activity size={20} strokeWidth={2.2} />}
        />
      </section>

      <footer className="mt-24 border-t border-[#F38821]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-4 px-5 py-6 text-sm text-[#6B7280] md:flex-row md:items-center md:px-10">
          <p className="text-base font-semibold text-[#F38821]">FoxAcademy</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-[#111827]">
              Support@truemindsltd.com
            </a>
            <a href="#" className="hover:text-[#111827]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#111827]">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}