const COLORS = {
  Rails: "bg-rose-500/10 text-rose-700 ring-rose-500/20",
  React: "bg-sky-500/10 text-sky-700 ring-sky-500/20",
  Svelte: "bg-violet-500/10 text-violet-700 ring-violet-500/20",
  TypeScript: "bg-indigo-500/10 text-indigo-700 ring-indigo-500/20",
  RSpec: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20",
};

export default function TechBadge({ label }) {
  const colorClass = COLORS[label] ?? "bg-slate-500/10 text-slate-700 ring-slate-500/20";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${colorClass}`}
    >
      {label}
    </span>
  );
}
