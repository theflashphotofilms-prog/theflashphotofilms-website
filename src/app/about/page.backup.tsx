import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About The Flash Photofilms - Premium Wedding Photography Studio',
  description: 'Learn about our journey, mission, and commitment to capturing timeless moments with artistic excellence in wedding photography.',
  openGraph: {
    title: 'About The Flash Photofilms - Premium Wedding Photography Studio',
    description: 'Learn about our journey, mission, and commitment to capturing timeless moments with artistic excellence in wedding photography.',
    url: 'https://theflashphotofilms.in/about',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Flash Photofilms - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Flash Photofilms - Premium Wedding Photography Studio',
    description: 'Learn about our journey, mission, and commitment to capturing timeless moments with artistic excellence in wedding photography.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            About Us
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Our journey in capturing timeless moments with artistic excellence
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-gold mb-6">Our Story</h2>
              <p className="text-lg text-cream mb-6 leading-relaxed">
                Founded with a passion for storytelling through the lens, The Flash Photofilms has been dedicated to capturing life's most precious moments. Our journey began with a simple belief: every moment deserves to be preserved in its most authentic and beautiful form.
              </p>
              <p className="text-lg text-cream mb-6 leading-relaxed">
                Over the years, we've evolved from a small team of passionate photographers to a full-service creative studio, specializing in wedding photography, cinematic films, and various event coverage across Gujarat and India.
              </p>
              <p className="text-lg text-cream mb-6 leading-relaxed">
                Our commitment to excellence has remained unwavering – we believe in creating not just photographs, but heirlooms that tell your unique story for generations to come.
              </p>
              
              <div className="mt-10">
                <h3 className="text-2xl font-serif font-bold text-soft-gold mb-4">Our Mission</h3>
                <p className="text-lg text-cream mb-6">
                  To capture authentic emotions and fleeting moments with artistic vision, creating timeless memories that resonate with our clients' deepest feelings and connections.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/about/about-section.jpg" 
                alt="The Flash Photofilms Studio" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-soft-gold text-forest-green p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-sm italic">"Every picture tells a story, and every story deserves to be told beautifully."</p>
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center">
                <div className="text-4xl font-serif text-soft-gold mb-4">01</div>
                <h3 className="text-xl font-bold text-soft-gold mb-3">Excellence</h3>
                <p className="text-cream">
                  We strive for perfection in every frame, ensuring each photograph meets our highest standards of quality.
                </p>
              </div>
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center">
                <div className="text-4xl font-serif text-soft-gold mb-4">02</div>
                <h3 className="text-xl font-bold text-soft-gold mb-3">Authenticity</h3>
                <p className="text-cream">
                  We capture genuine emotions and moments as they naturally unfold, preserving your true story.
                </p>
              </div>
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center">
                <div className="text-4xl font-serif text-soft-gold mb-4">03</div>
                <h3 className="text-xl font-bold text-soft-gold mb-3">Innovation</h3>
                <p className="text-cream">
                  We embrace cutting-edge techniques and technology to deliver unique and memorable experiences.
                </p>
              </div>
            </div>
          </div>
          
          {/* Journey Section */}
          <div className="mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Image 
                  src="/images/about/journey.jpg" 
                  alt="Our Journey Timeline" 
                  width={600} 
                  height={400} 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-gold mb-6">Our Journey</h2>
                <p className="text-lg text-cream mb-6 leading-relaxed">
                  From our humble beginnings to becoming one of Gujarat's most trusted photography studios, our journey has been filled with incredible experiences, countless smiles, and memories that we've had the privilege to preserve.
                </p>
                <p className="text-lg text-cream mb-6 leading-relaxed">
                  Each year brings new challenges and opportunities to grow, learn, and refine our craft. We've covered weddings in grand palaces and intimate ceremonies, corporate events, and personal milestones – each with the same dedication and attention to detail.
                </p>
                <p className="text-lg text-cream">
                  As we continue to evolve, our core philosophy remains the same: to capture the essence of your most important moments with creativity, professionalism, and genuine care.
                </p>
              </div>
            </div>
          </div>
          
          {/* Through My Lens Section */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory text-center mb-16">Through My Lens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center w-full">
                <div className="text-4xl font-serif text-soft-gold mb-4">"</div>
                <p className="text-lg text-cream italic mb-6">
                  "Photography is the art of frozen time... the ability to evoke emotion with the click of the shutter."
                </p>
                <h3 className="text-xl font-bold text-soft-gold">- Technical Precision</h3>
              </div>
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center w-full">
                <div className="text-4xl font-serif text-soft-gold mb-4">"</div>
                <p className="text-lg text-cream italic mb-6">
                  "Every frame tells a story. Our mission is to ensure your story is told with authenticity and artistry."
                </p>
                <h3 className="text-xl font-bold text-soft-gold">- Authentic Moments</h3>
              </div>
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center w-full">
                <div className="text-4xl font-serif text-soft-gold mb-4">"</div>
                <p className="text-lg text-cream italic mb-6">
                  "The camera is an instrument that teaches people how to see without a camera."
                </p>
                <h3 className="text-xl font-bold text-soft-gold">- Visionary Approach</h3>
              </div>
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center w-full">
                <div className="text-4xl font-serif text-soft-gold mb-4">"</div>
                <p className="text-lg text-cream italic mb-6">
                  "In photography, there is a reality so subtle that it becomes more real than reality itself."
                </p>
                <h3 className="text-xl font-bold text-soft-gold">- Artistic Excellence</h3>
              </div>
              <div className="luxury-card p-8 rounded-xl border border-soft-gold/30 text-center w-full">
                <div className="text-4xl font-serif text-soft-gold mb-4">"</div>
                <p className="text-lg text-cream italic mb-6">
                  "We don't just take pictures, we create heirlooms that capture the essence of your most precious moments."
                </p>
                <h3 className="text-xl font-bold text-soft-gold">- Timeless Memories</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Begin Your Story?
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Let us capture your journey and create timeless memories together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/portfolio"
              className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              View Our Work
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