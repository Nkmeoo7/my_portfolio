import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FeaturedProjectCard } from "@/components/featured-project-card";
import { WorkCard } from "@/components/work-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { FileText } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <div className="gap-6 flex justify-between items-start">
            <div className="flex-col flex flex-1 space-y-4">
              {/* Name with gradient effect on hover */}
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 transition-all duration-500 cursor-default">
                  {DATA.name}
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="text-muted-foreground font-mono text-sm whitespace-pre-line leading-relaxed">
                  {DATA.description}
                </p>
              </BlurFade>
              {/* Social Links - Enhanced */}
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex items-center gap-3 pt-2">
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                      <Link
                        key={name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center size-10 rounded-xl border border-border bg-background hover:bg-muted hover:border-foreground/20 hover:scale-110 transition-all duration-200"
                      >
                        <social.icon className="size-4" />
                        <span className="sr-only">{name}</span>
                      </Link>
                    ))}
                  <Link
                    href="#"
                    className="flex items-center gap-2 px-4 h-10 rounded-xl border border-border bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 text-sm font-medium"
                  >
                    <FileText className="size-4" />
                    CV
                  </Link>
                </div>
              </BlurFade>
            </div>
            {/* Avatar with floating animation */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="animate-float">
                <Avatar className="size-32 border-2 border-border rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback className="rounded-2xl text-2xl">{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-xl font-bold mb-3">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <p className="text-muted-foreground font-mono text-sm leading-relaxed">
            {DATA.summary}
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Link
            href="#"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md border border-border bg-background hover:bg-muted transition-colors text-sm font-medium"
          >
            <FileText className="size-4" />
            More About Me
          </Link>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <WorkCard
                logoUrl={work.logoUrl}
                company={work.company}
                title={work.title}
                href={work.href}
                location={work.location}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="space-y-8 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Featured</p>
              <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <FeaturedProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section id="github">
        <div className="space-y-4 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Featured</p>
                <h2 className="text-2xl font-bold tracking-tight">GitHub Activity</h2>
              </div>
              <Link
                href={`https://github.com/${DATA.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                @{DATA.githubUsername}
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="border border-border rounded-2xl p-8 bg-background overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-base text-muted-foreground">
                  Total: <span className="font-bold text-foreground text-lg">1,200+</span> contributions
                </p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-2.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="font-medium">Active</span>
                  <span className="text-muted-foreground/50">•</span>
                  <span>Building daily</span>
                </div>
              </div>

              {/* Contribution Graph - Scaled up for bigger squares */}
              <div className="overflow-x-auto py-4">
                <div className="transform scale-150 origin-left">
                  <img
                    src={`https://ghchart.rshah.org/22c55e/${DATA.githubUsername}`}
                    alt={`${DATA.githubUsername}'s GitHub Contribution Graph`}
                    className="h-auto"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-border/50">
                <span className="text-sm text-muted-foreground font-medium">Less</span>
                <div className="flex gap-1.5">
                  <span className="size-4 rounded bg-gray-200 dark:bg-gray-700"></span>
                  <span className="size-4 rounded bg-green-200"></span>
                  <span className="size-4 rounded bg-green-400"></span>
                  <span className="size-4 rounded bg-green-500"></span>
                  <span className="size-4 rounded bg-green-700"></span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">More</span>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs">
        <div className="space-y-6 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Featured</p>
              <h2 className="text-2xl font-bold tracking-tight">Blogs</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Blog Card 1 */}
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <Link href="/blog" className="block group">
                <div className="border border-border rounded-2xl overflow-hidden bg-background hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <span className="text-3xl font-bold text-foreground/20">VLM Guide</span>
                  </div>
                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-foreground/80 transition-colors leading-tight">
                      What are Vision Language Models?
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Understanding VLMs, resources and how to get started with multimodal AI.
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs font-medium">AI/ML</Badge>
                      <Badge variant="secondary" className="text-xs font-medium">VLM</Badge>
                    </div>
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                        </svg>
                        <span>December 15, 2024</span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                        Read More <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>

            {/* Blog Card 2 */}
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <Link href="/blog" className="block group">
                <div className="border border-border rounded-2xl overflow-hidden bg-background hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] w-full bg-gradient-to-br from-purple-100 to-blue-200 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center">
                    <span className="text-3xl font-bold text-foreground/20">AI Agents</span>
                  </div>
                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-foreground/80 transition-colors leading-tight">
                      Building AI Agents with LangChain
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Learn how to create powerful AI agents that reason, plan, and execute tasks.
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs font-medium">Python</Badge>
                      <Badge variant="secondary" className="text-xs font-medium">LangChain</Badge>
                      <Badge variant="secondary" className="text-xs font-medium">Agents</Badge>
                    </div>
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                        </svg>
                        <span>November 28, 2024</span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                        Read More <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          </div>

          {/* Show all blogs button */}
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="flex justify-center pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-200 text-sm font-medium"
              >
                Show all blogs
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>


      <section id="education">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <h2 className="text-xl font-bold mb-4">Education</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="border border-border rounded-xl p-4 bg-background">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Kamla Nehru Institude of Technology</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1">
                  Bachelor&apos;s Electronics and Communication
                </p>
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                2022 - 2026
              </span>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <div className="relative rounded-2xl p-8 md:p-12 text-center overflow-hidden bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-border/50">
            {/* Decorative gradient blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>

            <p className="relative text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 font-medium">
              Hey, you scrolled this far, let&apos;s talk.
            </p>
            <Link
              href={DATA.contact.social.X.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm font-semibold"
            >
              <Avatar className="size-7 border-2 border-background/20">
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                <AvatarFallback className="text-xs">{DATA.initials}</AvatarFallback>
              </Avatar>
              DM me on X
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* Setup Section */}
      <section id="setup">
        <div className="space-y-6 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Development</p>
              <h2 className="text-2xl font-bold tracking-tight">Setup</h2>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <Link href="/setup" className="block group">
              <div className="border border-border rounded-xl p-4 bg-background hover:bg-muted/30 hover:border-border/80 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-muted">
                    <svg className="size-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">My Development Environment</h3>
                    <p className="text-sm text-muted-foreground">Arch Linux, Neovim, Ghostty Terminal & more.</p>
                  </div>
                  <svg className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
