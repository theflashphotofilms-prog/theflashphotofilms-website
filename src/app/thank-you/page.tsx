import type { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import SEO from '../../components/SEO';

export const metadata: Metadata = {
  title: 'Thank You | The Flash Photofilms',
  description: 'Thank you for contacting The Flash Photofilms. We appreciate your interest in our photography services.',
  openGraph: {
    title: 'Thank You | The Flash Photofilms',
    description: 'Thank you for contacting The Flash Photofilms. We appreciate your interest in our photography services.',
    type: 'website',
    url: 'https://www.theflashphotofilms.com/thank-you',
  },
  alternates: {
    canonical: 'https://www.theflashphotofilms.com/thank-you',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-ivory text-forest-green">
      <SEO 
        title="Thank You | The Flash Photofilms" 
        description="Thank you for contacting The Flash Photofilms. We appreciate your interest in our photography services."
        url="https://www.theflashphotofilms.com/thank-you"
      />
      
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-ivory mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            We appreciate your interest in The Flash Photofilms
          </p>
        </div>
      </div>

      {/* Success Message */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-xl shadow-lg border border-forest-green/20 inline-block">
            <div className="text-soft-gold mb-6">
              <FaCheck className="h-12 w-12 text-soft-gold mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-forest-green mb-4">
              Your Message Has Been Sent!
            </h2>
            <p className="text-medium-gray text-lg mb-8">
              Thank you for reaching out to us. We have received your message and will get back to you soon.
            </p>
            <p className="text-medium-gray text-lg mb-10">
              If you have any urgent inquiries, feel free to contact us directly at{' '}
              <a href="tel:+917984941331" className="text-soft-gold hover:underline">
                +91 7984941331
              </a>{' '}
              or email us at{' '}
              <a href="mailto:theflashphotofilms@gmail.com" className="text-soft-gold hover:underline">
                theflashphotofilms@gmail.com
              </a>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/" 
                className="inline-block bg-forest-green text-ivory px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors"
              >
                Back to Home
              </Link>
              <Link 
                href="/booking" 
                className="inline-block bg-transparent border-2 border-forest-green text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-forest-green hover:text-ivory transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-forest-green text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-6">
            While You Wait...
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Explore our portfolio and discover why we're trusted for capturing life's precious moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/portfolio" 
              className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors"
            >
              View Portfolio
            </Link>
            <Link 
              href="/packages" 
              className="inline-block bg-transparent border-2 border-soft-gold text-soft-gold px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors"
            >
              See Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}