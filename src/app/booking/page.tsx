import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: 'Book Wedding Photography Services | The Flash Photofilms',
  description: 'Secure your wedding date with The Flash Photofilms. Professional photography and cinematic film services in Ahmedabad.',
  openGraph: {
    title: 'Book Wedding Photography Services | The Flash Photofilms',
    description: 'Secure your wedding date with The Flash Photofilms. Professional photography and cinematic film services in Ahmedabad.',
    url: 'https://theflashphotofilms.in/booking',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Wedding Photography Services - The Flash Photofilms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Wedding Photography Services | The Flash Photofilms',
    description: 'Secure your wedding date with The Flash Photofilms. Professional photography and cinematic film services in Ahmedabad.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/booking',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Secure Your Date
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Book our premium wedding photography and cinematic film services for your special day
          </p>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory text-forest-green rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-forest-green text-ivory p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold mb-6">Why Choose Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span>Premium quality photography and cinematic films</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span>Professional team with 5+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span>Customized packages for your unique needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span>Timely delivery and excellent customer service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span>Drone and cinematic equipment for stunning shots</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-3/5 p-10">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory text-center mb-16">Booking Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-soft-gold text-forest-green w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-soft-gold mb-3">Contact Us</h3>
              <p className="text-cream">Fill out the booking form with your event details and requirements.</p>
            </div>
            <div className="text-center">
              <div className="bg-soft-gold text-forest-green w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-soft-gold mb-3">Discuss Package</h3>
              <p className="text-cream">We'll discuss your needs and customize a package that fits your vision.</p>
            </div>
            <div className="text-center">
              <div className="bg-soft-gold text-forest-green w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-soft-gold mb-3">Confirm Date</h3>
              <p className="text-cream">Once confirmed, we'll secure your date and begin planning.</p>
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
          <Link 
            href="/contact"
            className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}