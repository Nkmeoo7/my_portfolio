"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GitHubCalendarComponent({ username }: { username: string }) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-[150px]" />; // Placeholder while mounting to avoid hydration mismatch
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="w-full flex justify-center py-4">
      <GitHubCalendar
        username={username}
        year={2026}
        colorScheme={currentTheme}
        theme={{
          light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }}
        labels={{
          totalCount: 'Total: {{count}} contributions in {{year}}',
        }}
        showWeekdayLabels={true}
        blockMargin={4}
        blockSize={14}
        fontSize={14}
      />
    </div>
  );
}
