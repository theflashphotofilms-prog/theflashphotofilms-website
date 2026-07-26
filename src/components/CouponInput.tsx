'use client';

import { useState } from 'react';

interface CouponInputProps {
  onApply: (discountPercentage: number) => void;
  originalPrice: string;
}

const CouponInput = ({ onApply, originalPrice }: CouponInputProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleVerify = async () => {
    if (!couponCode.trim()) {
      setError('Please enter a coupon code');
      return;
    }

    setIsVerifying(true);
    setError('');
    setIsValid(false);
    setSuccessMessage('');

    try {
      const response = await fetch('/api/coupon-validation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          couponCode,
          action: 'validate'
        }),
      });

      const result = await response.json();

      if (response.ok && result.valid) {
        setIsValid(true);
        setError('');
        setSuccessMessage(`Valid coupon! You'll get ${result.discount}% off at checkout.`);
        setDiscountApplied(true);
        onApply(result.discount); // Apply the discount percentage for display purposes
      } else {
        setError(result.error || 'Invalid coupon code');
        setIsValid(false);
        setDiscountApplied(false);
        setSuccessMessage('');
      }
    } catch (err) {
      setError('An error occurred while verifying the coupon');
      console.error('Error verifying coupon:', err);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleApplyAnother = () => {
    setCouponCode('');
    setError('');
    setIsValid(false);
    setDiscountApplied(false);
    setSuccessMessage('');
    onApply(0); // Reset discount
  };

  return (
    <div className="mt-6 p-4 border border-gray-200 rounded-xl bg-light-gray">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
          placeholder="Enter coupon code"
          className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A97F] focus:border-[#3A5A40] focus:outline-none transition-colors"
          disabled={discountApplied}
        />
        {discountApplied ? (
          <button
            type="button"
            onClick={handleApplyAnother}
            className="px-6 py-3 bg-[#D2A97F] text-[#3A5A40] rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
          >
            Remove
          </button>
        ) : (
          <button
            type="button"
            onClick={handleVerify}
            disabled={isVerifying}
            className={`px-6 py-3 rounded-xl font-bold text-white transition-colors ${
              isVerifying 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#3A5A40] hover:bg-[#D2A97F] hover:text-[#3A5A40]'
            }`}
          >
            {isVerifying ? 'Verifying...' : 'Apply'}
          </button>
        )}
      </div>
      
      {error && (
        <div className="mt-2 text-red-600 text-sm">
          {error}
        </div>
      )}
      
      {successMessage && (
        <div className="mt-2 text-green-600 text-sm">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default CouponInput;