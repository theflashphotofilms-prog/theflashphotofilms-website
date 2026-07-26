'use client';

import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with our premium wedding photography services, featuring traditional and candid styles.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/packages"
    },
    {
      title: "Pre-Wedding Shoots",
      description: "Beautiful pre-wedding photos that celebrate your love story with artistic excellence.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      href: "/pre-wedding-packages"
    },
    {
      title: "Engagement & Baby Shower",
      description: "Special moments deserve special memories - capture them with our specialized photography.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      href: "/engagement-babyshower-packages"
    },
    {
      title: "Portrait Sessions",
      description: "Professional portrait photography for individuals, couples, and families.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Event Coverage",
      description: "Comprehensive photography and videography for corporate events, parties, and celebrations.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Commercial Photography",
      description: "Professional commercial photography for businesses, products, and brands.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Video Production",
      description: "Cinematic videography services for weddings, events, and promotional content.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Drone Coverage",
      description: "Aerial photography and videography services for unique perspectives and stunning shots.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Photo Albums",
      description: "Custom photo albums and prints to preserve your memories in physical form.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Social Media Content",
      description: "Instagram reels, Facebook posts, and other social media content creation.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Custom Packages",
      description: "Tailored photography and videography solutions to meet your specific needs.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      href: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Photography & Videography Services | The Flash Photofilms" 
        description="Comprehensive photography and videography services including wedding, pre-wedding, engagement, portrait, event, commercial, and video production by The Flash Photofilms."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Our Photography & Videography Services
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Comprehensive photography and videography solutions for all your special occasions and professional needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-200 hover:border-[#D2A97F] transition-colors duration-300">
                <div className="bg-[#D2A97F]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D2A97F] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#D2A97F] mb-3">{service.title}</h3>
                <p className="text-medium-gray mb-4">{service.description}</p>
                <span className="text-[#D2A97F] font-medium inline-flex items-center">
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#3A5A40] to-black rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Session?</h2>
          <p className="text-medium-gray max-w-2xl mx-auto mb-8">
            Contact us today to discuss your photography needs and schedule your session
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/faq" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
            >
              Visit FAQ
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default ServicesPage;