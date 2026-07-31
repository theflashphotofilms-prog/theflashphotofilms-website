import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-forest-green mb-4">Find The Flash Photofilms</h2>
          <p className="text-lg text-forest-green max-w-2xl mx-auto">
            Visit our studio and let's create beautiful memories together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-soft-gold">
          <div className="relative w-full h-0 pb-[75%]"> {/* Aspect ratio 4:3 */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.4286781366286!2d73.03119127518117!3d21.608213180190074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023b7877d6257%3A0x7eb933a58ed5a7e2!2sTheflashphotofilms!5e0!3m2!1sen!2sin!4v1785482975710!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;