import TechBadge from "./TechBadge";
import ProjectLinks from "./ProjectLinks";

export default function FeaturedProject({ project }) {
  const imageOnRight = project.imagePosition === "right";

  const content = (
    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0">
      <h2 className="serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-slate-600"
        >
          {project.title}
        </a>
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        {project.description}
      </p>
      <div className="mt-8">
        <ProjectLinks siteUrl={project.siteUrl} codeUrl={project.codeUrl} />
      </div>
      <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-relaxed text-slate-500">
        {project.highlights}
      </p>
    </div>
  );

  const image = (
    <div className="px-6 lg:px-0">
      <img
        className="w-full rounded-2xl shadow-2xl ring-1 ring-slate-900/5"
        src={project.image}
        alt={project.imageAlt}
      />
    </div>
  );

  return (
    <section id={project.id} className="scroll-mt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {imageOnRight ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </section>
  );
}
