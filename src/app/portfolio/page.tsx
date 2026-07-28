'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
  const portfolioItems = [
    { id: 1, title: "AHMEDABAD WEDDING", subtitle: "A Story Of Forever", location: "Ahmedabad, India", date: "June 2024", image: "/images/portfolio/portfolio-1.jpg" },
    { id: 2, title: "RAJASTHAN DESTINATION", subtitle: "Love In The Desert", location: "Udaipur, India", date: "May 2024", image: "/images/portfolio/portfolio-2.jpg" },
    { id: 3, title: "TRADITIONAL CEREMONY", subtitle: "Timeless Rituals", location: "Delhi, India", date: "April 2024", image: "/images/portfolio/portfolio-3.jpg" },
    { id: 4, title: "MODERN CELEBRATION", subtitle: "Contemporary Love", location: "Mumbai, India", date: "March 2024", image: "/images/portfolio/portfolio-4.jpg" },
    { id: 5, title: "PRE-WEDDING SHOOT", subtitle: "Before The Vows", location: "Goa, India", date: "February 2024", image: "/images/portfolio/portfolio-5.jpg" },
    { id: 6, title: "ENGAGEMENT SESSION", subtitle: "New Beginnings", location: "Bangalore, India", date: "January 2024", image: "/images/portfolio/portfolio-6.jpg" },
    { id: 7, title: "DESTINATION WEDDING", subtitle: "Island Romance", location: "Maldives", date: "December 2023", image: "/images/portfolio/portfolio-7.jpg" },
    { id: 8, title: "INTIMATE CEREMONY", subtitle: "Love & Family", location: "Kerala, India", date: "November 2023", image: "/images/portfolio/portfolio-8.jpg" },
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
            A curated collection of cinematic wedding stories from around the world
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="luxury-card group overflow-hidden rounded-xl">
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover slow-zoom"
                    priority={item.id <= 3} // Prioritize first 3 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-ivory">{item.title}</h3>
                      <p className="text-soft-gold">{item.subtitle}</p>
                      <p className="text-sm text-cream mt-1">{item.location} • {item.date}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-soft-gold mb-2">{item.title}</h3>
                  <p className="text-cream mb-4">{item.subtitle}</p>
                  <Link 
                    href={`/portfolio/${item.id}`}
                    className="inline-flex items-center text-soft-gold hover:text-ivory transition-colors"
                  >
                    View Story
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn-primary bg-soft-gold text-forest-green px-8 py-4 rounded-pill font-medium">
              View More Stories
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Start Your Story?
          </h2>
          <p className="text-xl text-cream mb-10">
            Let's capture your love story with the same cinematic excellence
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="btn-primary bg-soft-gold text-forest-green px-8 py-4 rounded-pill font-medium"
            >
              Inquire Now
            </Link>
            <Link 
              href="/packages"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-8 py-4 rounded-pill font-medium"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}