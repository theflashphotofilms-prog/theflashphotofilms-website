'use client';

import { useState, useEffect } from 'react';

const DiscountPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false); // Add mounted state to prevent SSR issues

  // Set mounted to true on client side to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show popup after 3 seconds on mount
  useEffect(() => {
    if (!mounted) return; // Only run on client side
    
    const timer = setTimeout(() => {
      // Check if user has already seen the popup (using localStorage)
      const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
      if (!hasSeenPopup) {
        setShowPopup(true);
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [mounted]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowPopup(false);
      // Mark as seen so it doesn't appear again
      localStorage.setItem('hasSeenDiscountPopup', 'true');
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Validate inputs
      if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim()) {
        setError('Please fill in all fields');
        setIsSubmitting(false);
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      // Basic mobile validation (simple check for minimum length)
      if (formData.mobile.replace(/\D/g, '').length < 10) {
        setError('Please enter a valid mobile number');
        setIsSubmitting(false);
        return;
      }

      // Submit to Google Sheets via API route
      const response = await fetch('/api/google-sheets-discount-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          mobile: formData.mobile 
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setCouponCode(result.couponCode);
        
        // Reset form
        setFormData({ name: '', mobile: '', email: '' });
      } else {
        setError(result.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render anything during SSR or until mounted
  if (!mounted || !showPopup) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
        onClick={handleClose}
      />

      {/* Popup Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isVisible ? 'opacity-100' : 'opacity-0 scale-95'} transition-all duration-300`}
      >
        <div 
          className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        >
          {!submitSuccess ? (
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#3A5A40]">Get 10% OFF On Any Package</h2>
                <button 
                  onClick={handleClose}
                  className="text-[#D2A97F] hover:text-[#3A5A40] transition-colors"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-medium-gray mb-6">
                Enter your details to receive a unique discount code valid for 90 days.
              </p>
              
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40]"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40]"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40]"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#D2A97F] hover:bg-[#3A5A40] transition-colors'
                    }`}
                  >
                    {isSubmitting ? 'Processing...' : 'Claim Your Discount'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-6">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-[#3A5A40]">Discount Confirmed!</h3>
                <div className="mt-2">
                  <p className="text-medium-gray">
                    Congratulations! Your discount has been confirmed.
                  </p>
                  <div className="mt-4 p-4 bg-[#f8f4f0] rounded-lg">
                    <p className="text-lg font-bold text-[#3A5A40]">Your Coupon Code:</p>
                    <p className="text-2xl font-bold text-[#D2A97F] mt-2">{couponCode}</p>
                    <p className="mt-2 text-sm text-medium-gray">
                      Use this code within 90 days for 10% off any package
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleClose}
                    className="w-full py-3 px-4 bg-[#D2A97F] text-[#3A5A40] rounded-md font-medium hover:bg-[#3A5A40] hover:text-white transition-colors"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscountPopup;