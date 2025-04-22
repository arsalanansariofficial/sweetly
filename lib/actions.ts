'use server';

import path from 'path';
import fs from 'fs/promises';

import { getFileName, getMarkDown } from '@/lib/utils';

export async function addRecipe(formData: FormData) {
  const name = formData.get('name') as string;
  const summary = formData.get('summary') as string;
  const steps = JSON.parse(formData.get('steps') as string) as string[];
  const ingredients = JSON.parse(formData.get('ingredients') as string);

  fs.writeFile(
    path.join(process.cwd(), getFileName(name, 'md')),
    getMarkDown({ name, summary, ingredients, steps })
  );
}
