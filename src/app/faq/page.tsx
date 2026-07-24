'use client';

import { useState } from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';

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
      question: "Is the advance payment refundable?",
      answer: "No. The advance payment is non-refundable under any circumstances."
    },
    {
      question: "Do you provide customised photography packages?",
      answer: "Yes. We offer customised packages based on your event requirements, location, coverage duration, and deliverables."
    },
    {
      question: "Do you cover events outside Ankleshwar and Bharuch?",
      answer: "Yes. We provide services across Gujarat and other locations. Travel expenses may apply for locations beyond 50 km."
    },
    {
      question: "Is travel cost included in the package price?",
      answer: "No. Travel expenses are not included in standard packages if the event location is more than 50 km away."
    },
    {
      question: "How many days are included in wedding packages?",
      answer: "All standard wedding packages are designed for 2-day wedding events. Additional days will incur extra charges."
    },
    {
      question: "How many days are included in pre-wedding packages?",
      answer: "Our standard pre-wedding packages include a 2-day shoot. Additional shoot days will be charged separately."
    },
    {
      question: "Do you provide drone photography and videography?",
      answer: "Yes. Drone coverage is available in selected packages and can also be added as an extra service."
    },
    {
      question: "Will we receive all photos?",
      answer: "Yes. All packages include soft copies of photos as mentioned in the package details."
    },
    {
      question: "When will we receive our photos and videos?",
      answer: "Delivery timelines may vary depending on the project. Generally, clients receive their edited work within the committed delivery schedule discussed during booking."
    },
    {
      question: "When should album selection be completed?",
      answer: "Album selection should be completed within 30 to 45 days. Delays beyond this period may result in revised album pricing based on current market rates."
    },
    {
      question: "Do you provide raw photos and videos?",
      answer: "Photos are provided according to the selected package. Video files and edited deliverables are provided as mentioned in your package inclusions."
    },
    {
      question: "Can we request extra reels, videos, or albums?",
      answer: "Yes. Additional reels, cinematic films, albums, LED screens, drone coverage, photographers, or videographers can be added at an extra cost."
    },
    {
      question: "Do you cover DJ events and dance performances?",
      answer: "Yes. DJ coverage is included up to 12:00 AM (midnight). Additional coverage may require extra charges."
    },
    {
      question: "Do you take photos during lunch and dinner?",
      answer: "By default, lunch and dinner coverage is not included. If required, please inform us during the booking process."
    },
    {
      question: "Can we reschedule our event date?",
      answer: "Date changes depend on availability. Please contact us as early as possible to discuss rescheduling options."
    },
    {
      question: "How can we share references or ideas for our shoot?",
      answer: "You can share inspiration photos, Instagram reels, Pinterest boards, or specific concepts with our team before the event."
    },
    {
      question: "Do you provide same-day edits?",
      answer: "Yes. Same-day editing services are available in selected premium packages or can be added separately."
    },
    {
      question: "Why should we choose The Flash Photofilms?",
      answer: "We combine creativity, professional equipment, cinematic storytelling, premium albums, drone coverage, and personalised service to create memories that last a lifetime."
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Frequently Asked Questions | The Flash Photofilms" 
        description="Get answers to frequently asked questions about The Flash Photofilms photography and videography services."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-xl text-medium-gray">
            Find answers to common questions about our photography and videography services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
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
                  <h3 className="text-lg font-bold text-dark-maroon">{faq.question}</h3>
                  <svg 
                    className={`h-5 w-5 text-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
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
        </div>

        <div className="mt-16 bg-gradient-to-r from-dark-maroon to-black rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-medium-gray max-w-2xl mx-auto mb-8">
            We are happy to help you plan your special event and choose the perfect package.
          </p>
          <p className="text-lg font-bold mb-8">
            📞 Call / WhatsApp: +91 79849 41331
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="https://wa.me/+917984941331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
            >
              WhatsApp Us
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;