'use client';

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching testimonials
    const fetchTestimonials = async () => {
      try {
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data since we don't have a real API yet
        const mockTestimonials: Testimonial[] = [
          {
            id: 1,
            name: "Rajesh & Priya",
            rating: 5,
            comment: "The Flash Photofilms made our wedding day unforgettable. Every shot was perfect!",
            date: "2024-06-15",
            location: "Mumbai"
          },
          {
            id: 2,
            name: "Amit & Sneha",
            rating: 5,
            comment: "Professional, creative, and patient. They captured our love story beautifully.",
            date: "2024-05-22",
            location: "Delhi"
          },
          {
            id: 3,
            name: "Vikram & Anjali",
            rating: 4,
            comment: "Great experience working with the team. The photos exceeded our expectations!",
            date: "2024-04-10",
            location: "Bangalore"
          },
          {
            id: 4,
            name: "Suresh & Kavita",
            rating: 5,
            comment: "Simply amazing! Our pre-wedding shoot turned out to be a masterpiece.",
            date: "2024-07-05",
            location: "Ahmedabad"
          }
        ];
        
        setTestimonials(mockTestimonials);
        setLoading(false);
      } catch (err) {
        setError('Failed to load testimonials');
        setLoading(false);
      }
    };

    fetchTestimonials();
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
            <h2 className="text-3xl font-bold text-gold mb-6">Client Testimonials</h2>
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
            <h2 className="text-3xl font-bold text-gold mb-6">Client Testimonials</h2>
            <p className="text-medium-gray">Unable to load testimonials at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6">Client Testimonials</h2>
          <p className="text-medium-gray max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience with us
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold">Client Testimonials</h2>
            <p className="text-medium-gray mt-4">No testimonials available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-light-gray p-6 rounded-lg shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-gold">{testimonial.name}</h4>
                  <span className="text-sm text-medium-gray">{testimonial.location}</span>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-medium-gray italic">"{testimonial.comment}"</p>
                <p className="mt-4 text-sm text-medium-gray">{testimonial.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;