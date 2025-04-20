'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof ProgressPrimitive.Root>;

export function Progress(props: Props) {
  return (
    <ProgressPrimitive.Root
      {...props}
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        props.className
      )}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (props.value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
