
import { Metadata } from "next";
import Carousels from "./components/carousel";


export const metadata: Metadata = {
  title: 'Oganic Foods | Home',
  description: '...',
}

export default function Home() {
  return (
    <>
    
    <Carousels/>
    </>
  );
}
