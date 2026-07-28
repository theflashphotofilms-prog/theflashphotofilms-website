'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/images/about/about-hero.jpg')"}}>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-green/80 to-forest-green/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ivory mb-6">
            About The Flash Photofilms
          </h1>
          <p className="text-xl md:text-2xl text-soft-gold max-w-4xl mx-auto">
            Luxury Wedding Photography & Cinematic Films Across Gujarat & India
          </p>
        </div>
      </div>

      {/* Founder Story Section */}
      <section className="py-20 bg-forest-green text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="luxury-card overflow-hidden rounded-xl">
              <Image 
                src="/images/about/founder.jpg" 
                alt="Founder of The Flash Photofilms" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-gold">Our Founder's Story</h2>
              <p className="text-lg text-ivory leading-relaxed">
                Founded with a passion for capturing life's most precious moments, The Flash Photofilms began as a dream 
                to transform ordinary events into extraordinary memories. With over a decade of experience in luxury 
                wedding photography and cinematic films, our founder has traveled across Gujarat and India, documenting 
                countless love stories with artistic precision and emotional depth.
              </p>
              <p className="text-lg text-ivory leading-relaxed">
                What started as a personal passion for storytelling has evolved into a renowned luxury wedding 
                photography and film studio, trusted by couples from all walks of life to preserve their most 
                cherished moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-ivory text-forest-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green mb-6">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Emotional Storytelling",
                description: "We believe every wedding has a unique story worth telling. Our approach focuses on capturing the raw emotions, stolen glances, and fleeting moments that make your love story uniquely yours."
              },
              {
                title: "Artistic Excellence",
                description: "With an eye for composition, lighting, and timing, we create images that transcend mere documentation and become timeless art pieces for your home."
              },
              {
                title: "Cinematic Vision",
                description: "Our films weave together visual storytelling and audio elements to create immersive narratives that transport you back to the magic of your special day."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-serif font-bold text-soft-gold mb-4">{item.title}</h3>
                <p className="text-medium-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-forest-green text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-gold">Years of Excellence</h2>
              <p className="text-lg text-ivory leading-relaxed">
                Over the years, we have perfected our craft by continuously evolving with the latest in photography 
                and filmmaking technology. Our team has captured over 500 weddings across diverse locations in 
                Gujarat and India, each presenting unique challenges and opportunities to showcase our artistic vision.
              </p>
              <p className="text-lg text-ivory leading-relaxed">
                Our experience spans various wedding traditions and ceremonies, allowing us to seamlessly blend into 
                any celebration while maintaining our signature style of luxury and sophistication. From intimate 
                ceremonies to grand celebrations, we adapt our approach to honor the uniqueness of each love story.
              </p>
            </div>
            <div className="luxury-card overflow-hidden rounded-xl">
              <Image 
                src="/images/about/experience.jpg" 
                alt="Our Experience" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Storytelling Approach */}
      <section className="py-20 bg-ivory text-forest-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green mb-6">
              Our Approach
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
            <p className="text-xl text-medium-gray max-w-4xl mx-auto">
              We don't just capture weddings. We preserve emotions that become family heirlooms.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="luxury-card p-8 rounded-xl">
              <h3 className="text-2xl font-serif font-bold text-soft-gold mb-4">Cinematic Wedding Films</h3>
              <p className="text-medium-gray">
                Our cinematic films go beyond simple documentation. We create immersive narratives that capture the 
                emotions, atmosphere, and unique story of your wedding day. Through artistic cinematography and 
                thoughtful editing, we craft films that feel like treasured movies of your love story.
              </p>
            </div>
            <div className="luxury-card p-8 rounded-xl">
              <h3 className="text-2xl font-serif font-bold text-soft-gold mb-4">Luxury Wedding Photography</h3>
              <p className="text-medium-gray">
                Our photography approach combines technical excellence with emotional sensitivity, allowing us to 
                document not just what happened, but how it felt. Every frame tells part of your unique journey together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-green text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Start Your Story?
          </h2>
          <p className="text-xl text-cream mb-10">
            Let's discuss how we can capture your unique love story with cinematic excellence
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="btn-primary bg-soft-gold text-forest-green px-8 py-4 rounded-pill font-medium"
            >
              Inquire Now
            </Link>
            <Link 
              href="/portfolio"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-8 py-4 rounded-pill font-medium"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}