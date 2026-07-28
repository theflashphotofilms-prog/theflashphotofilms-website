'use client';

import Link from 'next/link';
import Image from 'next/image';
import TermsAndConditions from '../../components/TermsAndConditions';

export default function PreWeddingPackagesPage() {
  const packages = [
    {
      id: 1,
      name: "Silver Pre Wedding Collection",
      price: "₹22,000",
      description: "",
      coverage: [
        "1 Candid Photographer",
        "2 Days Coverage"
      ],
      features: [
        "All Soft Copy of Edited Photos",
        "10 Days To Go Photos"
      ],
      image: "/images/packages/package-1.jpg"
    },
    {
      id: 2,
      name: "Gold Pre Wedding Collection",
      price: "₹45,500",
      description: "",
      coverage: [
        "1 Candid Photographer",
        "1 Cinematic Videographer",
        "1 Drone Pilot",
        "2 Days Coverage"
      ],
      features: [
        "All Soft Copy of Edited Photos",
        "1 Pre Wedding Song",
        "2 Reels",
        "15 Days To Go Photos"
      ],
      image: "/images/packages/package-2.jpg",
      featured: true
    }
  ];

  const importantInfo = [
    "Packages are valid for 2 Days Coverage",
    "Additional days will be charged separately",
    "Travel, Stay and Food expenses are not included",
    "Customized packages are available according to client requirements"
  ];

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Pre Wedding Collections
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Curated packages designed to capture your pre-wedding moments with elegance
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`luxury-card p-10 rounded-xl relative overflow-hidden border-2 ${pkg.featured ? 'border-soft-gold transform scale-105 z-10 animate-border-glow' : 'border-transparent'}`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-soft-gold text-forest-green px-8 py-2 rounded-full text-lg font-bold">
                    Featured
                  </div>
                )}
                <div className="mb-8">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.name} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover rounded-lg"
                    priority={pkg.featured} // Prioritize the featured package image
                  />
                </div>
                <h3 className="text-3xl font-serif font-bold text-soft-gold mb-4">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-6">{pkg.price}</div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-cream mb-3">Coverage:</h4>
                  <ul className="space-y-2">
                    {pkg.coverage.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-soft-gold mr-3 text-lg">•</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-cream mb-3">Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-soft-gold mr-3 text-xl">✓</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact"
                  className={`w-full text-center py-4 rounded-lg font-bold text-lg ${
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

      {/* Bottom CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Planning Your Dream Pre Wedding Shoot?
          </h2>
          <p className="text-xl text-cream mb-10 max-w-2xl mx-auto">
            Let us create a cinematic pre wedding experience that captures your story with elegance, creativity and timeless emotions.
          </p>
          <Link 
            href="/contact"
            className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}