'use client';

import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Share Your Feedback - The Flash Photofilms" 
        description="Share your feedback about our photography services. Help us improve and serve you better."
        url="https://www.theflashphotofilms.com/feedback"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">We Value Your Feedback</h1>
          <p className="text-xl text-medium-gray">
            Your opinion matters to us. Share your experience with our photography services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-medium-gray mb-2 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-medium-gray mb-2 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-medium-gray mb-2 font-medium">Service Received</label>
              <select
                id="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="event">Event Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="commercial">Commercial Photography</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="rating" className="block text-medium-gray mb-2 font-medium">Overall Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-gray-300 hover:text-gold focus:outline-none"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="feedback" className="block text-medium-gray mb-2 font-medium">Your Feedback</label>
              <textarea
                id="feedback"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
                placeholder="Please share your detailed feedback about our services..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="improvements" className="block text-medium-gray mb-2 font-medium">Suggestions for Improvement</label>
              <textarea
                id="improvements"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
                placeholder="How can we improve our services?"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="contact"
                className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
              />
              <label htmlFor="contact" className="ml-2 block text-medium-gray">
                I agree to be contacted regarding my feedback
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-dark-maroon text-white py-4 px-6 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-block bg-transparent border-2 border-dark-maroon text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-dark-maroon hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default FeedbackPage;