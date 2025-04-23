import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data.json';
import { formatDate } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return data.recipes.map(recipe => ({ slug: recipe.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const recipe = data.recipes.find(recipe => recipe.slug === slug);

  if (!recipe) notFound();

  const result = await fetch(
    `https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/markdowns/recipes/${slug}.md`
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
              src={recipe.image}
              alt={recipe.title}
              className="aspect-video rounded-lg object-cover"
            />
          </div>
        </header>
        <main className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            {recipe.title}
          </h1>
          <p className="text-muted-foreground text-xs">
            {recipe.author} / {formatDate(recipe.publishedAt)}
          </p>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faBowlFood}
                className="text-muted-foreground h-4 w-4"
              />
              <span>{recipe.category}</span>
            </span>
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faStar}
                className="text-muted-foreground h-4 w-4"
              />
              <span>{recipe.rating}</span>
            </span>
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faClock}
                className="text-muted-foreground h-4 w-4"
              />
              <span>{recipe.duration} min</span>
            </span>
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faHeart}
                className="text-muted-foreground h-4 w-4"
              />
              <span>{recipe.likes}</span>
            </span>
          </div>
        </main>
        <footer className="prose dark:prose-invert mt-8 max-w-none">
          <MDXRemote source={await result.text()} />
        </footer>
      </section>
    </main>
  );
}
