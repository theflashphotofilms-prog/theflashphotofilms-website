import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TermsAndConditions from '../../components/TermsAndConditions';

export const metadata: Metadata = {
  title: 'Book Photography Services | The Flash Photofilms',
  description: 'Easily book our photography services for corporate events, birthdays, maternity, baby photoshoots, and more.',
  openGraph: {
    title: 'Book Photography Services | The Flash Photofilms',
    description: 'Easily book our photography services for corporate events, birthdays, maternity, baby photoshoots, and more.',
    url: 'https://theflashphotofilms.in/other-services',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Photography Services - The Flash Photofilms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Photography Services | The Flash Photofilms',
    description: 'Easily book our photography services for corporate events, birthdays, maternity, baby photoshoots, and more.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/other-services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OtherServicesPage() {
  const services = [
    {
      id: 1,
      title: "Corporate Event Coverage",
      price: "Starting From ₹10,000",
      description: "Professional photography and videography coverage for corporate events, conferences, award ceremonies, business launches and company celebrations.",
      image: "/images/services/corporate-event.jpg"
    },
    {
      id: 2,
      title: "Birthday Party Coverage",
      price: "Starting From ₹3,999",
      description: "Capturing joyful celebrations, candid moments and unforgettable memories from birthday parties and private gatherings.",
      image: "/images/services/birthday-party.jpg"
    },
    {
      id: 3,
      title: "Maternity Shoot",
      price: "Starting From ₹6,000",
      description: "Elegant maternity photography sessions designed to preserve one of life's most beautiful journeys.",
      image: "/images/services/maternity-shoot.jpg"
    },
    {
      id: 4,
      title: "Baby Photoshoot",
      price: "Starting From ₹999",
      description: "Creative and adorable baby photography sessions capturing precious early memories.",
      image: "/images/services/baby-photoshoot.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Other Services
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            A collection of professional photography and videography services crafted for life's special moments.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="luxury-card p-10 rounded-xl relative overflow-hidden border border-soft-gold/30 hover:border-soft-gold transition-all duration-300 group"
              >
                <div className="mb-6">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover rounded-lg"
                    priority={service.id <= 2} // Prioritize first 2 images
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-soft-gold mb-3">{service.title}</h3>
                <div className="text-xl font-bold mb-4 text-soft-gold">{service.price}</div>
                <p className="text-lg text-cream mb-6">{service.description}</p>
                
                <Link 
                  href="/booking"
                  className="inline-block w-full text-center py-3 rounded-lg font-bold text-base bg-transparent border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <TermsAndConditions />

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Capture Your Memories?
          </h2>
          <p className="text-xl text-cream mb-10 max-w-2xl mx-auto">
            Book your preferred photography service today and secure your event date with The Flash Photofilms.
          </p>
          <Link 
            href="/booking"
            className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}