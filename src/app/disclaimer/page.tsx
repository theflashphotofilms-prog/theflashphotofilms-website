import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | The Flash Photofilms',
  description: 'Disclaimer and terms of use for The Flash Photofilms photography services website.',
  openGraph: {
    title: 'Disclaimer | The Flash Photofilms',
    description: 'Disclaimer and terms of use for The Flash Photofilms photography services website.',
    url: 'https://theflashphotofilms.in/disclaimer',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Flash Photofilms - Disclaimer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer | The Flash Photofilms',
    description: 'Disclaimer and terms of use for The Flash Photofilms photography services website.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Disclaimer
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Terms and conditions for using our photography services and website
          </p>
        </div>
      </div>

      {/* Disclaimer Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory text-forest-green rounded-xl p-10 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-cream mb-6">
                The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
              </p>

              <h2 className="text-2xl font-bold text-soft-gold mb-4 mt-8">Professional Services</h2>
              <p className="text-cream mb-6">
                The Flash Photofilms provides professional photography services. The images and videos produced are subject to the terms and conditions agreed upon between the client and The Flash Photofilms. We reserve the right to refuse service to anyone for any reason at any time.
              </p>

              <h2 className="text-2xl font-bold text-soft-gold mb-4 mt-8">Intellectual Property</h2>
              <p className="text-cream mb-6">
                All photographs, videos, graphics, and other materials on this website are the intellectual property of The Flash Photofilms. Unauthorized use, reproduction, or distribution of these materials is strictly prohibited without written consent.
              </p>

              <h2 className="text-2xl font-bold text-soft-gold mb-4 mt-8">Limitation of Liability</h2>
              <p className="text-cream mb-6">
                The Flash Photofilms shall not be liable for any damages arising out of the use of our services or website. This includes, but is not limited to, direct, indirect, incidental, consequential, or punitive damages.
              </p>

              <h2 className="text-2xl font-bold text-soft-gold mb-4 mt-8">External Links</h2>
              <p className="text-cream mb-6">
                Our website may contain links to external websites. We have no control over the nature, content, and availability of those sites and are not responsible for any information, products, or services provided by third-party websites.
              </p>

              <h2 className="text-2xl font-bold text-soft-gold mb-4 mt-8">Changes to This Disclaimer</h2>
              <p className="text-cream mb-6">
                We reserve the right to update or change this disclaimer at any time. Any changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of those changes.
              </p>

              <h2 className="text-2xl font-bold text-soft-gold mb-4 mt-8">Contact Information</h2>
              <p className="text-cream mb-6">
                If you have any questions about this disclaimer, please contact us at:
              </p>
              <p className="text-cream mb-6">
                Email: contact@theflashphotofilms.com<br />
                Phone: +91-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Feel free to reach out to us for any inquiries about our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact"
              className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              href="/faq"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-10 py-5 rounded-xl font-bold text-lg hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
            >
              Visit FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}