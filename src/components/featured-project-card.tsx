"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Github } from "lucide-react";

interface FeaturedProjectCardProps {
    title: string;
    description: string;
    image?: string;
    video?: string;
    href?: string;
    technologies: readonly string[];
    links?: readonly {
        type: string;
        href: string;
        icon: React.ReactNode;
    }[];
}

export const FeaturedProjectCard = ({
    title,
    description,
    image,
    video,
    href,
    technologies,
    links,
}: FeaturedProjectCardProps) => {
    return (
        <div className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden card-hover glow-green">
            {/* Project Image/Video */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20">
                {video ? (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
                        <span className="text-white/90 text-xl font-bold">{title}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col p-5 flex-1">
                {/* Title with icons */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-lg text-foreground leading-tight">{title}</h3>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        {links?.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center size-8 rounded-lg border border-border bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all duration-200"
                            >
                                {link.type === "Website" || link.type === "website" ? (
                                    <Globe className="size-4" />
                                ) : link.type === "Source" || link.type === "source" || link.type === "Github" ? (
                                    <Github className="size-4" />
                                ) : (
                                    <span className="size-4">{link.icon}</span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.slice(0, 6).map((tech, idx) => (
                            <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs px-2.5 py-1 font-medium"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                        <span className="size-2.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-muted-foreground">All Systems Operational</span>
                    </div>
                    {href && (
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                        >
                            View Details
                            <ArrowRight className="size-4 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
