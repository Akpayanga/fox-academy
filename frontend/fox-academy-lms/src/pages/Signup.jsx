import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import auth3 from "../assets/images/auth3.png";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Temporary mock values representing data prefilled from backend application records.
  const applicant = {
    fullName: "Amara Okoro",
    email: "amara@example.com",
    phone: "+234 000 000 0000",
    discipline: "UI/UX Design",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/verify-email");
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
              Complete Your Account Setup
            </h1>
            <p className="mb-8 text-[16px] leading-relaxed text-[#374151]">
              Your profile information has been prefilled from your application.
              Create and confirm your password to activate your account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Full Name
                </label>
                <input
                  type="text"
                  value={applicant.fullName}
                  readOnly
                  className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#EEF0F3] px-4 py-3 text-[13px] text-[#4B5563]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Email Address
                </label>
                <input
                  type="email"
                  value={applicant.email}
                  readOnly
                  className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#EEF0F3] px-4 py-3 text-[13px] text-[#4B5563]"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={applicant.phone}
                    readOnly
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#EEF0F3] px-4 py-3 text-[13px] text-[#4B5563]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                    Primary Discipline
                  </label>
                  <input
                    type="text"
                    value={applicant.discipline}
                    readOnly
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#EEF0F3] px-4 py-3 text-[13px] text-[#4B5563]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-white px-4 py-3 pr-11 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99A1AF]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-white px-4 py-3 pr-11 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99A1AF]"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-bold text-white transition hover:bg-[#e37b1d]"
              >
                Create My Account
              </button>
            </form>

            <p className="mt-8 text-center text-[13px] text-[#6B7280]">
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
