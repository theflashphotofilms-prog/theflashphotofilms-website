'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-forest-green py-16 flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-ivory sm:text-5xl mb-6">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-soft-gold max-w-2xl mx-auto mb-10">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-forest-green transition-colors"
          >
            Go Back Home
          </Link>
          <Link
            href="/booking"
            className="inline-block bg-transparent border-2 border-soft-gold text-soft-gold px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}