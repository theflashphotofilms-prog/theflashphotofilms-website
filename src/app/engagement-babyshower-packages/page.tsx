'use client';

import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';
import CouponInput from '../../components/CouponInput';
import WhatsAppCTA from '../../components/WhatsAppCTA';

const EngagementBabyShowerPackagesPage = () => {
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Calculate discounted price
  const calculateDiscountedPrice = (originalPrice: string) => {
    if (discountPercentage === 0) return originalPrice;
    
    // Extract numeric value from price (remove ₹ and -/)
    const numericValue = parseInt(originalPrice.replace(/[^\d]/g, ''), 10);
    const discountAmount = (numericValue * discountPercentage) / 100;
    const discountedValue = numericValue - discountAmount;
    
    // Format back to original format
    return `₹${discountedValue.toLocaleString('en-IN')}/-`;
  };

  const packages = [
    {
      name: "Basic Package",
      price: "₹15,000",
      description: "Perfect for intimate gatherings",
      features: [
        "4 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 200 edited photos"
      ]
    },
    {
      name: "Premium Package",
      price: "₹25,000",
      description: "Ideal for larger celebrations",
      features: [
        "6 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 400 edited photos",
        "Same-day slideshow",
        "Engagement session included"
      ],
      featured: true
    },
    {
      name: "Deluxe Package",
      price: "₹35,000",
      description: "Complete coverage for special events",
      features: [
        "8 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 600 edited photos",
        "Same-day slideshow",
        "Engagement session included",
        "Second photographer",
        "Drone photography (weather permitting)",
        "Highlight video (1-2 minutes)"
      ]
    }
  ];

  const handleDiscountApply = (discount: number) => {
    setDiscountPercentage(discount);
  };

  const handleBookNow = (packageName: string) => {
    // Track package interest
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_engagement_package_cta', {
        package_name: packageName,
        page_title: 'Engagement & Baby Shower Packages'
      });
    }
  };

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Engagement & Baby Shower Photography Packages | The Flash Photofilms" 
        description="Premium engagement and baby shower photography packages by The Flash Photofilms including traditional and candid photography, cinematic videography, albums, reels, highlights and drone coverage."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Engagement & Baby Shower Photography Packages
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Capture your special moments with our premium engagement and baby shower packages designed to preserve every precious moment with artistic excellence and professional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${pkg.featured ? 'ring-2 ring-gold transform md:-translate-y-4' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-dark-maroon px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-dark-maroon mb-2">{pkg.name}</h2>
              <div className="text-3xl font-bold text-gold mb-2">{pkg.price}</div>
              <p className="text-medium-gray mb-6">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-medium-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className={`block text-center py-3 px-6 rounded-xl font-bold transition-colors ${
                  pkg.featured 
                    ? 'bg-gold text-dark-maroon hover:bg-transparent hover:text-gold border border-gold' 
                    : 'bg-dark-maroon text-white hover:bg-gold hover:text-dark-maroon'
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-dark-maroon mb-6 text-center">Package Inclusions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">What's Included</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">Professional photographer for selected hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">High-resolution edited photos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">Online gallery with print release</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">Personalized photo album (Deluxe)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">Additional Options</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">Additional hours (+₹2,500/hour)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">Physical photo album (+₹5,000)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">Additional photographer (+₹8,000)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-medium-gray">Video coverage (+₹15,000)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-dark-maroon to-gold py-16 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Capture Your Special Moments?</h2>
          <p className="text-xl text-gold mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your engagement or baby shower photography needs and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/packages" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default EngagementBabyShowerPackagesPage;