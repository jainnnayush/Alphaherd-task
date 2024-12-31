import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/app/components/navigation';

// Load Roboto font with all weights
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto', 
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'Communication Interface',
  description: 'A modern communication interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
