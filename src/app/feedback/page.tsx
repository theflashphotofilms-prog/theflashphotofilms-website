'use client';

import FeedbackForm from '@/components/FeedbackForm';
import Testimonials from '@/components/Testimonials';

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            Share Your Experience
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Your feedback helps us improve our services and assist other clients in making informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FeedbackForm />
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-dark-maroon mb-6">Why Your Feedback Matters</h3>
              <ul className="space-y-4 text-medium-gray">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-gold text-dark-maroon">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3">
                    <strong className="text-dark-maroon">Help others:</strong> Your review guides potential clients in making confident decisions.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-gold text-dark-maroon">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3">
                    <strong className="text-dark-maroon">Improve our service:</strong> Your insights help us enhance our photography and customer experience.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-gold text-dark-maroon">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3">
                    <strong className="text-dark-maroon">Build trust:</strong> Authentic reviews create transparency and strengthen our reputation.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-gold text-dark-maroon">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3">
                    <strong className="text-dark-maroon">Recognition:</strong> Outstanding reviews may be featured in our marketing materials (with permission).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;