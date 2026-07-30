'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import TermsAndConditions from '../../components/TermsAndConditions';
import SEO from '../../components/SEO';



export default function EngagementBabyShowerPackagesPage() {
  const packages = [
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

  const importantInfo = [
    "Customized packages are available",
    "Additional services can be added according to requirements",
    "Travel and transportation charges may apply outside city limits",
    "Final delivery timelines depend on selected package and deliverables"
  ];

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Engagement & Baby Shower Photography Packages
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Capture the joy and excitement of your special moments with our tailored collections
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`luxury-card p-8 rounded-xl relative overflow-hidden border-2 ${pkg.featured ? 'border-soft-gold transform scale-105 z-10 animate-border-glow' : pkg.popular ? 'border-soft-gold/50' : 'border-transparent'}`}
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
                    {pkg.coverage.map((member, idx) => (
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
      </div>

      {/* Important Information Section */}
      <div className="py-16 bg-forest-green/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Important Information</h2>
          <ul className="space-y-4">
            {importantInfo.map((info, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-soft-gold mr-4 text-xl">✓</span>
                <span className="text-lg text-cream">{info}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Terms & Conditions */}
      <TermsAndConditions compact={true} />

      {/* CTA Section */}
      <div className="py-20 bg-soft-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-6">
            Ready to Capture Your Special Moment?
          </h2>
          <p className="text-xl text-forest-green mb-10 max-w-2xl mx-auto">
            Choose the perfect package for your engagement or baby shower and let us create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/booking" 
              className="inline-block bg-forest-green text-ivory px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors text-lg"
            >
              Book Your Package
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-block bg-transparent border-2 border-forest-green text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-forest-green hover:text-ivory transition-colors text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}