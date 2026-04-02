import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import auth2 from "../assets/images/auth2.png";
import { loginUser } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setApiError("");
      setIsLoading(true);

      try {
        const data = await loginUser(formData);

        if (data?.token) {
          localStorage.setItem("authToken", data.token);
        }

        navigate("/welcome");
      } catch (error) {
        const message =
          error?.response?.data?.message ||
          "Unable to log in right now. Please try again.";
        setApiError(message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid md:grid-cols-2 h-screen">
        {/* LEFT SIDE - IMAGE */}
        <div className="hidden md:block relative bg-gray-200 overflow-hidden">
          <img
            src={auth2}
            alt="People collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#F38821] to-transparent p-8">
            <h2 className="text-white text-3xl font-bold">
              Welcome back. Your cohort is waiting.
            </h2>
            <p className="text-white/90 mt-2">
              FoxAcademy by Fox Academy Innovations
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            {/* LOGO */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-6 h-6 bg-[#F38821]" />
              <span className="text-[#F38821] font-bold text-lg">
                FoxAcademy
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-3xl font-bold text-[#111827] mb-2">
              Log In to FoxAcademy
            </h1>
            <p className="text-[#6B7280] mb-6">
              Enter your registered email and password to continue.
            </p>

            {/* GOOGLE BUTTON */}
            <button className="w-full border-2 border-[#F38821] rounded-xl py-3 text-[#F38821] font-medium flex items-center justify-center gap-2 transition hover:bg-[#FEF3E9] mb-6">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                  G
                </text>
              </svg>
              Continue with Google
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-[#D1D5DC]" />
              <span className="text-[#6B7280] text-sm">or</span>
              <div className="flex-1 h-px bg-[#D1D5DC]" />
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              {apiError ? (
                <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                  {apiError}
                </p>
              ) : null}

              {/* EMAIL INPUT */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. johndoe@gmail.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none focus:border-[#F38821] ${
                    errors.email
                      ? "border-red-500"
                      : "border-[#D1D5DC] focus:border-[#F38821]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
                <p className="text-[#6B7280] text-xs mt-2">
                  Use your registered email address
                </p>
              </div>

              {/* PASSWORD INPUT */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                      errors.password
                        ? "border-red-500"
                        : "border-[#D1D5DC] focus:border-[#F38821]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] hover:text-[#111827]"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* REMEMBER ME & FORGOT PASSWORD */}
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-2 border-[#D1D5DC] accent-[#F38821]"
                  />
                  <span className="text-sm text-[#374151]">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#F38821] hover:text-[#e37b1d] font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="mb-6 w-full rounded-lg bg-[#F38821] py-3 font-semibold text-white transition hover:bg-[#e37b1d] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* SIGNUP LINK */}
            <div className="text-center mb-4">
              <p className="text-[#374151] text-sm">
                New to TalentFlow?{" "}
                <Link
                  to="/application"
                  className="text-[#F38821] hover:text-[#e37b1d] font-medium"
                >
                  Join with an Invite Code
                </Link>
              </p>
            </div>

            {/* SUPPORT */}
            <div className="text-center border-t border-[#D1D5DC] pt-4">
              <p className="text-xs text-[#6B7280]">
                Having trouble? Contact{" "}
                <a
                  href="mailto:support@truemindsltd.com"
                  className="text-[#F38821] hover:underline"
                >
                  support@truemindsltd.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
