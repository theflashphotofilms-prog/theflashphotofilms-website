'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What photography services do you offer?",
      answer: "We offer a wide range of photography services including wedding photography, pre-wedding shoots, engagement sessions, baby showers, corporate events, portrait sessions, and commercial photography."
    },
    {
      question: "How far in advance should I book your services?",
      answer: "We recommend booking at least 3-6 months in advance, especially for weddings and special events during peak seasons. However, we can sometimes accommodate last-minute bookings based on availability."
    },
    {
      question: "Do you travel for events outside your local area?",
      answer: "Yes, we travel for events across Gujarat and other locations. Travel expenses may apply for destinations beyond 50 km from our base in Ankleshwar."
    },
    {
      question: "How many photos will I receive?",
      answer: "The number of photos varies depending on the event duration and package selected. Typically, you can expect 300-800+ high-resolution edited photos for a full wedding day, with all packages including all soft copy raw photos."
    },
    {
      question: "How long does it take to receive the edited photos?",
      answer: "The turnaround time is typically 4-6 weeks for weddings and 2-3 weeks for smaller events. We will provide a specific timeline during the booking process."
    },
    {
      question: "Do you provide videography services?",
      answer: "Yes, we offer comprehensive videography services including highlight videos, cinematic films, and Instagram reels as part of our packages."
    },
    {
      question: "Can I customize my photography package?",
      answer: "Absolutely! We offer customizable packages to suit your specific needs, preferences, and budget. Contact us to discuss your requirements."
    },
    {
      question: "What equipment do you use?",
      answer: "We use professional-grade cameras, lenses, lighting equipment, and drones to ensure the highest quality results for your special day."
    }
  ];

  return (
    <div className="py-16 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-[#D2A97F] tracking-wide uppercase">Frequently Asked Questions</h2>
          <p className="mt-4 text-4xl leading-10 font-bold text-[#D2A97F] sm:text-5xl">
            Got Questions?
          </p>
          <p className="mt-4 text-xl text-medium-gray">
            Find answers to common questions about our photography services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-[#D2A97F]">{faq.question}</span>
                <svg 
                  className={`h-5 w-5 text-[#D2A97F] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 bg-gray-50 border-t border-gray-200">
                  <p className="text-medium-gray">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-medium-gray mb-6">
            Can't find the answer you're looking for?
          </p>
          <a 
            href="https://wa.me/7984941331" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;