import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Input } from '@/components/ui/input';
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
                href="/docs"
                className="text-muted-foreground hover:text-foreground"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/components"
                className="text-muted-foreground hover:text-foreground"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="/themes"
                className="text-muted-foreground hover:text-foreground"
              >
                Themes
              </Link>
            </li>
            <li>
              <Link
                href="/charts"
                className="text-muted-foreground hover:text-foreground"
              >
                Charts
              </Link>
            </li>
            <li>
              <Link
                href="/colors"
                className="text-muted-foreground hover:text-foreground"
              >
                Colors
              </Link>
            </li>
          </ul>
        </div>
        <MenuToggle />
        <div className="flex grow items-center gap-1 md:grow-0">
          <div className="flex grow items-center gap-4 md:grow-0">
            <div className="group relative grow md:grow-0">
              <Input
                type="text"
                placeholder="Search..."
                className="hover:!bg-accent hover:placeholder:text-accent-foreground rounded-lg backdrop-blur-xs placeholder:font-semibold"
              />
              <kbd className="bg-muted text-muted-foreground group-hover:text-accent-foreground absolute inset-y-2 right-2 hidden items-center gap-2 rounded border px-1 py-0.5 text-xs md:flex">
                <span>⌘</span>k
              </kbd>
            </div>
            <span className="min-h-6 min-w-6">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
