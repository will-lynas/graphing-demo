"use client";

import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";
import ThemeToggleButton from "./button";

export default function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) {
  return (
    <div className="flex items-center justify-end gap-4 p-4">
      <div className="inline-flex items-center rounded-lg border p-1 shadow-sm bg-card gap-0.5">
        <ThemeToggleButton thisTheme="light" theme={theme} setTheme={setTheme}>
          <Sun className="h-5 w-5" />
        </ThemeToggleButton>
        <ThemeToggleButton thisTheme="dark" theme={theme} setTheme={setTheme}>
          <Moon className="h-5 w-5" />
        </ThemeToggleButton>
        <ThemeToggleButton thisTheme="system" theme={theme} setTheme={setTheme}>
          <Monitor className="h-5 w-5" />
        </ThemeToggleButton>
      </div>
    </div>
  );
}
