'use client';

import { useEffect } from 'react';

interface StructuredDataType {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PhotographyService",
          "name": "The Flash Photofilms",
          "image": "/images/logo.jpg",
          "telephone": "+91 79849 41331",
          "email": process.env.CONTACT_EMAIL || "info@theflashphotofilms.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "202, Block-3, Ashwini Height, Near Golden Point, GIDC Ankleshwar",
            "addressLocality": "Bharuch",
            "addressRegion": "Gujarat",
            "postalCode": "393002",
            "addressCountry": "IN"
          },
          "areaServed": {
            "@type": "City",
            "name": "Bharuch",
            "containedInPlace": {
              "@type": "State",
              "name": "Gujarat"
            }
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "description": "Professional wedding, event, and commercial photography & videography services by Mohit Panchal",
          "provider": {
            "@type": "Person",
            "name": "Mohit Panchal"
          },
          "offers": {
            "@type": "OfferCatalog",
            "name": "Photography Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Wedding Photography"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Wedding Videography"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pre-Wedding Shoot"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Portrait Session"
                }
              }
            ]
          }
        })
      }}
    />
  );
};

export default StructuredData;