import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Setup",
    description: "My development environment and tools I use daily.",
};

const BLUR_FADE_DELAY = 0.04;

// Setup items - you can customize these
const setupItems = [
    {
        category: "Operating System",
        items: [
            {
                name: "Arch Linux",
                description: "BTW I use Arch. Rolling release distro that keeps me on the bleeding edge.",
                icon: "🐧",
            },
        ],
    },
    {
        category: "Terminal",
        items: [
            {
                name: "Ghostty",
                description: "Fast, feature-rich, and native GPU accelerated terminal emulator.",
                icon: "👻",
            },
            {
                name: "Zsh + Oh My Zsh",
                description: "Zsh shell with Oh My Zsh for plugins and themes.",
                icon: "🐚",
            },
        ],
    },
    {
        category: "Editor",
        items: [
            {
                name: "Neovim",
                description: "Hyperextensible Vim-based text editor. My primary coding environment.",
                icon: "📝",
            },
            {
                name: "LazyVim",
                description: "Neovim setup powered by lazy.nvim with sensible defaults.",
                icon: "💤",
            },
        ],
    },
    {
        category: "Development Tools",
        items: [
            {
                name: "tmux",
                description: "Terminal multiplexer for managing multiple sessions.",
                icon: "🪟",
            },
            {
                name: "Docker",
                description: "Containerization for consistent development environments.",
                icon: "🐳",
            },
            {
                name: "Git",
                description: "Version control with lazygit for a better TUI experience.",
                icon: "📦",
            },
        ],
    },
    {
        category: "Languages & Frameworks",
        items: [
            {
                name: "Python",
                description: "Primary language for AI/ML development and scripting.",
                icon: "🐍",
            },
            {
                name: "TypeScript",
                description: "For web development with Next.js and React.",
                icon: "📘",
            },
            {
                name: "Rust",
                description: "Learning and building CLI tools.",
                icon: "🦀",
            },
        ],
    },
];

export default function SetupPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            {/* Header */}
            <section>
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Home
                    </Link>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Development</p>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            My Setup
                        </h1>
                        <p className="text-muted-foreground max-w-2xl">
                            Here&apos;s a breakdown of my development environment. I use Arch Linux
                            with Neovim as my primary editor, running in Ghostty terminal. This
                            setup gives me a fast, minimal, and highly customizable workflow.
                        </p>
                    </div>
                </BlurFade>
            </section>

            {/* Setup Categories */}
            {setupItems.map((category, categoryIdx) => (
                <section key={category.category}>
                    <BlurFade delay={BLUR_FADE_DELAY * (3 + categoryIdx)}>
                        <h2 className="text-xl font-bold mb-4">{category.category}</h2>
                    </BlurFade>
                    <div className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                            <BlurFade
                                key={item.name}
                                delay={BLUR_FADE_DELAY * (4 + categoryIdx) + itemIdx * 0.05}
                            >
                                <div className="border border-border rounded-xl p-4 bg-background hover:bg-muted/30 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center size-10 rounded-lg bg-muted text-xl">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </section>
            ))}

            {/* Dotfiles Section */}
            <section>
                <BlurFade delay={BLUR_FADE_DELAY * 10}>
                    <div className="border border-border rounded-2xl p-6 bg-background text-center">
                        <h3 className="font-bold text-lg mb-2">Want my dotfiles?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            All my configuration files are available on GitHub.
                        </p>
                        <Link
                            href="https://github.com/nitinkumar/dotfiles"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium"
                        >
                            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Dotfiles
                        </Link>
                    </div>
                </BlurFade>
            </section>
        </main>
    );
}
