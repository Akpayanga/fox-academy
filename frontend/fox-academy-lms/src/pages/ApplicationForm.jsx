import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  GraduationCap,
  Star,
  TrendingUp,
} from "lucide-react";
import { submitApplication } from "../services/applicationService";

const expertiseOptions = [
  { key: "entry", label: "Entry", icon: GraduationCap },
  { key: "intermediate", label: "Intermediate", icon: TrendingUp },
  { key: "senior", label: "Senior", icon: Award },
  { key: "lead", label: "Lead", icon: Star },
];

const disciplineOptions = [
  "UI/UX",
  "Frontend",
  "Backend",
  "Data Science",
  "Product Manager",
  "Social Media",
];

function SectionHeading({ step, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="rounded bg-[#F38821] px-2 py-1 text-[12px] font-bold uppercase tracking-[1.2px] text-white">
        {step}
      </span>
      <h2 className="text-[24px] font-semibold leading-[1.3] text-[#111827] md:text-[28px]">
        {title}
      </h2>
    </div>
  );
}

function Field({ label, placeholder, type = "text", name, value, onChange, required = true }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-medium uppercase tracking-[0.6px] text-[#616161]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-[4px] border border-[#D1D5DC] bg-white px-3 py-3 text-[16px] text-[#374151] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
        required={required}
      />
    </label>
  );
}

export default function ApplicationForm() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("intermediate");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    primaryDiscipline: "",
    personalStatement: "",
    portfolioUrl: "",
    githubLinkedin: "",
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const expertiseLabel = expertiseOptions.find(
      (option) => option.key === selectedLevel
    )?.label;

    try {
      const response = await submitApplication({
        ...formData,
        expertiseLevel: expertiseLabel,
      });
      navigate("/application/success", {
        state: {
          email: formData.email,
          emailSent: response?.emailSent,
          inviteCode: response?.invite?.code,
          inviteLink: response?.invite?.link,
        },
      });
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message || "Could not submit application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <main className="mx-auto w-full max-w-[944px] px-4 pb-14 pt-20 md:px-6 md:pt-24">
        <section className="overflow-hidden rounded-[12px] border border-[#D1D5DC] bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)]">
          <header className="bg-[#FEF3E9] px-6 py-10 text-center md:px-12 md:py-12">
            <p className="text-[12px] font-medium uppercase tracking-[0.6px] text-[#374151] md:text-[16px]">
              Talent Application Portal
            </p>
            <h1 className="mt-3 text-[40px] font-bold leading-[1.05] text-[#111827] md:text-[56px]">
              Apply for Internship
            </h1>
          </header>

          <form className="space-y-10 px-6 py-10 md:px-12 md:py-12" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <SectionHeading step="01" title="Identity Details" />
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFieldChange}
                  placeholder="Amara Okoro"
                />
                <Field
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleFieldChange}
                  placeholder="amara@example.com"
                  type="email"
                />
                <Field
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleFieldChange}
                  placeholder="+234 000 000 0000"
                />

                <label className="block">
                  <span className="mb-2 block text-[12px] font-medium uppercase tracking-[0.6px] text-[#616161]">
                    Primary Discipline
                  </span>
                  <select
                    name="primaryDiscipline"
                    value={formData.primaryDiscipline}
                    onChange={handleFieldChange}
                    className="w-full rounded-[4px] border border-[#D1D5DC] bg-white px-3 py-3 text-[16px] text-[#374151] focus:border-[#F38821] focus:outline-none"
                    required
                  >
                    <option value="" disabled>
                      Select Discipline
                    </option>
                    {disciplineOptions.map((discipline) => (
                      <option key={discipline} value={discipline}>
                        {discipline}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading step="02" title="Expertise Level" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {expertiseOptions.map(({ key, label, icon: Icon }) => {
                  const active = selectedLevel === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedLevel(key)}
                      className={`rounded-[4px] border p-4 text-center transition ${
                        active
                          ? "border-[#FBDABA] bg-[#F38821] text-white"
                          : "border-[#FBDABA] bg-white text-[#F38821]"
                      }`}
                    >
                      <Icon size={18} className="mx-auto" />
                      <span className="mt-2 block text-[14px] font-semibold">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading step="03" title="Statement & Work" />
              <label className="block">
                <span className="mb-2 block text-[13px] font-medium uppercase tracking-[0.6px] text-[#374151]">
                  Personal Statement or Motivation
                </span>
                <textarea
                  name="personalStatement"
                  value={formData.personalStatement}
                  onChange={handleFieldChange}
                  rows={6}
                  placeholder="Tell us why you are interested in joining Trueminds internship..."
                  className="w-full resize-none rounded-[10px] border border-[#D1D5DC] bg-white px-4 py-3 text-[16px] text-[#374151] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                  required
                />
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Portfolio URL"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleFieldChange}
                  placeholder="e.g https://yourportfolio.com"
                  required={false}
                />
                <Field
                  label="Github / LinkedIn"
                  name="githubLinkedin"
                  value={formData.githubLinkedin}
                  onChange={handleFieldChange}
                  placeholder="e.g https://linkedin.com/amara"
                  required={false}
                />
              </div>
            </div>

            {submitError ? (
              <p className="rounded-[6px] border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-[14px] text-[#B91C1C]">
                {submitError}
              </p>
            ) : null}

            <div className="border-t border-[#D1D5DC] pt-8">
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-[10px] bg-[#F38821] px-6 py-3 text-[16px] font-bold text-white transition hover:bg-[#E37B1D]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-[rgba(198,198,198,0.1)] bg-[#F3F3F3] px-6 py-12 text-center">
        <p className="mx-auto max-w-[700px] text-[13px] tracking-[0.35em] text-[#474747]">
          (c) 2024 Fox Academy Architectural Ledger - Privacy Protected
        </p>
      </footer>
    </div>
  );
}
