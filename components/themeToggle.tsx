"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState(theme);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const handleToggle = () => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const renderIcon = () => {
    if (currentTheme === "light") {
      return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    } else if (currentTheme === "dark") {
      return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    } else {
      return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="sm" onClick={handleToggle}>
        {renderIcon()}
        <span className="sr-only">
          {currentTheme === "light"
            ? "Light theme"
            : currentTheme === "dark"
            ? "Dark theme"
            : "System theme"}
        </span>
      </Button>
    </div>
  );
}
