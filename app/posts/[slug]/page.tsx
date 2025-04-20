import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Props = { params: Promise<{ slug: string }> };

export default async function Page({ params }: Props) {
  const result = await fetch(
    `https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/markdowns/posts/${(await params).slug}.md`
  );

  return (
    <main className="grow p-4">
      <section className="container mx-auto space-y-4">
        <header className="space-y-8">
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
            Post Title
          </h1>
          <p className="text-muted-foreground text-xs">
            Author Name / 20 April 2025
          </p>
        </main>
        <footer className="prose dark:prose-invert mt-8 max-w-none">
          <MDXRemote source={await result.text()} />
        </footer>
      </section>
    </main>
  );
}
