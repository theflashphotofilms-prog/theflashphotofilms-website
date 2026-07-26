'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const phoneNumber = "+91 79849 41331"; // Official phone number
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Function to close mobile menu when navigating
  const closeMobileMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="The Flash Photofilms Logo"
              width={120}
              height={60}
              priority={true}
              className="h-12 sm:h-[45px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link 
              href="/" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/' ? 'text-gold' : scrolled ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/about' ? 'text-gold' : scrolled ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/services' ? 'text-gold' : scrolled ? 'text-gold' : 'text-dark-maroon'}`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/packages" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/packages' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Wedding Packages
            </Link>
            <Link 
              href="/pre-wedding-packages" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/pre-wedding-packages' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Pre-Wedding Packages
            </Link>
            <Link 
              href="/engagement-babyshower-packages" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/engagement-babyshower-packages' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Engagement & Baby Shower
            </Link>
            <Link 
              href="/portfolio" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/portfolio' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/feedback" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/feedback' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Reviews
            </Link>
            <Link 
              href="/faq" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/faq' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/contact' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link 
              href="/disclaimer" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/disclaimer' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Disclaimer
            </Link>
            <Link 
              href="/other-services" 
              className={`font-medium transition-colors hover:text-gold ${pathname === '/other-services' ? 'text-gold' : scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Other Services
            </Link>
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
              className={`hidden lg:flex items-center space-x-1 font-medium transition-colors hover:text-gold ${scrolled ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{phoneNumber}</span>
            </a>
            <Link 
              href="/contact" 
              className={`hidden lg:flex items-center bg-gold text-dark-maroon px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-dark-maroon transition-colors`}
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
              className={`mr-4 ${scrolled ? 'text-gold' : 'text-gold'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${scrolled ? 'text-gold' : 'text-gold'}`}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - moved outside the main container to prevent height issues */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-maroon dark:bg-dark-maroon shadow-lg rounded-lg mt-2 py-4 absolute left-0 right-0 mx-4 z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              href="/" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/about' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/services' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/packages" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/packages' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Wedding Packages
            </Link>
            <Link 
              href="/pre-wedding-packages" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/pre-wedding-packages' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Pre-Wedding Packages
            </Link>
            <Link 
              href="/engagement-babyshower-packages" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/engagement-babyshower-packages' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Engagement & Baby Shower
            </Link>
            <Link 
              href="/portfolio" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/portfolio' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/feedback" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/feedback' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Reviews
            </Link>
            <Link 
              href="/faq" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/faq' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/contact' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link 
              href="/disclaimer" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/disclaimer' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Disclaimer
            </Link>
            <Link 
              href="/other-services" 
              className={`font-medium py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${pathname === '/other-services' ? 'text-gold' : 'text-gold'}`}
              onClick={closeMobileMenu}
            >
              Other Services
            </Link>
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
              className={`py-2 px-4 rounded hover:bg-gold/10 hover:text-gold ${scrolled ? 'text-gold' : 'text-gold'}`}
            >
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{phoneNumber}</span>
              </div>
            </a>
            <Link 
              href="/contact" 
              className={`w-full text-center bg-gold text-dark-maroon px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-dark-maroon transition-colors`}
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;