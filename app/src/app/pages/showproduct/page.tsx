import ProductShowPage from '@/app/components/productShowPage'
import React from 'react'
import { Metadata } from 'next';

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

export default function ProductShow() {
  return (
    <>
        <ProductShowPage/>
    </>
  )
}
