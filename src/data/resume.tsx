import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nitin Kumar",
  initials: "NK",
  url: "https://nitinkumar.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Building Solutions that can scale, thinging small problems at large scale",
  summary:
    "Through me problems, i will be the one who will making sure it can break things and mature by the time",
  avatarUrl: "/me.png",
  // 👇 UPDATE THIS WITH YOUR GITHUB USERNAME
  githubUsername: "Nkmeoo7",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nkmeoo7@gmail.com",
    tel: "+9999999",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nkmeoo7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nitinrajputoo7/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nitinkumaroo7",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/nitin",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "AI Startup",
      href: "#",
      badges: [],
      location: "Remote",
      title: "AI/ML Intern",
      logoUrl: "/ai-startup.png",
      start: "June 2024",
      end: "Present",
      description:
        "Working on building and deploying Vision-Language Models. Developing AI agents and fine-tuning large language models for production use cases.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "#",
      location: "Remote",
      title: "AI Developer",
      logoUrl: "/freelance.png",
      start: "January 2024",
      end: "May 2024",
      description:
        "Built custom AI solutions for clients including chatbots, document processing systems, and automation tools using Python, LangChain, and OpenAI APIs.",
    },
  ],
  projects: [
    {
      title: "omoyari",
      href: "https://chatcollect.com",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "omoyari",
      href: "https://chatcollect.com",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;
