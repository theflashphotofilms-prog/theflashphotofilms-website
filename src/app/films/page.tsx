'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FilmsPage() {
  const filmSamples = [
    { id: 1, title: "Royal Rajasthani Wedding", duration: "28:45", location: "Udaipur Palace", date: "May 2024", thumbnail: "/images/films/film-1.jpg" },
    { id: 2, title: "Beachside Destination", duration: "22:10", location: "Maldives Resort", date: "April 2024", thumbnail: "/images/films/film-2.jpg" },
    { id: 3, title: "Heritage Haveli Celebration", duration: "32:15", location: "Jaipur", date: "March 2024", thumbnail: "/images/films/film-3.jpg" },
    { id: 4, title: "Modern Metropolitan", duration: "25:30", location: "Mumbai", date: "February 2024", thumbnail: "/images/films/film-4.jpg" },
    { id: 5, title: "Intimate Garden Ceremony", duration: "18:45", location: "Bangalore", date: "January 2024", thumbnail: "/images/films/film-5.jpg" },
    { id: 6, title: "Traditional Temple Wedding", duration: "35:20", location: "Tamil Nadu", date: "December 2023", thumbnail: "/images/films/film-6.jpg" },
  ];

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
            Timeless cinematic experiences that tell your love story in motion
          </p>
        </div>
      </div>

      {/* Film Showcase */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmSamples.map((film) => (
              <div key={film.id} className="luxury-card overflow-hidden rounded-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={film.thumbnail} 
                    alt={film.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover"
                    priority={film.id <= 2} // Prioritize first 2 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-soft-gold flex items-center justify-center hover:bg-soft-gold-light transition-colors">
                      <svg className="w-8 h-8 text-forest-green ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-soft-gold mb-2">{film.title}</h3>
                  <div className="flex justify-between text-cream text-sm mb-4">
                    <span>{film.duration}</span>
                    <span>{film.date}</span>
                  </div>
                  <p className="text-ivory mb-4">{film.location}</p>
                  <Link 
                    href={`/films/${film.id}`}
                    className="inline-flex items-center text-soft-gold hover:text-ivory transition-colors"
                  >
                    Watch Film
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/contact?service=film"
              className="btn-primary bg-soft-gold text-forest-green px-8 py-4 rounded-pill font-medium"
            >
              Commission Your Film
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-forest-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-16 text-center">Our Cinematic Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Story Consultation",
                description: "Understanding your love story and vision",
                icon: (
                  <svg className="w-10 h-10 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: "Pre-Production",
                description: "Planning shots and timeline",
                icon: (
                  <svg className="w-10 h-10 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Cinematography",
                description: "Capturing your story in motion",
                icon: (
                  <svg className="w-10 h-10 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                )
              },
              {
                title: "Post Production",
                description: "Crafting your cinematic experience",
                icon: (
                  <svg className="w-10 h-10 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-soft-gold mb-2">{step.title}</h3>
                <p className="text-ivory">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Ready to Create Your Cinematic Experience?
          </h2>
          <p className="text-xl text-cream mb-10">
            Let's discuss how we can craft your unique love story into a timeless film
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="btn-primary bg-soft-gold text-forest-green px-8 py-4 rounded-pill font-medium"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/packages"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-8 py-4 rounded-pill font-medium"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}