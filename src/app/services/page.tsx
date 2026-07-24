import Link from 'next/link';
import DiscountRegistration from '@/components/DiscountRegistration';
import { useState } from 'react';

const ServicesPage = () => {
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const phoneNumber = '+91 79849 41331';

  const handleDiscountInterest = () => {
    setShowDiscountModal(true);
  };

  const handleDiscountSuccess = () => {
    // Optionally show a notification or update UI after successful registration
    alert('Thank you for registering for the launch discount!');
  };

  const services = [
    {
      title: "Wedding Photography",
      description: "Capture every moment of your special day with our professional wedding photography services.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Pre Wedding Photography",
      description: "Beautiful pre-wedding shoots to celebrate your journey before the big day.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Engagement Photography",
      description: "Romantic and intimate engagement sessions to capture your love story.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Corporate Event Photography",
      description: "Professional photography for corporate events, conferences, and business functions.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Birthday Photography",
      description: "Capture the joy and celebration of birthday parties and special milestones.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      title: "Baby Shoot",
      description: "Adorable baby photoshoots to cherish your little one's precious moments.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Maternity Shoot",
      description: "Elegant maternity sessions to celebrate the beauty of expecting mothers.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Fashion Photography",
      description: "Creative and stylish fashion photography for portfolios and campaigns.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
        </svg>
      )
    },
    {
      title: "Product Photography",
      description: "High-quality product photography for e-commerce and marketing materials.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Drone Photography",
      description: "Aerial photography and videography services for unique perspectives.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Event Photography",
      description: "Comprehensive coverage for all types of events and celebrations.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Video Production",
      description: "Complete video production services from filming to post-production.",
      icon: (
        <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Professional photography and videography services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-gold mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-maroon mb-4">{service.title}</h3>
              <p className="text-medium-gray mb-6">{service.description}</p>
              <Link 
                href={`/contact?service=${encodeURIComponent(service.title)}`} 
                className="inline-flex items-center text-gold font-medium hover:text-dark-maroon transition-colors"
              >
                Learn more
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-dark-maroon to-black rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Capture Your Story?</h2>
            <p className="text-medium-gray text-lg mb-8">
              Contact The Flash Photofilms today to discuss your photography needs and schedule your session.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
                className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
              >
                Call Now: {phoneNumber}
              </a>
              <Link 
                href="/contact" 
                className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-light-gray rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-dark-maroon mb-4">Limited Time Offer</h2>
          <p className="text-medium-gray max-w-2xl mx-auto mb-6">
            Book any photography service and get a 10% discount on your first session. 
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

export default ServicesPage;