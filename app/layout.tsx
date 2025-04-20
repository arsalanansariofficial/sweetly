import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <Header />
          {props.children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
