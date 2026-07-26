'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your photography style?",
      answer: "We specialize in a blend of contemporary, traditional, and photojournalistic styles. We adapt to your preferences and capture moments as they naturally unfold while ensuring key poses and formal shots are beautifully executed."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 6-12 months in advance for popular dates, especially during wedding season. However, we occasionally have availability for last-minute bookings."
    },
    {
      question: "Do you travel for events?",
      answer: "Yes, we offer services nationwide. Travel fees may apply for locations beyond 50km from our base in Ankleshwar, Gujarat. International destinations are also possible with additional arrangements."
    },
    {
      question: "How many photos will we receive?",
      answer: "The number varies by package, but typically ranges from 150-400+ high-resolution edited photos for a full wedding day. Pre-wedding sessions usually include 80-150 photos. All photos are professionally edited for color, exposure, and artistic enhancement."
    },
    {
      question: "How long does it take to receive the photos?",
      answer: "We aim to deliver your edited photos within 4-6 weeks after your event. Pre-wedding and portrait sessions are typically delivered within 1-2 weeks. Rush delivery options are available for an additional fee."
    },
    {
      question: "Do you provide videography services?",
      answer: "Yes, we offer comprehensive videography services including highlight reels, full ceremony coverage, and cinematic edits. Our video packages can be combined with photography for a complete documentation of your event."
    },
    {
      question: "What equipment do you use?",
      answer: "We use professional-grade cameras, lenses, and lighting equipment to ensure the highest quality results. We always carry backup equipment to any event to prevent any technical issues."
    },
    {
      question: "Can we request specific shots?",
      answer: "Absolutely! We encourage clients to share their ideas, preferences, and shot lists. While we provide guidance based on our experience, your input is important in making your photos reflect your unique story."
    },
    {
      question: "Do you offer engagement sessions?",
      answer: "Yes, engagement sessions are included in many of our wedding packages or can be booked separately. These sessions help you become comfortable with us and in front of the camera before your wedding day."
    },
    {
      question: "What is included in the packages?",
      answer: "Our packages typically include professional photography/videography, high-resolution edited digital files, online gallery access, print release, and personalized customer service. Specific inclusions vary by package."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-gold tracking-wide uppercase">Frequently Asked Questions</h2>
          <p className="mt-4 text-4xl leading-10 font-bold text-gold sm:text-5xl">
            Everything You Need To Know
          </p>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Can't find the answer you're looking for? Reach out to our team directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-light-gray transition-colors"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-gold">{faq.question}</span>
                <svg 
                  className={`h-5 w-5 text-gold transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-medium-gray">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12 text-center">
            <p className="text-medium-gray mb-6">
              Still have questions? Feel free to reach out to us directly.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;