import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = { params: Promise<{ slug: string }> };

export default async function Page({ params }: Props) {
  const result = await fetch(
    `https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/markdowns/recipes/${(await params).slug}.md`
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
            Recipe Title
          </h1>
          <p className="text-muted-foreground text-xs">
            Author Name / 20 April 2025
          </p>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faBowlFood}
                className="text-muted-foreground h-4 w-4"
              />
              <span>Category</span>
            </span>
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faStar}
                className="text-muted-foreground h-4 w-4"
              />
              <span>5</span>
            </span>
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faClock}
                className="text-muted-foreground h-4 w-4"
              />
              <span>10 min</span>
            </span>
            <span className="flex items-center gap-2 font-serif text-xs font-semibold">
              <FontAwesomeIcon
                size="sm"
                icon={Icon.faHeart}
                className="text-muted-foreground h-4 w-4"
              />
              <span>5</span>
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
