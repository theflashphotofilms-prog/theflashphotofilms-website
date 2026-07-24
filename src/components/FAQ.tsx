'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'How far in advance should I book your services?',
      answer: 'We recommend booking 3-6 months in advance for weddings and special events, especially during peak season (May-October). For portrait sessions, 4-6 weeks notice is typically sufficient.'
    },
    {
      id: 2,
      question: 'What is included in your wedding photography packages?',
      answer: 'Our wedding packages include full-day coverage, high-resolution digital images, online gallery access, print release, and optional engagement session. Additional services like second shooter, photobooth, or same-day slideshow are available.'
    },
    {
      id: 3,
      question: 'Do you travel for destination weddings?',
      answer: 'Yes, we love destination weddings! Travel fees apply for locations outside the San Francisco Bay Area. International destination weddings are quoted separately and include accommodation arrangements.'
    },
    {
      id: 4,
      question: 'How many photos will we receive?',
      answer: 'For weddings, expect 500-800 carefully edited high-resolution images. Portrait sessions typically yield 50-100 images. All images are professionally edited to match our signature style.'
    },
    {
      id: 5,
      question: 'What equipment do you use?',
      answer: 'We use professional-grade Canon and Sony cameras with backup equipment. Our kit includes various lenses, lighting equipment, and backup batteries to ensure seamless coverage throughout your event.'
    },
    {
      id: 6,
      question: 'When will we receive our photos?',
      answer: 'Wedding galleries are delivered within 4-6 weeks. Portrait galleries are delivered within 1-2 weeks. Rush delivery is available for an additional fee.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-gold tracking-wide uppercase">Frequently Asked Questions</h2>
          <p className="mt-4 text-4xl leading-10 font-bold text-dark-maroon sm:text-5xl">
            Common Inquiries
          </p>
          <p className="mt-6 text-xl text-medium-gray">
            Everything you need to know about our photography services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full p-6 text-left flex justify-between items-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-gold/5' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${faq.id}`}
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
                id={`faq-content-${faq.id}`}
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
      </div>
    </section>
  );
};

export default FAQ;