'use client';

import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock gallery data - in a real app, this would come from props or an API
  const galleryItems = [
    { id: 1, src: '/placeholder-gallery-1.jpg', title: 'Wedding Ceremony' },
    { id: 2, src: '/placeholder-gallery-2.jpg', title: 'Pre-Wedding Shoot' },
    { id: 3, src: '/placeholder-gallery-3.jpg', title: 'Engagement Session' },
    { id: 4, src: '/placeholder-gallery-4.jpg', title: 'Baby Shower' },
    { id: 5, src: '/placeholder-gallery-5.jpg', title: 'Corporate Event' },
    { id: 6, src: '/placeholder-gallery-6.jpg', title: 'Portrait Session' },
    { id: 7, src: '/placeholder-gallery-7.jpg', title: 'Drone Coverage' },
    { id: 8, src: '/placeholder-gallery-8.jpg', title: 'Cinematic Video' },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryItems[index].src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex].src);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === galleryItems.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex].src);
  };

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D2A97F] mb-4">Our Gallery</h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Browse through our collection of photography work and see the magic we create
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-[#3A5A40] bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
            onClick={closeLightbox}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#3A5A40] bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#3A5A40] bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={800}
              height={600}
              className="object-contain max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;