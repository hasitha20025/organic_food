'use client';
import React, { useState } from 'react';
import Logo from './logo';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="bg-white p-2  shadow-sm">
      <div className=" flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <Link href="/">
            
            <Logo />
          </Link>
          <Link href="/">
            <p className="text-primary text-lg font-bold ml-2 cursor-pointer">
              Organic Foods
            </p>
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" focus:outline-none text-primary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? '' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="flex flex-col items-end lg:flex-row lg:space-x-6 text-white">
            <li className="block py-2 px-4">
              <Link
                href="#home"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                Home
              </Link>
            </li>
            <li className="block py-2 px-4">
              <Link
                href="#products"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                Products
              </Link>
            </li>
            <li className="block py-2 px-4">
              <Link
                href="#about"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                About Us
              </Link>
            </li>
            <li className="block py-2 px-4">
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
