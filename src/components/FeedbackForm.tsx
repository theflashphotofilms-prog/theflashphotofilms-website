'use client';

import { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    serviceType: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number';
    }
    
    if (!formData.serviceType.trim()) {
      newErrors.serviceType = 'Service type is required';
    }
    
    if (rating === 0) {
      newErrors.rating = 'Please select a rating';
    }
    
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        serviceType: '',
        feedback: ''
      });
      setRating(0);
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#D2A97F]/10">
          <svg className="h-10 w-10 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#D2A97F] mt-4">Thank You!</h3>
        <p className="mt-2 text-medium-gray">
          Your feedback has been received. We appreciate your input!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-[#D2A97F] mb-6">Share Your Experience</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-medium-gray mb-1">
            Full Name <span className="text-[#D2A97F]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="mobile" className="block text-medium-gray mb-1">
            Mobile Number <span className="text-[#D2A97F]">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="mt-1 text-red-600 text-sm">{errors.mobile}</p>}
        </div>
        
        <div>
          <label htmlFor="serviceType" className="block text-medium-gray mb-1">
            Service Type <span className="text-[#D2A97F]">*</span>
          </label>
          <input
            type="text"
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
            placeholder="Which service did you use?"
          />
          {errors.serviceType && <p className="mt-1 text-red-600 text-sm">{errors.serviceType}</p>}
        </div>
        
        <div>
          <label className="block text-medium-gray mb-1">
            Rating <span className="text-[#D2A97F]">*</span>
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-3xl focus:outline-none ${star <= rating ? 'text-[#D2A97F]' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
          {errors.rating && <p className="mt-1 text-red-600 text-sm">{errors.rating}</p>}
        </div>
        
        <div>
          <label htmlFor="feedback" className="block text-medium-gray mb-1">
            Your Feedback <span className="text-[#D2A97F]">*</span>
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
            placeholder="Share your experience with our services..."
          ></textarea>
          {errors.feedback && <p className="mt-1 text-red-600 text-sm">{errors.feedback}</p>}
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
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;