'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaCamera, FaVideo, FaClock, FaStar, FaMapMarkerAlt, FaUserFriends, FaRupeeSign } from 'react-icons/fa';

const EngagementBabyShowerPackages = () => {
  const [activeTab, setActiveTab] = useState('engagement');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const engagementPackages = [
    {
      id: 1,
      name: "Simple Elegance",
      price: 8000,
      originalPrice: 10000,
      duration: "2 hours",
      photos: 80,
      videos: 1,
      highlights: 1,
      includes: [
        "Professional photographer",
        "2-hour photo session",
        "Location setup",
        "80 premium edited photos",
        "1 highlight video (2-3 min)",
        "Online gallery access"
      ],
      bestFor: "Small, intimate engagement celebrations"
    },
    {
      id: 2,
      name: "Celestial Celebration",
      price: 15000,
      originalPrice: 18000,
      duration: "4 hours",
      photos: 180,
      videos: 2,
      highlights: 1,
      includes: [
        "Two photographers",
        "4-hour photo session",
        "Multiple setups",
        "180 premium edited photos",
        "2 highlight videos (2-3 min each)",
        "Full cinematic coverage",
        "Online gallery access",
        "Same-day slideshow"
      ],
      bestFor: "Larger engagement parties with multiple activities"
    },
    {
      id: 3,
      name: "Royal Affair",
      price: 22000,
      originalPrice: 25000,
      duration: "6 hours",
      photos: 300,
      videos: 3,
      highlights: 2,
      includes: [
        "Three-person crew",
        "6-hour premium session",
        "Multiple locations",
        "300 premium edited photos",
        "3 highlight videos (2-3 min each)",
        "Full cinematic coverage",
        "Drone footage",
        "Behind-the-scenes video",
        "Online gallery access",
        "Print release",
        "Same-day slideshow",
        "Physical album (15 pages)"
      ],
      bestFor: "Grand engagement celebrations"
    }
  ];

  const babyShowerPackages = [
    {
      id: 4,
      name: "Sweet Beginnings",
      price: 7000,
      originalPrice: 9000,
      duration: "3 hours",
      photos: 100,
      videos: 1,
      highlights: 1,
      includes: [
        "Professional photographer",
        "3-hour photo session",
        "Themed decoration setup",
        "100 premium edited photos",
        "1 highlight video (2-3 min)",
        "Online gallery access"
      ],
      bestFor: "Simple baby shower celebrations"
    },
    {
      id: 5,
      name: "Joyful Journey",
      price: 12000,
      originalPrice: 15000,
      duration: "4 hours",
      photos: 180,
      videos: 2,
      highlights: 1,
      includes: [
        "Two photographers",
        "4-hour photo session",
        "Complete themed setup",
        "180 premium edited photos",
        "2 highlight videos (2-3 min each)",
        "Full cinematic coverage",
        "Online gallery access",
        "Same-day slideshow"
      ],
      bestFor: "Elaborate baby shower events"
    },
    {
      id: 6,
      name: "Blessed Arrival",
      price: 18000,
      originalPrice: 22000,
      duration: "6 hours",
      photos: 250,
      videos: 3,
      highlights: 2,
      includes: [
        "Three-person crew",
        "6-hour premium session",
        "Premium decoration setup",
        "250 premium edited photos",
        "3 highlight videos (2-3 min each)",
        "Full cinematic coverage",
        "Drone footage",
        "Behind-the-scenes video",
        "Online gallery access",
        "Same-day slideshow",
        "Physical album (10 pages)"
      ],
      bestFor: "Grand baby shower celebrations"
    }
  ];

  const currentPackages = activeTab === 'engagement' ? engagementPackages : babyShowerPackages;

  const applyCoupon = () => {
    if(couponCode.toLowerCase() === 'launch10') {
      setAppliedCoupon(true);
      setDiscountPercentage(10);
      alert('Congratulations! 10% discount applied.');
    } else if(couponCode.toLowerCase() === 'earlybird15') {
      setAppliedCoupon(true);
      setDiscountPercentage(15);
      alert('Congratulations! 15% discount applied.');
    } else {
      alert('Invalid coupon code. Please try again.');
    }
  };

  const calculateDiscountedPrice = (price: number) => {
    if(appliedCoupon) {
      return Math.round(price - (price * discountPercentage / 100));
    }
    return price;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-gradient-to-br from-dark-maroon to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gold sm:text-5xl">
            Engagement & Baby Shower Packages
          </h1>
          <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
            Capture your special engagement and baby shower moments with our exclusive photography packages. Professional, creative, and memorable sessions tailored to your unique celebration.
          </p>
        </div>
      </header>

      {/* Package Selection Tabs */}
      <section className="py-12 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1 rounded-lg shadow">
              <button
                onClick={() => setActiveTab('engagement')}
                className={`px-6 py-3 rounded-lg font-medium ${
                  activeTab === 'engagement'
                    ? 'bg-gold text-dark-maroon'
                    : 'text-dark-maroon hover:bg-gold/10'
                }`}
              >
                Engagement
              </button>
              <button
                onClick={() => setActiveTab('baby-shower')}
                className={`px-6 py-3 rounded-lg font-medium ${
                  activeTab === 'baby-shower'
                    ? 'bg-gold text-dark-maroon'
                    : 'text-dark-maroon hover:bg-gold/10'
                }`}
              >
                Baby Shower
              </button>
            </div>
          </div>

          {/* Coupon Input */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-dark-maroon focus:outline-none transition-colors"
              />
              <button
                onClick={applyCoupon}
                className="px-6 py-3 bg-gold text-dark-maroon rounded-lg font-medium hover:bg-white hover:text-dark-maroon transition-colors"
              >
                Apply
              </button>
            </div>
            <p className="text-center text-medium-gray mt-2 text-sm">
              Have a coupon? Enter it above for instant discount
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
                  selectedPackage === pkg.id
                    ? 'border-gold ring-2 ring-gold/50'
                    : 'border-gray-200'
                } hover:border-gold transition-all duration-300`}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-dark-maroon">{pkg.name}</h3>
                    <div className="text-right">
                      <p className="text-lg font-bold text-dark-maroon line-through text-medium-gray">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </p>
                      <p className="text-2xl font-bold text-gold">
                        ₹{calculateDiscountedPrice(pkg.price).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 space-y-2">
                    <div className="flex items-center text-medium-gray">
                      <FaClock className="text-gold mr-2" /> Duration: {pkg.duration}
                    </div>
                    <div className="flex items-center text-medium-gray">
                      <FaCamera className="text-gold mr-2" /> {pkg.photos} Premium Photos
                    </div>
                    <div className="flex items-center text-medium-gray">
                      <FaVideo className="text-gold mr-2" /> {pkg.videos} Video(s)
                    </div>
                  </div>

                  <ul className="mb-6 space-y-2">
                    {pkg.includes.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-medium-gray">
                        <FaStar className="text-gold mt-1 mr-2 flex-shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-medium-gray italic mb-6">
                    <span className="font-medium text-gold">Best for:</span> {pkg.bestFor}
                  </p>

                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      selectedPackage === pkg.id
                        ? 'bg-gold text-dark-maroon'
                        : 'bg-dark-maroon text-gold hover:bg-gold hover:text-dark-maroon'
                    }`}
                  >
                    {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-maroon sm:text-4xl">Why Choose Our Engagement & Baby Shower Packages?</h2>
            <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
              We specialize in capturing the joy and excitement of these special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Artistic Vision",
                description: "Creative compositions and artistic direction for stunning visuals",
                icon: <FaCamera className="text-4xl text-gold" />
              },
              {
                title: "Flexible Locations",
                description: "Choose from our curated list of beautiful locations or suggest your own",
                icon: <FaMapMarkerAlt className="text-4xl text-gold" />
              },
              {
                title: "Expert Guidance",
                description: "Professional posing guidance to make you feel comfortable and look amazing",
                icon: <FaUserFriends className="text-4xl text-gold" />
              },
              {
                title: "Unlimited Poses",
                description: "Relaxed session allowing for natural, candid moments",
                icon: <FaStar className="text-4xl text-gold" />
              },
              {
                title: "Quick Turnaround",
                description: "Receive your edited photos within 1 week of the shoot",
                icon: <FaClock className="text-4xl text-gold" />
              },
              {
                title: "Premium Editing",
                description: "Advanced editing techniques to enhance the joy",
                icon: <FaStar className="text-4xl text-gold" />
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-maroon mb-4">{feature.title}</h3>
                <p className="text-medium-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-maroon sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
              A seamless journey from planning to final deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Consultation", desc: "Discuss your vision and preferences" },
              { step: 2, title: "Planning", desc: "Finalize location and timeline" },
              { step: 3, title: "Shoot Day", desc: "Professional photo session" },
              { step: 4, title: "Delivery", desc: "Premium edited photos & videos" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dark-maroon text-gold rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark-maroon mb-2">{item.title}</h3>
                <p className="text-medium-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-maroon to-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to capture your special moments?
          </h2>
          <p className="mt-4 text-xl text-gold max-w-3xl mx-auto">
            Book your engagement or baby shower session today and create memories that last forever
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-dark-maroon px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-white transition-colors duration-300 mr-4 mb-4"
            >
              Book Now
            </Link>
            <Link
              href="/gallery"
              className="inline-block bg-transparent text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-dark-maroon transition-colors duration-300"
            >
              View Gallery
            </Link>
          </div>
          <p className="mt-6 text-medium-gray">
            Have questions? Call us at +91 79849 41331
          </p>
        </div>
      </section>
    </div>
  );
};

export default EngagementBabyShowerPackages;