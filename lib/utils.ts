import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

type Info = {
  name: string;
  summary: string;
  steps: string[];
  ingredients: string[];
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMarkDown(info: Info) {
  const { name, summary, ingredients, steps } = info;
  return `# ${name}\n\n${summary}\n\n## Ingredients\n\n${(ingredients as string[]).map(ing => `- ${ing}`)}\n\n## Steps\n\n${(steps as string[]).map(step => `- ${step}`)}`;
}

export function getFileName(slug: string, extension: string): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  return `${slug}-${timestamp}-${randomString}.${extension}`;
}
