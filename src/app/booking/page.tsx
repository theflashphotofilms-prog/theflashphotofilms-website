import type { Metadata } from 'next';
import BookingForm from '../../components/BookingForm';
import SEO from '../../components/SEO';

export const metadata: Metadata = {
  title: 'Book Your Event | The Flash Photofilms',
  description: 'Book your event with The Flash Photofilms - luxury wedding photography and cinematic films in Gujarat.',
  openGraph: {
    title: 'Book Your Event | The Flash Photofilms',
    description: 'Book your event with The Flash Photofilms - luxury wedding photography and cinematic films in Gujarat.',
    type: 'website',
    url: 'https://www.theflashphotofilms.com/booking',
  },
  alternates: {
    canonical: 'https://www.theflashphotofilms.com/booking',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      <SEO 
        title="Book Your Event | The Flash Photofilms" 
        description="Book your event with The Flash Photofilms - luxury wedding photography and cinematic films in Gujarat."
        url="https://www.theflashphotofilms.com/booking"
      />
      
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Book Your Event
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Secure your date with The Flash Photofilms for unforgettable memories
          </p>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="py-20 bg-ivory text-forest-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-4">
              Complete Your Booking
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Fill out the form below and our team will contact you shortly to confirm availability
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
              How It Works
            </h2>
            <p className="text-xl text-soft-gold max-w-3xl mx-auto">
              Simple steps to secure your event date
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
              <div className="text-5xl font-bold text-soft-gold mb-4">1</div>
              <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Submit Request</h3>
              <p className="text-cream">
                Fill out the booking form with your event details and preferences
              </p>
            </div>
            <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
              <div className="text-5xl font-bold text-soft-gold mb-4">2</div>
              <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Confirm Details</h3>
              <p className="text-cream">
                Our team contacts you to confirm availability and finalize details
              </p>
            </div>
            <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
              <div className="text-5xl font-bold text-soft-gold mb-4">3</div>
              <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Secure Date</h3>
              <p className="text-cream">
                Once confirmed, your date is reserved and contract finalized
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}