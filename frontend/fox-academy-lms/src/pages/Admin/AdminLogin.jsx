import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function AdminLogin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF9F6] font-sans px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#5A3B1C] mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Login To Access To Dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#111827]">
              Institutional Email
            </label>
            <input
              type="email"
              defaultValue="admin@foxacademy.edu"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#111827]">
              System Password
            </label>
            <input
              type="password"
              defaultValue="********"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full rounded-md bg-[#D97706] py-3.5 text-sm font-bold text-white transition hover:bg-[#B45309]"
          >
            Sign In
          </button>
        </form>

        {/* Info Card */}
        <div className="mt-8 flex items-start gap-3 border-l-4 border-[#5A3B1C] bg-[#FFF8EE] p-5 rounded-r-md">
          <Shield className="h-5 w-5 flex-shrink-0 text-[#D97706]" />
          <div>
            <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-[#9C5A1A]">
              Station Auto-Detection
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              System has identified IP segment 192.168.1.104. Session will be
              logged to secure audit trails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
