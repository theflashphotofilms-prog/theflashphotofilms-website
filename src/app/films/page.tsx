import type { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata: Metadata = {
  title: 'Film Services | The Flash Photofilms',
  description: 'Explore our cinematic film services capturing life\'s precious moments with storytelling excellence.',
  openGraph: {
    title: 'Film Services | The Flash Photofilms',
    description: 'Explore our cinematic film services capturing life\'s precious moments with storytelling excellence.',
    type: 'website',
    url: 'https://www.theflashphotofilms.com/films',
  },
  alternates: {
    canonical: 'https://www.theflashphotofilms.com/films',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-ivory text-forest-green">
      <SEO 
        title="Film Services | The Flash Photofilms" 
        description="Explore our cinematic film services capturing life's precious moments with storytelling excellence."
        url="https://www.theflashphotofilms.com/films"
      />
      
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Cinematic Films
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Bringing your story to life through the art of cinematic filmmaking
          </p>
        </div>
      </div>

      {/* Film Philosophy */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-6">
                Our Cinematic Approach
              </h2>
              <p className="text-medium-gray text-lg mb-6">
                At The Flash Photofilms, we believe that every moment deserves to be captured with cinematic excellence. Our film services go beyond traditional videography to create narrative-driven pieces that tell your unique story with emotional depth and artistic vision.
              </p>
              <p className="text-medium-gray text-lg mb-8">
                Using advanced camera techniques, professional lighting, and cinematic composition, we craft films that feel like feature movies while preserving the authenticity and emotions of your special day.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-forest-green/10 px-4 py-2 rounded-lg">
                  <span className="text-forest-green font-medium">Storytelling Focus</span>
                </div>
                <div className="bg-forest-green/10 px-4 py-2 rounded-lg">
                  <span className="text-forest-green font-medium">Cinematic Style</span>
                </div>
                <div className="bg-forest-green/10 px-4 py-2 rounded-lg">
                  <span className="text-forest-green font-medium">Emotional Depth</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
              Cinematic Film Concept
            </div>
          </div>
        </div>
      </div>

      {/* Film Features */}
      <div className="py-20 bg-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-6">
              What Makes Our Films Special
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Features that set our cinematic films apart from traditional videography
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-forest-green/20">
              <div className="text-soft-gold text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold text-forest-green mb-3">Narrative Structure</h3>
              <p className="text-medium-gray">
                We structure your film with a clear beginning, middle, and end, creating a cohesive story that flows naturally and keeps viewers engaged.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-forest-green/20">
              <div className="text-soft-gold text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold text-forest-green mb-3">Advanced Techniques</h3>
              <p className="text-medium-gray">
                Using cinematic techniques like slow motion, time-lapse, drone footage, and creative angles to add visual interest and dramatic effect.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-forest-green/20">
              <div className="text-soft-gold text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold text-forest-green mb-3">Color Grading</h3>
              <p className="text-medium-gray">
                Professional color grading gives your film a polished, movie-like appearance with consistent and appealing color tones throughout.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-forest-green/20">
              <div className="text-soft-gold text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold text-forest-green mb-3">Audio Design</h3>
              <p className="text-medium-gray">
                Careful attention to audio quality, mixing ceremony audio with music to create an immersive experience that matches the visuals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-forest-green/20">
              <div className="text-soft-gold text-4xl font-bold mb-4">05</div>
              <h3 className="text-xl font-bold text-forest-green mb-3">Music Integration</h3>
              <p className="text-medium-gray">
                Thoughtful selection and integration of music that enhances the emotional impact and pacing of your film.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-forest-green/20">
              <div className="text-soft-gold text-4xl font-bold mb-4">06</div>
              <h3 className="text-xl font-bold text-forest-green mb-3">Story Arc</h3>
              <p className="text-medium-gray">
                Each film follows a narrative arc with peaks and valleys of emotion, creating a satisfying and memorable viewing experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Film Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-6">
              Our Film Creation Process
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              From consultation to final delivery, we ensure a seamless experience
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Pre-Production Planning
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="text-soft-gold text-2xl font-bold mb-2">Phase 1</div>
                <h3 className="text-2xl font-bold text-forest-green mb-3">Pre-Production Planning</h3>
                <p className="text-medium-gray">
                  We begin with a detailed consultation to understand your vision, preferences, and key moments to capture. This includes timeline planning, shot lists, and coordination with other vendors.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Cinematic Capture
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="text-soft-gold text-2xl font-bold mb-2">Phase 2</div>
                <h3 className="text-2xl font-bold text-forest-green mb-3">Cinematic Capture</h3>
                <p className="text-medium-gray">
                  On your event day, our team uses multiple cameras, specialized equipment, and cinematic techniques to capture not just moments but the story unfolding.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Post-Production Magic
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="text-soft-gold text-2xl font-bold mb-2">Phase 3</div>
                <h3 className="text-2xl font-bold text-forest-green mb-3">Post-Production Magic</h3>
                <p className="text-medium-gray">
                  Our editors craft your film with careful attention to pacing, music, and visual storytelling. Multiple rounds of revisions ensure your complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-forest-green text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Bring Your Story to Life
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Experience the difference of cinematic filmmaking for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/booking" 
              className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors text-lg"
            >
              Book Film Service
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-block bg-transparent border-2 border-soft-gold text-soft-gold px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors text-lg"
            >
              Watch Samples
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}