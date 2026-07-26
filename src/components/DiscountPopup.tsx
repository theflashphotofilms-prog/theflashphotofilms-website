'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaInfoCircle, FaCheck } from 'react-icons/fa';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [couponCode, setCouponCode] = useState('');

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen the popup in the last 24 hours
      const lastShown = localStorage.getItem('discountPopupShown');
      if (!lastShown || Date.now() - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
        setIsVisible(true);
        localStorage.setItem('discountPopupShown', Date.now().toString());
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const validateInputs = () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!phone.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate a random coupon code
      const generatedCode = 'TFP' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setCouponCode(generatedCode);
      
      // Prepare data for Google Sheets
      const formData = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        couponCode: generatedCode,
        timestamp: new Date().toISOString()
      };

      // Send data to Google Sheets via API route
      const response = await fetch('/api/google-sheets-discount-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      // Success
      setIsSubmitted(true);
      
      // Store submission in localStorage to prevent multiple submissions
      localStorage.setItem('discountSubmitted', 'true');
    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-dark-maroon">Get 10% OFF On Any Package</h2>
              <button 
                onClick={handleClose}
                className="text-gold hover:text-dark-maroon transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-lg">
              <div className="flex items-start">
                <FaInfoCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                <p className="text-medium-gray text-sm">
                  Limited time offer! Register now to receive a discount code valid for 3 months.
                </p>
              </div>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-medium-gray mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-dark-maroon"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-medium-gray mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-dark-maroon"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-medium-gray mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-dark-maroon"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-dark-maroon text-white rounded-md font-medium hover:bg-gold hover:text-dark-maroon transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Get My Discount'}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gold/10 mb-4">
              <FaCheck className="h-10 w-10 text-gold" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-dark-maroon">Discount Confirmed!</h3>
            <p className="mt-2 text-medium-gray">
              Your details have been recorded. Here is your exclusive discount code:
            </p>
            <p className="text-lg font-bold text-dark-maroon mt-4">Your Coupon Code:</p>
            <p className="text-2xl font-bold text-gold mt-2">{couponCode}</p>
            <p className="mt-4 text-medium-gray text-sm">
              Use this code at checkout to get 10% off any package. Valid for 3 months.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 w-full py-3 px-4 bg-gold text-dark-maroon rounded-md font-medium hover:bg-dark-maroon hover:text-white transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountPopup;