"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import ThemeToggleButton from "./button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // This is to prevent hydration error
  // The server does not have access to the theme (stored in localStorage)
  // In order to make the client render the same as the server, we initially set the theme to undefined
  // Once the component is mounted, we set the theme to the correct value
  useEffect(() => {
    setMounted(true);
  }, []);

  const safeTheme = mounted ? theme : undefined;

  return (
    <div className="flex items-center justify-end gap-4 p-4">
      <div className="inline-flex items-center rounded-lg border p-1 shadow-sm bg-card gap-0.5">
        <ThemeToggleButton
          thisTheme="light"
          theme={safeTheme}
          setTheme={setTheme}
        >
          <Sun className="h-5 w-5" />
        </ThemeToggleButton>
        <ThemeToggleButton
          thisTheme="dark"
          theme={safeTheme}
          setTheme={setTheme}
        >
          <Moon className="h-5 w-5" />
        </ThemeToggleButton>
        <ThemeToggleButton
          thisTheme="system"
          theme={safeTheme}
          setTheme={setTheme}
        >
          <Monitor className="h-5 w-5" />
        </ThemeToggleButton>
      </div>
    </div>
  );
}
