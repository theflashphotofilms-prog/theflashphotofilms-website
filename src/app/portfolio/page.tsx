'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  const categories = [
    { 
      id: 'wedding', 
      name: 'Wedding', 
      image: '/images/portfolio/wedding-landing.jpg',
      description: 'Elegant wedding celebrations'
    },
    { 
      id: 'prewedding', 
      name: 'Pre-Wedding', 
      image: '/images/portfolio/prewedding-landing.jpg',
      description: 'Romantic pre-wedding moments'
    },
    { 
      id: 'engagement', 
      name: 'Engagement', 
      image: '/images/portfolio/engagement-landing.jpg',
      description: 'Joyful engagement celebrations'
    },
    { 
      id: 'babyshower', 
      name: 'Baby Shower', 
      image: '/images/portfolio/babyshower-landing.jpg',
      description: 'Delightful baby shower moments'
    },
    { 
      id: 'films', 
      name: 'Films', 
      image: '/images/portfolio/films-landing.jpg',
      description: 'Cinematic wedding films'
    },
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

      {/* Category Cards Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/portfolio/${category.id}`}
                className="luxury-card group overflow-hidden rounded-xl block transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={category.image} 
                    alt={category.name} 
                    width={400} 
                    height={320} 
                    className="w-full h-full object-cover slow-zoom group-hover:scale-110 transition-transform duration-500"
                    priority={category.id === 'wedding'} // Prioritize the first image
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-serif font-bold text-ivory mb-2">{category.name}</h3>
                    <p className="text-lg text-soft-gold">{category.description}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-soft-gold text-forest-green px-8 py-3 rounded-full font-bold text-lg">
                      View Gallery
                    </div>
                  </div>
                </div>
              </Link>
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