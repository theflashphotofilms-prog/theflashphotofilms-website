'use client';

import { useState, useEffect } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

interface Feedback {
  name: string;
  rating: number;
  feedbackMessage: string;
  timestamp: string;
}

export default function WallOfLove() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('/api/feedback/list');
        if (!response.ok) {
          throw new Error('Failed to fetch feedback');
        }
        const data = await response.json();
        if (data.success) {
          setFeedbacks(data.feedback || []);
        } else {
          throw new Error(data.error || 'Failed to fetch feedback');
        }
      } catch (err) {
        console.error('Error fetching feedback:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading) {
    return (
      <section className="py-20 relative overflow-hidden">
        {/* Realistic vintage brick wall background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
              linear-gradient(to bottom, #8B4513 0%, #A0522D 20%, #8B4513 40%, #A0522D 60%, #8B4513 80%, #A0522D 100%),
              linear-gradient(to right, #A0522D 0%, #8B4513 15%, #A0522D 30%, #8B4513 45%, #A0522D 60%, #8B4513 75%, #A0522D 90%, #8B4513 100%)
            `,
            backgroundSize: '100px 100px, 150px 150px, 100px 100px, 100px 50px',
            opacity: 0.8,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold text-ivory mb-6 relative`}>
              <span className="drop-shadow-lg">Wall of Love</span>
            </h2>
            <div className="animate-pulse flex justify-center">
              <div className="h-8 bg-forest-green/30 rounded w-64"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="bg-ivory rounded-lg p-5 shadow-lg animate-pulse"
                style={{ 
                  transform: `rotate(${Math.floor(Math.random() * 7) - 3}deg)`,
                  minHeight: '200px'
                }}
              >
                <div className="h-4 bg-forest-green/20 rounded mb-4"></div>
                <div className="h-4 bg-forest-green/20 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-forest-green/20 rounded mb-4"></div>
                <div className="h-3 bg-forest-green/20 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 relative overflow-hidden">
        {/* Realistic vintage brick wall background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
              linear-gradient(to bottom, #8B4513 0%, #A0522D 20%, #8B4513 40%, #A0522D 60%, #8B4513 80%, #A0522D 100%),
              linear-gradient(to right, #A0522D 0%, #8B4513 15%, #A0522D 30%, #8B4513 45%, #A0522D 60%, #8B4513 75%, #A0522D 90%, #8B4513 100%)
            `,
            backgroundSize: '100px 100px, 150px 150px, 100px 100px, 100px 50px',
            opacity: 0.8,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold text-ivory mb-6 relative`}>
              <span className="drop-shadow-lg">Wall of Love</span>
            </h2>
            <p className="text-xl text-soft-gold max-w-3xl mx-auto">
              There was an error loading client feedback. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <section className="py-20 relative overflow-hidden">
        {/* Realistic vintage brick wall background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
              linear-gradient(to bottom, #8B4513 0%, #A0522D 20%, #8B4513 40%, #A0522D 60%, #8B4513 80%, #A0522D 100%),
              linear-gradient(to right, #A0522D 0%, #8B4513 15%, #A0522D 30%, #8B4513 45%, #A0522D 60%, #8B4513 75%, #A0522D 90%, #8B4513 100%)
            `,
            backgroundSize: '100px 100px, 150px 150px, 100px 100px, 100px 50px',
            opacity: 0.8,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold text-ivory mb-6 relative`}>
              <span className="drop-shadow-lg">Wall of Love</span>
            </h2>
            <p className="text-xl text-soft-gold max-w-3xl mx-auto">
              We don't have any client feedback yet. Be the first to share your experience!
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Different pastel colors for the sticky notes
  const noteColors = [
    '#FEF7ED', // Cream
    '#FFFACD', // Pastel Yellow
    '#FADADD', // Light Pink
    '#D8E2DC', // Soft Green
    '#F5F5DC', // Beige
    '#E6E6FA'  // Pastel Blue
  ];

  // Generate star ratings as strings
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Realistic vintage brick wall background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 0%),
            linear-gradient(to bottom, #8B4513 0%, #A0522D 20%, #8B4513 40%, #A0522D 60%, #8B4513 80%, #A0522D 100%),
            linear-gradient(to right, #A0522D 0%, #8B4513 15%, #A0522D 30%, #8B4513 45%, #A0522D 60%, #8B4513 75%, #A0522D 90%, #8B4513 100%)
          `,
          backgroundSize: '100px 100px, 150px 150px, 100px 100px, 100px 50px',
          opacity: 0.8,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold text-ivory mb-6 relative`}>
            <span className="drop-shadow-lg">Wall of Love</span>
          </h2>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Real stories from couples who trusted us with their precious moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {feedbacks.map((feedback, index) => {
            // Select a random color from the array
            const colorIndex = index % noteColors.length;
            const bgColor = noteColors[colorIndex];
            
            // Random rotation between -3deg and +3deg
            const rotation = Math.floor(Math.random() * 7) - 3; // Random number between -3 and 3
            
            return (
              <div 
                key={index}
                className="relative w-full max-w-xs mx-auto group"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  backgroundColor: bgColor,
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1.05)`;
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center z-10">
                  <div className="w-6 h-0.5 bg-gray-800 rotate-45"></div>
                  <div className="absolute w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                
                <div className="p-5 relative z-0">
                  <div className="text-2xl text-amber-600 mb-3 text-center">
                    {renderStars(feedback.rating)}
                  </div>
                  
                  <p className="text-forest-green font-medium mb-4 text-lg leading-relaxed italic">
                    "{feedback.feedbackMessage}"
                  </p>
                  
                  <div className="text-right mt-4">
                    <p className="text-forest-green font-semibold">
                      — {feedback.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}