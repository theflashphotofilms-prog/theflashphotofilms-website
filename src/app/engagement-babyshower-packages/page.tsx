'use client';

import Link from 'next/link';
import { useState } from 'react';
import SEO from '@/components/SEO';

const EngagementBabyShowerPackagesPage = () => {
  const [showTnc, setShowTnc] = useState(false);

  const packages = [
    {
      name: "SILVER PACKAGE",
      price: "₹8,000/-",
      team: [
        "• 1 Traditional Photographer"
      ],
      included: [
        "• All Soft Copy Raw Photos"
      ],
      popular: false,
      bgColor: "bg-white"
    },
    {
      name: "GOLD PACKAGE",
      price: "₹16,500/-",
      team: [
        "• 1 Semi-Candid Photographer",
        "• 1 Semi-Cinematic Videographer"
      ],
      included: [
        "• All Soft Copy Raw Photos",
        "• 1 Highlight Video",
        "• 1 Instagram Reel"
      ],
      popular: false,
      bgColor: "bg-white"
    },
    {
      name: "PREMIUM PACKAGE",
      price: "₹24,500/-",
      team: [
        "• 1 Semi-Candid Photographer",
        "• 1 Semi-Cinematic Videographer"
      ],
      included: [
        "• All Soft Copy Raw Photos",
        "• 100 Photos Album with Bag",
        "• 1 Highlight Video",
        "• 1 Instagram Reel"
      ],
      popular: false,
      bgColor: "bg-white"
    },
    {
      name: "LUXURY PACKAGE",
      price: "₹45,500/-",
      badge: "Most Popular",
      team: [
        "• 1 Traditional Photographer",
        "• 1 Traditional Videographer",
        "• 1 Candid Photographer",
        "• 1 Drone Pilot"
      ],
      included: [
        "• All Soft Copy Raw Photos",
        "• 150 Photos Album with Bag",
        "• 1 Highlight Video",
        "• 1 Instagram Reel",
        "• Drone Coverage"
      ],
      popular: true,
      bgColor: "bg-gradient-to-br from-gold to-yellow-100"
    }
  ];

  const handleBookNow = (packageName: string) => {
    // Track package interest
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_engagement_babyshower_package_cta', {
        package_name: packageName,
        page_title: 'Engagement & Baby Shower Packages'
      });
    }
  };

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Engagement & Baby Shower Photography Packages | The Flash Photofilms" 
        description="Premium Engagement and Baby Shower photography packages by The Flash Photofilms including candid photography, cinematic videography, albums, reels, highlights and drone coverage."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            Engagement & Baby Shower Photography Packages
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Celebrate your special moments with premium photography and videography services by The Flash Photofilms. Our Engagement and Baby Shower packages are designed to preserve every emotion, smile, and memory with professional quality and creative storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`${pkg.bgColor} rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300`}
            >
              {pkg.popular && (
                <div className="bg-gold text-dark-maroon text-center py-2 font-bold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-dark-maroon mb-4 text-center">{pkg.name}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gold">{pkg.price}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-dark-maroon mb-2">Team:</h4>
                  <ul className="text-medium-gray text-sm space-y-1">
                    {pkg.team.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-dark-maroon mb-2">Included:</h4>
                  <ul className="text-medium-gray text-sm space-y-1">
                    {pkg.included.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact" 
                  onClick={() => handleBookNow(pkg.name)}
                  className="block w-full bg-dark-maroon text-white text-center py-3 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors duration-300"
                >
                  Book Your Event
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark-maroon">Terms & Conditions</h2>
              <button 
                onClick={() => setShowTnc(!showTnc)}
                className="text-gold font-medium hover:text-dark-maroon"
              >
                {showTnc ? 'Hide' : 'Show'} Details
              </button>
            </div>
            
            {showTnc && (
              <div className="space-y-4">
                <ol className="text-medium-gray space-y-3 list-dedecimal list-inside">
                  <li><span className="font-medium text-dark-maroon">30% advance payment is required to confirm the booking.</span> After the event is completed, 50% payment must be cleared. Soft copies of photos/videos will be delivered only after this payment. The remaining balance must be paid on the day of album selection.</li>
                  <li><span className="font-medium text-dark-maroon">Without advance payment, the booking will not be confirmed.</span></li>
                  <li><span className="font-medium text-dark-maroon">Advance payment is non-refundable under any circumstances.</span></li>
                  <li><span className="font-medium text-dark-maroon">Album selection must be completed within 30 to 45 days after delivery of the preview.</span> If album selection is delayed beyond this period, album charges will be calculated according to the current market rates.</li>
                  <li><span className="font-medium text-dark-maroon">DJ shoot coverage is available only up to 12:00 AM (midnight).</span></li>
                  <li><span className="font-medium text-dark-maroon">Photos of guests while having lunch or dinner are not included by default.</span> If such coverage is required, it must be discussed and confirmed at the time of booking.</li>
                  <li><span className="font-medium text-dark-maroon">Wedding film editing is included up to 3 hours duration only.</span> If the final edited video exceeds 3 hours, additional editing charges will apply.</li>
                  <li><span className="font-medium text-dark-maroon">All final data (photos/videos) must be collected within 30 to 45 days.</span> After this period, if data is lost due to technical issues, hardware failure, or any unforeseen reason, The Flash Photofilms will not be responsible.</li>
                  <li><span className="font-medium text-dark-maroon">Clients and guests must maintain respectful behaviour with photographers and videographers.</span> Any misuse, abusive language, or inappropriate behaviour may result in immediate cancellation of services without any refund.</li>
                  <li><span className="font-medium text-dark-maroon">Only items specifically mentioned in the selected package are included.</span> Any additional services, products, manpower, equipment, albums, reels, videos, drone coverage, LED screens, travel arrangements, or custom requirements will be charged separately.</li>
                </ol>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-medium-gray italic">
                    Thank You For Trusting The Flash Photofilms. We look forward to capturing your beautiful memories.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementBabyShowerPackagesPage;