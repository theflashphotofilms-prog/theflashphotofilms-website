'use client';

import Link from 'next/link';
import Image from 'next/image';
import SEO from '@/components/SEO';
import DiscountPopup from '@/components/DiscountPopup';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="The Flash Photofilms - Professional Photography & Videography Services" 
        description="Premium wedding, event, and commercial photography & videography services by Mohit Panchal. Capturing memories with artistic excellence."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3A5A40] to-black text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Capturing Life's <span className="text-[#D2A97F]">Precious Moments</span>
            </h1>
            <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto mb-10">
              Premium wedding, event, and commercial photography & videography services by The Flash Photofilms
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
              >
                Book Now
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#D2A97F] mb-4">
                About The Flash Photofilms
              </h2>
              <p className="text-medium-gray mb-6 text-lg">
                Founded with a passion for storytelling through the lens, The Flash Photofilms has established itself as a premier photography and videography service provider in Gujarat. Led by Mohit Panchal, our team combines artistic vision with technical expertise to create timeless memories.
              </p>
              <p className="text-medium-gray mb-8 text-lg">
                We specialize in wedding, event, and commercial photography, offering personalized services tailored to each client's unique vision. Our approach blends traditional techniques with contemporary styles to deliver exceptional results.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder-home-hero.jpg"
                alt="The Flash Photofilms Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#D2A97F] mb-4">
              Our Photography Services
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Comprehensive photography and videography solutions for all your special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/packages" className="group">
              <div className="bg-light-gray rounded-2xl p-8 h-full border border-gray-200 hover:border-[#D2A97F] transition-colors duration-300">
                <div className="bg-[#D2A97F]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D2A97F] transition-colors duration-300">
                  <svg className="h-8 w-8 text-[#D2A97F] group-hover:text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#D2A97F] mb-3">Wedding Photography</h3>
                <p className="text-medium-gray mb-4">
                  Capture every moment of your special day with our premium wedding photography packages
                </p>
                <span className="text-[#D2A97F] font-medium inline-flex items-center">
                  Explore Packages
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/pre-wedding-packages" className="group">
              <div className="bg-light-gray rounded-2xl p-8 h-full border border-gray-200 hover:border-[#D2A97F] transition-colors duration-300">
                <div className="bg-[#D2A97F]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D2A97F] transition-colors duration-300">
                  <svg className="h-8 w-8 text-[#D2A97F] group-hover:text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#D2A97F] mb-3">Pre-Wedding Shoots</h3>
                <p className="text-medium-gray mb-4">
                  Beautiful pre-wedding photos that celebrate your love story
                </p>
                <span className="text-[#D2A97F] font-medium inline-flex items-center">
                  View Options
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/engagement-babyshower-packages" className="group">
              <div className="bg-light-gray rounded-2xl p-8 h-full border border-gray-200 hover:border-[#D2A97F] transition-colors duration-300">
                <div className="bg-[#D2A97F]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D2A97F] transition-colors duration-300">
                  <svg className="h-8 w-8 text-[#D2A97F] group-hover:text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#D2A97F] mb-3">Engagement & Baby Shower</h3>
                <p className="text-medium-gray mb-4">
                  Special moments deserve special memories - capture them with us
                </p>
                <span className="text-[#D2A97F] font-medium inline-flex items-center">
                  See Packages
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3A5A40] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Capture Your Story?
          </h2>
          <p className="text-xl text-medium-gray mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule your session
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/faq" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
            >
              Visit FAQ
            </Link>
          </div>
        </div>
      </section>
      
      {/* Discount Popup */}
      <DiscountPopup />
    </div>
  );
}