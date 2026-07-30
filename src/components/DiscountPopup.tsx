'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaTimes, FaInfoCircle, FaCheck, FaLock } from 'react-icons/fa';

const DiscountPopup = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [couponCode, setCouponCode] = useState('');

  // Check if user has already registered when component mounts
  useEffect(() => {
    // Check if user has already registered via localStorage flag
    const hasRegistered = localStorage.getItem('discountRegistrationCompleted');
    if (!hasRegistered) {
      // Show the modal immediately for new users
      setIsVisible(true);
    } else {
      // Hide the modal if user has already registered
      setIsVisible(false);
    }
  }, []);

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
      // Prepare data for discount registration API
      const formData = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim()
      };

      // Send data to discount registration API (which handles Google Sheets and emails)
      const response = await fetch('/api/discount-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit data');
      }

      const result = await response.json();
      setCouponCode(result.couponCode);

      // Success
      setIsSubmitted(true);
      
      // Store registration completion in localStorage to prevent showing the modal again
      localStorage.setItem('discountRegistrationCompleted', 'true');

      // Close the modal after showing the success message for a brief moment
      setTimeout(() => {
        setIsVisible(false);
        // Redirect user back to the website
        router.push('/');
      }, 2000); // Show success message for 2 seconds before closing
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <div className="p-6">
            <div className="flex justify-center items-center mb-4">
              <div className="mr-3 text-gold">
                <FaLock size={20} />
              </div>
              <h2 className="text-2xl font-bold text-dark-maroon text-center flex-1">Unlock Your 10% Wedding Privilege</h2>
            </div>
            
            <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-lg">
              <div className="flex items-start">
                <FaInfoCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                <p className="text-medium-gray text-sm">
                  Unlock your exclusive 10% discount on wedding photography. Register to continue.
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
              
              <div className="mb-4 text-center text-sm text-medium-gray">
                <p>By registering, you agree to receive updates and exclusive offers.</p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-dark-maroon text-white rounded-md font-medium hover:bg-gold hover:text-dark-maroon transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Get My FLASH10 Coupon'}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gold/10 mb-4">
              <FaCheck className="h-10 w-10 text-gold" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-dark-maroon">Welcome to The Flash Photofilms!</h3>
            <p className="mt-2 text-medium-gray">
              Thank you for joining our exclusive community. Here is your exclusive discount code:
            </p>
            <p className="text-lg font-bold text-dark-maroon mt-4">Your Exclusive Coupon Code:</p>
            <p className="text-2xl font-bold text-gold mt-2">{couponCode}</p>
            <p className="mt-4 text-medium-gray text-sm">
              Enjoy 10% off any wedding package. Valid for 3 months from registration.
            </p>
            <div className="mt-6 text-left bg-forest-green/10 rounded-lg p-4 text-sm text-medium-gray">
              <h4 className="font-bold text-forest-green mb-2">How to use your discount:</h4>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Save this coupon code</li>
                <li>Navigate to our booking page</li>
                <li>Enter this code during checkout</li>
                <li>Enjoy your 10% discount</li>
              </ol>
            </div>
            <p className="mt-4 text-medium-gray text-sm italic">
              This discount is exclusive to registered members only.
            </p>
            <p className="mt-4 text-medium-gray text-sm">
              Closing in 2 seconds...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountPopup;