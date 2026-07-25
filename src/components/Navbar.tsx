'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const phoneNumber = "+91 9876543210"; // Placeholder phone number
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="The Flash Photofilms Logo"
            width={120}
            height={60}
            className="h-16 object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link 
            href="/" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/about' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/services' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link 
            href="/packages" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/packages' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Wedding Packages
          </Link>
          <Link 
            href="/pre-wedding-packages" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/pre-wedding-packages' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Pre-Wedding Packages
          </Link>
          <Link 
            href="/engagement-babyshower-packages" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/engagement-babyshower-packages' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Engagement & Baby Shower
          </Link>
          <Link 
            href="/portfolio" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/portfolio' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
          <Link 
            href="/feedback" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/feedback' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Reviews
          </Link>
          <Link 
            href="/faq" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/faq' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            FAQ
          </Link>
          <Link 
            href="/contact" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/contact' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link 
            href="/disclaimer" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/disclaimer' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Disclaimer
          </Link>
          <Link 
            href="/other-services" 
            className={`font-medium transition-colors hover:text-gold ${pathname === '/other-services' ? 'text-gold' : scrolled ? 'text-dark-maroon' : 'text-white'}`}
            onClick={closeMobileMenu}
          >
            Other Services
          </Link>
          <a 
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
            className={`hidden lg:flex items-center space-x-1 font-medium transition-colors hover:text-gold ${scrolled ? 'text-dark-maroon' : 'text-white'}`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{phoneNumber}</span>
          </a>
          <Link 
            href="/contact" 
            className={`hidden lg:flex items-center bg-dark-maroon text-white px-6 py-2 rounded-lg font-bold hover:bg-gold hover:text-dark-maroon transition-colors ${scrolled ? 'bg-dark-maroon text-white' : ''}`}
            onClick={closeMobileMenu}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <a 
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
            className={`mr-4 ${scrolled ? 'text-dark-maroon' : 'text-white'}`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md ${scrolled ? 'text-dark-maroon' : 'text-white'}`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 py-4 absolute left-0 right-0 mx-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              href="/" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/about' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/services' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/packages" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/packages' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Wedding Packages
            </Link>
            <Link 
              href="/pre-wedding-packages" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/pre-wedding-packages' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Pre-Wedding Packages
            </Link>
            <Link 
              href="/engagement-babyshower-packages" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/engagement-babyshower-packages' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Engagement & Baby Shower
            </Link>
            <Link 
              href="/portfolio" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/portfolio' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/feedback" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/feedback' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Reviews
            </Link>
            <Link 
              href="/faq" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/faq' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/contact' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link 
              href="/disclaimer" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/disclaimer' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Disclaimer
            </Link>
            <Link 
              href="/other-services" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon ${pathname === '/other-services' ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Other Services
            </Link>
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
              className="font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-dark-maroon text-dark-maroon flex items-center"
              onClick={closeMobileMenu}
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phoneNumber}
            </a>
            <Link 
              href="/contact" 
              className="font-medium py-2 px-4 rounded bg-dark-maroon text-white text-center hover:bg-gold hover:text-dark-maroon transition-colors"
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;