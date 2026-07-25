import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'The Flash Photofilms - Professional Photography & Videography Services',
  description: 'Premium wedding, event, and commercial photography & videography services by Mohit Panchal. Capturing memories with artistic excellence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PhotographyService",
              "name": "The Flash Photofilms",
              "image": "/logo.png", // Placeholder - will be updated when logo is available
              "telephone": "+91 79849 41331",
              "email": process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@theflashphotofilms.com",
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
      </body>
    </html>
  );
}