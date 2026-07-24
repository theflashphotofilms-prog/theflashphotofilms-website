// Renamed from Testimonials to ClientReviews to avoid conflict with existing Testimonials component
// This file is now ClientReviews component that displays approved client feedback

'use client';

import { useState, useEffect } from 'react';
import { feedbackService, Feedback } from '@/lib/feedbackService';

const ClientReviews = () => {
  const [reviews, setReviews] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const approvedFeedback = feedbackService.getApprovedFeedback();
        setReviews(approvedFeedback);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-gold' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-maroon">Client Reviews</h2>
            <p className="mt-4 text-xl text-medium-gray max-w-3xl mx-auto">
              Hear what our valued clients have to say about our services
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-maroon">Client Reviews</h2>
          <p className="mt-4 text-xl text-medium-gray max-w-3xl mx-auto">
            Hear what our valued clients have to say about our services
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-medium-gray">No reviews available yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h4 className="font-bold text-dark-maroon">{review.name}</h4>
                    <p className="text-medium-gray text-sm">{review.serviceType}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-medium-gray italic">&quot;{review.feedback}&quot;</p>
                
                <div className="mt-4 text-right">
                  <p className="text-sm text-medium-gray">
                    {new Date(review.submissionDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientReviews;