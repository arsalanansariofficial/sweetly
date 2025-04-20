import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { cn } from '@/lib/utils';

export default async function Page() {
  const isActive = 0;

  const result = await fetch(
    'https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/markdowns/recipes/featured.md'
  );

  return (
    <main className="grow space-y-4 p-4">
      <section className="container mx-auto space-y-4 md:space-y-8">
        <h2 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
          Featured Today
        </h2>
        <div className="group relative min-h-[30rem]">
          <Image
            fill
            priority
            src="/recipe.jpg"
            alt="Recipe Name"
            className="aspect-video rounded-md"
          />
          <div className="absolute inset-5 flex flex-col justify-end space-y-2 rounded-md p-4 md:space-y-4">
            <h2 className="text-muted-foreground font-serif text-xl font-bold sm:text-3xl">
              Recipe Name
            </h2>
            <p className="text-muted-foreground/70 line-clamp-3 text-xs md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi
              ipsa minima iusto doloribus natus id, omnis pariatur totam aliquid
              adipisci aspernatur reprehenderit optio quaerat!
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-fit gap-4">
          {Array(3)
            .fill(true)
            .map((_, index) => (
              <Image
                priority
                width={50}
                height={50}
                key={index}
                src="/recipe.jpg"
                alt="Recipe Name"
                className={cn(
                  'hover:border-foreground outline-foreground hover:outline-foreground aspect-square cursor-pointer rounded-md outline-offset-4 hover:outline-2',
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
          <div className="relative min-h-50 overflow-clip rounded-md sm:min-h-70">
            <Image fill src="/recipe.jpg" alt="Recipe Name" />
            <h3 className="text-muted-foreground absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black">
              Category
            </h3>
          </div>
          <div className="relative min-h-50 overflow-clip rounded-md sm:min-h-70">
            <Image fill src="/recipe.jpg" alt="Recipe Name" />
            <h3 className="text-muted-foreground absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black">
              Category
            </h3>
          </div>
          <div className="relative min-h-50 overflow-clip rounded-md sm:min-h-70">
            <Image fill src="/recipe.jpg" alt="Recipe Name" />
            <h3 className="text-muted-foreground absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black">
              Category
            </h3>
          </div>
          <div className="relative min-h-50 overflow-clip rounded-md sm:min-h-70">
            <Image fill src="/recipe.jpg" alt="Recipe Name" />
            <h3 className="text-muted-foreground absolute inset-x-4 bottom-4 min-h-fit font-serif text-2xl font-black">
              Category
            </h3>
          </div>
        </main>
      </section>
      <section className="container mx-auto space-y-8">
        <header>
          <h2 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Recent Posts
          </h2>
        </header>
        <main>
          <Link
            href="#"
            className="space-y-1 sm:flex sm:justify-between sm:gap-4 sm:space-y-0"
          >
            <header className="max-w-lg sm:grow sm:space-y-1">
              <h2 className="text-lg font-semibold">Post Title</h2>
              <p className="text-muted-foreground line-clamp-2 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                quae!
              </p>
            </header>
            <footer>
              <p className="text-sm font-light">20 April 2025</p>
            </footer>
          </Link>
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
      <section className="container mx-auto space-y-4">
        <header className="space-y-8">
          <h2 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Featured Post
          </h2>
          <div className="relative h-80">
            <Image
              fill
              priority
              alt="Post Image"
              src="/recipe.jpg"
              className="aspect-video rounded-lg"
            />
          </div>
        </header>
        <main className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Recipe Title
          </h1>
          <p className="text-muted-foreground text-xs">
            Author Name / 20 April 2025
          </p>
        </main>
        <footer className="prose dark:prose-invert max-w-none">
          <MDXRemote source={await result.text()} />
        </footer>
      </section>
    </main>
  );
}
