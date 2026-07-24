'use client';

import { useState } from 'react';

interface DiscountRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const DiscountRegistration = ({ isOpen, onClose, onSuccess }: DiscountRegistrationProps) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/google-sheets-discount-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mobileNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          onSuccess();
          onClose(); // Close the modal after showing success message
        }, 3000); // Close after 3 seconds
      } else {
        if (response.status === 409) {
          // Handle duplicate mobile number error specifically
          setError('This mobile number has already registered for the discount.');
        } else {
          setError(data.error || 'Failed to register for discount');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gold/10">
            <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-dark-maroon mt-4">Congratulations!</h3>
          <div className="mt-4">
            <p className="text-medium-gray text-lg">
              You are eligible for a <span className="font-bold text-gold">10% launch discount</span> valid for 3 months.
            </p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-medium-gray">
              Your information has been registered successfully.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-dark-maroon">Launch Discount Offer</h3>
          <button
            onClick={onClose}
            className="text-medium-gray hover:text-dark-maroon transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-medium-gray mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="mobileNumber" className="block text-medium-gray mb-2 font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="mb-4 p-4 bg-gold/10 border border-gold/30 rounded-lg">
            <p className="text-medium-gray text-sm">
              Register now and get <span className="font-bold text-gold">10% off</span> your first booking. 
              Valid for 3 months from registration.
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 px-4 rounded-xl font-bold text-white transition-colors duration-300 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-dark-maroon hover:bg-gold hover:text-dark-maroon'
            }`}
          >
            {isLoading ? 'Processing...' : 'Register for Discount'}
          </button>

          <p className="mt-4 text-center text-xs text-medium-gray">
            By registering, you agree to receive updates about our services.
          </p>
        </form>
      </div>
    </div>
  );
};

export default DiscountRegistration;