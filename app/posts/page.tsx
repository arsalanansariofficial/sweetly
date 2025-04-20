import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className="grow p-4">
      <section className="container mx-auto space-y-4">
        <header className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Posts
          </h1>
          <div className="flex gap-2">
            <Input type="text" placeholder="Search posts..." />
            <Button variant="secondary">Reset</Button>
          </div>
        </header>
        <main>
          <ul>
            <li>
              <Link
                href="posts/featured"
                className="space-y-1 sm:flex sm:justify-between sm:gap-4 sm:space-y-0"
              >
                <header className="max-w-lg sm:grow sm:space-y-1">
                  <h2 className="text-lg font-semibold">Post Title</h2>
                  <p className="text-muted-foreground line-clamp-2 text-sm font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis hic corporis autem dolorem, quibusdam aut.
                  </p>
                </header>
                <footer>
                  <p className="text-sm font-light">20 April 2025</p>
                </footer>
              </Link>
            </li>
          </ul>
        </main>
      </section>
    </main>
  );
}
