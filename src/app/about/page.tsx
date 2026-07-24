import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <SEO 
        title="About The Flash Photofilms - Professional Photography & Videography Services" 
        description="Learn about The Flash Photofilms, a premier photography and videography service specializing in weddings, events, and commercial projects." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            About The Flash Photofilms
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Crafting timeless memories through the art of photography and videography
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-full flex items-center justify-center text-gray-500">
                About Us Image
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-dark-maroon mb-6">
              Our Story
            </h2>
            <p className="text-medium-gray mb-6">
              Founded in 2010, The Flash Photofilms began as a passion project between two friends who shared a love for 
              capturing life&apos;s most precious moments. What started as weekend hobby has evolved into one of the region&apos;s 
              most respected photography and videography services.
            </p>
            <p className="text-medium-gray mb-6">
              Today, our team combines technical expertise with artistic vision to deliver stunning visual narratives 
              that preserve your most cherished memories. We believe that every moment deserves to be captured with 
              authenticity, creativity, and meticulous attention to detail.
            </p>
            <p className="text-medium-gray">
              From intimate gatherings to grand celebrations, we approach each project with the same dedication to 
              excellence that has defined The Flash Photofilms since day one.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-dark-maroon text-center mb-16">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-maroon mb-4">Passion</h3>
              <p className="text-medium-gray">
                We pour our heart into every shot, driven by our genuine love for the art of photography.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-maroon mb-4">Excellence</h3>
              <p className="text-medium-gray">
                We never compromise on quality, delivering exceptional results that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-maroon mb-4">Integrity</h3>
              <p className="text-medium-gray">
                We build lasting relationships through trust, transparency, and respect.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-light-gray rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-dark-maroon text-center mb-6">
            Meet Our Team
          </h2>
          <p className="text-medium-gray text-center max-w-3xl mx-auto mb-12">
            Our talented photographers and videographers bring diverse skills and perspectives to every project, 
            ensuring that your story is told through multiple creative lenses.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="mx-auto mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-dark-maroon">Team Member {item}</h3>
                <p className="text-medium-gray text-sm">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;