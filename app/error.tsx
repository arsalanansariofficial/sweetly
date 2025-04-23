'use client';

import { Button } from '@/components/ui/button';

export default function Error(props: { reset: () => void }) {
  return (
    <main className="grow content-center p-4">
      <section className="container mx-auto space-y-2 text-center">
        <p className="text-muted-foreground text-3xl font-bold">500</p>
        <h1 className="text-center text-2xl font-bold">
          Something went wrong!
        </h1>
        <Button
          variant="secondary"
          className="cursor-pointer"
          onClick={() => props.reset()}
        >
          Try again
        </Button>
      </section>
    </main>
  );
}
