"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const cycle = () => {
    const current = theme ?? "system";
    if (current === "light") setTheme("dark");
    else if (current === "dark") setTheme("system");
    else setTheme("light");
  };

  const renderIcon = () => {
    if (!mounted) {
      // Placeholder so SSR + first client render match
      return <Monitor className="h-[1.2rem] w-[1.2rem] opacity-0" />;
    }
    if (theme === "light") return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    if (theme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
  };

  const label = !mounted
    ? "Toggle theme"
    : theme === "light"
      ? "Light theme"
      : theme === "dark"
        ? "Dark theme"
        : `System theme (${resolvedTheme ?? "auto"})`;

  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={cycle}
        aria-label={label}
        title={label}
      >
        {renderIcon()}
        <span className="sr-only">{label}</span>
      </Button>
    </div>
  );
}
