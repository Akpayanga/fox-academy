import { FileText, Download } from "lucide-react";

export default function ResourceCard({ title, type, size }) {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F38821]">
          <FileText size={24} className="text-white" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#F38821] transition-colors">{title}</h4>
          <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
            {type} • {size}
          </p>
        </div>
      </div>
      <Download size={18} className="text-gray-400 group-hover:text-[#F38821] transition-colors" />
    </div>
  );
}
