'use client';

import { FormEvent, useRef, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const [steps, setSteps] = useState<number[]>([1]);
  const [ingredients, setIngredients] = useState<number[]>([1]);

  function handleAddRecipe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const stepElements = formRef.current?.getElementsByClassName('step');
    const ingElements = formRef.current?.getElementsByClassName('ingredient');

    formData.set(
      'steps',
      JSON.stringify(
        Array.from(stepElements as HTMLCollectionOf<HTMLTextAreaElement>).map(
          input => input.value
        )
      )
    );

    formData.set(
      'ingredients',
      JSON.stringify(
        Array.from(ingElements as HTMLCollectionOf<HTMLInputElement>).map(
          input => input.value
        )
      )
    );
  }

  return (
    <main className="grow p-4">
      <form
        ref={formRef}
        onSubmit={handleAddRecipe}
        className="container mx-auto max-w-3xl space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" name="name" placeholder="Vanilla Cake" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="text" name="image" placeholder="Image.jpg" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Summary</Label>
          <Textarea
            id="summary"
            name="summary"
            placeholder="Brief summary about recipe..."
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="ingredient">Ingredient</Label>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIngredients([1, ...ingredients])}
            >
              Add
            </Button>
          </div>
          {ingredients.map((_, index) => (
            <div key={index}>
              <Input type="text" className="ingredient" placeholder="Sugar" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="step">Step</Label>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSteps([1, ...steps])}
            >
              Add
            </Button>
          </div>
          {steps.map((_, index) => (
            <div key={index}>
              <Textarea
                id="step"
                className="step"
                placeholder="Preheat the oven..."
              />
            </div>
          ))}
        </div>
        <Button type="submit" className="cursor-pointer">
          Add
        </Button>
      </form>
    </main>
  );
}
