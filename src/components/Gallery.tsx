'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Mock gallery data
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/gallery/wedding1.jpg', alt: 'Wedding Ceremony', category: 'wedding' },
    { id: 2, src: '/gallery/wedding2.jpg', alt: 'Wedding Reception', category: 'wedding' },
    { id: 3, src: '/gallery/portrait1.jpg', alt: 'Portrait Session', category: 'portrait' },
    { id: 4, src: '/gallery/event1.jpg', alt: 'Corporate Event', category: 'event' },
    { id: 5, src: '/gallery/wedding3.jpg', alt: 'Wedding Couple', category: 'wedding' },
    { id: 6, src: '/gallery/portrait2.jpg', alt: 'Family Portrait', category: 'portrait' },
    { id: 7, src: '/gallery/event2.jpg', alt: 'Product Launch', category: 'event' },
    { id: 8, src: '/gallery/wedding4.jpg', alt: 'Wedding Details', category: 'wedding' },
    { id: 9, src: '/gallery/portrait3.jpg', alt: 'Engagement Session', category: 'portrait' },
    { id: 10, src: '/gallery/event3.jpg', alt: 'Conference', category: 'event' },
    { id: 11, src: '/gallery/wedding5.jpg', alt: 'Wedding Venue', category: 'wedding' },
    { id: 12, src: '/gallery/portrait4.jpg', alt: 'Lifestyle Portrait', category: 'portrait' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeImage();
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        } else if (e.key === 'ArrowRight') {
          navigateImage('next');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-dark-maroon mb-4">Our Gallery</h2>
        <p className="text-medium-gray max-w-2xl mx-auto">
          Explore our collection of memorable moments captured through our lens
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['all', 'wedding', 'portrait', 'event'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full capitalize ${
              filter === category
                ? 'bg-dark-maroon text-white'
                : 'bg-white text-dark-maroon border border-dark-maroon hover:bg-dark-maroon hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
            onClick={() => openImage(image)}
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-maroon/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white bg-dark-maroon bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
            >
              <FaTimes />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-dark-maroon bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
            >
              <FaChevronLeft />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-dark-maroon bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
            >
              <FaChevronRight />
            </button>
            
            <div className="flex justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="object-contain max-h-[80vh]"
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="font-medium">{selectedImage.alt}</p>
              <p className="text-sm opacity-80">{selectedImage.id} of {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;