"use client";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  FileTextIcon,
  BriefcaseIcon,
  BookOpenIcon,
  CodeIcon,
  GraduationCapIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

// Items with button style
const buttonItems = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/#about", icon: FileTextIcon, label: "About" },
  { href: "/#work", icon: BriefcaseIcon, label: "Work" },
];

// Blog - plain text style
const blogItem = { href: "/#blogs", icon: BookOpenIcon, label: "Blog" };

// More button items
const moreButtonItems = [
  { href: "/#projects", icon: CodeIcon, label: "Projects" },
  { href: "/#education", icon: GraduationCapIcon, label: "Education" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background border border-border shadow-xl">
        {/* Button items */}
        {buttonItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 hover:bg-muted text-foreground text-sm font-medium transition-all duration-200"
          >
            <item.icon className="size-4" />
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Blog */}
        <Link
          href={blogItem.href}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 hover:bg-muted text-foreground text-sm font-medium transition-all duration-200"
        >
          <blogItem.icon className="size-4" />
          <span>{blogItem.label}</span>
        </Link>

        {/* More button items */}
        {moreButtonItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 hover:bg-muted text-foreground text-sm font-medium transition-all duration-200"
          >
            <item.icon className="size-4" />
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-border"></div>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
}
