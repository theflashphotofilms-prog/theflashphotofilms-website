import { Metadata } from 'next';

export const engagementBabyShowerMetadata: Metadata = {
  title: 'Engagement & Baby Shower Photography Packages | The Flash Photofilms',
  description: 'Discover our elegant photography packages for engagement and baby shower events, capturing every precious moment with artistic excellence.',
  openGraph: {
    title: 'Engagement & Baby Shower Photography Packages | The Flash Photofilms',
    description: 'Discover our elegant photography packages for engagement and baby shower events, capturing every precious moment with artistic excellence.',
    url: 'https://theflashphotofilms.in/engagement-babyshower-packages',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Engagement & Baby Shower Photography Packages - The Flash Photofilms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engagement & Baby Shower Photography Packages | The Flash Photofilms',
    description: 'Discover our elegant photography packages for engagement and baby shower events, capturing every precious moment with artistic excellence.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/engagement-babyshower-packages',
  },
  robots: {
    index: true,
    follow: true,
  },
};