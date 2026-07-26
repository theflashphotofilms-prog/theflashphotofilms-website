'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const phoneNumber = "+91 79849 41331";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the interactive elements after mount to prevent hydration issues
  const InteractiveElements = () => (
    <>
      <Link
        href="/contact"
        className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-dark-maroon transition-colors duration-300 text-center"
      >
        Book Your Session
      </Link>
      <Link
        href="/packages"
        className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-dark-maroon transition-colors duration-300 text-center"
      >
        View Packages
      </Link>
    </>
  );

  return (
    <section className="relative bg-gradient-to-br from-dark-maroon to-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-maroon/70 to-transparent"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Capturing Life&apos;s <span className="text-gold">Precious Moments</span> with Artistic Excellence
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            Professional wedding, event, and commercial photography &amp; videography services by <span className="text-gold font-medium">Mohit Panchal</span>. Creating timeless memories that last forever.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {isMounted ? <InteractiveElements /> : (
              <>
                <div className="bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold text-lg text-center animate-pulse">Loading...</div>
                <div className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold text-lg text-center animate-pulse">Loading...</div>
              </>
            )}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-medium-gray">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Professional Quality</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Timely Delivery</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 bg-gold rounded-full p-3 mr-4">
        <p className="text-dark-maroon font-bold">Mohit Panchal</p>
      </div>
      <div className="absolute bottom-6 left-6">
        <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-xl font-medium hover:text-gold transition-colors">
          {phoneNumber}
        </a>
      </div>
    </section>
  );
};

export default Hero;