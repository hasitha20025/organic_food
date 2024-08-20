'use client';
import React, { useState } from 'react';
import Logo from './logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="bg-white p-2 container mx-auto shadow-md">
      <div className=" flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <a href="/">
            {' '}
            <Logo />{' '}
          </a>
          <a href="/">
            <p className="text-primary text-lg font-bold ml-2 cursor-pointer">
              Organic Foods
            </p>
          </a>
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
              <a
                href="#home"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                Home
              </a>
            </li>
            <li className="block py-2 px-4">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                Products
              </a>
            </li>
            <li className="block py-2 px-4">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                Aboust Us
              </a>
            </li>
            <li className="block py-2 px-4">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="hover:text-primaryHover font-bold cursor-pointer text-primary "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
