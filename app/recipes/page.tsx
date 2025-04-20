'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as SN from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function Page() {
  const [rating, setRating] = useState<number>(0);

  function handleFilter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(Object.fromEntries(formData.entries()));
  }

  return (
    <main className="flex grow flex-col p-4">
      <div className="container mx-auto grow space-y-4 md:grid md:grid-cols-[auto_1fr] md:gap-8 md:space-y-0">
        <aside className="sticky top-22 hidden space-y-4 self-start md:block">
          <form className="space-y-4 self-start" onSubmit={handleFilter}>
            <Input type="text" placeholder="Search..." name="recipe" />
            <div className="space-y-2">
              <Label htmlFor="category" className="fontbold font-serif text-lg">
                Category
              </Label>
              <SN.Select name="category">
                <SN.SelectTrigger className="w-full">
                  <SN.SelectValue placeholder="Select category" id="category" />
                </SN.SelectTrigger>
                <SN.SelectContent>
                  <SN.SelectItem value="vegetables">Vegetables</SN.SelectItem>
                  <SN.SelectItem value="non-vegetables">
                    Non-Vegetables
                  </SN.SelectItem>
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
            <Button type="submit" variant="outline" className="w-full">
              Apply
            </Button>
          </form>
          <Button className="w-full">Add New</Button>
        </aside>
        <div className="flex items-center justify-between gap-4 md:hidden">
          <Input type="text" placeholder="Search..." className="" />
          <Button variant="outline" className="cursor-pointer">
            Filter
          </Button>
        </div>
        <ul className="gap-4 space-y-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] md:space-y-0">
          {Array(10)
            .fill(true)
            .map((_, index) => (
              <li key={index}>
                <Link
                  href="/recipes/vanilla-cake"
                  className="relative block max-h-fit space-y-5 rounded-md border-2 border-dashed p-3"
                >
                  <header className="space-y-2">
                    <div className="relative min-h-70 overflow-clip rounded-sm md:min-h-35">
                      <Image
                        fill
                        priority
                        sizes="100%"
                        src="/recipe.jpg"
                        alt="Recipe Name"
                        className="aspect-video"
                      />
                    </div>
                    <div className="flex flex-wrap justify-between justify-items-center gap-2">
                      <span className="space-x-2 text-xs font-bold">
                        <FontAwesomeIcon size="sm" icon={Icon.faBowlFood} />
                        <span>Category</span>
                      </span>
                      <span className="space-x-2 text-xs font-bold">
                        <FontAwesomeIcon size="sm" icon={Icon.faStar} />
                        <span>5</span>
                      </span>
                      <span className="space-x-2 text-xs font-bold">
                        <FontAwesomeIcon size="sm" icon={Icon.faClock} />
                        <span>10 min</span>
                      </span>
                      <span className="space-x-2 text-xs font-bold">
                        <FontAwesomeIcon size="sm" icon={Icon.faHeart} />
                        <span>5</span>
                      </span>
                    </div>
                  </header>
                  <main className="space-y-1">
                    <h1 className="font-serif text-xl font-bold">
                      Recipe Name
                    </h1>
                    <p className="text-muted-foreground font-semibold- line-clamp-2 text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Provident eveniet, officiis cupiditate laborum possimus
                      quam?
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
