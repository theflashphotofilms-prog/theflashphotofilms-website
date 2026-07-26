// Renamed from Testimonials to ClientReviews to avoid conflict with existing Testimonials component
// This file is now ClientReviews component that displays approved client feedback

'use client';

import { useState, useEffect } from 'react';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const ClientReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating API call to fetch reviews
    const fetchReviews = async () => {
      try {
        // Simulated delay to mimic API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for reviews
        const mockReviews: Review[] = [
          {
            id: 1,
            name: "Rajesh Patel",
            date: "2023-10-15",
            rating: 5,
            comment: "Outstanding photography! Captured every moment perfectly. Highly recommended!"
          },
          {
            id: 2,
            name: "Priya Sharma",
            date: "2023-09-22",
            rating: 5,
            comment: "The team was professional and creative. Our wedding photos are absolutely beautiful."
          },
          {
            id: 3,
            name: "Amit Kumar",
            date: "2023-11-05",
            rating: 4,
            comment: "Great service and quality. The videography was especially impressive."
          },
          {
            id: 4,
            name: "Neha Singh",
            date: "2023-08-30",
            rating: 5,
            comment: "Professional, punctual, and talented. They made our special day even more memorable."
          },
          {
            id: 5,
            name: "Vikram Joshi",
            date: "2023-12-10",
            rating: 5,
            comment: "Exceptional work! The attention to detail and creativity exceeded our expectations."
          },
          {
            id: 6,
            name: "Sneha Reddy",
            date: "2023-07-18",
            rating: 4,
            comment: "Wonderful experience. The team captured our pre-wedding shoot beautifully."
          }
        ];
        
        setReviews(mockReviews);
        setLoading(false);
      } catch (err) {
        setError("Failed to load reviews. Please try again later.");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-[#D2A97F]' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-[#D2A97F] mb-6">Client Reviews</h2>
        <p className="text-medium-gray">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-[#D2A97F] mb-6">Client Reviews</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D2A97F]"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D2A97F]">Client Reviews</h2>
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
                    <h4 className="font-bold text-[#D2A97F]">{review.name}</h4>
                    <p className="text-medium-gray text-sm">{review.date}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-medium-gray italic">&quot;{review.comment}&quot;</p>
                
                <div className="mt-4 text-right">
                  <p className="text-sm text-medium-gray">
                    {new Date(review.date).toLocaleDateString('en-US', { 
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