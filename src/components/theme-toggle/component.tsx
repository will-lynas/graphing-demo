"use client";

import { useTheme } from "next-themes";
import ThemeToggle from "./inner";
import { useState, useEffect } from "react";

export default function ThemeToggleComponent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This is to prevent hydration error
  // The server does not have access to the theme (stored in localStorage)
  // In order to make the client render the same as the server, we initially set the theme to undefined
  // Once the component is mounted, we set the theme to the correct value
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ThemeToggle theme={undefined} setTheme={setTheme} />;
  }

  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}
