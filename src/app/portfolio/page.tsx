'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  const portfolioItems = [
    { id: 1, title: "Royal Destination Wedding", subtitle: "Ahmedabad", caption: "Luxury destination celebration", image: "/images/portfolio/portfolio-1.jpg", category: "wedding" },
    { id: 2, title: "Traditional Gujarati Wedding", subtitle: "Surat", caption: "Cultural heritage celebration", image: "/images/portfolio/portfolio-2.jpg", category: "wedding" },
    { id: 3, title: "Modern Beachside Ceremony", subtitle: "Goa", caption: "Contemporary beach celebration", image: "/images/portfolio/portfolio-3.jpg", category: "wedding" },
    { id: 4, title: "Intimate Garden Wedding", subtitle: "Vadodara", caption: "Romantic garden celebration", image: "/images/portfolio/portfolio-4.jpg", category: "wedding" },
    { id: 5, title: "Pre-Wedding Shoot", subtitle: "Udaipur", caption: "Romantic pre-wedding moments", image: "/images/portfolio/portfolio-5.jpg", category: "prewedding" },
    { id: 6, title: "Candid Wedding Moments", subtitle: "Ahmedabad", caption: "Authentic celebration emotions", image: "/images/portfolio/portfolio-6.jpg", category: "wedding" },
    { id: 7, title: "Engagement Celebration", subtitle: "Anand", caption: "Joyful engagement moments", image: "/images/portfolio/portfolio-7.jpg", category: "engagement" },
    { id: 8, title: "Baby Shower Joy", subtitle: "Ahmedabad", caption: "Delightful baby shower celebration", image: "/images/portfolio/portfolio-8.jpg", category: "babyshower" },
    { id: 9, title: "Cinematic Wedding Film", subtitle: "Surat", caption: "Elegant cinematic wedding film", image: "/images/portfolio/portfolio-9.jpg", category: "films" },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'prewedding', name: 'Pre Wedding' },
    { id: 'engagement', name: 'Engagement' },
    { id: 'babyshower', name: 'Baby Shower' },
    { id: 'films', name: 'Films' },
  ];

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            A curated collection of timeless moments captured across Gujarat and India
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-12 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category.id === 'all'
                    ? 'bg-soft-gold text-forest-green'
                    : 'bg-forest-green text-soft-gold border border-soft-gold hover:bg-soft-gold hover:text-forest-green'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
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

      {/* Featured Collections Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
              Featured Collections
            </h2>
            <p className="text-xl text-soft-gold max-w-3xl mx-auto">
              Curated selections showcasing our diverse photography styles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Moments",
                description: "Timeless wedding photography capturing your special day with elegance.",
                image: "/images/portfolio/collection-1.jpg",
                count: 48
              },
              {
                title: "Pre-Wedding Stories",
                description: "Romantic pre-wedding moments filled with love and anticipation.",
                image: "/images/portfolio/collection-2.jpg",
                count: 32
              },
              {
                title: "Engagement & Baby Shower",
                description: "Joyful celebrations of life's precious milestones.",
                image: "/images/portfolio/collection-3.jpg",
                count: 24
              }
            ].map((collection, index) => (
              <div key={index} className="luxury-card overflow-hidden rounded-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={collection.image} 
                    alt={collection.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-soft-gold mb-4">{collection.title}</h3>
                  <p className="text-lg text-cream mb-6">{collection.description}</p>
                  <p className="text-soft-gold font-bold">{collection.count}+ Events</p>
                </div>
              </div>
            ))}
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