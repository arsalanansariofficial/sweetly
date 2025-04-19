'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-5 w-5 scale-0 -rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <Moon className="absolute h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
