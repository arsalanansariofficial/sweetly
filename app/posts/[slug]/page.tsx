import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import data from '@/data.json';
import { formatDate } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return data.posts.map(post => ({ slug: post.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = data.posts.find(post => post.slug === slug);

  if (!post) notFound();

  const result = await fetch(
    `https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/markdowns/posts/${slug}.md`
  );

  if (!result.ok) notFound();

  return (
    <main className="grow p-4">
      <section className="container mx-auto space-y-4">
        <header className="space-y-8">
          <div className="relative min-h-70 sm:min-h-[30rem]">
            <Image
              fill
              priority
              sizes="100%"
              src={post.image}
              alt={post.title}
              className="aspect-video rounded-lg object-cover"
            />
          </div>
        </header>
        <main className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-xs">
            {post.author} / {formatDate(post.publishedAt)}
          </p>
        </main>
        <footer className="prose dark:prose-invert mt-8 max-w-none">
          <MDXRemote source={await result.text()} />
        </footer>
      </section>
    </main>
  );
}
