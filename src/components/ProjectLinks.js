export default function ProjectLinks({ siteUrl, codeUrl, size = "md" }) {
  const sizeClasses =
    size === "sm"
      ? "px-3 py-2 text-sm"
      : "px-4 py-2.5 text-sm";

  return (
    <div className="inline-flex overflow-hidden rounded-xl shadow-sm ring-1 ring-cyan-600/20">
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses} bg-cyan-600 font-medium text-white transition hover:bg-cyan-500`}
      >
        View site
      </a>
      <a
        href={codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source code on GitHub"
        className={`${sizeClasses} border-l border-cyan-500/40 bg-cyan-600 text-white transition hover:bg-cyan-500`}
      >
        <i className="fa-brands fa-github" aria-hidden="true" />
      </a>
    </div>
  );
}
