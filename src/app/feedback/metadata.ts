import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Share Your Feedback | The Flash Photofilms',
  description: 'Share your feedback and experience with The Flash Photofilms wedding photography and cinematography services.',
  openGraph: {
    title: 'Share Your Feedback | The Flash Photofilms',
    description: 'Share your feedback and experience with The Flash Photofilms wedding photography and cinematography services.',
    url: 'https://theflashphotofilms.in/feedback',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Flash Photofilms - Share Your Feedback',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Share Your Feedback | The Flash Photofilms',
    description: 'Share your feedback and experience with The Flash Photofilms wedding photography and cinematography services.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/feedback',
  },
  robots: {
    index: true,
    follow: true,
  },
};