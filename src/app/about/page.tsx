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

      {/* Through My Lens Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">
            Through My Lens
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto mb-16">
            A few thoughts that inspire the way I capture memories.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Note 1 */}
            <div 
              className="bg-yellow-100 p-6 rounded-lg shadow-lg transform rotate-1 hover:shadow-xl transition-shadow duration-300 text-center text-black font-serif"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <p className="text-lg italic mb-4">
                "Duniya mein sirf photographer hi aisa insaan hota hai jo aapko beete hue waqt ko phir se jeene ka mauka deta hai."
              </p>
              <p className="text-sm font-normal">— Mohit Panchal</p>
            </div>
            
            {/* Note 2 */}
            <div 
              className="bg-pink-100 p-6 rounded-lg shadow-lg transform -rotate-1 hover:shadow-xl transition-shadow duration-300 text-center text-black font-serif"
              style={{ transform: 'rotate(2deg)' }}
            >
              <p className="text-lg italic mb-4">
                "Aapki wedding mein sirf photographer hi woh shakhs hota hai jo aapko aapki poori shaadi dobara dikha sakta hai."
              </p>
              <p className="text-sm font-normal">— Mohit Panchal</p>
            </div>
            
            {/* Note 3 */}
            <div 
              className="bg-blue-100 p-6 rounded-lg shadow-lg transform rotate-2 hover:shadow-xl transition-shadow duration-300 text-center text-black font-serif"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <p className="text-lg italic mb-4">
                "Zindagi dobara nahi milti. Isliye har khoobsurat pal ko camera mein qaid kar lo. Kya pata kal inhi yaadon ko dekhkar phir se jeene ka mann kar jaaye."
              </p>
              <p className="text-sm font-normal">— Mohit Panchal</p>
            </div>
            
            {/* Note 4 */}
            <div 
              className="bg-green-100 p-6 rounded-lg shadow-lg transform -rotate-2 hover:shadow-xl transition-shadow duration-300 text-center text-black font-serif"
              style={{ transform: 'rotate(1deg)' }}
            >
              <p className="text-lg italic mb-4">
                "Camera bhi zindagi ka ek sabak sikhata hai — negative cheezon ko delete karo aur achhi yaadon ko hamesha save rakho."
              </p>
              <p className="text-sm font-normal">— Mohit Panchal</p>
            </div>
            
            {/* Note 5 */}
            <div 
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform rotate-1 hover:shadow-xl transition-shadow duration-300 text-center text-black font-serif col-span-2 lg:col-span-1"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <p className="text-lg italic mb-4">
                "Photography sirf ek art nahi hai. Jab aap photography karte ho, tab aap lamhon ko sirf camera mein nahi, balki apni yaadon mein bhi hamesha ke liye qaid kar lete ho."
              </p>
              <p className="text-sm font-normal">— Mohit Panchal</p>
            </div>
          </div>
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