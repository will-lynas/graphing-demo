"use client";

import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) {
  return (
    <div className="flex items-center justify-end gap-4 p-4">
      <div className="inline-flex items-center rounded-lg border p-1 shadow-sm bg-card">
        <Button
          variant="ghost"
          size="sm"
          className={`rounded-md px-3 ${
            theme === "light"
              ? "bg-secondary text-secondary-foreground"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => setTheme("light")}
          aria-label="Light"
        >
          <Sun className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className={`rounded-md px-3 ${
            theme === "dark"
              ? "bg-secondary text-secondary-foreground"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => setTheme("dark")}
          aria-label="Dark"
        >
          <Moon className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className={`rounded-md px-3 ${
            theme === "system"
              ? "bg-secondary text-secondary-foreground"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => setTheme("system")}
          aria-label="System"
        >
          <Monitor className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
