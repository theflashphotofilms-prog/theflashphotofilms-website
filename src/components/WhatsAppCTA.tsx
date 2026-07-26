'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+917984941331"; // WhatsApp API requires phone number without spaces or special characters
  const message = encodeURIComponent("Hello, I'm interested in your photography services. Can you please provide more information?");

  useEffect(() => {
    // Show button after 3 seconds to avoid initial page load jank
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-gold hover:bg-dark-maroon text-dark-maroon hover:text-gold p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  ) : null;
};

export default WhatsAppCTA;