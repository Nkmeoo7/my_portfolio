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
    "I am a software developer, love building scalable and efficient solutions.currently exploring how AI with systems can help us in solving real world problems.",
  avatarUrl: "/me.png",
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
      Vlog: {
        name: "Vlog",
        url: "https://dev.to/nitinoo7/basic-prompt-engineering-skills-that-everyone-should-have-2021",
        icon: NotebookIcon,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      badges: [],
      href: "#",
      location: "Remote",
      title: "AI Developer",
      logoUrl: "/freelanc.jpeg",
      start: "January 2026",
      end: "Present",
      description:
        "Built custom ecommerce application for a client using flutter, express and node js implemented better system for uploading products from admin side",
    },
    {
      company: "OctaNet",
      href: "#",
      badges: [],
      location: "Remote",
      title: "AI/ML Intern",
      logoUrl: "/octa.jpeg",
      start: "Oct 2025",
      end: "Dec 2025",
      description:
        "Here we got exposure about how to build RAG system and how to fine tune models for production use cases",
    },

  ],
  blogs: [
    {
      title: "Basic prompt engineering skills that everyone should have",
      description: "A beginner's guide to prompt engineering. Learn the fundamentals of how to talk to AI.",
      url: "https://dev.to/nitinoo7/basic-prompt-engineering-skills-that-everyone-should-have-2021",
      date: "2024",
      tags: ["AI/ML", "Prompt Engineering"],
      image: "/image.png"
    }
  ],
  projects: [
    {
      title: "Omoyari",
      href: "https://github.com/Nkmeoo7/Omoyari",
      dates: "Building",
      active: true,
      description: "An AI-powered emotional journaling application where users can document their thoughts and receive personalized insights.",
      technologies: ["React", "Next.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Nkmeoo7/Omoyari",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/omoyari.jpg",
      video: "",
    },

    {
      title: "ChatAll",
      href: "https://chatall-jufq.onrender.com",
      dates: "2024",
      active: true,
      description: "A chat platform featuring user registration and global real-time messaging capabilities for all participants.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://chatall-jufq.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nkmeoo7/ChatAll",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/app.jpg",
      video: "",
    },
    {
      title: "Simple Chat App",
      href: "https://simple-chat-app-frontend-mu.vercel.app",
      dates: "2024",
      active: true,
      description: "A real-time communication platform, users can create custom rooms and chat seamlessly using WebSockets.",
      technologies: ["React", "TailwindCSS", "Socket.io"],
      links: [
        {
          type: "Website",
          href: "https://simple-chat-app-frontend-mu.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nkmeoo7/Simple-chat-app-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatroom.png",
      video: "",
    },
    {
      title: "Sol-Dapp",
      href: "https://sol-dapp-one.vercel.app",
      dates: "2024",
      active: true,
      description: "A Web3 decentralized application on Solana with wallet integration, balance checking, and SOL airdrop functionalities.",
      technologies: ["Solana", "Web3.js", "React", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://sol-dapp-one.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nkmeoo7/Sol-Dapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/soldapp.jpg",
      video: "",
    },
    {
      title: "Web3 Wallet",
      href: "https://nkmeoo7.github.io/web3_wallet/",
      dates: "2024",
      active: true,
      description: "A secure web-based crypto wallet that generates mnemonic phrases to create and manage Ethereum and Solana addresses.",
      technologies: ["Web3.js", "React"],
      links: [
        {
          type: "Website",
          href: "https://nkmeoo7.github.io/web3_wallet/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nkmeoo7/web3_wallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/web3all.png",
      video: "",
    },

  ],
} as const;
