'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-forest-green/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-serif font-bold text-soft-gold">THE FLASH PHOTOFILMS</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium relative ${pathname === '/' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'} group`}>
                Home
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all duration-300 group-hover:w-full ${pathname === '/' ? 'w-full' : ''}`}></span>
              </Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium relative ${pathname === '/about' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'} group`}>
                About
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all duration-300 group-hover:w-full ${pathname === '/about' ? 'w-full' : ''}`}></span>
              </Link>
              <Link href="/portfolio" className={`px-3 py-2 rounded-md text-sm font-medium relative ${pathname === '/portfolio' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'} group`}>
                Portfolio
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all duration-300 group-hover:w-full ${pathname === '/portfolio' ? 'w-full' : ''}`}></span>
              </Link>
              <Link href="/films" className={`px-3 py-2 rounded-md text-sm font-medium relative ${pathname === '/films' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'} group`}>
                Films
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all duration-300 group-hover:w-full ${pathname === '/films' ? 'w-full' : ''}`}></span>
              </Link>
              <Link href="/packages" className={`px-3 py-2 rounded-md text-sm font-medium relative ${pathname === '/packages' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'} group`}>
                Packages
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all duration-300 group-hover:w-full ${pathname === '/packages' ? 'w-full' : ''}`}></span>
              </Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium relative ${pathname === '/contact' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'} group`}>
                Contact
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all duration-300 group-hover:w-full ${pathname === '/contact' ? 'w-full' : ''}`}></span>
              </Link>
              <Link href="/contact" className="ml-4 px-4 py-2 rounded-full bg-soft-gold text-forest-green text-sm font-bold hover:bg-opacity-90 transition-all duration-300">
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-ivory hover:text-soft-gold focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-forest-green/95 backdrop-blur-md">
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'}`}>
            Home
          </Link>
          <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'}`}>
            About
          </Link>
          <Link href="/portfolio" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/portfolio' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'}`}>
            Portfolio
          </Link>
          <Link href="/films" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/films' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'}`}>
            Films
          </Link>
          <Link href="/packages" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/packages' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'}`}>
            Packages
          </Link>
          <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact' ? 'text-soft-gold' : 'text-ivory hover:text-soft-gold'}`}>
            Contact
          </Link>
          <Link href="/contact" className="mt-2 block w-full text-center px-4 py-2 rounded-full bg-soft-gold text-forest-green font-bold hover:bg-opacity-90 transition-all duration-300">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;