'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // Icons for the hamburger menu

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      // Only hide navbar if user scrolls down
      if (currentScrollPosition > scrollPosition && currentScrollPosition > 0) {
        setNavbarVisible(false); // Hide when scrolling down
      } else {
        setNavbarVisible(true); // Show when scrolling up
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu open/close state
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-lg z-50 px-8 py-4 transition-transform duration-300 ease-in-out ${
        navbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">LOGO</Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {/* Navigation links in the middle (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/home" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-blue-400">
            Services
          </Link>
        </div>

        {/* Contact button on the right */}
        <div className="hidden md:block">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-950">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Side Menu (shown when menuOpen is true) */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-10">
          <Link href="/home" className="block text-white text-2xl hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="block text-white text-2xl hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="block text-white text-2xl hover:text-blue-400">
            Services
          </Link>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-950">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
