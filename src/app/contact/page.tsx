'use client';

import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SEO from '@/components/SEO';

const ContactPage = () => {
  const phoneNumber = "+91 79849 41331";
  const emailAddress = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@theflashphotofilms.com";
  const location = "202, Block-3, Ashwini Height, Near Golden Point, GIDC Ankleshwar, Bharuch, Gujarat 393002";
  const businessHours = {
    mondayToFriday: "9:00 AM - 6:00 PM (Monday - Saturday)",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "Closed"
  };

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Contact The Flash Photofilms | Professional Photography Services" 
        description="Get in touch with The Flash Photofilms for wedding, event, and commercial photography services. Reach us at +91 79849 41331."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Contact The Flash Photofilms
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Get in touch with us to discuss your photography needs and schedule your session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#D2A97F] mb-8">Get in Touch</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-lg font-bold text-[#D2A97F] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#D2A97F]/10 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-[#D2A97F]">{phoneNumber}</p>
                    <p className="text-sm text-medium-gray mt-1">Mon-Sat 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#D2A97F]/10 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-[#D2A97F]">{emailAddress}</p>
                    <p className="text-sm text-medium-gray mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#D2A97F]/10 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-[#D2A97F]">{location}</p>
                    <p className="text-sm text-medium-gray mt-1">We serve all of Gujarat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-[#D2A97F] mb-6">Business Hours</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-medium-gray">Monday - Friday</span>
                  <span className="font-medium text-[#D2A97F]">{businessHours.mondayToFriday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-medium-gray">Saturday</span>
                  <span className="font-medium text-[#D2A97F]">{businessHours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-medium-gray">Sunday</span>
                  <span className="font-medium text-[#D2A97F]">{businessHours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-[#D2A97F] mb-8">Send us a Message</h2>
              <ContactForm />
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-[#D2A97F] mb-4">Alternative Contact Methods</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
                    className="flex-1 min-w-[150px] bg-[#D2A97F] text-[#3A5A40] text-center py-3 px-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
                  >
                    Call Us
                  </a>
                  <a 
                    href={`https://wa.me/${phoneNumber.replace(/\s+/g, '').replace('+', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] text-center py-3 px-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
                  >
                    WhatsApp
                  </a>
                  <Link 
                    href="/faq" 
                    className="flex-1 min-w-[150px] bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] text-center py-3 px-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
                  >
                    Visit FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default ContactPage;