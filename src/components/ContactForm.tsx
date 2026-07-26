'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  weddingDate: string;
  message: string;
  consent: boolean;
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Wedding Photography",
    "Wedding Videography",
    "Pre-Wedding Shoot",
    "Engagement Shoot",
    "Event Coverage",
    "Portrait Session",
    "Commercial Photography",
    "Other"
  ];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Send data to Google Sheets via API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset(); // Reset form after successful submission
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gold/10">
            <FaCheck className="h-10 w-10 text-gold" />
          </div>
          <h3 className="text-2xl font-bold text-dark-maroon mt-4">Thank You!</h3>
          <p className="mt-2 text-medium-gray">
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-dark-maroon mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-medium-gray mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', { required: 'Full Name is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="mt-1 text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-medium-gray mb-2">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-medium-gray mb-2">
            Phone Number <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Please enter a valid 10-digit phone number'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your 10-digit phone number"
          />
          {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-medium-gray mb-2">
            Service Interested In <span className="text-gold">*</span>
          </label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="weddingDate" className="block text-medium-gray mb-2">
            Wedding Date <span className="text-gold">*</span>
          </label>
          <input
            type="date"
            id="weddingDate"
            {...register('weddingDate', { required: 'Wedding date is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors ${
              errors.weddingDate ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.weddingDate && <p className="mt-1 text-red-500 text-sm">{errors.weddingDate.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-medium-gray mb-2">
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
            placeholder="Tell us more about your event and requirements..."
          ></textarea>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              {...register('consent', { required: 'You must consent to receive communications' })}
              type="checkbox"
              className="focus:ring-gold h-4 w-4 text-dark-maroon border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="font-medium text-medium-gray">
              I agree to receive communications about products, services, and offers via phone/email
            </label>
            {errors.consent && <p className="mt-1 text-red-500 text-sm">{errors.consent.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-dark-maroon hover:bg-gold hover:text-dark-maroon focus:ring-gold'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;