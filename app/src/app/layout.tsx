import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Baner from './components/baner';

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
      <body className=" ">
        <Baner/>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
