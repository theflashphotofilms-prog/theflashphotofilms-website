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
      answer: "You can book us directly through our booking page. Your booking will be confirmed only after the required advance payment is received. We recommend booking as early as possible, especially for weddings and popular dates."
    },
    {
      question: "How much advance payment is required for booking?",
      answer: "A 30% advance payment is required to confirm your booking date. The remaining balance can be paid according to the schedule agreed upon during booking."
    },
    {
      question: "Do you provide customized photography packages?",
      answer: "Yes. We offer customized packages based on your event requirements, location, coverage duration, and deliverables. Contact us to discuss your specific needs and we'll create a tailored package for you."
    },
    {
      question: "Do you cover events outside Ankleshwar and Bharuch?",
      answer: "Yes. We provide services across Gujarat and other locations. Travel expenses may apply for locations beyond 50 km from our base in Ankleshwar."
    },
    {
      question: "What equipment do you use for photography and videography?",
      answer: "We use professional-grade cameras, lenses, lighting equipment, drones, stabilizers, and audio equipment. Our gear includes latest DSLR and mirrorless cameras, prime and zoom lenses, LED panels, and high-quality microphones to ensure optimal results in all conditions."
    },
    {
      question: "How long does it take to receive the photos and videos?",
      answer: "Photos are typically delivered within 3-4 weeks, while highlight videos are ready in 2-3 weeks. Complete video editing may take 4-6 weeks depending on the package. We provide sneak peeks within 48-72 hours of the event."
    },
    {
      question: "Do you provide photo and video editing?",
      answer: "Yes, all our packages include professional editing. Photos undergo color correction, exposure adjustments, and artistic enhancements. Videos are edited with music, transitions, and effects. We ensure all deliverables meet our quality standards."
    },
    {
      question: "Can I request specific shots or have a shot list?",
      answer: "Absolutely! We encourage clients to share shot lists, family group photo requirements, and specific moments they want captured. We also provide guidance on must-have shots and work with you to ensure all important moments are documented."
    },
    {
      question: "How many photographers and videographers will be present?",
      answer: "The number depends on your chosen package. Our standard packages include 1-2 photographers and 1-2 videographers. Premium packages may include additional team members. We customize team size based on your event scale and requirements."
    },
    {
      question: "Do you travel for destination weddings and events?",
      answer: "Yes, we travel for destination weddings and events both within India and internationally. Travel expenses may apply for locations beyond 50 km from our base in Ankleshwar, Gujarat. We've covered events across Gujarat and various parts of India."
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
            Don't hesitate to reach out to us directly for more information about our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/booking" 
              className="bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Book Now
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