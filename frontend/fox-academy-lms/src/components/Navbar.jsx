import { Link } from "react-router-dom";
import foxLogo from "../assets/images/foxlogo.svg";

export default function Navbar() {
  return (
    <nav className="border-b border-[#D1D5DC] bg-[#F8F8F8]">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 md:px-10">
        <div className="flex items-start gap-3">
          <img src={foxLogo} alt="Fox Academy Logo" className="mt-1 h-6 w-6" />
          <div>
            <h1 className="text-[24px] font-bold leading-none text-[#F38821]">FoxAcademy</h1>
            <p className="mt-1 text-xs text-[#6B7280]">By Fox Academy Innovations Ltd</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl border border-[#F38821] px-3 py-2 text-sm font-light text-[#F38821] transition hover:bg-[#FFF7ED]"
          >

            Log In
          </Link>

        
          <Link
            to="/application"
            className="rounded-xl bg-[#F38821] px-5 py-2 text-sm text-white transition hover:bg-[#e37b1d]"
          >
            Join with Invite Code
          </Link>
        </div>
      </div>
    </nav>
  );
}