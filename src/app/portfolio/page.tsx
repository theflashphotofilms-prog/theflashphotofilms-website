'use client';

import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const PortfolioPage = () => {
  const categories = [
    { name: "Weddings", count: 24 },
    { name: "Engagements", count: 18 },
    { name: "Portraits", count: 15 },
    { name: "Events", count: 12 },
    { name: "Commercial", count: 8 }
  ];

  const featuredWork = [
    { id: 1, title: "Summer Wedding", category: "Weddings", image: "/placeholder.jpg" },
    { id: 2, title: "Beach Engagement", category: "Engagements", image: "/placeholder.jpg" },
    { id: 3, title: "Family Portrait", category: "Portraits", image: "/placeholder.jpg" },
    { id: 4, title: "Corporate Event", category: "Events", image: "/placeholder.jpg" },
    { id: 5, title: "Product Shoot", category: "Commercial", image: "/placeholder.jpg" },
    { id: 6, title: "Destination Wedding", category: "Weddings", image: "/placeholder.jpg" }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      <SEO 
        title="Portfolio - The Flash Photofilms" 
        description="Browse our stunning photography portfolio showcasing weddings, events, portraits, and commercial photography work."
        url="https://www.theflashphotofilms.com/portfolio"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Our Portfolio</h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            A collection of our finest work capturing life's most precious moments
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-gold mb-2">{category.count}</div>
              <h3 className="text-lg font-bold text-dark-maroon">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Featured Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredWork.map((work) => (
            <div key={work.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
              <div className="p-6">
                <span className="text-sm font-semibold text-gold uppercase tracking-wide">{work.category}</span>
                <h3 className="text-xl font-bold text-dark-maroon mt-2 mb-4">{work.title}</h3>
                <button className="text-gold font-bold hover:text-dark-maroon transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-dark-maroon mb-8 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The Flash Photofilms captured our wedding day perfectly. Every emotion and moment was beautifully preserved.",
                author: "Raj & Priya",
                event: "Wedding"
              },
              {
                quote: "Professional, creative, and attentive. They made our engagement session feel natural and fun.",
                author: "Arjun & Neha",
                event: "Engagement"
              }
            ].map((testimonial, index) => (
              <div key={index} className="border-l-4 border-gold pl-6">
                <p className="text-medium-gray italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-dark-maroon">{testimonial.author}</p>
                <p className="text-sm text-medium-gray">{testimonial.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-dark-maroon to-gold py-16 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gold mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/packages" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default PortfolioPage;