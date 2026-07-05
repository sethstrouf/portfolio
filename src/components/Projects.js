import { FEATURED_PROJECTS } from "../data/content";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Selected work
          </p>
          <h2 className="serif mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A few projects worth a closer look
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Real applications built end to end — from API design and authentication
            to polished front-end experiences.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {FEATURED_PROJECTS.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
