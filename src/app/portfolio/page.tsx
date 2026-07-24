'use client';

import { useState } from 'react';
import Gallery from '@/components/Gallery';
import PortfolioFilter from '@/components/PortfolioFilter';
import DiscountRegistration from '@/components/DiscountRegistration';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const phoneNumber = '+91 79849 41331';

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Sample gallery items - these would typically come from a data source
  const galleryItems = [
    { id: 1, src: '/images/wedding1.jpg', alt: 'Wedding Photography', title: 'Beautiful Wedding', description: 'Captured the perfect moments', category: 'wedding' },
    { id: 2, src: '/images/portrait1.jpg', alt: 'Portrait Photography', title: 'Elegant Portrait', description: 'Professional studio shoot', category: 'portrait' },
    { id: 3, src: '/images/event1.jpg', alt: 'Event Photography', title: 'Corporate Event', description: 'Conference coverage', category: 'events' },
    { id: 4, src: '/images/landscape1.jpg', alt: 'Landscape Photography', title: 'Mountain Scenery', description: 'Nature at its finest', category: 'landscape' },
    { id: 5, src: '/images/commercial1.jpg', alt: 'Commercial Photography', title: 'Product Shoot', description: 'High-quality product photography', category: 'commercial' },
    { id: 6, src: '/images/wedding2.jpg', alt: 'Wedding Photography', title: 'Ceremony Moments', description: 'Emotional ceremony shots', category: 'wedding' },
  ];

  const handleDiscountInterest = () => {
    setShowDiscountModal(true);
  };

  const handleDiscountSuccess = () => {
    // Optionally show a notification or update UI after successful registration
    alert('Thank you for registering for the launch discount!');
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Explore our collection of photography and videography work
          </p>
        </div>

        <PortfolioFilter onFilterChange={handleFilterChange} />

        <div className="mt-12">
          <Gallery items={galleryItems} filterCategory={activeFilter} />
        </div>

        <div className="mt-20 bg-gradient-to-r from-dark-maroon to-black rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-medium-gray text-lg mb-8">
              Contact The Flash Photofilms to discuss your photography needs and schedule your session.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
                className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
              >
                Call Now: {phoneNumber}
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-light-gray rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-dark-maroon mb-4">Special Launch Offer</h2>
          <p className="text-medium-gray max-w-2xl mx-auto mb-6">
            Book a session based on our portfolio work and receive a 10% discount on your first booking. 
            This exclusive offer is valid for a limited time only.
          </p>
          <button
            onClick={handleDiscountInterest}
            className="bg-dark-maroon text-white px-8 py-3 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
          >
            Claim Your Discount
          </button>
        </div>
      </div>

      {/* Discount Registration Modal */}
      <DiscountRegistration 
        isOpen={showDiscountModal} 
        onClose={() => setShowDiscountModal(false)} 
        onSuccess={handleDiscountSuccess}
      />
    </div>
  );
};

export default PortfolioPage;