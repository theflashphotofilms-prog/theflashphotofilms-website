'use client';

import Link from 'next/link';
import Image from 'next/image';
import TermsAndConditions from '../../components/TermsAndConditions';
import SEO from '../../components/SEO';

export default function PreWeddingPackagesPage() {
  // Define package prices
  const packagePrices = {
    silver: 22000,
    gold: 45500,
  };

  return (
    <div className="min-h-screen bg-ivory text-forest-green">
      <SEO 
        title="Pre-Wedding Photography Packages | The Flash Photofilms" 
        description="Explore our elegant pre-wedding photography packages to capture your love story before the big day."
        url="https://theflashphotofilms.in/pre-wedding-packages"
      />
      
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Pre-Wedding Photography Packages
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Capture your love story before the big day with our elegant pre-wedding collections
          </p>
        </div>
      </div>

      {/* Package Tiers */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Silver Pre-Wedding Collection */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-forest-green/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-forest-green text-ivory py-4 px-6">
                <h3 className="text-2xl font-bold text-center">Silver Pre-Wedding Collection</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-forest-green">₹{packagePrices.silver.toLocaleString()}</div>
                  <p className="text-medium-gray mt-2">Starting Price</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">1 Candid Photographer</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">2 Days Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">All Soft Copy of Edited Photos</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">10 Days To Go Photos</span>
                  </li>
                </ul>
                <Link 
                  href="/booking" 
                  className="block w-full bg-forest-green text-ivory py-3 px-4 rounded-xl font-bold text-center hover:bg-soft-gold hover:text-forest-green transition-colors"
                >
                  Select Package
                </Link>
              </div>
            </div>

            {/* Gold Pre-Wedding Collection */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-soft-gold transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-soft-gold text-forest-green py-4 px-6">
                <h3 className="text-2xl font-bold text-center">Gold Pre-Wedding Collection</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-forest-green">₹{packagePrices.gold.toLocaleString()}</div>
                  <p className="text-medium-gray mt-2">Premium Choice</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">1 Candid Photographer</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">1 Cinematic Videographer</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">1 Drone Pilot</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">2 Days Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">All Soft Copy of Edited Photos</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">1 Pre Wedding Song</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">2 Reels</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-soft-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-medium-gray">15 Days To Go Photos</span>
                  </li>
                </ul>
                <Link 
                  href="/booking" 
                  className="block w-full bg-forest-green text-ivory py-3 px-4 rounded-xl font-bold text-center hover:bg-soft-gold hover:text-forest-green transition-colors"
                >
                  Select Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information Section */}
      <div className="py-16 bg-forest-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-10 text-center">Important Information</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-soft-gold mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-medium-gray">Packages are valid for 2 Days Coverage</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-soft-gold mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-medium-gray">Additional days will be charged separately</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-soft-gold mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-medium-gray">Travel, Stay and Food expenses are not included</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-soft-gold mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-medium-gray">Customized packages are available according to client requirements</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="py-16 bg-forest-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TermsAndConditions />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-forest-green text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Capture Your Love Story?
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Choose the perfect pre-wedding package and let us document your journey together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/booking" 
              className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors text-lg"
            >
              Book Your Session
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-block bg-transparent border-2 border-soft-gold text-soft-gold px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}