'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import data from '@/data.json';
import { cn, formatDate, shuffleArray, sortByDate } from '@/lib/utils';

export default function Page() {
  const [isActive, setIsActive] = useState<number>(0);

  const recipes = shuffleArray(data.recipes).slice(0, 3);
  const posts = data.posts.sort((a, b) =>
    sortByDate(a.publishedAt, b.publishedAt)
  );

  return (
    <main className="grow space-y-4 p-4">
      <section className="container mx-auto space-y-8">
        <header>
          <h2 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Recent Posts
          </h2>
        </header>
        <main>
          {posts.length > 0 &&
            posts.map(post => (
              <Link
                key={post.slug}
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
            ))}
          {posts.length === 0 && (
            <p className="text-muted-foreground text-sm font-light">
              No posts currently.
            </p>
          )}
        </main>
        <footer>
          <Link
            href="/posts"
            className="text-muted-foreground hover:text-foreground leading-1 underline decoration-1 underline-offset-2 transition-colors"
          >
            All posts
          </Link>
        </footer>
      </section>
      <section className="container mx-auto space-y-4 md:space-y-8">
        <h2 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
          Featured Today
        </h2>
        <div className="group relative min-h-[30rem]">
          <Image
            fill
            priority
            suppressHydrationWarning
            alt={recipes[isActive].slug}
            src={recipes[isActive].image}
            className="aspect-video rounded-md object-cover grayscale"
          />
          <div className="absolute inset-1 flex flex-col justify-end space-y-2 rounded-md p-4 md:space-y-4">
            <h2
              suppressHydrationWarning
              className="font-serif text-xl font-bold text-white sm:text-3xl"
            >
              {recipes[isActive].title}
            </h2>
            <p
              suppressHydrationWarning
              className="line-clamp-3 text-xs text-white/75 md:text-base"
            >
              {recipes[isActive].summary}
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-fit gap-4">
          {recipes.map((recipe, index) => (
            <Image
              priority
              width={50}
              height={50}
              key={index}
              alt={recipe.slug}
              src={recipe.image}
              suppressHydrationWarning
              onClick={() => setIsActive(index)}
              className={cn(
                'hover:border-foreground outline-foreground hover:outline-foreground aspect-square cursor-pointer rounded-md outline-offset-4 grayscale hover:outline-2',
                { 'outline-foreground outline-2': isActive === index }
              )}
            />
          ))}
        </div>
      </section>
      <section className="container mx-auto space-y-8">
        <header>
          <h2 className="decoration-border/75 font-serif text-3xl font-black underline underline-offset-8">
            Categories
          </h2>
        </header>
        <main className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
          <Link
            href="/recipes?category=veg"
            className="relative min-h-50 overflow-clip rounded-md sm:min-h-70"
          >
            <Image
              fill
              alt="Vegetables"
              className="grayscale"
              src="https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/images/recipes/veg.jpg"
            />
            <h3 className="absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black text-white/75">
              Veg
            </h3>
          </Link>
          <Link
            href="/recipes?category=non-veg"
            className="relative min-h-50 overflow-clip rounded-md sm:min-h-70"
          >
            <Image
              fill
              alt="Non-vegetables"
              className="grayscale"
              src="https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/images/recipes/non-veg.jpg"
            />
            <h3 className="absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black text-white/75">
              Non-Veg
            </h3>
          </Link>
          <Link
            href="/recipes?category=snacks"
            className="relative min-h-50 overflow-clip rounded-md sm:min-h-70"
          >
            <Image
              fill
              src="https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/images/recipes/snacks.jpg"
              alt="Snacks"
              className="grayscale"
            />
            <h3 className="absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black text-white/75">
              Snacks
            </h3>
          </Link>
          <Link
            href="/recipes?category=beverage"
            className="relative min-h-50 overflow-clip rounded-md sm:min-h-70"
          >
            <Image
              fill
              alt="Beverages"
              src="https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/images/recipes/beverage.jpg"
              className="grayscale"
            />
            <h3 className="absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black text-white/75">
              Beverages
            </h3>
          </Link>
        </main>
      </section>
    </main>
  );
}
