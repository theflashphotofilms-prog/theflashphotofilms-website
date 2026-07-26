'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import DiscountPopup from '../components/DiscountPopup';

export default function Home() {
  // Removed the state management for DiscountPopup since the component manages its own state
  // const [showDiscountPopup, setShowDiscountPopup] = useState(false);

  // Removed these functions since DiscountPopup manages its own state
  // const handleDiscountInterest = () => {
  //   setShowDiscountPopup(true);
  // };

  // const handleDiscountSuccess = () => {
  //   // Optionally show a notification or update UI after successful registration
  //   alert('Thank you for registering for the launch discount!');
  // };

  return (
    <div className="min-h-screen">
      <SEO 
        title="The Flash Photofilms - Professional Photography & Videography Services" 
        description="Professional photography and videography services for weddings, events, and commercial projects. Capture your special moments with our expert team."
        url="https://www.theflashphotofilms.com/"
      />
      <div className="relative hero-themed overflow-hidden bg-[#1A1A1A]">
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block text-white">The Flash Photofilms</span>
                  <span className="block text-gold mt-2">Capturing Life's Precious Moments</span>
                </h1>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Professional photography and videography services that preserve your most cherished memories with artistry and passion.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#3A5A40] bg-[#D2A97F] hover:bg-[#3A5A40] hover:text-[#D2A97F] md:py-4 md:text-lg md:px-10"
                    >
                      Book a Session
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/portfolio"
                      className="w-full flex items-center justify-center px-8 py-3 border border-[#D2A97F] text-base font-medium rounded-md text-[#D2A97F] bg-[#3A5A40]/20 hover:bg-[#D2A97F]/30 md:py-4 md:text-lg md:px-10"
                    >
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gray-200 sm:h-72 md:h-96 lg:w-full lg:h-full" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-gold uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark-maroon sm:text-4xl">
              Capturing Every Moment
            </p>
            <p className="mt-4 max-w-2xl text-xl text-medium-gray lg:mx-auto">
              Professional photography services tailored to your unique story and vision.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Wedding Photography',
                  description: 'Preserving the love, laughter, and tears of joy on your special day with artistic flair.',
                },
                {
                  title: 'Event Coverage',
                  description: 'From corporate events to milestone celebrations, we capture it all.',
                },
                {
                  title: 'Portrait Sessions',
                  description: 'Professional portraits that showcase your personality and style.',
                },
                {
                  title: 'Commercial Photography',
                  description: 'High-quality images for your business and marketing needs.',
                },
              ].map((feature) => (
                <div key={feature.title} className="relative lg:flex lg:items-center">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold text-white">
                      <svg className="h-6 w-6 text-dark-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="mt-5">
                      <h3 className="text-lg font-medium text-dark-maroon">{feature.title}</h3>
                      <p className="mt-2 text-medium-gray">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#3A5A40] to-[#4A6A50] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Capture Your Story?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#D2A97F]">
              Contact us today to book your session and receive a personalized quote.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block cta-themed px-8 py-4 font-bold rounded-lg hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Popup Modal - This will appear automatically after 3 seconds as implemented in the component */}
      <DiscountPopup />
    </div>
  );
}