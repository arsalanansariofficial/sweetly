'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="grow content-center p-4">
      <section className="container mx-auto space-y-2 text-center">
        <p className="text-muted-foreground text-3xl font-bold">404</p>
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">
          Please check the URL in the address bar and try again.
        </p>
        <button
          onClick={() => router.push('/')}
          className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-3 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Go back home</span>
        </button>
      </section>
    </main>
  );
}
