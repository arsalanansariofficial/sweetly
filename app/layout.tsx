import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import '@/app/globals.css';

type Props = Readonly<{ children: React.ReactNode }>;
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Sweetly',
  description: 'Created by Arsalan Ansari'
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        {props.children}
      </body>
    </html>
  );
}
