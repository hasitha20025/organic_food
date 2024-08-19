import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Organic Foods',
  description: 'Organic Foods',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background ">
        <div className="text-center  mb-2 py-2">
          <p className="text-stone-950 text-xs">
            The <span className="text-primary font-bold">#1</span> Organic Food
            product Range in SriLanka
          </p>
        </div>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
