import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { SITE } from "../data/content";
import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <header className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Full-stack developer
            </p>
            <h1 className="serif mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {SITE.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {SITE.tagline}
            </p>
            <div className="mt-8">
              <a
                href={SITE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-2 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                <span className="rounded-full bg-cyan-500 px-4 py-2 font-semibold transition group-hover:bg-cyan-400">
                  View resume
                </span>
                <ChevronRightIcon className="h-5 w-5 text-slate-300" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-14 lg:col-span-6 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </header>
  );
}
