'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import DiscountPopup from '../components/DiscountPopup';

export default function Home() {
  // Removed the state management for DiscountPopup since the component manages its own state
  // const [showDiscountPopup, setShowDiscountPopup] = useState(false);

  // Removed these functions since DiscountPopup manages its own state
  // const handleDiscountInterest = () => {
  //   setShowDiscountPopup(true);
  // };

  // const handleDiscountSuccess = () => {
  //   // Optionally show a notification or update UI after successful registration
  //   alert('Thank you for registering for the launch discount!');
  // };

  return (
    <div className="min-h-screen bg-forest-green">
      <SEO 
        title="The Flash Photofilms | Luxury Wedding Photography & Cinematic Films Gujarat" 
        description="Luxury wedding photography and cinematic films capturing timeless emotions across Ahmedabad, Surat, Vadodara and Gujarat."
        url="https://www.theflashphotofilms.com/"
      />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/images/hero/hero-bg.jpg')"}}>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-green/90 to-forest-green/95"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-up">
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ivory mb-6 tracking-tight flex items-center justify-center">
              <span className="mr-1">EVERY FRAME H</span>
              <span className="text-soft-gold text-5xl md:text-7xl lg:text-8xl">◉</span>
              <span className="ml-1">LDS A FEELING</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-light text-soft-gold mb-10 max-w-4xl mx-auto">
              Luxury wedding photography and cinematic films crafted for couples across Gujarat and India.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-pill font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-gold-glow"
              >
                Reserve Your Date
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-10 py-5 rounded-pill font-bold text-lg hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-soft-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-soft-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-32 bg-forest-green text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-green text-soft-gold px-4 py-1 rounded-full text-sm font-bold mb-6 border border-soft-gold">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-8">
              Preserving Moments That Become Family Heirlooms
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="luxury-card overflow-hidden rounded-xl">
              <Image 
                src="/images/about/about-section.jpg" 
                alt="About The Flash Photofilms" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="space-y-8">
              <p className="text-lg text-cream leading-relaxed">
                We believe every wedding is a once-in-a-lifetime story. Our vision is to preserve emotions, traditions, and moments that become treasured family memories for generations.
              </p>
              <p className="text-lg text-cream leading-relaxed">
                Founded with a passion for capturing life's most precious moments, The Flash Photofilms 
                has evolved into a premier luxury wedding photography and cinematic film studio. Our 
                journey began with a simple belief: every wedding has a unique story worth telling.
              </p>
              <p className="text-lg text-cream leading-relaxed">
                With over a decade of experience across Gujarat and India, we've perfected our craft 
                in luxury wedding photography and cinematic storytelling. Our approach focuses on 
                capturing the raw emotions, stolen glances, and fleeting moments that make your 
                love story uniquely yours.
              </p>
              <Link 
                href="/about"
                className="inline-block btn-primary bg-soft-gold text-forest-green px-8 py-4 rounded-pill font-medium mt-4"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Experience Section */}
      <section className="py-32 bg-ivory text-forest-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green mb-6">
              Wedding Experience
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Comprehensive luxury wedding services tailored to your celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Wedding Photography",
                description: "Artistic documentation of your special day with cinematic techniques and emotional storytelling.",
                image: "/images/services/wedding-photography.jpg"
              },
              {
                title: "Cinematic Wedding Films",
                description: "Immersive films that capture the atmosphere and emotions of your celebration.",
                image: "/images/services/cinematic-films.jpg"
              },
              {
                title: "Pre Wedding Films",
                description: "Romantic pre-wedding films that tell your love story before the big day.",
                image: "/images/services/pre-wedding.jpg"
              },
              {
                title: "Destination Weddings",
                description: "Expert coverage of your destination wedding with global experience.",
                image: "/images/services/destination-weddings.jpg"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden mb-6">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover slow-zoom"
                    priority={index === 0} // Prioritize first image
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-green mb-4">{service.title}</h3>
                <p className="text-medium-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-forest-green text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
            <p className="text-xl text-cream max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in luxury wedding cinematography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Cinematic Storytelling",
                description: "We craft compelling narratives that go beyond simple documentation to create immersive, movie-like experiences.",
                icon: (
                  <svg className="w-12 h-12 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Luxury Experience",
                description: "From consultation to delivery, we provide a premium service experience worthy of your special day.",
                icon: (
                  <svg className="w-12 h-12 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Creative Direction",
                description: "Our team brings artistic vision and professional guidance to ensure every shot is perfect.",
                icon: (
                  <svg className="w-12 h-12 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              {
                title: "Timeless Memories",
                description: "We create heirloom-quality content that will be treasured by your family for generations.",
                icon: (
                  <svg className="w-12 h-12 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.664L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="luxury-card p-10 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30"
              >
                <div className="flex justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-ivory mb-6">{feature.title}</h3>
                <p className="text-cream">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-ivory text-forest-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green mb-6">
              Trusted By Couples Across Gujarat
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="p-10">
              <div className="text-6xl font-bold text-soft-gold mb-4">500+</div>
              <div className="text-2xl text-forest-green">Weddings Captured</div>
            </div>
            <div className="p-10">
              <div className="text-6xl font-bold text-soft-gold mb-4">8+</div>
              <div className="text-2xl text-forest-green">Years Experience</div>
            </div>
            <div className="p-10">
              <div className="text-6xl font-bold text-soft-gold mb-4">Premium</div>
              <div className="text-2xl text-forest-green">Albums Delivered</div>
            </div>
            <div className="p-10">
              <div className="text-6xl font-bold text-soft-gold mb-4">Cinematic</div>
              <div className="text-2xl text-forest-green">Films Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-32 bg-forest-green text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
              Featured Stories
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
            <p className="text-xl text-cream max-w-2xl mx-auto">
              Discover our collection of cinematic wedding stories from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { id: 1, title: "Royal Wedding Celebration", subtitle: "Cinematic Wedding Film", caption: "Destination Memories", image: "/images/portfolio/portfolio-1.jpg" },
              { id: 2, title: "Traditional Ceremony", subtitle: "Luxury Photography", caption: "Heritage Moments", image: "/images/portfolio/portfolio-2.jpg" },
              { id: 3, title: "Destination Wedding", subtitle: "Cinematic Film", caption: "Exotic Celebrations", image: "/images/portfolio/portfolio-3.jpg" },
              { id: 4, title: "Modern Celebration", subtitle: "Editorial Style", caption: "Contemporary Love", image: "/images/portfolio/portfolio-4.jpg" },
              { id: 5, title: "Pre-Wedding Shoot", subtitle: "Romantic Moments", caption: "Before The Vows", image: "/images/portfolio/portfolio-5.jpg" },
              { id: 6, title: "Engagement Session", subtitle: "New Beginnings", caption: "Love Stories", image: "/images/portfolio/portfolio-6.jpg" },
            ].map((item) => (
              <div key={item.id} className="luxury-card group overflow-hidden rounded-xl">
                <div className="relative h-96 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover slow-zoom"
                    priority={item.id <= 3} // Prioritize first 3 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-serif font-bold text-ivory mb-2">{item.title}</h3>
                    <p className="text-xl text-soft-gold mb-2">{item.subtitle}</p>
                    <p className="text-lg text-cream">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link 
              href="/portfolio"
              className="inline-block btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-pill font-bold text-lg"
            >
              View Complete Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 bg-ivory text-forest-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green mb-6">
              Wedding Collections
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Curated packages designed to capture every moment of your special day
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                id: 1, 
                name: "Signature Collection", 
                price: "₹1,20,000", 
                description: "Perfect for intimate ceremonies", 
                features: ["6 hours coverage", "Cinematic highlight reel", "100 edited photos", "Online gallery"]
              },
              { 
                id: 2, 
                name: "Royal Collection", 
                price: "₹2,50,000", 
                description: "Our most popular choice", 
                features: ["12 hours coverage", "Full cinematic film", "300 edited photos", "Drone footage", "Same-day edit"]
              },
              { 
                id: 3, 
                name: "Legacy Collection", 
                price: "₹4,50,000", 
                description: "Ultimate luxury experience", 
                features: ["Unlimited coverage", "Multiple camera angles", "500+ edited photos", "4K cinematic film", "Drone & underwater", "Physical album"],
                popular: true
              },
            ].map((pkg) => (
              <div 
                key={pkg.id} 
                className={`luxury-card p-10 rounded-xl relative overflow-hidden border-2 ${pkg.popular ? 'border-soft-gold transform scale-105 z-10 animate-border-glow' : 'border-transparent'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-soft-gold text-forest-green px-8 py-2 rounded-full text-lg font-bold">
                    Featured
                  </div>
                )}
                <h3 className="text-3xl font-serif font-bold text-forest-green mb-4">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-6">{pkg.price}</div>
                <p className="text-xl text-medium-gray mb-8">{pkg.description}</p>
                
                <ul className="mb-10 space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-soft-gold mr-4 text-xl">✓</span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/packages"
                  className={`w-full text-center py-4 rounded-lg font-bold text-lg ${
                    pkg.popular 
                      ? 'bg-soft-gold text-forest-green hover:bg-opacity-90 transition-all duration-300' 
                      : 'border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-forest-green transition-all duration-300'
                  }`}
                >
                  Select Collection
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Availability Section */}
      <section className="py-32 bg-forest-green text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-soft-gold text-forest-green px-6 py-2 rounded-full text-lg font-bold mb-8">
              2026 Wedding Dates Open
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-8 max-w-4xl mx-auto">
              Let's Create Your Forever Memory
            </h2>
            <p className="text-xl text-cream max-w-3xl mx-auto mb-12">
              Limited dates available for couples searching for a luxury wedding photography experience.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-block bg-soft-gold text-forest-green px-12 py-6 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all duration-300 shadow-gold-glow"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Above Form Section */}
      <section className="py-16 bg-ivory text-forest-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-soft-gold text-forest-green px-4 py-1 rounded-full text-sm font-bold mb-4">
            Limited 2026 Dates Available
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-forest-green mb-4">
            Tell us about your celebration and we'll create a custom collection tailored to your wedding.
          </h3>
        </div>
      </section>

      {/* Discount Popup */}
      <DiscountPopup />
    </div>
  );
};