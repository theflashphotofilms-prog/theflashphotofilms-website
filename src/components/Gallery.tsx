'use client';

import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: number;
  filterCategory?: string; // Optional prop to filter items by category
}

const Gallery = ({ items, columns = 3, filterCategory = 'all' }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    // Filter items based on category if specified
    const filteredItems = filterCategory === 'all' 
      ? items 
      : items.filter(item => item.category === filterCategory);

    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredItems[newIndex]);
  };

  // Filter items based on category if specified
  const filteredItems = filterCategory === 'all' 
    ? items 
    : items.filter(item => item.category === filterCategory);

  return (
    <div>
      <div 
        className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} lg:grid-cols-${Math.min(columns, 4)}`}
      >
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-xl cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <OptimizedImage
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64"
              loading="lazy" // Lazy load gallery images
            />
            {item.title && (
              <div className="p-5 bg-white">
                <h3 className="font-bold text-lg text-dark-maroon">{item.title}</h3>
                {item.description && (
                  <p className="text-medium-gray text-sm mt-1">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-dark-maroon bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
              onClick={closeLightbox}
            >
              ✕
            </button>
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-dark-maroon bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
              onClick={() => navigateImage('prev')}
            >
              ‹
            </button>
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-dark-maroon bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-opacity-100 transition-all duration-300"
              onClick={() => navigateImage('next')}
            >
              ›
            </button>
            
            <div className="flex flex-col items-center">
              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] object-contain rounded-lg"
                priority={true} // Load the selected image with priority
              />
              {selectedImage.title && (
                <h3 className="text-2xl font-bold text-white mt-6 text-center">{selectedImage.title}</h3>
              )}
              {selectedImage.description && (
                <p className="text-gray-200 mt-3 text-center max-w-2xl text-center">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;