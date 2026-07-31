'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    feedbackMessage: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleRecommendChange = (value: string) => {
    setFormData(prev => ({ ...prev, wouldRecommend: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'feedback_page'
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          rating: 0,
          feedbackMessage: ''
        });
      } else {
        const errorData = await response.json();
        console.error('Error submitting feedback:', errorData);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-forest-green text-ivory">
        {/* Hero Section */}
        <div className="relative py-28">
          <div className="absolute inset-0 bg-forest-green"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
              Feedback Received
            </h1>
            <p className="text-xl text-soft-gold max-w-3xl mx-auto">
              Thank you for sharing your experience with The Flash Photofilms ❤️
            </p>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="luxury-card p-10 rounded-xl border border-soft-gold/30 text-center">
              <div className="text-6xl mb-6">❤️</div>
              <h2 className="text-3xl font-serif font-bold text-soft-gold mb-4">Thank You!</h2>
              <p className="text-lg text-cream mb-8">
                Your feedback has been received and we appreciate you taking the time to share your experience with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="bg-soft-gold text-forest-green py-3 px-6 rounded-xl font-bold hover:bg-opacity-90 transition-colors text-center"
                >
                  Return Home
                </Link>
                <Link 
                  href="/portfolio"
                  className="border-2 border-soft-gold text-soft-gold py-3 px-6 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Feedback Form */}
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="luxury-card p-8 md:p-12 rounded-xl border border-soft-gold/30">
            <h2 className="text-3xl font-serif font-bold text-soft-gold mb-2 text-center">We Value Your Opinion</h2>
            <p className="text-lg text-cream mb-8 text-center">
              Help us enhance our luxury wedding photography services
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Rating */}
              <div>
                <label className="block text-soft-gold font-bold mb-2">Rating *</label>
                <div className="flex space-x-1 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className={`text-4xl focus:outline-none ${
                        star <= (hoverRating || formData.rating) ? 'text-soft-gold' : 'text-gray-300'
                      }`}
                    >
                      {star <= (hoverRating || formData.rating) ? '★' : '☆'}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-soft-gold font-bold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-forest-green bg-ivory text-forest-green focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  placeholder="Enter your name"
                />
              </div>
              
              {/* Feedback Message */}
              <div>
                <label htmlFor="feedbackMessage" className="block text-soft-gold font-bold mb-2">Feedback Message *</label>
                <textarea
                  id="feedbackMessage"
                  name="feedbackMessage"
                  value={formData.feedbackMessage}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg border border-forest-green bg-ivory text-forest-green focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  placeholder="Share your detailed feedback about our services..."
                ></textarea>
              </div>
              
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-soft-gold text-forest-green py-4 px-6 rounded-xl font-bold hover:bg-opacity-90 transition-colors text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-forest-green/50">
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
              className="bg-soft-gold text-forest-green py-4 px-8 rounded-xl font-bold hover:bg-opacity-90 transition-colors text-lg"
            >
              View Our Work
            </Link>
            <Link 
              href="/booking"
              className="border-2 border-soft-gold text-soft-gold py-4 px-8 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors text-lg"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}