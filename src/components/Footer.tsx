'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Official contact information
  const phoneNumber = "+91 79849 41331";
  const address = "202, Block-3, Ashwini Height, Near Golden Point, GIDC Ankleshwar, Bharuch, Gujarat 393002, India";

  return (
    <footer className="bg-dark-maroon text-gold py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="The Flash Photofilms Logo"
                width={140}
                height={70}
                className="h-16 sm:h-18 md:h-18 lg:h-18 object-contain"
              />
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gold hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gold hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gold hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/packages" className="text-gold hover:text-white transition-colors">Wedding Packages</Link></li>
              <li><Link href="/pre-wedding-packages" className="text-gold hover:text-white transition-colors">Pre-Wedding Packages</Link></li>
              <li><Link href="/engagement-babyshower-packages" className="text-gold hover:text-white transition-colors">Engagement & Baby Shower Packages</Link></li>
              <li><Link href="/other-services" className="text-gold hover:text-white transition-colors">Other Services</Link></li>
              <li><Link href="/faq" className="text-gold hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/portfolio" className="text-gold hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/feedback" className="text-gold hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/disclaimer" className="text-gold hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/contact" className="text-gold hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#wedding" className="text-gold hover:text-white transition-colors">Wedding Photography</Link></li>
              <li><Link href="/services#portrait" className="text-gold hover:text-white transition-colors">Portrait Sessions</Link></li>
              <li><Link href="/services#events" className="text-gold hover:text-white transition-colors">Event Coverage</Link></li>
              <li><Link href="/services#commercial" className="text-gold hover:text-white transition-colors">Commercial Photography</Link></li>
              <li><Link href="/services#video" className="text-gold hover:text-white transition-colors">Video Production</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gold">{phoneNumber}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gold">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@theflashphotofilms.com'}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gold">{address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gold/30 text-center">
          <p className="text-gold">
            © {new Date().getFullYear()} The Flash Photofilms. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy" className="text-gold hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gold hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="text-gold hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;