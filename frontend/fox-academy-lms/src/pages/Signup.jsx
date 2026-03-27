import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import auth3 from "../assets/images/auth3.png";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/signup/create");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid h-screen md:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gray-100 md:block">
          <img
            src={auth3}
            alt="Learner using a tablet"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center bg-[#F4F4F4] px-6 py-10 md:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-8 w-8 rounded-sm bg-[#F38821]" />
              <span className="text-[20px] font-bold leading-none text-[#F38821]">
                FoxAcademy
              </span>
            </div>

            <div className="mb-10 flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F38821] text-sm font-semibold text-white">
                1
              </span>
              <span className="h-0.5 flex-1 bg-[#C8CDD5]" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8CDD5] text-sm font-semibold text-[#4B5563]">
                2
              </span>
            </div>

            <h1 className="mb-2 text-[28px] font-bold leading-tight text-[#111827]">
              You&apos;ve Been Invited
            </h1>
            <p className="mb-8 text-[16px] leading-relaxed text-[#374151]">
              FoxAcademy is an invite-only platform. Enter the invite code shared
              by your cohort coordinator to get started.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Invite Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. TM-2025-COHORT4"
                  className="w-full rounded-[10px] border border-[#D1D5DC] bg-white px-4 py-3 text-[13px] text-[#111827] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                />
                <p className="mt-2 text-[11px] text-[#6B7280]">
                  Check your email or WhatsApp message from Fox Academy for your
                  code.
                </p>
              </div>

              <button
                type="submit"
                className="mb-8 w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-bold text-white transition hover:bg-[#e37b1d]"
              >
                Continue
              </button>
            </form>

            <p className="text-center text-[13px] text-[#6B7280]">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-[16px] text-[#F38821] hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
