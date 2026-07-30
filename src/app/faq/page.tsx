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
      question: "Is the advance payment refundable?",
      answer: "No. The advance payment is non-refundable under any circumstances."
    },
    {
      question: "Do you provide customised photography packages?",
      answer: "Yes. We offer customised packages based on your event requirements, location, coverage duration, and deliverables."
    },
    {
      question: "Do you cover events outside Ankleshwar and Bharuch?",
      answer: "Yes. We provide services across Gujarat and destination wedding locations across India. Travel and accommodation expenses may apply depending on the event location."
    },
    {
      question: "Is travel cost included in the package price?",
      answer: "No. Travel, accommodation, and logistics expenses are not included in standard package pricing unless specifically mentioned."
    },
    {
      question: "How many days are included in wedding packages?",
      answer: "All standard wedding packages are designed according to the selected package. Additional days or functions will incur extra charges."
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
      question: "Do you provide candid photography?",
      answer: "Yes. Candid photography is one of our specialties. We focus on capturing genuine emotions, natural expressions, and real moments throughout your celebration."
    },
    {
      question: "Will we receive all photos?",
      answer: "Yes. All packages include edited soft-copy photos as mentioned in the package details."
    },
    {
      question: "When will we receive our photos and videos?",
      answer: "Delivery timelines vary depending on project size and season. Clients typically receive their edited work within the committed timeline discussed during booking."
    },
    {
      question: "When should album selection be completed?",
      answer: "Album selection should be completed within 30 to 45 days. Delays beyond this period may result in revised album pricing based on current market rates."
    },
    {
      question: "Do you provide raw photos and videos?",
      answer: "Photos and videos are delivered according to the package inclusions. Raw files are generally not provided unless agreed upon separately."
    },
    {
      question: "Can we request extra reels, videos, albums, or photographers?",
      answer: "Yes. Additional reels, cinematic films, albums, drone coverage, photographers, videographers, LED screens, and other services can be added at an extra cost."
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
      question: "Can family members suggest poses or photography ideas during the event?",
      answer: "Absolutely. We welcome creative suggestions from couples and family members while maintaining the overall flow and quality of coverage."
    },
    {
      question: "What happens if weather conditions affect an outdoor shoot?",
      answer: "In case of unfavorable weather, we will work with you to adjust the schedule, location, or shoot plan to achieve the best possible results."
    },
    {
      question: "Can we reschedule our event date?",
      answer: "Date changes depend on availability. Please contact us as early as possible to discuss rescheduling options."
    },
    {
      question: "How can we share references or ideas for our shoot?",
      answer: "You can share inspiration photos, Instagram reels, Pinterest boards, mood boards, or specific concepts with our team before the event."
    },
    {
      question: "Do you provide same-day edits?",
      answer: "Yes. Same-day editing services are available in selected premium packages or can be added separately."
    },
    {
      question: "Why should we choose The Flash Photofilms?",
      answer: "We combine creativity, cinematic storytelling, professional equipment, premium albums, drone coverage, and personalised service to create memories that last a lifetime."
    }
  ];

  return (
    <div className="min-h-screen bg-forest-green py-16">
      <SEO 
        title="Frequently Asked Questions - The Flash Photofilms" 
        description="Find answers to frequently asked questions about our photography services, packages, and booking process."
        url="https://www.theflashphotofilms.com/faq"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ivory mb-4 font-serif">Frequently Asked Questions (FAQs)</h1>
          <p className="text-xl text-soft-gold">
            Everything you need to know about our photography services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-soft-gold/30 rounded-xl overflow-hidden transition-all duration-300 bg-ivory"
            >
              <button
                className={`w-full p-6 text-left flex justify-between items-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-soft-gold/10' : 'hover:bg-forest-green/10'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg font-bold text-forest-green">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-soft-gold transform transition-transform duration-300 ${
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
                <div className="p-6 pt-0 border-t border-soft-gold/20">
                  <p className="text-cream">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-forest-green/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">Still Have Questions?</h2>
          <p className="text-cream mb-8">
            Call or WhatsApp:<br />
            <span className="text-soft-gold text-xl font-bold">+91 79849 41331</span>
          </p>
          <p className="text-cream mb-8">
            We would be happy to help you plan your special event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/booking" 
              className="bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-forest-green hover:text-soft-gold transition-colors"
            >
              Book Now
            </Link>
            <Link 
              href="https://wa.me/7984941331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-soft-gold text-soft-gold px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors"
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