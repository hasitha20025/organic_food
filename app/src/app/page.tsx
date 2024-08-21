import { Metadata } from 'next';
import Home from './pages/home/page';
import Products from './pages/product/page';
import About from './pages/about/page';


// export const metadata: Metadata = {
//   title: 'My Awesome Website - Home',
//   description: 'Welcome to the homepage of My Awesome Website.',
//   keywords: ['awesome', 'website', 'homepage'],
//   authors: [{ name: 'Your Name' }],
//   openGraph: {
//     title: 'My Awesome Website - Home',
//     description: 'Welcome to the homepage of My Awesome Website.',
//     url: '',
//     siteName: 'My Awesome Website',
//     locale: 'en_US',
//     type: 'website',
//   } 
// };

export default function App() {
  return (
    <>
      <Home/>
      <Products/>
      <About/>     
    </>
  );
}
