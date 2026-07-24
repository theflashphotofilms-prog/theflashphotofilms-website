'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <div className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-maroon mb-4">
            Find Your Perfect Wedding Package
          </h2>
          <p className="text-medium-gray text-lg mb-8 max-w-2xl mx-auto">
            Choose from our premium wedding photography packages designed to capture every beautiful moment of your special day.
          </p>
          <Link 
            href="/packages" 
            className="inline-block bg-dark-maroon text-white px-8 py-3 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
          >
            View Packages
          </Link>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-maroon mb-4">
            Explore Our Pre-Wedding Packages
          </h2>
          <p className="text-medium-gray text-lg mb-8 max-w-2xl mx-auto">
            Capture your love story before the wedding with cinematic pre-wedding photography and films by The Flash Photofilms.
          </p>
          <Link 
            href="/pre-wedding-packages" 
            className="inline-block bg-dark-maroon text-white px-8 py-3 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
          >
            View Pre-Wedding Packages
          </Link>
        </div>
      </div>
      <div className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-maroon mb-4">
            Celebrate Every Special Moment
          </h2>
          <p className="text-medium-gray text-lg mb-8 max-w-2xl mx-auto">
            Explore our Engagement and Baby Shower packages crafted to capture memories beautifully.
          </p>
          <Link 
            href="/engagement-babyshower-packages" 
            className="inline-block bg-dark-maroon text-white px-8 py-3 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
          >
            View Packages
          </Link>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-maroon mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-medium-gray text-lg">
              Get quick answers to common questions about our services.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-4 py-2">
                <h3 className="text-lg font-bold text-dark-maroon">How can I book The Flash Photofilms for my event?</h3>
                <p className="text-medium-gray mt-2">You can contact us through our Contact Form, WhatsApp, or direct phone call. Your booking will be confirmed only after the required advance payment is received.</p>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <h3 className="text-lg font-bold text-dark-maroon">How much advance payment is required for booking?</h3>
                <p className="text-medium-gray mt-2">A 30% advance payment is required to confirm your booking date.</p>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <h3 className="text-lg font-bold text-dark-maroon">Do you provide customised photography packages?</h3>
                <p className="text-medium-gray mt-2">Yes. We offer customised packages based on your event requirements, location, coverage duration, and deliverables.</p>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <h3 className="text-lg font-bold text-dark-maroon">Do you cover events outside Ankleshwar and Bharuch?</h3>
                <p className="text-medium-gray mt-2">Yes. We provide services across Gujarat and other locations. Travel expenses may apply for locations beyond 50 km.</p>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <h3 className="text-lg font-bold text-dark-maroon">Why should we choose The Flash Photofilms?</h3>
                <p className="text-medium-gray mt-2">We combine creativity, professional equipment, cinematic storytelling, premium albums, drone coverage, and personalised service to create memories that last a lifetime.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link 
                href="/faq" 
                className="inline-block bg-dark-maroon text-white px-6 py-3 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <ContactSection />
    </div>
  );
}