import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cinematic Films | The Flash Photofilms',
  description: 'Premium cinematic wedding films and video services by The Flash Photofilms. Beautifully crafted memories for your special day.',
  openGraph: {
    title: 'Cinematic Films | The Flash Photofilms',
    description: 'Premium cinematic wedding films and video services by The Flash Photofilms. Beautifully crafted memories for your special day.',
    url: 'https://theflashphotofilms.in/films',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Flash Photofilms - Cinematic Films',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinematic Films | The Flash Photofilms',
    description: 'Premium cinematic wedding films and video services by The Flash Photofilms. Beautifully crafted memories for your special day.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/films',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Cinematic Films
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Beautifully crafted memories that tell your unique love story
          </p>
        </div>
      </div>

      {/* Films Showcase */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-gold mb-6">Our Cinematic Approach</h2>
              <p className="text-lg text-cream mb-6 leading-relaxed">
                At The Flash Photofilms, we believe that your love story deserves to be told through the art of cinema. Our cinematic films go beyond traditional wedding videos – they are carefully crafted narratives that capture the emotions, moments, and magic of your special day.
              </p>
              <p className="text-lg text-cream mb-6 leading-relaxed">
                With a keen eye for detail and a passion for storytelling, we create films that transport you back to the feelings of your wedding day, every time you watch.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-soft-gold mb-4">What Makes Our Films Special</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span className="text-cream">Cinematic storytelling approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span className="text-cream">Professional audio recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span className="text-cream">Stunning drone footage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span className="text-cream">Expert color grading and sound design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-gold mr-3 text-xl">✓</span>
                    <span className="text-cream">Personalized narrative structure</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/films/film-showcase.jpg" 
                alt="Cinematic Film Showcase" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-soft-gold text-forest-green p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-sm italic">"Transforming moments into memories through the art of cinema"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Film Styles */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory text-center mb-16">Our Film Styles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center">
              <div className="text-4xl font-serif text-soft-gold mb-4">🎬</div>
              <h3 className="text-xl font-bold text-soft-gold mb-3">Documentary Style</h3>
              <p className="text-cream mb-4">
                Natural, unobtrusive filming that captures authentic moments as they unfold, giving you a genuine representation of your special day.
              </p>
              <div className="text-soft-gold font-bold">✓ Real Emotions</div>
            </div>
            <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center">
              <div className="text-4xl font-serif text-soft-gold mb-4">🎥</div>
              <h3 className="text-xl font-bold text-soft-gold mb-3">Cinematic Style</h3>
              <p className="text-cream mb-4">
                Artistic and romantic approach with carefully planned shots, beautiful lighting, and cinematic editing for a movie-like experience.
              </p>
              <div className="text-soft-gold font-bold">✓ Artistic Vision</div>
            </div>
            <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center">
              <div className="text-4xl font-serif text-soft-gold mb-4">📽️</div>
              <h3 className="text-xl font-bold text-soft-gold mb-3">Highlight Reel</h3>
              <p className="text-cream mb-4">
                Short, engaging films focusing on the most important and emotional moments of your celebration, perfect for sharing with loved ones.
              </p>
              <div className="text-soft-gold font-bold">✓ Emotional Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory text-center mb-16">Our Film Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-soft-gold text-forest-green w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-lg font-bold text-soft-gold mb-3">Consultation</h3>
              <p className="text-cream text-sm">Understanding your vision and preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-soft-gold text-forest-green w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-lg font-bold text-soft-gold mb-3">Planning</h3>
              <p className="text-cream text-sm">Creating a detailed filming schedule</p>
            </div>
            <div className="text-center">
              <div className="bg-soft-gold text-forest-green w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-lg font-bold text-soft-gold mb-3">Filming</h3>
              <p className="text-cream text-sm">Capturing your special moments</p>
            </div>
            <div className="text-center">
              <div className="bg-soft-gold text-forest-green w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-lg font-bold text-soft-gold mb-3">Editing</h3>
              <p className="text-cream text-sm">Crafting your cinematic masterpiece</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Let us create a cinematic film that captures the essence of your special day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/booking"
              className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Book Our Services
            </Link>
            <Link 
              href="/contact"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-10 py-5 rounded-xl font-bold text-lg hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}