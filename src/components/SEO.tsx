'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const SEO = ({
  title = 'The Flash Photofilms - Professional Photography & Videography Services',
  description = 'Premium wedding, event, and commercial photography & videography services by Mohit Panchal. Capturing memories with artistic excellence.',
  keywords = 'photography, videography, wedding photography, event photography, commercial photography, portrait, Ahmedabad, Gujarat',
  url = typeof window !== 'undefined' ? window.location.href : 'https://theflashphotofilms.in',
  image = '/og-image.jpg',
}: SEOProps) => {
  const siteName = 'The Flash Photofilms';
  const twitterHandle = '@flashphotofilms'; // Placeholder - replace with actual Twitter handle

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;