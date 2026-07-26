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

  // Show popup after 3 seconds on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen the popup (using localStorage)
      const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
      if (!hasSeenPopup) {
        setShowPopup(true);
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      const response = await fetch('/api/coupon-validation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          action: 'create'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setCouponCode(result.couponCode);
        setSubmitSuccess(true);
      } else {
        setError(result.error || 'Failed to register for discount');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error registering for discount:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

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
                <div className="mb-4">
                  <label htmlFor="name" className="block text-medium-gray mb-1 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="mobile" className="block text-medium-gray mb-1 font-medium">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
                    placeholder="Enter your mobile number"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-medium-gray mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-colors duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#3A5A40] hover:bg-[#D2A97F] hover:text-[#3A5A40]'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Get My Discount'}
                </button>
              </form>
            </div>
          ) : (
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#D2A97F]/10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-[#3A5A40] mb-2">Congratulations!</h3>
              <p className="text-medium-gray mb-4">
                You have received a discount code. Use it on any package.
              </p>
              
              <div className="mb-6">
                <p className="text-medium-gray mb-2">Your discount code:</p>
                <div className="inline-block bg-[#3A5A40] text-[#D2A97F] px-4 py-2 rounded-lg font-bold">
                  {couponCode}
                </div>
              </div>
              
              <p className="text-medium-gray text-sm mb-6">
                Valid for 90 days. Use this code during checkout.
              </p>
              
              <button
                onClick={handleClose}
                className="w-full py-3 px-4 bg-[#D2A97F] text-[#3A5A40] rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscountPopup;