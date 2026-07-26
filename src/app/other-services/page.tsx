'use client';

import Link from 'next/link';
import SEO from '../../components/SEO';
import WhatsAppCTA from '../../components/WhatsAppCTA';

const OtherServicesPage = () => {
  const services = [
    {
      title: "Pre-Wedding Shoots",
      description: "Romantic outdoor sessions before the big day to capture your love story.",
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Post-Wedding Shoots",
      description: "Beautiful sessions after the wedding to capture your new journey together.",
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.677c.3.922 1.216 1.337 2.09.847l4.377-2.526c.873-.5.95-1.56 0-2.06l-4.377-2.526a1.2 1.2 0 00-1.25-.076L12 5.432l-1.519-4.677a1.2 1.2 0 00-1.25-.076l-4.377 2.526c-.874.5-.796 1.56 0 2.06l4.377 2.526c.873.49 1.79.075 2.09-.847l1.519-4.677z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 2.762-1.327 5.029-3.392 6.5M3 12c1.327 1.471 3.392-1.5 3.392-1.5m0 0c0-1.053.26-2.07.72-3M12 12v9m0-9c1.673 0 3.392-1.5 3.392-3.5S13.673 6 12 6s-3.392 1.5-3.392 3.5S10.327 12 12 12z" />
        </svg>
      )
    },
    {
      title: "Engagement Sessions",
      description: "Intimate photos to celebrate your engagement and upcoming marriage.",
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Family Portraits",
      description: "Professional family photos that capture your bond and personality.",
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Corporate Events",
      description: "Professional photography for corporate events, conferences, and meetings.",
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Product Photography",
      description: "High-quality product images for e-commerce and marketing materials.",
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const additionalServices = [
    {
      title: "Photo Restoration",
      description: "Restore old and damaged photos to their original beauty."
    },
    {
      title: "Album Design",
      description: "Custom-designed photo albums to preserve your memories."
    },
    {
      title: "Photo Prints",
      description: "High-quality prints on various materials and sizes."
    },
    {
      title: "Digital Archiving",
      description: "Secure storage and organization of your photo collections."
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Other Photography Services | The Flash Photofilms" 
        description="Corporate Events, Birthday Parties, Maternity Shoots, Baby Photoshoots and customised photography services by The Flash Photofilms."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Other Photography Services
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Explore our diverse range of photography and videography services tailored to capture your special moments.
          </p>
        </div>


        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-dark-maroon mb-4">{service.title}</h2>
              <p className="text-medium-gray mb-6">{service.description}</p>
              <Link 
                href="/contact" 
                className="text-gold font-bold hover:text-dark-maroon transition-colors inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-dark-maroon mb-8 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gold/10 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-maroon mb-2">{service.title}</h3>
                  <p className="text-medium-gray">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-gradient-to-r from-dark-maroon to-gold rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your needs and vision" },
              { step: "2", title: "Planning", desc: "Create a customized plan" },
              { step: "3", title: "Execution", desc: "Capture your special moments" },
              { step: "4", title: "Delivery", desc: "Receive your beautiful photos" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-dark-maroon w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-maroon mb-4">Ready to Explore Our Services?</h2>
          <p className="text-xl text-medium-gray mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/packages" 
              className="bg-transparent border-2 border-dark-maroon text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-dark-maroon hover:text-white transition-colors"
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

export default OtherServicesPage;