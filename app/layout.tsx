import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import TanstackProvider from '@/components/TanstackProvider/TanstackProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: '700',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: '700',
});

export const metadata: Metadata = {
  title: 'Note Hub',
  description: 'Simple App to introduce Next.js',
};

interface RootLayoutProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}

export default function RootLayout({ children, preview }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TanstackProvider>
          <Header />
          <main>
            <div> {preview}</div>
            {children}
          </main>
          <ReactQueryDevtools />
        </TanstackProvider>
        <div id="modal-root"></div>
        <footer>
          <p>
            Created in <time dateTime="2025"> 2025 by bndnt</time>
          </p>
          <p>Supported by GoIt school</p>
        </footer>
      </body>
    </html>
  );
}
