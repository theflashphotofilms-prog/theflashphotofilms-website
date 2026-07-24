'use client';

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import DiscountRegistration from '@/components/DiscountRegistration';

const ContactPage = () => {
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const phoneNumber = '+91 79849 41331'; // Updated with actual business number
  const emailAddress = process.env.CONTACT_EMAIL || 'info@theflashphotofilms.com';
  const location = '202, Block-3, Ashwini Height, Near Golden Point, GIDC Ankleshwar, Bharuch – 393002, Gujarat, India'; // Updated with actual address
  const businessHours = {
    mondayToFriday: process.env.BUSINESS_HOURS_MON_FRI || '9AM - 6PM',
    saturday: process.env.BUSINESS_HOURS_SAT || '10AM - 4PM',
    sunday: process.env.BUSINESS_HOURS_SUN || 'Closed'
  };

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
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Have questions or ready to book a session? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-dark-maroon mb-8">Get in Touch</h2>
            
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-dark-maroon mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-medium-gray">Phone</p>
                    <p className="text-base font-medium text-dark-maroon">{phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-medium-gray">Email</p>
                    <p className="text-base font-medium text-dark-maroon">{emailAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-medium-gray">Location</p>
                    <p className="text-base font-medium text-dark-maroon">{location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-bold text-dark-maroon mb-6">Business Hours</h3>
                <ul className="space-y-3 text-medium-gray">
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-dark-maroon">{businessHours.mondayToFriday}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span>Saturday</span>
                    <span className="font-medium text-dark-maroon">{businessHours.saturday}</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span className="font-medium text-dark-maroon">{businessHours.sunday}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-dark-maroon mb-8">Send us a Message</h2>
            <ContactForm />
            
            <div className="mt-8 p-4 bg-gold/10 border border-gold/30 rounded-lg">
              <p className="text-medium-gray">
                <strong className="text-gold">Special Launch Offer:</strong> Book now and save 10% on your first session. 
                <button 
                  onClick={handleDiscountInterest}
                  className="ml-1 text-dark-maroon font-medium underline hover:text-gold"
                >
                  Register for the discount
                </button>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <FAQ />
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

export default ContactPage;