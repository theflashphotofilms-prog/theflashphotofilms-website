'use client';

import React from 'react';
import Image from 'next/image';

const InstagramFeed = () => {
  // Placeholder data for Instagram posts - in a real implementation, this would come from an API
  const instagramPosts = [
    {
      id: '1',
      imageUrl: '/images/portfolio/wedding-landing.jpg', // Using existing images as placeholders
      caption: 'Beautiful wedding moment captured perfectly',
      permalink: '#', // This would be the actual Instagram post URL
      timestamp: '2024-01-15T10:30:00Z',
    },
    {
      id: '2',
      imageUrl: '/images/portfolio/prewedding-landing.jpg',
      caption: 'Romantic pre-wedding photoshoot',
      permalink: '#',
      timestamp: '2024-01-12T14:45:00Z',
    },
    {
      id: '3',
      imageUrl: '/images/portfolio/engagement-landing.jpg',
      caption: 'Joyful engagement celebration',
      permalink: '#',
      timestamp: '2024-01-10T09:15:00Z',
    },
    {
      id: '4',
      imageUrl: '/images/portfolio/babyshower-landing.jpg',
      caption: 'Sweet baby shower memories',
      permalink: '#',
      timestamp: '2024-01-08T16:20:00Z',
    },
    {
      id: '5',
      imageUrl: '/images/portfolio/films-landing.jpg',
      caption: 'Cinematic wedding film preview',
      permalink: '#',
      timestamp: '2024-01-05T11:30:00Z',
    },
    {
      id: '6',
      imageUrl: '/images/portfolio/wedding-landing.jpg',
      caption: 'Elegant ceremony captured',
      permalink: '#',
      timestamp: '2024-01-03T13:45:00Z',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ivory mb-4">Latest From Instagram</h2>
          <p className="text-lg text-soft-gold max-w-3xl mx-auto">
            Follow our journey and explore more beautiful moments captured by The Flash Photofilms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-soft-gold/30"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-ivory text-sm line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/the_flash_photofilms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all duration-300"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;