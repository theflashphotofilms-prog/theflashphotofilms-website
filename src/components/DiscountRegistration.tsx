import { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function DiscountRegistration() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(true);

  // Check localStorage on mount to see if user has already registered
  useEffect(() => {
    const hasRegistered = localStorage.getItem('discountRegistrationCompleted');
    if (hasRegistered === 'true') {
      setShowForm(false);
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/discount-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.success === true) {
          // Successful registration
          setIsSubmitted(true);
          setShowForm(false);
          // Store in localStorage to prevent re-registration
          localStorage.setItem('discountRegistrationCompleted', 'true');
        } else if (result.duplicate === true) {
          // Duplicate registration detected
          setErrorMessage(result.message || 'You have already registered with us using this email address or phone number.');
          setIsSubmitted(true);
          setShowForm(false);
          // Still store in localStorage to prevent re-registration
          localStorage.setItem('discountRegistrationCompleted', 'true');
        } else {
          // Other success response but not what we expect
          setErrorMessage('Registration successful!');
          setIsSubmitted(true);
          setShowForm(false);
          localStorage.setItem('discountRegistrationCompleted', 'true');
        }
      } else {
        // Handle different error statuses
        if (response.status === 400) {
          setErrorMessage(result.error || 'Invalid input data');
        } else if (response.status === 409) {
          // Conflict - duplicate registration
          setErrorMessage(result.error || 'You have already registered with us using this email address or phone number.');
          setIsSubmitted(true);
          setShowForm(false);
          localStorage.setItem('discountRegistrationCompleted', 'true');
        } else {
          setErrorMessage(result.error || 'An error occurred during registration');
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    setErrorMessage('');
    setIsSubmitted(false);
    setShowForm(true);
    // Remove the localStorage flag to allow re-registration
    localStorage.removeItem('discountRegistrationCompleted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green via-dark-olive to-deep-forest flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-ivory rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-forest-green to-dark-olive p-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-ivory mb-2">Register Today</h2>
          <p className="text-soft-gold font-medium">Get 10% Off Your First Online Booking</p>
        </div>
        
        {showForm ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {errorMessage && (
              <div className={`p-3 rounded-lg text-center ${
                errorMessage.includes('already registered') 
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {errorMessage}
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-forest-green mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-soft-gold focus:ring-soft-gold/20'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forest-green mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-soft-gold focus:ring-soft-gold/20'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-forest-green mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.phone 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-soft-gold focus:ring-soft-gold/20'
                }`}
                placeholder="Enter your phone number (10 digits)"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-forest-green to-dark-olive hover:from-soft-gold hover:to-amber-600 text-ivory font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Register Now'
              )}
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By registering, you agree to our terms and privacy policy. 
              You may receive promotional communications.
            </p>
          </form>
        ) : (
          <div className="p-8 text-center">
            {errorMessage.includes('already registered') ? (
              <div>
                <div className="mx-auto bg-yellow-100 text-yellow-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-green mb-2">Already Registered</h3>
                <p className="text-gray-700 mb-6">
                  You have already registered with us.
                </p>
              </div>
            ) : (
              <div>
                <div className="mx-auto bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-green mb-2">Registration Successful</h3>
                <p className="text-gray-700 mb-6">
                  Thank you for registering.<br />
                  You may be eligible for a 10% discount on your first online booking within 30 days of registration. Eligibility will be verified using your registered email address and phone number.
                </p>
              </div>
            )}
            
            <button
              onClick={resetForm}
              className="text-soft-gold hover:text-forest-green underline text-sm"
            >
              Use Different Email / Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}