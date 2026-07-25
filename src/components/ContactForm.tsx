'use client';

import { useState, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'wedding', // Changed from serviceType to service to match backend
    date: '',
    message: '',
    discountInterest: false, // New field to track interest in discount
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Function to determine if date field should be shown based on service type
  const showDateField = ['wedding', 'pre-wedding', 'post-wedding', 'engagement'].some(serviceType => 
    formData.service.toLowerCase().includes(serviceType)
  );

  // Validation function
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.service) {
      newErrors.service = 'Service is required';
    }

    // Only validate date if it's a wedding service
    if (showDateField && !formData.date) {
      newErrors.date = 'Date is required for this service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
          
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // If user is interested in discount, we'll handle it in a modal
      // For now, just show success message
      if (formData.discountInterest) {
        // We can add discount registration logic here later
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();

      if (response.ok) {
        // Redirect to thank you page after successful submission
        router.push('/thank-you');
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-medium-gray mb-2 font-medium">
          Email Address <span className="text-gold">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-medium-gray mb-2 font-medium">
          Phone Number <span className="text-gold">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="mt-1 text-red-600 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-medium-gray mb-2 font-medium">
          Service Interested In <span className="text-gold">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
            errors.service ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="wedding">Wedding Photography</option>
          <option value="pre-wedding">Pre-Wedding Shoot</option>
          <option value="post-wedding">Post-Wedding Shoot</option>
          <option value="engagement">Engagement Photography</option>
          <option value="portrait">Portrait Session</option>
          <option value="event">Event Coverage</option>
          <option value="commercial">Commercial Photography</option>
          <option value="video">Video Production</option>
          <option value="other">Other</option>
        </select>
        {errors.service && <p className="mt-1 text-red-600 text-sm">{errors.service}</p>}
      </div>

      {showDateField && (
        <div>
          <label htmlFor="date" className="block text-medium-gray mb-2 font-medium">
            Wedding Date <span className="text-gold">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && <p className="mt-1 text-red-600 text-sm">{errors.date}</p>}
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-medium-gray mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
          placeholder="Tell us about your project, requirements, and timeline&hellip;"
        ></textarea>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="discountInterest"
            name="discountInterest"
            type="checkbox"
            checked={formData.discountInterest}
            onChange={handleChange}
            className="focus:ring-gold h-4 w-4 text-dark-maroon border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="discountInterest" className="font-medium text-medium-gray">
            I&apos;m interested in learning about the launch discount offer
          </label>
        </div>
      </div>

      {submitError && (
        <div className="p-3 bg-red-50 text-red-700 rounded-lg">
          {submitError}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-4 rounded-xl font-bold text-white transition-colors duration-300 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-dark-maroon hover:bg-gold hover:text-dark-maroon'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;