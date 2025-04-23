'use client';

import Link from 'next/link';
import { useState } from 'react';

import data from '@/data.json';
import { formatDate } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [filter, setFilter] = useState<string>(String());

  const posts = data.posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className="grow p-4">
      <section className="container mx-auto space-y-4">
        <header className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Posts
          </h1>
          <form className="flex gap-2">
            <Input
              type="text"
              placeholder="Search posts..."
              onChange={e => setFilter(e.target.value)}
            />
            <Button
              type="reset"
              variant="secondary"
              onClick={() => setFilter(String())}
            >
              Reset
            </Button>
          </form>
        </header>
        <main>
          {posts.length === 0 && (
            <p className="text-muted-foreground">No posts currently.</p>
          )}
          {posts.length > 0 && (
            <ul>
              {posts.map(post => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="space-y-1 sm:flex sm:justify-between sm:gap-4 sm:space-y-0"
                  >
                    <header className="max-w-lg sm:grow sm:space-y-1">
                      <h2 className="text-lg font-semibold">{post.title}</h2>
                      <p className="text-muted-foreground line-clamp-2 text-sm font-light">
                        {post.summary}
                      </p>
                    </header>
                    <footer>
                      <p className="text-sm font-light">
                        {formatDate(post.publishedAt)}
                      </p>
                    </footer>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </main>
      </section>
    </main>
  );
}
