import { Metadata } from 'next';
import Carousels from './components/carousel';
import WhatsappIcon from './components/whatsappicon';
import AboutUs from './components/aboutUs';

export const metadata: Metadata = {
  title: 'Oganic Foods | Home',
  description: '...',
};

export default function Home() {
  return (
    <>
      <Carousels />
      <WhatsappIcon />
      <div>
      <AboutUs/>
      </div>

    </>
  );
}
