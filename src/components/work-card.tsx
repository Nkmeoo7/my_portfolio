"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface WorkCardProps {
    logoUrl: string;
    company: string;
    title: string;
    href?: string;
    location?: string;
    period: string;
    description?: string;
}

export const WorkCard = ({
    logoUrl,
    company,
    title,
    href,
    location = "On Site",
    period,
    description,
}: WorkCardProps) => {
    return (
        <Link
            href={href || "#"}
            className="block group"
        >
            <div className="flex gap-4 p-4 border border-border rounded-xl bg-background card-hover glow-purple">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Avatar className="size-12 rounded-md bg-background border">
                        <AvatarImage
                            src={logoUrl}
                            alt={company}
                            className="object-contain p-1"
                        />
                        <AvatarFallback className="rounded-md text-xs font-semibold">
                            {company.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                                {company}
                            </h3>
                            <p className="text-sm text-foreground/70 font-medium">
                                {title}
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <span className="text-sm text-muted-foreground font-mono">
                                {period}
                            </span>
                            <Badge variant="secondary" className="text-xs font-mono">
                                {location}
                            </Badge>
                        </div>
                    </div>
                    {description && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};
