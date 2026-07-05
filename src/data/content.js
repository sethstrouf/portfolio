import songsembleScreenshot from "../assets/songsemble.png";
import blogScreenshot from "../assets/blogv2.png";
import resumePdf from "../assets/Resume.pdf";

export const SITE = {
  name: "Seth Strouf",
  tagline:
    "Full-stack developer specializing in Rails and React. Former educator. Proud cat dad.",
  resumeUrl: resumePdf,
};


export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sethstrouf",
    iconClass: "fa-brands fa-linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/sethstrouf?tab=repositories",
    iconClass: "fa-brands fa-github",
  },
];

const SONGSEMBLE_URL =
  "https://www.songsemble.com/signin?email=guest_user@mail.com&password=testPassword123!";

export const FEATURED_PROJECTS = [
  {
    id: "songsemble",
    title: "Songsemble",
    url: SONGSEMBLE_URL,
    image: songsembleScreenshot,
    imageAlt: "Songsemble music library application",
    description:
      "A collaborative music library app that helps educators organize repertoire and share collections with colleagues.",
    tech: ["Rails", "React", "TypeScript", "RSpec"],
    siteUrl: SONGSEMBLE_URL,
    codeUrl: "https://github.com/sethstrouf/music-library-api",
    highlights:
      "JWT authentication, Zustand state management, Cloudflare SSL, Amazon S3 storage, SendGrid email, and CI with GitHub Actions.",
    imagePosition: "right",
  },
  {
    id: "blog",
    title: "Blog",
    url: "https://www.hannahbauer.me",
    image: blogScreenshot,
    imageAlt: "Personal blog built with Rails and Svelte",
    description:
      "A custom blog platform with a Svelte frontend and Rails API, built for a clean reading experience and straightforward publishing.",
    tech: ["Rails", "Svelte"],
    siteUrl: "https://www.hannahbauer.me",
    codeUrl: "https://github.com/sethstrouf/blog-v2-backend",
    highlights:
      "Token-based authentication, Cloudflare SSL, Amazon S3 asset storage, and automated content tooling.",
    imagePosition: "left",
  },
];
