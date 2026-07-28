'use client';

import { useState } from 'react';
import Link from 'next/link';

const TermsAndConditions = ({ compact = false }: { compact?: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(compact ? null : 0); // Auto-open first item if not compact

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const termsSections = [
    {
      title: "Booking & Payment Policy",
      content: (
        <>
          <p>30% advance payment is required to confirm the booking.</p>
          <p>An additional 50% payment must be completed immediately after event coverage is completed.</p>
          <p>Soft copies of photos and videos will be delivered only after the 50% payment is received.</p>
          <p>The remaining balance amount must be paid on the album selection day.</p>
        </>
      )
    },
    {
      title: "Booking Confirmation",
      content: (
        <p>No booking will be confirmed without the required advance payment.</p>
      )
    },
    {
      title: "Advance Payment Policy",
      content: (
        <p>Advance payment is non-refundable under any circumstances.</p>
      )
    },
    {
      title: "Album Selection Policy",
      content: (
        <>
          <p>Album selection must be completed within 30 to 45 days from the event date.</p>
          <p>If album selection is delayed beyond 45 days, album pricing may be revised according to current market rates.</p>
        </>
      )
    },
    {
      title: "DJ Event Coverage",
      content: (
        <>
          <p>DJ coverage will be provided up to 12:00 AM (midnight) only.</p>
          <p>Additional coverage beyond this timing may incur extra charges.</p>
        </>
      )
    },
    {
      title: "Meal-Time Photography",
      content: (
        <>
          <p>Photography and videography of guests while having lunch or dinner are not included by default.</p>
          <p>If required, this must be communicated at the time of booking.</p>
        </>
      )
    },
    {
      title: "Extended Video Editing",
      content: (
        <>
          <p>Package video editing includes the duration mentioned in the selected package.</p>
          <p>If the final edited video exceeds 3 hours, additional editing charges will apply.</p>
        </>
      )
    },
    {
      title: "Data Collection & Storage",
      content: (
        <>
          <p>Clients must collect all delivered data within 30 to 45 days.</p>
          <p>After this period, if data is lost due to technical issues, system failure, or storage limitations, The Flash Photofilms will not be held responsible.</p>
        </>
      )
    },
    {
      title: "Staff Conduct Policy",
      content: (
        <>
          <p>Clients and guests are expected to maintain respectful behaviour toward photographers, videographers, editors, and staff members.</p>
          <p>Misconduct, abusive language, or inappropriate behaviour may result in immediate cancellation of services.</p>
          <p>In such cases, no refund will be provided.</p>
        </>
      )
    },
    {
      title: "Package Scope",
      content: (
        <p>Each package includes only the services specifically mentioned in the package details.</p>
      )
    }
  ];

  const importantNotice = (
    <div className="mt-8 pt-8 border-t border-soft-gold/30">
      <h3 className="text-xl font-bold text-soft-gold mb-4">Important Notice</h3>
      <p className="text-cream mb-4">Travel charges will apply for locations beyond 50 KM from The Flash Photofilms office location.</p>
      <p className="text-cream">Custom packages are available based on client requirements.</p>
    </div>
  );

  const thankYou = (
    <div className="mt-8 pt-8 border-t border-soft-gold/30">
      <p className="text-cream italic">Thank you for trusting The Flash Photofilms to capture your special moments. We look forward to creating beautiful memories for you and your family.</p>
    </div>
  );

  return (
    <div className="py-16 bg-forest-green/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-10 text-center">Terms &amp; Conditions</h2>
        
        <div className="space-y-4">
          {termsSections.map((section, index) => (
            <div 
              key={index} 
              className="luxury-card border border-soft-gold/30 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`terms-content-${index}`}
              >
                <h3 className="text-lg md:text-xl font-bold text-soft-gold">
                  {index + 1}. {section.title}
                </h3>
                <svg 
                  className={`w-5 h-5 text-soft-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                id={`terms-content-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-cream">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {importantNotice}
        {thankYou}
        
        {compact && (
          <div className="mt-8 text-center">
            <Link 
              href="/terms-conditions"
              className="inline-block text-soft-gold hover:text-ivory transition-colors duration-300 text-sm underline"
            >
              View Full Terms &amp; Conditions
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions;