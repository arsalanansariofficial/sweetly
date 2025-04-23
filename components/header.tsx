import Link from 'next/link';

import MenuToggle from '@/components/menu-toggle';
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="border-muted bg-background/70 sticky inset-x-0 top-0 z-10 border-b border-dashed p-4 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex w-6 -rotate-45 flex-col items-center gap-1">
                <span className="bg-foreground h-[2.5px] w-full rounded"></span>
                <span className="bg-foreground h-[2.5px] w-3/5 rounded"></span>
              </span>
            </Link>
            <Link href="/" className="font-bold">
              Sweetly
            </Link>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <Link
                href="/posts"
                className="text-muted-foreground hover:text-foreground"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className="text-muted-foreground hover:text-foreground"
              >
                Recipes
              </Link>
            </li>
          </ul>
        </div>
        <MenuToggle />
        <ThemeToggle />
      </nav>
    </header>
  );
}
