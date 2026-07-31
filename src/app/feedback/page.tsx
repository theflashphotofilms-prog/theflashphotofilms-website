import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Share Your Feedback | The Flash Photofilms',
  description: 'Share your feedback and experience with The Flash Photofilms wedding photography and cinematography services.',
  openGraph: {
    title: 'Share Your Feedback | The Flash Photofilms',
    description: 'Share your feedback and experience with The Flash Photofilms wedding photography and cinematography services.',
    url: 'https://theflashphotofilms.in/feedback',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Flash Photofilms - Share Your Feedback',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Share Your Feedback | The Flash Photofilms',
    description: 'Share your feedback and experience with The Flash Photofilms wedding photography and cinematography services.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/feedback',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Share Your Experience
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Your feedback helps us improve and serve others better
          </p>
        </div>
      </div>

      {/* Feedback Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory text-forest-green rounded-xl p-10 shadow-xl">
            <h2 className="text-2xl font-bold text-soft-gold mb-6 text-center">We Value Your Opinion</h2>
            <p className="text-cream mb-8 text-center">
              Thank you for choosing The Flash Photofilms. Your feedback is important to us as it helps us continuously improve our services and better serve couples like you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="luxury-card p-6 rounded-xl border border-soft-gold/30">
                <h3 className="text-xl font-bold text-soft-gold mb-3">How did we do?</h3>
                <p className="text-cream text-sm">
                  Rate your experience with our photography and cinematography services
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-2xl text-soft-gold hover:text-forest-green focus:outline-none">
                      ★
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="luxury-card p-6 rounded-xl border border-soft-gold/30">
                <h3 className="text-xl font-bold text-soft-gold mb-3">Would you recommend us?</h3>
                <p className="text-cream text-sm">
                  How likely are you to recommend our services to others?
                </p>
                <div className="mt-4">
                  <input type="range" min="0" max="10" defaultValue="10" className="w-full accent-soft-gold" />
                  <div className="flex justify-between text-xs text-cream mt-1">
                    <span>Not Likely</span>
                    <span>Extremely Likely</span>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="event-type" className="block text-soft-gold font-bold mb-2">Event Type</label>
                <select id="event-type" className="w-full p-3 rounded-lg border border-forest-green bg-forest-green text-ivory focus:outline-none focus:ring-2 focus:ring-soft-gold">
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="pre-wedding">Pre-Wedding</option>
                  <option value="engagement">Engagement</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="comments" className="block text-soft-gold font-bold mb-2">Your Comments</label>
                <textarea 
                  id="comments" 
                  rows={4} 
                  placeholder="Tell us about your experience..." 
                  className="w-full p-3 rounded-lg border border-forest-green bg-forest-green text-ivory focus:outline-none focus:ring-2 focus:ring-soft-gold"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="improvements" className="block text-soft-gold font-bold mb-2">What Could We Improve?</label>
                <textarea 
                  id="improvements" 
                  rows={3} 
                  placeholder="Any suggestions for improvement?" 
                  className="w-full p-3 rounded-lg border border-forest-green bg-forest-green text-ivory focus:outline-none focus:ring-2 focus:ring-soft-gold"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="best-moments" className="block text-soft-gold font-bold mb-2">Favorite Moments</label>
                <textarea 
                  id="best-moments" 
                  rows={3} 
                  placeholder="Which moments did we capture best?" 
                  className="w-full p-3 rounded-lg border border-forest-green bg-forest-green text-ivory focus:outline-none focus:ring-2 focus:ring-soft-gold"
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mr-2 accent-soft-gold h-5 w-5 text-soft-gold focus:ring-soft-gold border-forest-green rounded"
                />
                <label htmlFor="consent" className="text-cream text-sm">
                  I agree to share my feedback publicly as testimonials
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-soft-gold text-forest-green py-3 px-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Thank You for Your Feedback!
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Your insights help us create even more beautiful memories for future couples.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/portfolio"
              className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link 
              href="/contact"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-10 py-5 rounded-xl font-bold text-lg hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}