'use client';

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

const ClientReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching reviews
    const fetchReviews = async () => {
      try {
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data since we don't have a real API yet
        const mockReviews: Review[] = [
          {
            id: 1,
            name: "Priya Sharma",
            rating: 5,
            comment: "Outstanding photography! They captured every moment of our wedding beautifully.",
            date: "2024-05-15",
            location: "Mumbai"
          },
          {
            id: 2,
            name: "Rahul Verma",
            rating: 5,
            comment: "Professional, creative, and patient. The photos exceeded our expectations!",
            date: "2024-06-22",
            location: "Delhi"
          },
          {
            id: 3,
            name: "Anjali Nair",
            rating: 4,
            comment: "Great experience overall. The team was responsive and delivered on time.",
            date: "2024-04-10",
            location: "Bangalore"
          },
          {
            id: 4,
            name: "Amit Patel",
            rating: 5,
            comment: "Simply amazing! Our pre-wedding shoot turned out perfect. Highly recommended!",
            date: "2024-07-05",
            location: "Ahmedabad"
          },
          {
            id: 5,
            name: "Sneha Reddy",
            rating: 5,
            comment: "They captured our love story perfectly. The attention to detail was impressive.",
            date: "2024-03-18",
            location: "Hyderabad"
          },
          {
            id: 6,
            name: "Vikram Joshi",
            rating: 4,
            comment: "Professional service and great communication throughout the process.",
            date: "2024-08-12",
            location: "Pune"
          }
        ];
        
        setReviews(mockReviews);
        setLoading(false);
      } catch (err) {
        setError('Failed to load reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-lg ${index < rating ? 'text-gold' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gold mb-6">Client Reviews</h2>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gold mb-6">Client Reviews</h2>
            <p className="text-medium-gray">Unable to load reviews at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6">Client Reviews</h2>
          <p className="text-medium-gray max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience with us
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold">Client Reviews</h2>
            <p className="text-medium-gray mt-4">No reviews available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-light-gray p-6 rounded-lg shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-gold">{review.name}</h4>
                  <span className="text-sm text-medium-gray">{review.location}</span>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-4 text-medium-gray italic">"{review.comment}"</p>
                <p className="mt-4 text-sm text-medium-gray">{review.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientReviews;