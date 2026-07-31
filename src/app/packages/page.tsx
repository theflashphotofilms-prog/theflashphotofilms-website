'use client';

import Link from 'next/link';
import Image from 'next/image';
import TermsAndConditions from '../../components/TermsAndConditions';
import type { Metadata } from 'next';

export default function PackagesPage() {
  // Wedding packages
  const weddingPackages = [
    {
      id: 1,
      name: "Silver Collection",
      price: "₹45,500",
      description: "",
      features: [
        "All Edited Photos (Soft Copy)",
        "Edited Wedding Movie",
        "Final Delivery in Pen Drive"
      ],
      team: [
        "1 Regular Photographer",
        "1 Semi-Cinematic Videographer"
      ],
      image: "/images/packages/package-1.jpg",
      popular: false
    },
    {
      id: 2,
      name: "Gold Collection",
      price: "₹65,000",
      description: "",
      features: [
        "200 Photos Premium Album",
        "Premium Album Bag",
        "Mini Book",
        "Calendar",
        "All Edited Photos (Soft Copy)",
        "Edited Wedding Film",
        "Wedding Highlight Video"
      ],
      team: [
        "1 Semi-Candid Photographer",
        "1 Semi-Cinematic Videographer"
      ],
      image: "/images/packages/package-2.jpg",
      popular: true,
      badge: "⭐ Most Loved"
    },
    {
      id: 3,
      name: "Premium Collection",
      price: "₹1,10,000",
      description: "",
      features: [
        "250 Photos Premium Album",
        "Premium Album Bag",
        "Mini Book",
        "Calendar",
        "All Edited Photos (Soft Copy)",
        "Edited Wedding Film",
        "Wedding Highlight Video"
      ],
      team: [
        "1 Traditional Photographer",
        "1 Traditional Videographer",
        "1 Cinematographer",
        "1 Candid Photographer",
        "1 Drone Pilot"
      ],
      image: "/images/packages/package-3.jpg",
      popular: false
    },
    {
      id: 4,
      name: "Luxury Collection",
      price: "₹1,65,000",
      description: "",
      features: [
        "250 Photos Premium Album",
        "Customized Album Bag",
        "Mini Book",
        "Calendar",
        "All Edited Photos (Soft Copy)",
        "Edited Wedding Film",
        "Wedding Highlight Video",
        "Same Day Edit (SDE)",
        "LED Screen (1 Day)"
      ],
      team: [
        "1 Traditional Photographer",
        "1 Traditional Videographer",
        "1 Candid Photographer",
        "1 Cinematic Videographer",
        "1 Drone Pilot",
        "Same Day Editor"
      ],
      image: "/images/packages/package-3.jpg",
      popular: false,
      featured: true,
      badge: "👑"
    }
  ];

  // Pre-wedding packages
  const preWeddingPackages = [
    {
      id: 1,
      name: "Silver Pre-Wedding Collection",
      price: "₹22,000",
      description: "Starting Price",
      features: [
        "1 Candid Photographer",
        "2 Days Coverage",
        "All Soft Copy of Edited Photos",
        "10 Days To Go Photos"
      ],
      image: "/images/packages/package-1.jpg",
      popular: false
    },
    {
      id: 2,
      name: "Gold Pre-Wedding Collection",
      price: "₹45,500",
      description: "Premium Choice",
      features: [
        "1 Candid Photographer",
        "1 Cinematic Videographer",
        "1 Drone Pilot",
        "2 Days Coverage",
        "All Soft Copy of Edited Photos",
        "1 Pre Wedding Song",
        "2 Reels",
        "15 Days To Go Photos"
      ],
      image: "/images/packages/package-2.jpg",
      popular: true,
      badge: "🌟 Premium Choice"
    }
  ];

  // Engagement & Baby Shower packages
  const engagementBabyShowerPackages = [
    {
      id: 1,
      name: "Silver Collection",
      price: "₹8,000",
      description: "",
      coverage: [
        "1 Traditional Photographer"
      ],
      features: [
        "All Soft Copy of Raw Photos"
      ],
      image: "/images/packages/package-1.jpg"
    },
    {
      id: 2,
      name: "Gold Collection",
      price: "₹16,500",
      description: "",
      coverage: [
        "1 Semi Candid Photographer",
        "1 Semi Cinematic Videographer"
      ],
      features: [
        "All Soft Copy of Raw Photos",
        "1 Highlight Video",
        "1 Reel"
      ],
      image: "/images/packages/package-2.jpg"
    },
    {
      id: 3,
      name: "Premium Collection",
      price: "₹24,500",
      description: "",
      coverage: [
        "1 Semi Candid Photographer",
        "1 Semi Cinematic Videographer"
      ],
      features: [
        "All Soft Copy of Raw Photos",
        "100 Photos Premium Album",
        "Album Bag",
        "1 Highlight Video",
        "1 Reel"
      ],
      image: "/images/packages/package-3.jpg",
      popular: true
    },
    {
      id: 4,
      name: "Luxury Collection",
      price: "₹45,500",
      description: "",
      coverage: [
        "1 Traditional Photographer",
        "1 Traditional Videographer",
        "1 Candid Photographer",
        "1 Drone Pilot"
      ],
      features: [
        "All Soft Copy of Raw Photos",
        "150 Photos Premium Album",
        "Album Bag",
        "1 Highlight Video",
        "1 Reel"
      ],
      image: "/images/packages/package-3.jpg",
      featured: true
    }
  ];

  // Other services
  const otherServices = [
    {
      id: 1,
      title: "Corporate Event Coverage",
      price: "Starting From ₹10,000",
      description: "Professional photography and videography coverage for corporate events, conferences, award ceremonies, business launches and company celebrations.",
      image: "/images/services/corporate-event.jpg"
    },
    {
      id: 2,
      title: "Birthday Party Coverage",
      price: "Starting From ₹3,999",
      description: "Capturing joyful celebrations, candid moments and unforgettable memories from birthday parties and private gatherings.",
      image: "/images/services/birthday-party.jpg"
    },
    {
      id: 3,
      title: "Maternity Shoot",
      price: "Starting From ₹6,000",
      description: "Elegant maternity photography sessions designed to preserve one of life's most beautiful journeys.",
      image: "/images/services/maternity-shoot.jpg"
    },
    {
      id: 4,
      title: "Baby Photoshoot",
      price: "Starting From ₹999",
      description: "Creative and adorable baby photography sessions capturing precious early memories.",
      image: "/images/services/baby-photoshoot.jpg"
    }
  ];

  const [activeTab, setActiveTab] = useState('wedding');

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Our Collections
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Comprehensive packages designed to capture every moment of your special occasions
          </p>
        </div>
      </div>

      {/* Package Category Tabs */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('wedding')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'wedding'
                  ? 'bg-soft-gold text-forest-green'
                  : 'bg-forest-green text-soft-gold border border-soft-gold'
              }`}
            >
              Wedding
            </button>
            <button
              onClick={() => setActiveTab('prewedding')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'prewedding'
                  ? 'bg-soft-gold text-forest-green'
                  : 'bg-forest-green text-soft-gold border border-soft-gold'
              }`}
            >
              Pre-Wedding
            </button>
            <button
              onClick={() => setActiveTab('engagement')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'engagement'
                  ? 'bg-soft-gold text-forest-green'
                  : 'bg-forest-green text-soft-gold border border-soft-gold'
              }`}
            >
              Engagement & Baby Shower
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'other'
                  ? 'bg-soft-gold text-forest-green'
                  : 'bg-forest-green text-soft-gold border border-soft-gold'
              }`}
            >
              Other Services
            </button>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wedding Packages */}
          {activeTab === 'wedding' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Wedding Collections</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {weddingPackages.map((pkg) => (
                  <div 
                    key={`wedding-${pkg.id}`} 
                    className={`luxury-card p-8 rounded-xl relative overflow-hidden border-2 ${pkg.featured ? 'border-soft-gold transform scale-105 z-10 animate-border-glow' : 'border-transparent'}`}
                  >
                    {pkg.badge && (
                      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${pkg.featured ? 'bg-soft-gold text-forest-green' : 'bg-forest-green text-soft-gold'} px-6 py-1 rounded-full text-sm font-bold`}>
                        {pkg.badge}
                      </div>
                    )}
                    <div className="mb-6">
                      <Image 
                        src={pkg.image} 
                        alt={pkg.name} 
                        width={300} 
                        height={200} 
                        className="w-full h-40 object-cover rounded-lg"
                        priority={pkg.popular || pkg.featured} // Prioritize popular or featured package images
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-soft-gold mb-3">{pkg.name}</h3>
                    <div className="text-2xl font-bold mb-4">{pkg.price}</div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-cream mb-2">Coverage Team:</h4>
                      <ul className="space-y-1">
                        {pkg.team?.map((member, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-soft-gold mr-2 text-lg">•</span>
                            <span className="text-sm">{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-cream mb-2">Included:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-soft-gold mr-2 text-lg">✓</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href="/booking"
                      className={`w-full text-center py-3 rounded-lg font-bold text-base ${
                        pkg.featured 
                          ? 'bg-soft-gold text-forest-green hover:bg-opacity-90 transition-all duration-300' 
                          : 'border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-forest-green transition-all duration-300'
                      }`}
                    >
                      Inquire Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pre-Wedding Packages */}
          {activeTab === 'prewedding' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Pre-Wedding Collections</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {preWeddingPackages.map((pkg) => (
                  <div 
                    key={`prewedding-${pkg.id}`} 
                    className={`luxury-card p-8 rounded-xl relative overflow-hidden border-2 ${pkg.popular ? 'border-soft-gold' : 'border-transparent'}`}
                  >
                    {pkg.badge && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-soft-gold text-forest-green px-6 py-1 rounded-full text-sm font-bold">
                        {pkg.badge}
                      </div>
                    )}
                    <div className="mb-6">
                      <Image 
                        src={pkg.image} 
                        alt={pkg.name} 
                        width={300} 
                        height={200} 
                        className="w-full h-40 object-cover rounded-lg"
                        priority={pkg.popular} // Prioritize popular package images
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-soft-gold mb-3">{pkg.name}</h3>
                    <div className="text-2xl font-bold mb-2">{pkg.price}</div>
                    <div className="text-sm text-cream mb-4">{pkg.description}</div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-cream mb-2">Included:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-soft-gold mr-2 text-lg">✓</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href="/booking"
                      className={`w-full text-center py-3 rounded-lg font-bold text-base ${
                        pkg.popular 
                          ? 'bg-soft-gold text-forest-green hover:bg-opacity-90 transition-all duration-300' 
                          : 'border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-forest-green transition-all duration-300'
                      }`}
                    >
                      Inquire Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engagement & Baby Shower Packages */}
          {activeTab === 'engagement' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Engagement & Baby Shower Collections</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {engagementBabyShowerPackages.map((pkg) => (
                  <div 
                    key={`engagement-${pkg.id}`} 
                    className={`luxury-card p-8 rounded-xl relative overflow-hidden border-2 ${pkg.featured ? 'border-soft-gold transform scale-105 z-10' : pkg.popular ? 'border-soft-gold/50' : 'border-transparent'}`}
                  >
                    {pkg.featured && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-soft-gold text-forest-green px-6 py-1 rounded-full text-sm font-bold">
                        Most Recommended
                      </div>
                    )}
                    <div className="mb-6">
                      <Image 
                        src={pkg.image} 
                        alt={pkg.name} 
                        width={300} 
                        height={200} 
                        className="w-full h-40 object-cover rounded-lg"
                        priority={pkg.featured} // Prioritize the featured package image
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-soft-gold mb-3">{pkg.name}</h3>
                    <div className="text-2xl font-bold mb-4">{pkg.price}</div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-cream mb-2">Coverage Team:</h4>
                      <ul className="space-y-1">
                        {pkg.coverage?.map((member, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-soft-gold mr-2 text-lg">•</span>
                            <span className="text-sm">{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-cream mb-2">Included:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-soft-gold mr-2 text-lg">✓</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href="/booking" 
                      className="block w-full bg-forest-green text-ivory py-3 px-4 rounded-xl font-bold text-center hover:bg-soft-gold hover:text-forest-green transition-colors"
                    >
                      Select Package
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Services */}
          {activeTab === 'other' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Other Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {otherServices.map((service) => (
                  <div 
                    key={`other-${service.id}`} 
                    className="luxury-card p-10 rounded-xl relative overflow-hidden border border-soft-gold/30 hover:border-soft-gold transition-all duration-300 group"
                  >
                    <div className="mb-6">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        width={300} 
                        height={200} 
                        className="w-full h-48 object-cover rounded-lg"
                        priority={service.id <= 2} // Prioritize first 2 images
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-soft-gold mb-3">{service.title}</h3>
                    <div className="text-xl font-bold mb-4 text-soft-gold">{service.price}</div>
                    <p className="text-lg text-cream mb-6">{service.description}</p>
                    
                    <Link 
                      href="/booking"
                      className="inline-block w-full text-center py-3 rounded-lg font-bold text-base bg-transparent border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
                    >
                      Inquire Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Important Information Section for Wedding Packages */}
      {(activeTab === 'wedding') && (
        <div className="py-16 bg-forest-green/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Important Information</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">All packages include 2 Days Wedding Coverage</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Additional coverage days will be charged separately</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Transportation charges are not included</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Transportation charges apply for locations beyond 50 KM</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Custom packages can be designed according to your requirements</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Important Information Section for Pre-Wedding Packages */}
      {(activeTab === 'prewedding') && (
        <div className="py-16 bg-forest-green/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Important Information</h2>
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
      )}

      {/* Important Information Section for Engagement & Baby Shower Packages */}
      {(activeTab === 'engagement') && (
        <div className="py-16 bg-forest-green/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Important Information</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Customized packages are available</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Additional services can be added according to requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Travel and transportation charges may apply outside city limits</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">Final delivery timelines depend on selected package and deliverables</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Terms & Conditions */}
      <TermsAndConditions compact={true} />

      {/* Bottom CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Need a Customized Package?
          </h2>
          <p className="text-xl text-cream mb-10 max-w-2xl mx-auto">
            Every occasion is unique. We create tailor-made photography and cinematic film packages designed around your celebrations, traditions, and vision.
          </p>
          <Link 
            href="/contact"
            className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Reserve Your Date
          </Link>
        </div>
      </div>
    </div>
  );
}

// Added missing import for useState
import { useState } from 'react';