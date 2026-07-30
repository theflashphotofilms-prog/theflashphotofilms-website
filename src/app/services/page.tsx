'use client';

import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const ServicesPage = () => {

  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with our premium wedding photography services, featuring traditional and candid styles.",
      features: ["Full-day coverage", "High-resolution images", "Online gallery", "Print release"],
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Event Photography",
      description: "From corporate events to birthday parties, we capture all the important moments of your special events.",
      features: ["Multiple locations", "Professional equipment", "Same-day slideshow", "Drone coverage"],
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Portrait Sessions",
      description: "Professional portrait photography for individuals, families, and professional headshots.",
      features: ["Indoor/outdoor options", "Wardrobe assistance", "Professional lighting", "Multiple outfit changes"],
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Commercial Photography",
      description: "High-quality commercial photography for businesses, products, and marketing materials.",
      features: ["Product shoots", "Architectural photography", "Brand imagery", "Marketing materials"],
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const processSteps = [
    { step: "1", title: "Consultation", desc: "Discuss your needs and vision" },
    { step: "2", title: "Planning", desc: "Create a customized plan" },
    { step: "3", title: "Execution", desc: "Capture your special moments" },
    { step: "4", title: "Delivery", desc: "Receive your beautiful photos" }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      <SEO 
        title="Professional Photography Services - The Flash Photofilms" 
        description="Comprehensive photography services including weddings, events, portraits, and commercial photography. Professional photographers for all occasions."
        url="https://www.theflashphotofilms.com/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Our Photography Services</h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Professional photography services tailored to capture your most important moments with creativity and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-lg mr-6">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-maroon mb-3">{service.title}</h2>
                  <p className="text-medium-gray mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-medium-gray">
                        <svg className="w-4 h-4 text-gold mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-dark-maroon to-gold rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-dark-maroon w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-maroon mb-4">Ready to Book Our Services?</h2>
          <p className="text-xl text-medium-gray mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/booking" 
              className="bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Book Now
            </Link>
            <Link 
              href="/packages" 
              className="bg-transparent border-2 border-dark-maroon text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-dark-maroon hover:text-white transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>

        {/* Discount Offer */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-dark-maroon mb-4">Launch Discount Offer</h2>
          <p className="text-medium-gray mb-6 max-w-2xl mx-auto">
            Be among the first to enjoy our exclusive launch discount! Get 10% off your first booking when you register today.
          </p>
          <Link 
            href="/contact" 
            className="bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gold transition-colors inline-block"
          >
            Register for Discount
          </Link>
          <p className="mt-4 text-sm text-medium-gray">
            Limited time offer - Valid for 3 months from registration
          </p>
        </div>
      </div>
      
      <WhatsAppCTA />
    </div>
  );
};

export default ServicesPage;