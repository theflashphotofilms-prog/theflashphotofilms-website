'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Placeholder values for contact information
  const phoneNumber = "+91 9876543210";
  const address = "Mumbai, Maharashtra, India";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="The Flash Photofilms Logo"
                width={140}
                height={70}
                className="h-16 sm:h-16 md:h-16 lg:h-16 xl:h-16 object-contain transition-all duration-300"
              />
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-medium-gray hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-medium-gray hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-medium-gray hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/packages" className="text-medium-gray hover:text-gold transition-colors">Wedding Packages</Link></li>
              <li><Link href="/pre-wedding-packages" className="text-medium-gray hover:text-gold transition-colors">Pre-Wedding Packages</Link></li>
              <li><Link href="/engagement-babyshower-packages" className="text-medium-gray hover:text-gold transition-colors">Engagement & Baby Shower Packages</Link></li>
              <li><Link href="/other-services" className="text-medium-gray hover:text-gold transition-colors">Other Services</Link></li>
              <li><Link href="/faq" className="text-medium-gray hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/portfolio" className="text-medium-gray hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/feedback" className="text-medium-gray hover:text-gold transition-colors">Reviews</Link></li>
              <li><Link href="/disclaimer" className="text-medium-gray hover:text-gold transition-colors">Disclaimer</Link></li>
              <li><Link href="/contact" className="text-medium-gray hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#wedding" className="text-medium-gray hover:text-gold transition-colors">Wedding Photography</Link></li>
              <li><Link href="/services#portrait" className="text-medium-gray hover:text-gold transition-colors">Portrait Sessions</Link></li>
              <li><Link href="/services#events" className="text-medium-gray hover:text-gold transition-colors">Event Coverage</Link></li>
              <li><Link href="/services#commercial" className="text-medium-gray hover:text-gold transition-colors">Commercial Photography</Link></li>
              <li><Link href="/services#video" className="text-medium-gray hover:text-gold transition-colors">Video Production</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-medium-gray">{phoneNumber}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-medium-gray">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@theflashphotofilms.com'}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-medium-gray">{address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-medium-gray">
            &copy; {new Date().getFullYear()} The Flash Photofilms. All rights reserved. | Designed with passion for capturing life's beautiful moments.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;