'use client';

import { useState, useEffect } from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ 
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

export default function ClientLove() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('/api/feedback/list');
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setFeedbacks(data.feedback || []);
          }
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading || feedbacks.length === 0) {
    return null; // Don't render anything if there's no feedback
  }

  // Different pastel colors for the sticky notes
  const noteColors = [
    '#FFFACD', // Lemon Chiffon (Soft Yellow)
    '#E8B4B8', // Dusty Pink
    '#D8E2DC', // Sage Green
    '#FDFD96', // Light Yellow
    '#FFE5B4', // Peach
    '#E6E6FA', // Light Lavender
    '#F0E68C', // Khaki
    '#DDA0DD', // Plum
    '#AFEEEE', // Pale Turquoise
    '#F5DEB3'  // Wheat
  ];

  // Generate star ratings as strings
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="py-20 bg-forest-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
            Client Love ❤️
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
                className="relative w-full max-w-xs mx-auto"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  backgroundColor: bgColor,
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
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
                  
                  <p className={`text-forest-green font-medium mb-4 text-lg leading-relaxed ${dancingScript.className}`}>
                    "{feedback.feedbackMessage}"
                  </p>
                  
                  <div className="text-right mt-4">
                    <p className={`text-forest-green font-semibold ${dancingScript.className}`}>
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