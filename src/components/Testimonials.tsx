'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  serviceType: string;
  submissionDate: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating API call to fetch testimonials
    const fetchTestimonials = async () => {
      try {
        // Simulated delay to mimic API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for testimonials
        const mockTestimonials: Testimonial[] = [
          {
            id: 1,
            name: "Rajesh Patel",
            date: "2023-10-15",
            rating: 5,
            comment: "Outstanding photography! Captured every moment perfectly. Highly recommended!",
            serviceType: "Wedding Photography",
            submissionDate: "2023-10-16"
          },
          {
            id: 2,
            name: "Priya Sharma",
            date: "2023-09-22",
            rating: 5,
            comment: "The team was professional and creative. Our wedding photos are absolutely beautiful.",
            serviceType: "Wedding Photography",
            submissionDate: "2023-09-23"
          },
          {
            id: 3,
            name: "Amit Kumar",
            date: "2023-11-05",
            rating: 4,
            comment: "Great service and quality. The videography was especially impressive.",
            serviceType: "Event Coverage",
            submissionDate: "2023-11-06"
          },
          {
            id: 4,
            name: "Neha Singh",
            date: "2023-08-30",
            rating: 5,
            comment: "Professional, punctual, and talented. They made our special day even more memorable.",
            serviceType: "Pre-Wedding Shoot",
            submissionDate: "2023-08-31"
          },
          {
            id: 5,
            name: "Vikram Joshi",
            date: "2023-12-10",
            rating: 5,
            comment: "Exceptional work! The attention to detail and creativity exceeded our expectations.",
            serviceType: "Wedding Photography",
            submissionDate: "2023-12-11"
          },
          {
            id: 6,
            name: "Sneha Reddy",
            date: "2023-07-18",
            rating: 4,
            comment: "Wonderful experience. The team captured our pre-wedding shoot beautifully.",
            serviceType: "Pre-Wedding Shoot",
            submissionDate: "2023-07-19"
          }
        ];
        
        setTestimonials(mockTestimonials);
        setLoading(false);
      } catch (err) {
        setError("Failed to load testimonials. Please try again later.");
        setLoading(false);
      }
    };

    fetchTestimonials();
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
        <h2 className="text-3xl font-bold text-[#D2A97F] mb-6">Client Testimonials</h2>
        <p className="text-medium-gray">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-[#D2A97F] mb-6">Client Testimonials</h2>
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
          <h2 className="text-3xl font-bold text-[#D2A97F]">Client Testimonials</h2>
          <p className="mt-4 text-xl text-medium-gray max-w-3xl mx-auto">
            Hear what our valued clients have to say about our services
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-medium-gray">No testimonials available yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h4 className="font-bold text-[#D2A97F]">{testimonial.name}</h4>
                    <p className="text-medium-gray text-sm">{testimonial.serviceType}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-medium-gray italic">&quot;{testimonial.comment}&quot;</p>
                
                <div className="mt-4 text-right">
                  <p className="text-sm text-medium-gray">
                    {new Date(testimonial.submissionDate).toLocaleDateString('en-US', { 
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

export default Testimonials;