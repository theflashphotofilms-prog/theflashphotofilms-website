'use client';

import TermsAndConditions from '../../components/TermsAndConditions';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Important policies and guidelines for our photography and videography services
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <TermsAndConditions compact={false} />
    </div>
  );
}