import { Button } from "../ui/button";

export default function ThemeToggleButton({
  thisTheme,
  theme,
  setTheme,
  children,
}: {
  thisTheme: string;
  theme: string | undefined;
  setTheme: (theme: string) => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={`rounded-md px-3 ${
        theme === thisTheme
          ? "bg-secondary text-secondary-foreground"
          : "hover:bg-secondary/50"
      }`}
      onClick={() => setTheme(thisTheme)}
      aria-label={thisTheme}
    >
      {children}
    </Button>
  );
}
