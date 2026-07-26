'use client';

import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SEO from '@/components/SEO';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Portfolio | The Flash Photofilms" 
        description="Browse our portfolio of wedding, event, and commercial photography work by The Flash Photofilms."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Explore our collection of photography and videography work that captures life's most precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#3A5A40] to-black rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-medium-gray max-w-2xl mx-auto mb-8">
            Book your session today and capture your special moments with professional quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Book Now
            </Link>
            <Link 
              href="/packages" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
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