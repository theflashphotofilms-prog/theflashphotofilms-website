'use client';

import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';
import WhatsAppCTA from '../../components/WhatsAppCTA';

const PackagesPage = () => {
  const packages = [
    {
      name: "Essential Package",
      price: "₹25,000",
      description: "Perfect for intimate celebrations",
      features: [
        "4 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 300 edited photos"
      ]
    },
    {
      name: "Premium Package",
      price: "₹45,000",
      description: "Ideal for medium-sized events",
      features: [
        "6 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 500 edited photos",
        "Same-day slideshow",
        "Engagement session included"
      ],
      featured: true
    },
    {
      name: "Signature Package",
      price: "₹65,000",
      description: "Complete coverage for large events",
      features: [
        "8 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 800 edited photos",
        "Same-day slideshow",
        "Engagement session included",
        "Second photographer",
        "Drone photography (weather permitting)",
        "Highlight video (1-2 minutes)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      <SEO 
        title="Photography Packages - The Flash Photofilms" 
        description="Affordable photography packages for weddings and events. Professional photographers to capture your special moments."
        url="https://www.theflashphotofilms.com/packages"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Our Photography Packages</h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Choose the perfect package for your special occasion. All packages include professional photography, high-resolution images, and online gallery access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`package-card-themed rounded-2xl shadow-lg p-8 relative ${pkg.featured ? 'ring-2 ring-[#D2A97F] transform md:-translate-y-4' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D2A97F] text-[#3A5A40] px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-white mb-2">{pkg.name}</h2>
              <div className="text-3xl font-bold text-[#D2A97F] mb-2">{pkg.price}</div>
              <p className="text-white mb-6">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className={`block text-center py-3 px-6 rounded-xl font-bold transition-colors ${
                  pkg.featured 
                    ? 'btn-luxury hover:bg-[#3A5A40] hover:text-[#D2A97F]' 
                    : 'btn-luxury hover:bg-[#3A5A40] hover:text-[#D2A97F]'
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div className="package-card-themed rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Package Inclusions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#D2A97F] mb-4">What's Included</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Professional photographer for selected hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">High-resolution edited photos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Online gallery with print release</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Personalized photo album (Signature)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#D2A97F] mb-4">Additional Options</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Additional hours (+₹3,000/hour)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Physical photo album (+₹6,000)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Additional photographer (+₹10,000)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D2A97F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Video coverage (+₹20,000)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-themed py-16 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Capture Your Special Moments?</h2>
          <p className="text-xl text-[#D2A97F] mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default PackagesPage;