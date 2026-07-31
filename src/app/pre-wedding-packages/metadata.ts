import { Metadata } from 'next';

export const preWeddingMetadata: Metadata = {
  title: 'Pre-Wedding Photography Packages | The Flash Photofilms',
  description: 'Explore our elegant pre-wedding photography packages to capture your love story before the big day.',
  openGraph: {
    title: 'Pre-Wedding Photography Packages | The Flash Photofilms',
    description: 'Explore our elegant pre-wedding photography packages to capture your love story before the big day.',
    url: 'https://theflashphotofilms.in/pre-wedding-packages',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pre-Wedding Photography Packages - The Flash Photofilms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre-Wedding Photography Packages | The Flash Photofilms',
    description: 'Explore our elegant pre-wedding photography packages to capture your love story before the big day.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/pre-wedding-packages',
  },
  robots: {
    index: true,
    follow: true,
  },
};