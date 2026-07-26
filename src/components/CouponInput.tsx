'use client';

import { useState } from 'react';

interface CouponInputProps {
  onApply: (isValid: boolean, discount?: number) => void;
}

const CouponInput = ({ onApply }: CouponInputProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [error, setError] = useState('');

  const validateCoupon = async () => {
    if (!couponCode.trim()) {
      setError('Please enter a coupon code');
      onApply(false);
      return;
    }

    try {
      // In a real application, this would be an API call to validate the coupon
      const response = await fetch('/api/coupon-validation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: couponCode }),
      });

      const data = await response.json();

      if (data.valid) {
        setError('');
        onApply(true, data.discount);
      } else {
        setError(data.message || 'Invalid coupon code');
        onApply(false);
      }
    } catch (err) {
      setError('Failed to validate coupon');
      onApply(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateCoupon();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
        className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gold text-dark-maroon rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
      >
        Apply
      </button>
    </form>
  );
};

export default CouponInput;