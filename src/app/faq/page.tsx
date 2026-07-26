'use client';

import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I book The Flash Photofilms for my event?",
      answer: "You can contact us through our Contact Form, WhatsApp, or direct phone call. Your booking will be confirmed only after the required advance payment is received."
    },
    {
      question: "How much advance payment is required for booking?",
      answer: "A 30% advance payment is required to confirm your booking date."
    },
    {
      question: "How far in advance should I book your services?",
      answer: "We recommend booking 3-6 months in advance for weddings and special events, especially during peak season (May-October). For portrait sessions, 4-6 weeks notice is typically sufficient."
    },
    {
      question: "What is included in your wedding photography packages?",
      answer: "Our wedding packages include full-day coverage, high-resolution digital images, online gallery access, print release, and optional engagement session. Additional services like second shooter, photobooth, or same-day slideshow are available."
    },
    {
      question: "Do you travel for destination weddings?",
      answer: "Yes, we love destination weddings! Travel fees apply for locations outside the San Francisco Bay Area. International destination weddings are quoted separately and include accommodation arrangements."
    },
    {
      question: "How many photos will we receive?",
      answer: "For weddings, expect 500-800 carefully edited high-resolution images. Portrait sessions typically yield 50-100 images. All images are professionally edited to match our signature style."
    },
    {
      question: "What equipment do you use?",
      answer: "We use professional-grade Canon and Sony cameras with backup equipment. Our kit includes various lenses, lighting equipment, and backup batteries to ensure seamless coverage throughout your event."
    },
    {
      question: "When will we receive our photos?",
      answer: "Wedding galleries are delivered within 4-6 weeks. Portrait galleries are delivered within 1-2 weeks. Rush delivery is available for an additional fee."
    },
    {
      question: "Do you offer videography services?",
      answer: "Yes, we offer professional videography services as part of our premium packages. Our cinematographers work closely with our photographers to ensure consistent style and coverage."
    },
    {
      question: "Can I request specific shots or poses?",
      answer: "Absolutely! We encourage you to share your ideas and preferences. We'll work with you to create a shot list that captures your vision while maintaining our artistic approach."
    },
    {
      question: "What if it rains on my outdoor event day?",
      answer: "We have contingency plans for outdoor events. We'll work with you to identify alternative indoor locations or adjust our approach to still capture beautiful images in any weather."
    },
    {
      question: "How do I secure my booking date?",
      answer: "Once you've selected a package, we'll send you a contract and invoice. Your date is secured once we receive the signed contract and advance payment."
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Frequently Asked Questions - The Flash Photofilms" 
        description="Find answers to frequently asked questions about our photography services, packages, and booking process."
        url="https://www.theflashphotofilms.com/faq"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-medium-gray">
            Everything you need to know about our photography services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full p-6 text-left flex justify-between items-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-gold/5' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg font-bold text-dark-maroon">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gold transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-medium-gray">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-dark-maroon mb-4">Still have questions?</h2>
          <p className="text-medium-gray mb-8">
            We're here to help! Feel free to reach out to us for any additional questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="https://wa.me/7984941331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-dark-maroon text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-dark-maroon hover:text-white transition-colors"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;