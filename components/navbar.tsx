"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">MyWebsite</div>

        {/* Hamburger Menu (React Icons) */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-4 md:items-center md:static absolute bg-blue-500 w-full left-0 md:w-auto md:opacity-100 transition-all duration-300 ease-in ${
            isOpen ? 'top-28 opacity-100' : 'top-[-400px] opacity-0'
          }`}
        >
          <li className="p-2 md:p-0">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="p-2 md:p-0">
            <Link href="/about" className="text-white hover:text-gray-300">About   
            </Link>
          </li>
          <li className="p-2 md:p-0">
            <Link href="/contact" className="text-white hover:text-gray-300" >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
