'use client';

import Link from 'next/link';
import { useState } from 'react';
import SEO from '@/components/SEO';
import CouponInput from '@/components/CouponInput';

const OtherServicesPage = () => {
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Calculate discounted price
  const calculateDiscountedPrice = (originalPrice: string) => {
    if (discountPercentage === 0) return originalPrice;
    
    // Extract numeric value from price (remove ₹ and -/)
    const numericValue = parseInt(originalPrice.replace(/[^\d]/g, ''), 10);
    const discountAmount = (numericValue * discountPercentage) / 100;
    const discountedValue = numericValue - discountAmount;
    
    // Format back to original format
    return `₹${discountedValue.toLocaleString('en-IN')}/-`;
  };

  const services = [
    {
      name: "Corporate Event Packages",
      price: "₹10,000/-",
      description: "Professional photography and videography coverage for corporate events, conferences, seminars, product launches, award ceremonies, business meetings, and company celebrations.",
      bgColor: "bg-white"
    },
    {
      name: "Birthday Party Packages",
      price: "₹3,999/-",
      description: "Capture unforgettable birthday celebrations with professional photography and videography coverage for kids, adults, family gatherings, and themed birthday events.",
      bgColor: "bg-white"
    },
    {
      name: "Maternity Shoot Packages",
      price: "₹6,000/-",
      description: "Elegant maternity photography sessions designed to preserve beautiful memories of your motherhood journey with creative concepts and professional editing.",
      bgColor: "bg-white"
    },
    {
      name: "Baby Photoshoot Packages",
      price: "₹999/-",
      description: "Professional baby photography sessions to capture adorable moments, milestones, newborn portraits, and family memories.",
      bgColor: "bg-white"
    }
  ];

  const handleDiscountApply = (discount: number) => {
    setDiscountPercentage(discount);
  };

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Other Photography Services | The Flash Photofilms" 
        description="Corporate Events, Birthday Parties, Maternity Shoots, Baby Photoshoots and customised photography services by The Flash Photofilms."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Other Photography Services
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Explore our diverse range of photography and videography services tailored to capture your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#D2A97F] mb-2">{service.name}</h3>
                <div className="text-center mb-4">
                  <div className="text-sm text-medium-gray">Starting From</div>
                  <div className="text-2xl font-bold text-[#D2A97F]">
                    {calculateDiscountedPrice(service.price)}
                  </div>
                  {discountPercentage > 0 && (
                    <div className="text-sm text-medium-gray line-through">
                      Original: {service.price}
                    </div>
                  )}
                </div>
                <p className="text-medium-gray mb-6">{service.description}</p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-[#D2A97F] text-[#3A5A40] text-center py-3 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#D2A97F] mb-6 text-center">Have a Coupon Code?</h3>
          <CouponInput 
            onApply={handleDiscountApply} 
            originalPrice={services[0].price} 
          />
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-[#D2A97F] mb-4">Terms & Conditions</h3>
          <ol className="text-medium-gray space-y-3 list-decimal list-inside">
            <li><span className="font-medium text-[#D2A97F]">30% advance payment is required to confirm the booking.</span> After the event is completed, 50% payment must be cleared. Soft copies of photos/videos will be delivered only after this payment. The remaining balance must be paid on the day of album selection.</li>
            <li><span className="font-medium text-[#D2A97F]">Without advance payment, the booking will not be confirmed.</span></li>
            <li><span className="font-medium text-[#D2A97F]">Advance payment is non-refundable under any circumstances.</span></li>
            <li><span className="font-medium text-[#D2A97F]">Album selection must be completed within 30 to 45 days after delivery of the preview.</span> If album selection is delayed beyond this period, album charges will be calculated according to the current market rates.</li>
            <li><span className="font-medium text-[#D2A97F]">DJ shoot coverage is available only up to 12:00 AM (midnight).</span></li>
            <li><span className="font-medium text-[#D2A97F]">Photos of guests while having lunch or dinner are not included by default.</span> If such coverage is required, it must be discussed and confirmed at the time of booking.</li>
            <li><span className="font-medium text-[#D2A97F]">Wedding film editing is included up to 3 hours duration only.</span> If the final edited video exceeds 3 hours, additional editing charges will apply.</li>
            <li><span className="font-medium text-[#D2A97F]">All final data (photos/videos) must be collected within 30 to 45 days.</span> After this period, if data is lost due to technical issues, hardware failure, or any unforeseen reason, The Flash Photofilms will not be responsible.</li>
            <li><span className="font-medium text-[#D2A97F]">Clients and guests must maintain respectful behaviour with photographers and videographers.</span> Any misuse, abusive language, or inappropriate behaviour may result in immediate cancellation of services without any refund.</li>
            <li><span className="font-medium text-[#D2A97F]">Only items specifically mentioned in the selected package are included.</span> Any additional services, products, manpower, equipment, albums, reels, videos, drone coverage, LED screens, travel arrangements, or custom requirements will be charged separately.</li>
          </ol>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-center text-medium-gray italic">
              Thank You For Trusting The Flash Photofilms. We look forward to capturing your beautiful memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServicesPage;