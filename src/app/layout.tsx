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
  metadataBase: new URL("https://theflashphotofilms.in"),
  title: {
    default: 'The Flash Photofilms - Premium Wedding Photography & Cinematic Films',
    template: '%s | The Flash Photofilms'
  },
  description: 'Premium wedding photography and cinematic films in Ahmedabad. Capturing timeless moments with artistic excellence.',
  keywords: [
    'Wedding Photographer Gujarat',
    'Wedding Photography Gujarat',
    'Best Wedding Photographer Ahmedabad',
    'Best Wedding Photographer Surat',
    'Best Wedding Photographer Vadodara',
    'Wedding Photographer Anand',
    'Luxury Wedding Photography Gujarat',
    'Cinematic Wedding Films Gujarat',
    'Candid Wedding Photographer Gujarat',
    'Pre Wedding Shoot Gujarat',
    'Pre Wedding Photographer Ahmedabad',
    'Destination Wedding Photographer Gujarat',
    'Wedding Videographer Gujarat',
    'Wedding Cinematography Gujarat',
    'Engagement Photographer Gujarat',
    'Baby Shower Photographer Gujarat',
    'Traditional Wedding Photography Gujarat',
    'Drone Wedding Photography Gujarat',
    'The Flash Photofilms'
  ],
  authors: [{ name: 'The Flash Photofilms', url: 'https://theflashphotofilms.in' }],
  creator: 'The Flash Photofilms',
  publisher: 'The Flash Photofilms',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: 'The Flash Photofilms - Premium Wedding Photography & Cinematic Films',
    description: 'Premium wedding photography and cinematic films in Ahmedabad. Capturing timeless moments with artistic excellence.',
    url: 'https://theflashphotofilms.in',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Flash Photofilms - Premium Wedding Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Flash Photofilms - Premium Wedding Photography & Cinematic Films',
    description: 'Premium wedding photography and cinematic films in Ahmedabad. Capturing timeless moments with artistic excellence.',
    images: ['/opengraph-image.jpg'],
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
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': 'your-google-site-verification-code'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/opengraph-image.jpg" />
        <link rel="preload" as="image" href="/logo.png" />
      </head>
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
              "image": "/logo.png",
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
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bharuch"
                },
                {
                  "@type": "City", 
                  "name": "Ankleshwar"
                },
                {
                  "@type": "City",
                  "name": "Ahmedabad"
                },
                {
                  "@type": "City",
                  "name": "Surat"
                },
                {
                  "@type": "City",
                  "name": "Vadodara"
                },
                {
                  "@type": "City",
                  "name": "Gandhinagar"
                }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "description": "Premium luxury wedding and cinematic films",
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