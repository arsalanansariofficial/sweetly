'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { FormEvent, Suspense, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data.json';
import * as SN from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import * as Dialog from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

function Recipes() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [rating, setRating] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const recipes = data.recipes.filter(recipe => {
    let filter = true;

    const title = searchParams.get('title');
    const rating = searchParams.get('rating');
    const category = searchParams.get('category');
    const duration = searchParams.get('duration');

    if (title && !recipe.title.toLowerCase().includes(title.toLowerCase())) {
      filter = false;
    }

    if (filter && rating && recipe.rating !== +rating) filter = false;
    if (filter && category && recipe.category !== category) filter = false;
    if (filter && duration && !(recipe.duration <= +duration)) filter = false;

    return filter;
  });

  function handleFilter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();
    const formData = new FormData(event.target as HTMLFormElement);

    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const duration = formData.get('duration') as string;

    if (title) params.set('title', title);
    if (category) params.set('category', category);
    if (duration) params.set('duration', duration);
    if (rating) params.set('rating', String(+rating / 20));

    setOpen(false);
    router.push(`/recipes?${params}`);
  }

  return (
    <main className="flex grow flex-col p-4">
      <div className="container mx-auto grow space-y-4 md:grid md:grid-cols-[auto_1fr] md:gap-8 md:space-y-0">
        <aside className="sticky top-22 hidden space-y-4 self-start md:block">
          <form className="space-y-4 self-start" onSubmit={handleFilter}>
            <Input type="text" placeholder="Search..." name="title" />
            <div className="space-y-2">
              <Label htmlFor="category" className="fontbold font-serif text-lg">
                Category
              </Label>
              <SN.Select name="category">
                <SN.SelectTrigger className="w-full">
                  <SN.SelectValue placeholder="Select category" id="category" />
                </SN.SelectTrigger>
                <SN.SelectContent>
                  <SN.SelectItem value="veg">Veg</SN.SelectItem>
                  <SN.SelectItem value="non-veg">Non-Veg</SN.SelectItem>
                  <SN.SelectItem value="snacks">Snacks</SN.SelectItem>
                  <SN.SelectItem value="beverage">Beverage</SN.SelectItem>
                </SN.SelectContent>
              </SN.Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration" className="fontbold font-serif text-lg">
                Duration
              </Label>
              <SN.Select name="duration">
                <SN.SelectTrigger className="w-full">
                  <SN.SelectValue placeholder="Select duration" id="duration" />
                </SN.SelectTrigger>
                <SN.SelectContent>
                  <SN.SelectItem value="5">5 minutes</SN.SelectItem>
                  <SN.SelectItem value="10">10 minutes</SN.SelectItem>
                </SN.SelectContent>
              </SN.Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="rating" className="fontbold font-serif text-lg">
                Rating
              </Label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={!rating}
                  onClick={() => setRating(rating - 20)}
                  className="cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft />
                </button>
                <Progress value={rating} className="grow" />
                <input type="hidden" name="rating" value={rating} />
                <button
                  type="button"
                  disabled={rating === 100}
                  onClick={() => setRating(rating + 20)}
                  className="cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit" variant="outline" className="grow">
                Apply
              </Button>
              <Button
                type="button"
                className="grow"
                variant="outline"
                onClick={() => {
                  router.push('/recipes');
                }}
              >
                Reset
              </Button>
            </div>
          </form>
          <Button className="w-full" asChild>
            <Link href="/recipes/add">Add New</Link>
          </Button>
        </aside>
        <div className="flex items-center justify-between gap-2 md:hidden">
          <Input type="text" placeholder="Search..." />
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Filter
          </Button>
          <Button asChild>
            <Link href="/recipes/add">Add New</Link>
          </Button>
          <Dialog.Dialog open={open} onOpenChange={setOpen}>
            <Dialog.DialogContent>
              <Dialog.DialogHeader>
                <Dialog.DialogTitle>Filter</Dialog.DialogTitle>
                <Dialog.DialogDescription className="sr-only">
                  Apply filters according to the following variables.
                </Dialog.DialogDescription>
              </Dialog.DialogHeader>
              <form onSubmit={handleFilter} className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="category"
                    className="fontbold font-serif text-lg"
                  >
                    Category
                  </Label>
                  <SN.Select name="category">
                    <SN.SelectTrigger className="w-full">
                      <SN.SelectValue
                        placeholder="Select category"
                        id="category"
                      />
                    </SN.SelectTrigger>
                    <SN.SelectContent>
                      <SN.SelectItem value="veg">Veg</SN.SelectItem>
                      <SN.SelectItem value="non-veg">Non-Veg</SN.SelectItem>
                      <SN.SelectItem value="snacks">Snacks</SN.SelectItem>
                      <SN.SelectItem value="beverage">Beverage</SN.SelectItem>
                    </SN.SelectContent>
                  </SN.Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="duration"
                    className="fontbold font-serif text-lg"
                  >
                    Duration
                  </Label>
                  <SN.Select name="duration">
                    <SN.SelectTrigger className="w-full">
                      <SN.SelectValue
                        placeholder="Select duration"
                        id="duration"
                      />
                    </SN.SelectTrigger>
                    <SN.SelectContent>
                      <SN.SelectItem value="5">5 minutes</SN.SelectItem>
                      <SN.SelectItem value="10">10 minutes</SN.SelectItem>
                    </SN.SelectContent>
                  </SN.Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="rating"
                    className="fontbold font-serif text-lg"
                  >
                    Rating
                  </Label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={!rating}
                      onClick={() => setRating(rating - 20)}
                      className="cursor-pointer disabled:cursor-not-allowed"
                    >
                      <ChevronLeft />
                    </button>
                    <Progress value={rating} className="grow" />
                    <input type="hidden" name="rating" value={rating} />
                    <button
                      type="button"
                      disabled={rating === 100}
                      onClick={() => setRating(rating + 20)}
                      className="cursor-pointer disabled:cursor-not-allowed"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button type="submit">Apply</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setOpen(false);
                      router.push('/recipes');
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Dialog.DialogContent>
          </Dialog.Dialog>
        </div>
        <ul className="gap-4 space-y-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] md:space-y-0">
          {recipes.map(recipe => (
            <li key={recipe.slug}>
              <Link
                href={`/recipes/${recipe.slug}`}
                className="relative block max-h-fit space-y-5 rounded-md border-2 border-dashed p-3"
              >
                <header className="space-y-2">
                  <div className="relative min-h-70 overflow-clip rounded-sm md:min-h-35">
                    <Image
                      fill
                      priority
                      sizes="100%"
                      alt={recipe.slug}
                      src={recipe.image}
                      className="aspect-video object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap justify-between justify-items-center gap-2">
                    <span className="space-x-2 text-xs font-bold">
                      <FontAwesomeIcon size="sm" icon={Icon.faBowlFood} />
                      <span>{recipe.category}</span>
                    </span>
                    <span className="space-x-2 text-xs font-bold">
                      <FontAwesomeIcon size="sm" icon={Icon.faStar} />
                      <span>{recipe.rating}</span>
                    </span>
                    <span className="space-x-2 text-xs font-bold">
                      <FontAwesomeIcon size="sm" icon={Icon.faClock} />
                      <span>{recipe.duration} min</span>
                    </span>
                    <span className="space-x-2 text-xs font-bold">
                      <FontAwesomeIcon size="sm" icon={Icon.faHeart} />
                      <span>{recipe.likes}</span>
                    </span>
                  </div>
                </header>
                <main className="space-y-1">
                  <h1 className="font-serif text-xl font-bold">
                    {recipe.title}
                  </h1>
                  <p className="text-muted-foreground font-semibold- line-clamp-2 text-sm">
                    {recipe.summary}
                  </p>
                </main>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Recipes />
    </Suspense>
  );
}
