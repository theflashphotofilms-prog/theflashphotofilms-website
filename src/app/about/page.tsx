import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Flash Photofilms | Luxury Wedding Photographers in Gujarat',
  description: 'Learn about The Flash Photofilms, a luxury wedding photography and cinematic films studio serving couples across Gujarat and India.',
  openGraph: {
    title: 'About The Flash Photofilms | Luxury Wedding Photographers in Gujarat',
    description: 'Learn about The Flash Photofilms, a luxury wedding photography and cinematic films studio serving couples across Gujarat and India.',
    type: 'website',
    url: 'https://www.theflashphotofilms.com/about',
  },
  alternates: {
    canonical: 'https://www.theflashphotofilms.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-forest-green">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            About The Flash Photofilms
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Crafting timeless memories through the art of photography and cinematography
          </p>
        </div>
      </div>

      {/* Founder Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image 
                src="/images/about/founder.jpg" 
                alt="Mohit Panchal - Founder of The Flash Photofilms" 
                width={600} 
                height={400} 
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-gold">Meet Our Founder</h2>
              <p className="text-lg text-cream leading-relaxed">
                Mohit Panchal, a Mechanical Engineer by education, realized that his true calling lay beyond the industrial world. After two years in the corporate sector, he felt unfulfilled and disconnected from his authentic passion. Photography had always been his natural talent and deep-seated love.
              </p>
              <p className="text-lg text-cream leading-relaxed">
                With the unwavering encouragement from close friends and his mother, Mohit took the bold step to follow his heart. In 2020, he founded The Flash Photofilms with a singular vision: to capture timeless memories that would transcend generations.
              </p>
              <div className="pt-4">
                <p className="text-xl font-bold text-soft-gold">Mohit Panchal</p>
                <p className="text-cream">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Story Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
              From Dreams to Reality
            </h2>
            <p className="text-xl text-soft-gold max-w-3xl mx-auto">
              The remarkable journey of The Flash Photofilms through challenges and triumphs
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-cream leading-relaxed text-center max-w-4xl mx-auto">
              The founding of The Flash Photofilms coincided with the unprecedented challenges of the COVID-19 pandemic. What could have been a setback became a testament to Mohit's resilience and dedication. During the lockdown period, he refined his craft, studied the art of cinematic storytelling, and developed a unique approach to wedding photography that goes beyond mere documentation.
            </p>
            <p className="text-lg text-cream leading-relaxed text-center max-w-4xl mx-auto">
              Those early days were filled with long hours, countless experiments with lighting and composition, and an unwavering commitment to perfection. Each challenge became an opportunity to grow stronger, to develop innovative techniques, and to establish The Flash Photofilms as a beacon of quality in Gujarat's wedding photography landscape.
            </p>
            <p className="text-lg text-cream leading-relaxed text-center max-w-4xl mx-auto">
              Through patience, hard work, consistency, and dedication, the brand slowly began to flourish. Word spread about the exceptional attention to detail and the emotional depth captured in every frame.
            </p>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-forest-green text-soft-gold px-4 py-1 rounded-full text-sm font-bold mb-6 border border-soft-gold">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-8">
            Crafting Emotional Narratives
          </h2>
          <p className="text-xl text-cream max-w-4xl mx-auto">
            We believe every wedding is a once-in-a-lifetime story. Our vision is to preserve emotions, 
            traditions, and moments that become treasured family memories for generations. At The Flash Photofilms, 
            we specialize in luxury wedding photography and cinematic wedding films that capture the essence 
            of your most precious day.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
              Our Signature Services
            </h2>
            <p className="text-xl text-soft-gold max-w-3xl mx-auto">
              Expertly crafted wedding photography and cinematic films across Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Cinematic Wedding Films",
                description: "Immersive films that capture the atmosphere and emotions of your celebration, transforming moments into lasting memories.",
              },
              {
                title: "Luxury Wedding Photography",
                description: "Artistic documentation of your special day with cinematic techniques and emotional storytelling.",
              },
              {
                title: "Pre-Wedding Photography",
                description: "Romantic pre-wedding sessions that tell your love story before the big day arrives.",
              },
              {
                title: "Special Celebrations",
                description: "Comprehensive coverage of engagements, baby showers, and other milestone events.",
              }
            ].map((service, index) => (
              <div key={index} className="luxury-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300 border border-soft-gold/30 overflow-hidden">
                <h3 className="text-2xl font-serif font-bold text-soft-gold mb-4">{service.title}</h3>
                <p className="text-cream">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Relationship Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-gold text-center">More Than Just a Service</h2>
            <p className="text-lg text-cream leading-relaxed max-w-4xl mx-auto">
              At The Flash Photofilms, we don't simply photograph weddings – we build relationships. Our clients aren't just customers; they become part of our extended family. This personal connection allows us to capture authentic emotions and create images that resonate deeply with your unique story.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision Section */}
      <div className="py-20 bg-forest-green text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
                Our Mission
              </h2>
              <p className="text-cream text-lg leading-relaxed">
                To capture life's most precious moments with artistic excellence, creativity, and technical precision. We strive to create visual narratives that resonate emotionally and stand the test of time, providing our clients with heirloom-quality photographs and films that preserve their memories for generations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
                Our Vision
              </h2>
              <p className="text-cream text-lg leading-relaxed">
                To be recognized as the premier photography and videography studio in Gujarat, setting new standards for creative storytelling and customer satisfaction. We envision expanding our services while maintaining the personal touch and attention to detail that defines our brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Vision Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-8">
            Our Vision for Tomorrow
          </h2>
          <p className="text-xl text-cream max-w-4xl mx-auto mb-12">
            Today, The Flash Photofilms stands as Gujarat's trusted name in luxury wedding photography and cinematic wedding films. 
            We continue to push creative boundaries, embracing new technologies while maintaining the emotional authenticity 
            that defines our work. Our commitment to excellence ensures that every couple receives personalized attention 
            and unparalleled quality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8">
              <div className="text-6xl font-bold text-soft-gold mb-4">550+</div>
              <div className="text-xl text-ivory">Beautiful Stories Captured</div>
            </div>
            <div className="p-8">
              <div className="text-6xl font-bold text-soft-gold mb-4">6+</div>
              <div className="text-xl text-ivory">Years Of Experience</div>
            </div>
            <div className="p-8">
              <div className="text-6xl font-bold text-soft-gold mb-4">Gujarat<br />To Worldwide</div>
              <div className="text-xl text-ivory">Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
            Capturing Your Timeless Story
          </h2>
          <p className="text-xl text-cream mb-10 max-w-3xl mx-auto">
            Every click of our shutter is a testament to Mohit's journey from a mechanical engineer to 
            Gujarat's premier Wedding Photographer. When you choose The Flash Photofilms, you're not just 
            hiring a Wedding Photography service – you're partnering with someone who understands that 
            your wedding day deserves to be preserved with the same passion, dedication, and artistry 
            that built our brand.
          </p>
          <p className="text-xl text-soft-gold italic">
            "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… 
            It remembers little things, long after you have forgotten everything." - Mohamed A. Said
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6">
            Ready to Preserve Your Story?
          </h2>
          <p className="text-xl text-cream mb-10 max-w-2xl mx-auto">
            Let's create timeless memories together. Contact us to discuss your special day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/booking" 
              className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors text-lg"
            >
              Book Your Session
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-block bg-transparent border-2 border-soft-gold text-soft-gold px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}