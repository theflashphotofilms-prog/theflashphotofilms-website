import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppCTA from '../components/WhatsAppCTA';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'The Flash Photofilms - Professional Photography & Videography Services',
  description: 'Professional photography and videography services for weddings, events, and commercial projects. Capture your special moments with our expert team.',
  keywords: 'photography, videography, wedding photography, event photography, commercial photography, professional photographer',
  authors: [{ name: 'The Flash Photofilms' }],
  creator: 'The Flash Photofilms',
  publisher: 'The Flash Photofilms',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.theflashphotofilms.com',
    title: 'The Flash Photofilms - Professional Photography & Videography Services',
    description: 'Professional photography and videography services for weddings, events, and commercial projects.',
    siteName: 'The Flash Photofilms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Flash Photofilms - Professional Photography & Videography Services',
    description: 'Professional photography and videography services for weddings, events, and commercial projects.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PhotographyService",
              "name": "The Flash Photofilms",
              "image": "/logo.png", // Updated to use the actual logo path
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