'use client';

import Link from 'next/link';
import { useState } from 'react';

import * as Drawer from '@/components/ui/drawer';

export default function MenuToggle() {
  const [open, setOpen] = useState<boolean>();

  return (
    <Drawer.Drawer open={open} onOpenChange={setOpen}>
      <Drawer.DrawerTrigger asChild onClick={e => e.currentTarget.blur()}>
        <button className="flex cursor-pointer items-center gap-2 md:hidden">
          <span className="flex w-5 flex-col items-center gap-1">
            <span className="bg-foreground h-[2px] w-full"></span>
            <span className="bg-foreground h-[2px] w-full"></span>
          </span>
        </button>
      </Drawer.DrawerTrigger>
      <Drawer.DrawerContent>
        <Drawer.DrawerTitle className="sr-only">
          Navigation Menu
        </Drawer.DrawerTitle>
        <Drawer.DrawerDescription className="sr-only">
          This is the drawer description
        </Drawer.DrawerDescription>
        <ul className="text-muted-foreground space-y-2 p-4 font-sans">
          <li className="hover:text-foreground transition-colors">
            <Link href="/posts" onClick={() => setOpen(false)}>
              Posts
            </Link>
          </li>
          <li className="hover:text-foreground transition-colors">
            <Link href="/recipes" onClick={() => setOpen(false)}>
              Recipes
            </Link>
          </li>
        </ul>
      </Drawer.DrawerContent>
    </Drawer.Drawer>
  );
}
