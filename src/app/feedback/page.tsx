'use client';

import Link from 'next/link';
import SEO from '@/components/SEO';

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Share Your Experience | The Flash Photofilms" 
        description="Share your feedback about The Flash Photofilms photography and videography services. Help us improve and assist other clients in their decision-making."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Share Your Experience
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Your feedback helps us improve our services and assists other clients in making confident decisions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#D2A97F] text-center mb-12">Why Your Feedback Matters</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D2A97F]/10 mr-6 flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#D2A97F] text-[#3A5A40]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-medium-gray">
                <strong className="text-[#D2A97F]">Help others:</strong> Your review guides potential clients in making confident decisions.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D2A97F]/10 mr-6 flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#D2A97F] text-[#3A5A40]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-medium-gray">
                <strong className="text-[#D2A97F]">Improve our service:</strong> Your insights help us enhance our photography and customer experience.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D2A97F]/10 mr-6 flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#D2A97F] text-[#3A5A40]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-medium-gray">
                <strong className="text-[#D2A97F]">Build trust:</strong> Authentic reviews create transparency and strengthen our reputation.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D2A97F]/10 mr-6 flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#D2A97F] text-[#3A5A40]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-medium-gray">
                <strong className="text-[#D2A97F]">Recognition:</strong> Outstanding reviews may be featured in our marketing materials (with permission).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#D2A97F] mb-6">Ready to Share Your Experience?</h2>
          <p className="text-medium-gray mb-8 max-w-2xl mx-auto">
            Your honest feedback is valuable to us. Whether your experience was exceptional or you have suggestions for improvement, we welcome your thoughts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="https://g.page/r/[GOOGLE_REVIEW_LINK]/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Leave Google Review
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
            >
              Send Direct Feedback
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-[#D2A97F] mb-4">Alternative Ways to Connect</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="mailto:info@theflashphotofilms.com" 
                className="text-medium-gray hover:text-[#D2A97F] transition-colors"
              >
                info@theflashphotofilms.com
              </Link>
              <Link 
                href="https://wa.me/7984941331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medium-gray hover:text-[#D2A97F] transition-colors"
              >
                WhatsApp
              </Link>
              <Link 
                href="/faq" 
                className="text-medium-gray hover:text-[#D2A97F] transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;