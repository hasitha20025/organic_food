import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Baner from './components/baner';
import WhatsappIcon from './components/whatsappicon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  
  title: 'My Awesome Website - Home',
  description: 'Welcome to the homepage of My Awesome Website.',
  keywords: ['awesome', 'website', 'homepage'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'My Awesome Website - Home',
    description: 'Welcome to the homepage of My Awesome Website.',
    url: '',
    siteName: 'My Awesome Website',
    locale: 'en_US',
    type: 'website',
  } 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" ">
        <header>
            <Baner/>
            <Navbar />
        </header>
        <div className="container mx-auto">
          <main>
              {children}
              <WhatsappIcon />
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
