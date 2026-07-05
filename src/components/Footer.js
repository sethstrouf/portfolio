import { SOCIAL_LINKS } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 lg:px-8">
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              <span className="sr-only">{item.name}</span>
              <i className={`${item.iconClass} text-xl`} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          &copy; {currentYear} Seth Strouf
        </p>
      </div>
    </footer>
  );
}
