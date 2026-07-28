import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppCTA from '../components/WhatsAppCTA';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theflashphotofilms.com"),
  title: 'The Flash Photofilms | Luxury Wedding Photography & Cinematic Films Gujarat',
  description: 'Luxury wedding photography and cinematic films capturing timeless emotions across Ahmedabad, Surat, Vadodara and Gujarat.',
  keywords: 'luxury wedding photography, cinematic wedding films, premium wedding photography, Ahmedabad wedding photographer, wedding cinematography',
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
    title: 'The Flash Photofilms | Luxury Wedding Photography & Cinematic Films Gujarat',
    description: 'Luxury wedding photography and cinematic films capturing timeless emotions across Ahmedabad, Surat, Vadodara and Gujarat.',
    siteName: 'The Flash Photofilms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Flash Photofilms | Luxury Wedding Photography & Cinematic Films Gujarat',
    description: 'Luxury wedding photography and cinematic films capturing timeless emotions across Ahmedabad, Surat, Vadodara and Gujarat.',
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
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased bg-forest-green text-ivory`}>
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
              "description": "Premium luxury wedding photography and cinematic films",
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
                      "name": "Luxury Wedding Photography"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cinematic Wedding Films"
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
                      "name": "Engagement Session"
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