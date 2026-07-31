import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/', '/thank-you'],
    },
    sitemap: 'https://theflashphotofilms.in/sitemap.xml',
    host: 'https://theflashphotofilms.in',
  };
}