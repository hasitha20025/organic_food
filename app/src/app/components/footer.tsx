import Logo from './logo';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto px-4 py-8 bg-background mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Part 1: Logo and Links */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <a href="/">
              <Logo />
            </a>
            <a href="/">
              <p className="text-primary text-lg font-bold ml-2">
                Organic Foods
              </p>
            </a>
          </div>
          <div className="space-y-2">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Product</p>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Contact Us</p>
          </div>
        </div>

        {/* Part 2: Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-2 font-semibold">Contact Us</p>
          <p className="mb-2">
            Address: 7th Mile post, Katugasthota Road, Kandy
          </p>
          <p className="mb-2">Phone: (+94) 78 437 5524</p>
          <p>Email: organicfood@gmail.com</p>

          <div>
            <p className="my-3">Follow us on social media</p>
            <div className="flex gap-4">
              <a href="http://www.facebook.com" target="_blank">
                <FaFacebook className="cursor-pointer text-2xl" />
              </a>
              <a href="https://www.instagram.com/ " target="_blank">
                <FaSquareInstagram className="cursor-pointer text-2xl" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube className="cursor-pointer text-2xl" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="cursor-pointer text-2xl" />
              </a>
              <a href="https://www.pinterest.com/" target="_blank">
                <FaPinterest className="cursor-pointer text-2xl" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank">
                <AiFillTikTok className="cursor-pointer text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 my-6" />

      <p className="text-center">
        Copyright © {currentYear}. Organic Foods, Inc. All rights reserved.
      </p>
    </div>
  );
}
