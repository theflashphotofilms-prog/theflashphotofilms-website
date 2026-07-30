import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import DiscountPopup from '../components/DiscountPopup';

export const metadata: Metadata = {
  title: 'The Flash Photofilms - Professional Wedding Photography & Cinematic Films',
  description: 'Professional wedding photography and cinematic films in Gujarat. Expert team capturing life\'s precious moments with artistic excellence.',
  openGraph: {
    title: 'The Flash Photofilms - Professional Wedding Photography & Cinematic Films',
    description: 'Professional wedding photography and cinematic films in Gujarat. Expert team capturing life\'s precious moments with artistic excellence.',
    type: 'website',
    url: 'https://www.theflashphotofilms.com',
  },
  alternates: {
    canonical: 'https://www.theflashphotofilms.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SEO 
        title="The Flash Photofilms - Professional Wedding Photography & Cinematic Films" 
        description="Professional wedding photography and cinematic films in Gujarat. Expert team capturing life's precious moments with artistic excellence."
        url="https://www.theflashphotofilms.com"
      />
      <Hero />
      <main>
        <Services />
        <div className="py-20 bg-forest-green text-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
                Why Choose The Flash Photofilms?
              </h2>
              <p className="text-xl text-soft-gold max-w-3xl mx-auto">
                  We combine creativity, professional equipment, cinematic storytelling, premium albums, drone coverage, and personalized service to create memories that last a lifetime.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
                <div className="text-5xl font-bold text-soft-gold mb-4">1</div>
                <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Creative Excellence</h3>
                <p className="text-cream">
                  Artistic approach with attention to detail, composition, and lighting for unique and memorable images.
                </p>
              </div>
              <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
                <div className="text-5xl font-bold text-soft-gold mb-4">2</div>
                <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Professional Equipment</h3>
                <p className="text-cream">
                  Latest DSLR cameras, professional lenses, lighting equipment, drones, and stabilization gear.
                </p>
              </div>
              <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
                <div className="text-5xl font-bold text-soft-gold mb-4">3</div>
                <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Cinematic Storytelling</h3>
                <p className="text-cream">
                  Narrative-driven approach that captures emotions, moments, and stories in a cinematic style.
                </p>
              </div>
              <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
                <div className="text-5xl font-bold text-soft-gold mb-4">4</div>
                <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Premium Deliverables</h3>
                <p className="text-cream">
                  High-resolution photos, highlight videos, premium albums, and digital galleries for lasting memories.
                </p>
              </div>
              <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
                <div className="text-5xl font-bold text-soft-gold mb-4">5</div>
                <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Drone Coverage</h3>
                <p className="text-cream">
                  Aerial photography and videography for breathtaking perspectives and dynamic shots.
                </p>
              </div>
              <div className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
                <div className="text-5xl font-bold text-soft-gold mb-4">6</div>
                <h3 className="text-2xl font-serif font-bold text-ivory mb-4">Personalized Service</h3>
                <p className="text-cream">
                  Customized packages and dedicated support tailored to your unique vision and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <div className="py-16 bg-ivory text-forest-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest-green mb-4">
                Limited Availability
              </h2>
              <p className="text-medium-gray text-lg">
                We only take a limited number of bookings each month to ensure the highest quality service.
              </p>
            </div>
            <div className="bg-soft-gold/10 border border-soft-gold/30 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-forest-green mb-4">Book Your Date Early</h3>
                <p className="text-medium-gray mb-6">
                  Secure your special date with The Flash Photofilms. Contact us today to check availability and discuss your vision.
                </p>
                <Link 
                  href="/booking" 
                  className="inline-block bg-forest-green text-ivory px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors"
                >
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
        <ContactSection />
      </main>
      {/* Discount Popup */}
      <DiscountPopup />
    </div>
  );
};