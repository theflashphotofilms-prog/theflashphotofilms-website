'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  package: string;
  couponCode: string;
  notes: string;
  consent: boolean;
}

const BookingForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [couponValid, setCouponValid] = useState<boolean | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number | null>(null);
  const [validationMessage, setValidationMessage] = useState('');
  const [finalPrice, setFinalPrice] = useState<number | null>(null);

  const watchedEventType = watch('eventType');
  const watchedPackage = watch('package');
  const watchedCouponCode = watch('couponCode');

  // Define packages by category
  const packagesByCategory: Record<string, Array<{name: string, price: number}>> = {
    "Wedding": [
      { name: "Silver Collection", price: 45500 },
      { name: "Gold Collection", price: 65000 },
      { name: "Premium Collection", price: 110000 },
      { name: "Luxury Collection", price: 165000 }
    ],
    "Pre Wedding": [
      { name: "Silver Pre Wedding Collection", price: 22000 },
      { name: "Gold Pre Wedding Collection", price: 45500 }
    ],
    "Engagement / Baby Shower": [
      { name: "Silver Collection", price: 8000 },
      { name: "Gold Collection", price: 16500 },
      { name: "Premium Collection", price: 24500 },
      { name: "Luxury Collection", price: 45500 }
    ],
    "Corporate Event": [
      { name: "Corporate Starter", price: 6999 },
      { name: "Corporate Professional", price: 14999 },
      { name: "Corporate Premium", price: 24999 },
      { name: "Corporate Elite", price: 39999 }
    ],
    "Other Events": [
      { name: "Event Starter", price: 6999 },
      { name: "Event Silver", price: 11999 },
      { name: "Event Gold", price: 19999 },
      { name: "Event Premium", price: 29999 }
    ]
  };

  // Get current packages based on selected event type
  const currentPackages = packagesByCategory[watchedEventType] || [];

  // Find the currently selected package to get its price
  const selectedPackage = currentPackages.find(
    pkg => pkg.name === watchedPackage
  );

  const currentPrice = selectedPackage?.price || 0;

  // Validate coupon code when user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (watchedCouponCode && watchedCouponCode.length > 0) {
        validateCoupon(watchedCouponCode);
      } else {
        setCouponValid(null);
        setDiscountAmount(null);
        setValidationMessage('');
        setFinalPrice(currentPrice || null);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [watchedCouponCode, watchedPackage, currentPrice]);

  const validateCoupon = async (code: string) => {
    try {
      const response = await fetch('/api/coupon-validation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ couponCode: code, action: 'validate' }),
      });

      const data = await response.json();

      if (data.valid) {
        setCouponValid(true);
        setValidationMessage(`✓ FLASH10 Coupon Applied - 10% Discount Unlocked`);
        
        const originalPrice = currentPrice || 0;
        const discount = originalPrice * (data.discount / 100);
        setDiscountAmount(discount);
        setFinalPrice(originalPrice - discount);
      } else {
        setCouponValid(false);
        setValidationMessage(data.error || 'Invalid or expired coupon code');
        setDiscountAmount(null);
        setFinalPrice(currentPrice || null);
      }
    } catch (error) {
      console.error('Error validating coupon:', error);
      setCouponValid(false);
      setValidationMessage('Error validating coupon. Please try again.');
      setDiscountAmount(null);
      setFinalPrice(currentPrice || null);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Find the selected package to get its price for booking data
      const selectedPackageForSubmission = packagesByCategory[data.eventType]?.find(
        pkg => pkg.name === data.package
      );
      
      // Prepare booking data with price info
      const bookingData = {
        ...data,
        originalPrice: selectedPackageForSubmission?.price || 0,
        discountApplied: discountAmount,
        finalPrice: finalPrice,
        couponValid: couponValid,
      };

      // Send data to booking API
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset(); // Reset form after successful submission
        
        // Redirect to thank you page after a short delay
        setTimeout(() => {
          router.push('/thank-you');
        }, 1500);
      } else {
        const errorData = await response.json();
        console.error('Error submitting booking:', errorData.error);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-soft-gold/10">
            <FaCheck className="h-10 w-10 text-soft-gold" />
          </div>
          <h3 className="text-2xl font-bold text-forest-green mt-4">Thank You for Your Booking Request!</h3>
          <p className="mt-2 text-medium-gray">
            Our team will contact you on WhatsApp shortly to confirm availability and complete your booking.
          </p>
        </div>
      </div>
    );
  }

  const originalPrice = currentPrice || 0;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-forest-green mb-6">Book Your Event</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-medium-gray mb-2">
              Full Name <span className="text-soft-gold">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              {...register('fullName', { required: 'Full Name is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black placeholder:text-gray-500 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="mt-1 text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-medium-gray mb-2">
              Email Address <span className="text-soft-gold">*</span>
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black placeholder:text-gray-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-medium-gray mb-2">
              Phone Number <span className="text-soft-gold">*</span>
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black placeholder:text-gray-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your 10-digit phone number"
            />
            {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="eventType" className="block text-medium-gray mb-2">
              Event Category <span className="text-soft-gold">*</span>
            </label>
            <select
              id="eventType"
              {...register('eventType', { required: 'Please select an event category' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black ${
                errors.eventType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select an event category</option>
              <option value="Wedding">Wedding</option>
              <option value="Pre Wedding">Pre Wedding</option>
              <option value="Engagement / Baby Shower">Engagement / Baby Shower</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Other Events">Other Events</option>
            </select>
            {errors.eventType && <p className="mt-1 text-red-500 text-sm">{errors.eventType.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="eventDate" className="block text-medium-gray mb-2">
              Event Date <span className="text-soft-gold">*</span>
            </label>
            <input
              type="date"
              id="eventDate"
              {...register('eventDate', { required: 'Event date is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black ${
                errors.eventDate ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.eventDate && <p className="mt-1 text-red-500 text-sm">{errors.eventDate.message}</p>}
          </div>

          <div>
            <label htmlFor="package" className="block text-medium-gray mb-2">
              Package <span className="text-soft-gold">*</span>
            </label>
            <select
              id="package"
              {...register('package', { required: 'Please select a package' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black ${
                errors.package ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a package</option>
              {currentPackages.map((pkg, index) => (
                <option key={index} value={pkg.name} className="text-black">
                  {pkg.name} — ₹{pkg.price.toLocaleString()}
                </option>
              ))}
            </select>
            {errors.package && <p className="mt-1 text-red-500 text-sm">{errors.package.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="couponCode" className="block text-medium-gray mb-2">
            Coupon Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="couponCode"
              {...register('couponCode')}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black placeholder:text-gray-500"
              placeholder="Enter FLASH10-XXXX"
            />
            {couponValid !== null && (
              <div className={`flex items-center px-3 rounded-lg ${
                couponValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {couponValid ? <FaCheck className="mr-1" /> : <FaTimes className="mr-1" />}
                {couponValid ? 'Valid' : 'Invalid'}
              </div>
            )}
          </div>
          {validationMessage && (
            <p className={`mt-1 text-sm ${
              couponValid ? 'text-green-600' : 'text-red-500'
            }`}>
              {validationMessage}
            </p>
          )}
          
          {(originalPrice > 0 || finalPrice !== null) && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between">
                <span>Original Price:</span>
                <span className="font-medium">₹{originalPrice.toLocaleString()}</span>
              </div>
              {discountAmount && discountAmount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span>-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}
              {finalPrice !== null && (
                <div className="flex justify-between font-bold mt-1 pt-1 border-t border-gray-200">
                  <span>Final Price:</span>
                  <span>₹{finalPrice.toLocaleString()}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="notes" className="block text-medium-gray mb-2">
            Special Requests / Notes
          </label>
          <textarea
            id="notes"
            {...register('notes')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-gold focus:border-forest-green focus:outline-none transition-colors bg-white text-black placeholder:text-gray-500"
            placeholder="Tell us more about your event and special requirements..."
          ></textarea>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              {...register('consent', { required: 'You must consent to receive communications' })}
              type="checkbox"
              className="focus:ring-soft-gold h-4 w-4 text-forest-green border-gray-300 rounded bg-white"
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
              : 'bg-forest-green hover:bg-soft-gold hover:text-forest-green focus:ring-soft-gold'
          }`}
        >
          {isSubmitting ? 'Processing Booking...' : 'Request Booking'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;