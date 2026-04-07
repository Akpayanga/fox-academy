export default function FeatureCard({ title, text, icon }) {
  return (
    <div className="rounded-xl border border-[#D1D5DC] bg-[#F8F8F8] p-6 transition hover:shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F38821] text-white">
        {icon}
      </div>

      <h3 className="mb-3 text-[20px] font-bold leading-tight text-[#111827]">{title}</h3>

      <p className="text-[16px] leading-relaxed text-[#374151]">{text}</p>
    </div>
  );
}