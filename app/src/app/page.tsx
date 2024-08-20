import { Metadata } from 'next';
import Home from './pages/home/page';
import Products from './pages/product/page';
import About from './pages/about/page';


export const metadata: Metadata = {
  title: 'Oganic Foods | Home',
  description: '...',
};

export default function App() {
  return (
    <>
      <Home/>
      <Products/>
      <About/>     
    </>
  );
}
