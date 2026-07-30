'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

export default function DiscountRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  useEffect(() => {
    // Check if user has already registered in the past 3 months
    const registrationData = localStorage.getItem('discountRegistration');
    if (registrationData) {
      const { timestamp } = JSON.parse(registrationData);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      
      if (new Date(timestamp) > threeMonthsAgo) {
        setIsRegistered(true);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.consent) {
        throw new Error('Please consent to receive communications');
      }

      // Prepare data for API
      const userData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Store in localStorage to prevent multiple submissions
      localStorage.setItem('discountRegistration', JSON.stringify(userData));

      // Send data to Google Sheets via API route
      const response = await fetch('/api/discount-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to register for discount');
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      setCouponCode(result.couponCode);

      // Mark as registered
      setIsRegistered(true);

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        router.push('/thank-you');
      }, 1000);
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  if (isRegistered) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-soft-gold/10">
          <svg className="h-10 w-10 text-soft-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-forest-green mt-4">Congratulations!</h3>
        <p className="mt-2 text-medium-gray">
          You are eligible for a <span className="font-bold text-soft-gold">10% launch discount</span> valid for 3 months.
        </p>
        {couponCode && (
          <div className="mt-4 p-3 bg-forest-green/10 rounded-lg">
            <p className="text-medium-gray text-sm">Your coupon code:</p>
            <p className="text-lg font-bold text-soft-gold">{couponCode}</p>
          </div>
        )}
        <div className="mt-6">
          <p className="text-medium-gray text-sm">
            Your registration has been recorded. You can use the discount code at checkout.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-soft-gold/10">
        <svg className="h-10 w-10 text-soft-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-forest-green mt-4">Launch Discount Offer</h3>
      <p className="mt-2 text-medium-gray text-sm">
        Register now to claim your exclusive launch discount
      </p>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-medium-gray mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-medium-gray mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-medium-gray mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className="focus:ring-soft-gold h-4 w-4 text-forest-green border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="font-medium text-medium-gray">
              I agree to receive communications about products, services, and offers via phone/email
            </label>
          </div>
        </div>
        
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-md font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-forest-green hover:bg-soft-gold hover:text-forest-green focus:ring-soft-gold'
          }`}
        >
          {isLoading ? 'Processing...' : 'Claim Your Discount'}
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-soft-gold/10 border border-soft-gold/30 rounded-lg">
        <p className="text-sm text-medium-gray">
          Register now and get <span className="font-bold text-soft-gold">10% off</span> your first booking. 
          This exclusive launch offer is valid for the first 3 months.
        </p>
      </div>
    </div>
  );
}