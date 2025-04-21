"use client";

import { useTheme } from "next-themes";
import ThemeToggle from "./inner";
import { useState, useEffect } from "react";

export default function ThemeToggleComponent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // prevent hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ThemeToggle theme={undefined} setTheme={setTheme} />;
  }

  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}
