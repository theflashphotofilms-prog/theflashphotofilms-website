'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function EngagementPortfolioPage() {
  const portfolioItems = [
    { id: 1, title: "Engagement Celebration", subtitle: "Anand", caption: "Joyful moments", image: "/images/portfolio/engagement-1.jpg", category: "engagement" },
    { id: 2, title: "Ring Ceremony", subtitle: "Baroda", caption: "Special moment", image: "/images/portfolio/engagement-2.jpg", category: "engagement" },
    { id: 3, title: "Family Gathering", subtitle: "Surat", caption: "Celebrating love", image: "/images/portfolio/engagement-3.jpg", category: "engagement" },
    { id: 4, title: "Garden Party", subtitle: "Vadodara", caption: "Romantic gathering", image: "/images/portfolio/engagement-4.jpg", category: "engagement" },
    { id: 5, title: "Luxury Venue", subtitle: "Ahmedabad", caption: "Elegant celebration", image: "/images/portfolio/engagement-5.jpg", category: "engagement" },
    { id: 6, title: "Traditional Ritual", subtitle: "Bharuch", caption: "Cultural ceremony", image: "/images/portfolio/engagement-6.jpg", category: "engagement" },
  ];

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Engagement Portfolio
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Joyful engagement celebrations captured with timeless artistry
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="luxury-card group overflow-hidden rounded-xl">
                <div className="relative h-96 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover slow-zoom"
                    priority={item.id <= 3} // Prioritize first 3 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-serif font-bold text-ivory mb-2">{item.title}</h3>
                    <p className="text-xl text-soft-gold mb-2">{item.subtitle}</p>
                    <p className="text-lg text-cream">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="py-12 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-ivory mb-8">Browse Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link 
              href="/portfolio/wedding" 
              className="bg-soft-gold text-forest-green px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Wedding
            </Link>
            <Link 
              href="/portfolio/prewedding" 
              className="bg-soft-gold text-forest-green px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Pre-Wedding
            </Link>
            <Link 
              href="/portfolio/babyshower" 
              className="bg-soft-gold text-forest-green px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Baby Shower
            </Link>
            <Link 
              href="/portfolio/films" 
              className="bg-soft-gold text-forest-green px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Films
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-forest-green text-soft-gold border border-soft-gold px-4 py-2 rounded-lg font-medium hover:bg-soft-gold hover:text-forest-green transition-colors"
            >
              All Categories
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Start Your Story?
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Every couple has a unique love story. Let us capture yours with artistry and passion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/booking"
              className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Book Your Date
            </Link>
            <Link 
              href="/packages"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-10 py-5 rounded-xl font-bold text-lg hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}