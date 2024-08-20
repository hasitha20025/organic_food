import { Metadata } from 'next';
import Carousels from './components/carousel';
import WhatsappIcon from './components/whatsappicon';
import AboutUs from './components/aboutUs';
import OurProducts from './components/ourProducts';

export const metadata: Metadata = {
  title: 'Oganic Foods | Home',
  description: '...',
};

export default function Home() {
  return (
    <>
      <Carousels />
      <WhatsappIcon />
      <OurProducts/>
      <AboutUs/>
    </>
  );
}
