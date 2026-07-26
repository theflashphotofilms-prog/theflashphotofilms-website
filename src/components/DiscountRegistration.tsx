'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DiscountRegistration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Submit to Google Sheets via API route
      const response = await fetch('/api/google-sheets-discount-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setName('');
        setEmail('');
      } else {
        setError(result.error || 'Failed to register. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#D2A97F]/10">
          <svg className="h-10 w-10 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#D2A97F] mt-4">Congratulations!</h3>
        <p className="mt-2 text-medium-gray">
          You are eligible for a <span className="font-bold text-[#D2A97F]">10% launch discount</span> valid for 3 months.
        </p>
        <p className="mt-4 text-medium-gray">
          Our team will contact you shortly with more details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-[#D2A97F]">Launch Discount Offer</h3>
      <p className="mt-2 text-medium-gray">
        Be among the first to enjoy our exclusive launch discount!
      </p>
      <a 
        href="https://wa.me/7984941331" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#D2A97F] font-medium hover:text-[#3A5A40] transition-colors"
      >
        WhatsApp Us for Details
      </a>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-medium-gray mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-medium-gray mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
            placeholder="Enter your email address"
          />
        </div>
        
        <div className="mb-4 p-4 bg-[#D2A97F]/10 border border-[#D2A97F]/30 rounded-lg">
          <p className="text-medium-gray">
            Register now and get <span className="font-bold text-[#D2A97F]">10% off</span> your first booking. 
            Limited time offer for early birds!
          </p>
        </div>
        
        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-colors duration-300 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#3A5A40] hover:bg-[#D2A97F] hover:text-[#3A5A40]'
          }`}
        >
          {isSubmitting ? 'Registering...' : 'Register for Discount'}
        </button>
      </form>
    </div>
  );
};

export default DiscountRegistration;