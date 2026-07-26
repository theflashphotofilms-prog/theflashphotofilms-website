'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaCheck } from 'react-icons/fa';

const FeedbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    rating: 0,
    feedback: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const serviceTypes = [
    'Wedding Photography',
    'Wedding Videography',
    'Pre-Wedding Shoot',
    'Engagement Shoot',
    'Event Coverage',
    'Portrait Session',
    'Commercial Photography',
    'Other'
  ];

  const validateField = (name: string, value: string | number) => {
    switch (name) {
      case 'name':
        return value ? '' : 'Full Name is required';
      case 'phone':
        return value && /^\d{10}$/.test(value.toString()) ? '' : 'Valid 10-digit phone number is required';
      case 'serviceType':
        return value ? '' : 'Service Type is required';
      case 'rating':
        return (typeof value === 'number' && value > 0) ? '' : 'Rating is required';
      case 'feedback':
        return value ? '' : 'Your Feedback is required';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));

    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, formData[name as keyof typeof formData])
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, formData[name as keyof typeof formData])
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const value = formData[key as keyof typeof formData];
      newErrors[key] = validateField(key, value);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every(error => error === '')) {
      // Submit form
      try {
        const response = await fetch('/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          // Reset form after submission
          setFormData({
            name: '',
            phone: '',
            serviceType: '',
            rating: 0,
            feedback: ''
          });
        } else {
          console.error('Error submitting feedback');
        }
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gold/10">
          <FaCheck className="h-10 w-10 text-gold" />
        </div>
        <h3 className="text-2xl font-bold text-dark-maroon mt-4">Thank You!</h3>
        <p className="mt-2 text-medium-gray">
          Your feedback has been received. We appreciate your valuable input.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gold/10">
        <FaStar className="h-10 w-10 text-gold" />
      </div>
      <h3 className="text-2xl font-bold text-dark-maroon mt-4">Share Your Experience</h3>
      <p className="mt-2 text-medium-gray">
        Help us improve our services by sharing your feedback
      </p>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="name" className="block text-medium-gray mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-medium-gray mb-2">
            Mobile Number <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your 10-digit mobile number"
          />
          {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
        </div>
        
        <div>
          <label htmlFor="serviceType" className="block text-medium-gray mb-2">
            Service Type <span className="text-gold">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.serviceType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service type</option>
            {serviceTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.serviceType && <p className="mt-1 text-red-500 text-sm">{errors.serviceType}</p>}
        </div>
        
        <div>
          <label className="block text-medium-gray mb-2">
            Rating <span className="text-gold">*</span>
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({...formData, rating: star})}
                className={`text-3xl focus:outline-none ${
                  star <= formData.rating ? 'text-gold' : 'text-gray-300'
                }`}
                aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
              >
                <FaStar />
              </button>
            ))}
          </div>
          {errors.rating && <p className="mt-1 text-red-500 text-sm">{errors.rating}</p>}
        </div>
        
        <div>
          <label htmlFor="feedback" className="block text-medium-gray mb-2">
            Your Feedback <span className="text-gold">*</span>
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            onBlur={handleBlur}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.feedback ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Share your experience with our services..."
          ></textarea>
          {errors.feedback && <p className="mt-1 text-red-500 text-sm">{errors.feedback}</p>}
        </div>
        
        <button
          type="submit"
          className={`w-full py-3 px-4 rounded-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            formData.rating > 0
              ? 'bg-dark-maroon hover:bg-gold hover:text-dark-maroon focus:ring-gold'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={formData.rating === 0}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;