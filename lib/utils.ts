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

export function sortByDate(a: string, b: string) {
  return new Date(b).getTime() - new Date(a).getTime();
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

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function shuffleArray<T>(array: T[]) {
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
