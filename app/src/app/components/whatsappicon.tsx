'use client';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function WhatsappIcon() {
  return (
    <div
      className="fixed bottom-4 right-4 text-green-500 cursor-pointer hover:text-headingStrong "
      onClick={() => window.open('https://wa.me/+94784375524', '_blank')}
    >
      <IoLogoWhatsapp size={50} />
    </div>
  );
}
