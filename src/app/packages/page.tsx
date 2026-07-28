'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      name: "Signature Collection",
      price: "₹1,20,000",
      description: "Perfect for intimate ceremonies",
      features: [
        "6 hours coverage",
        "Cinematic highlight reel",
        "100 edited photos",
        "Online gallery",
        "Professional editing"
      ],
      image: "/images/packages/package-1.jpg"
    },
    {
      id: 2,
      name: "Royal Collection",
      price: "₹2,50,000",
      description: "Our most popular choice",
      features: [
        "12 hours coverage",
        "Full cinematic film",
        "300 edited photos",
        "Drone footage",
        "Same-day edit",
        "Professional editing",
        "Digital gallery"
      ],
      image: "/images/packages/package-2.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Legacy Collection",
      price: "₹4,50,000",
      description: "Ultimate luxury experience",
      features: [
        "Unlimited coverage",
        "Multiple camera angles",
        "500+ edited photos",
        "4K cinematic film",
        "Drone & underwater",
        "Physical album",
        "Professional editing",
        "Digital gallery",
        "Engagement session"
      ],
      image: "/images/packages/package-3.jpg"
    }
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`luxury-card p-10 rounded-xl relative overflow-hidden border-2 ${pkg.popular ? 'border-soft-gold transform scale-105 z-10 animate-border-glow' : 'border-transparent'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-soft-gold text-forest-green px-8 py-2 rounded-full text-lg font-bold">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.name} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover rounded-lg"
                    priority={pkg.popular} // Prioritize the popular package image
                  />
                </div>
                <h3 className="text-3xl font-serif font-bold text-soft-gold mb-4">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-6">{pkg.price}</div>
                <p className="text-xl text-cream mb-8">{pkg.description}</p>
                
                <ul className="mb-10 space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-soft-gold mr-4 text-xl">✓</span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className={`w-full text-center py-4 rounded-lg font-bold text-lg ${
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
      </div>

      {/* Additional Services */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-16 text-center">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Engagement Sessions", description: "Capture your love story before the big day" },
              { title: "Pre-Wedding Shoots", description: "Romantic photos before your wedding celebration" },
              { title: "Candid Photography", description: "Natural moments during your special day" },
              { title: "Drone Coverage", description: "Aerial perspectives of your venue and celebration" }
            ].map((service, index) => (
              <div key={index} className="text-center p-8 luxury-card rounded-xl">
                <h3 className="text-xl font-bold text-soft-gold mb-4">{service.title}</h3>
                <p className="text-cream">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Have Specific Requirements?
          </h2>
          <p className="text-xl text-cream mb-10">
            We offer custom packages tailored to your unique vision
          </p>
          <Link 
            href="/contact"
            className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Discuss Custom Package
          </Link>
        </div>
      </div>
    </div>
  );
}