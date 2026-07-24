'use client';

import { useState } from 'react';
import { feedbackService, NewFeedback } from '@/lib/feedbackService';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    serviceType: 'Wedding Photography',
    rating: 5,
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean | null; message: string }>({ 
    success: null, 
    message: '' 
  });

  const serviceTypes = [
    'Wedding Photography',
    'Pre Wedding Photography',
    'Engagement Photography',
    'Corporate Event Photography',
    'Birthday Photography',
    'Baby Shoot',
    'Maternity Shoot',
    'Fashion Photography',
    'Product Photography',
    'Drone Photography',
    'Event Photography'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value, 10) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    const newFeedback: NewFeedback = {
      name: formData.name,
      mobile: formData.mobile,
      serviceType: formData.serviceType,
      rating: formData.rating,
      feedback: formData.feedback
    };

    const result = await feedbackService.submitFeedback(newFeedback);
    setSubmitStatus({ success: result.success, message: result.message });
    
    if (result.success) {
      // Reset form on success
      setFormData({
        name: '',
        mobile: '',
        serviceType: 'Wedding Photography',
        rating: 5,
        feedback: ''
      });
    }
    
    setIsSubmitting(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setFormData(prev => ({ ...prev, rating: index + 1 }))}
        className={`text-2xl ${index < rating ? 'text-gold' : 'text-gray-300'} focus:outline-none`}
        aria-label={`Rate ${index + 1} star${index === 0 ? '' : 's'}`}
      >
        ★
      </button>
    ));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-dark-maroon mb-6">Share Your Experience</h3>
      
      {submitStatus.success === true ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg mb-6">
          {submitStatus.message}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-medium-gray mb-2 font-medium">
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="mobile" className="block text-medium-gray mb-2 font-medium">
                Mobile Number <span className="text-gold">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="serviceType" className="block text-medium-gray mb-2 font-medium">
              Service Type <span className="text-gold">*</span>
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
            >
              {serviceTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-medium-gray mb-2 font-medium">
              Rating <span className="text-gold">*</span>
            </label>
            <div className="flex items-center">
              {renderStars(formData.rating)}
              <span className="ml-2 text-medium-gray">{formData.rating} out of 5</span>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="feedback" className="block text-medium-gray mb-2 font-medium">
              Your Feedback <span className="text-gold">*</span>
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
              placeholder="Share your experience with our services..."
            ></textarea>
          </div>
          
          {submitStatus.success === false && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
              {submitStatus.message}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-4 rounded-xl font-bold text-white transition-colors duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-dark-maroon hover:bg-gold hover:text-dark-maroon'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;