'use client'; // Added use client directive

import { useState } from 'react'; // Added useState import
import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';
import CouponInput from '../../components/CouponInput'; // Added missing import

const PreWeddingPackagesPage = () => {
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');

  const handleDiscountApply = (discountPercentage: number) => { // Removed second parameter
    setAppliedDiscount(discountPercentage);
    setDiscountMessage(`${discountPercentage}% discount applied!`);
  };

  const packages = [
    {
      name: "Romantic Package",
      price: "₹18,000",
      description: "Perfect for intimate pre-wedding moments",
      features: [
        "2 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 150 edited photos",
        "Scenic location included"
      ],
      bgColor: "bg-white",
      popular: false
    },
    {
      name: "Premium Package",
      price: "₹28,000",
      description: "Ideal for elaborate pre-wedding shoots",
      features: [
        "4 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 250 edited photos",
        "Multiple locations",
        "Styling assistance",
        "Professional makeup artist"
      ],
      bgColor: "bg-white",
      popular: true,
      popularText: "Most Popular"
    },
    {
      name: "Luxury Package",
      price: "₹45,000",
      description: "Complete pre-wedding experience",
      features: [
        "6 hours of photography coverage",
        "High-resolution digital images",
        "Online gallery access",
        "Print release included",
        "Up to 400 edited photos",
        "Multiple premium locations",
        "Styling assistance",
        "Professional makeup artist",
        "Hair stylist",
        "Preparation shoot included",
        "Highlight video (1-2 minutes)"
      ],
      bgColor: "bg-white",
      popular: false
    }
  ];

  const locations = [
    "Garden Parks",
    "Historical Monuments",
    "Beaches",
    "Hill Stations",
    "Palaces",
    "Urban Landscapes"
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      <SEO 
        title="Pre-Wedding Photography Packages - The Flash Photofilms" 
        description="Beautiful pre-wedding photography packages. Professional photographers to capture your love story before the big day."
        url="https://www.theflashphotofilms.com/pre-wedding-packages"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Pre-Wedding Photography Packages</h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Celebrate your love story with our specially crafted pre-wedding packages designed to capture your journey before the big day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`${pkg.bgColor} rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300`}
            >
              {pkg.popular && (
                <div className="bg-[#D2A97F] text-[#3A5A40] text-center py-2 font-bold">
                  {pkg.popularText}
                </div>
              )}
              <div className="p-8">
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
                    pkg.popular 
                      ? 'bg-[#D2A97F] text-[#3A5A40] hover:bg-transparent hover:text-[#D2A97F] border border-[#D2A97F]' 
                      : 'bg-dark-maroon text-white hover:bg-gold hover:text-dark-maroon'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-dark-maroon mb-6 text-center">Popular Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center p-4 bg-light-gray rounded-lg">
                <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-medium-gray">{location}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-dark-maroon to-gold rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Why Choose Our Pre-Wedding Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Creative Direction", 
                desc: "Our experienced team provides creative input to make your shoot unique" 
              },
              { 
                title: "Flexible Timing", 
                desc: "Shoots scheduled at optimal times for best lighting and ambiance" 
              },
              { 
                title: "Professional Team", 
                desc: "Skilled photographers and assistants for flawless execution" 
              },
              { 
                title: "Quick Delivery", 
                desc: "Preview gallery within 48 hours of your shoot" 
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Discount Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#D2A97F] mb-6 text-center">Have a Coupon Code?</h2>
          <CouponInput 
            onApply={handleDiscountApply} 
            originalPrice={packages[0].price} 
          />
          {discountMessage && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
              {discountMessage}
            </div>
          )}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-maroon mb-4">Ready to Capture Your Love Story?</h2>
          <p className="text-xl text-medium-gray mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your pre-wedding photography needs and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-transparent border-2 border-dark-maroon text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-dark-maroon hover:text-white transition-colors"
            >
              View Sample Work
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default PreWeddingPackagesPage;