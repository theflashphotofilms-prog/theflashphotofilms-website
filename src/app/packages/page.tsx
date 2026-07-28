'use client';

import Link from 'next/link';
import Image from 'next/image';
import TermsAndConditions from '../../components/TermsAndConditions';

export default function PackagesPage() {
  const packages = [
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

  const importantInfo = [
    "All packages include 2 Days Wedding Coverage",
    "Additional coverage days will be charged separately",
    "Transportation charges are not included",
    "Transportation charges apply for locations beyond 50 KM",
    "Custom packages can be designed according to your requirements"
  ];

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Wedding Collections
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Curated packages designed to capture every moment of your special day
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
                    {pkg.team.map((member, idx) => (
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
                  href="/contact"
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
            Need a Customized Wedding Package?
          </h2>
          <p className="text-xl text-cream mb-10 max-w-2xl mx-auto">
            Every wedding is unique. We create tailor-made photography and cinematic film packages designed around your celebrations, traditions, and vision.
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