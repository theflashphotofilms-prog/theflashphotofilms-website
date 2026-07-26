import Link from 'next/link';

const Hero = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 79849 41331";

  return (
    <section className="relative bg-gradient-to-br from-[#3A5A40] to-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A5A40]/70 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Capturing Life&apos;s <span className="text-[#D2A97F]">Precious Moments</span> with Artistic Excellence
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto mb-10">
            Professional wedding, event, and commercial photography &amp; videography services by <span className="text-[#D2A97F] font-medium">Mohit Panchal</span>. Creating timeless memories that last forever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#3A5A40] transition-colors duration-300 text-center"
            >
              Book Now
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors duration-300 text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#D2A97F] mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 20q-2.28 0-4.04-1.76T.7 14.5Q.7 11 4 7.7l.7.7q-.15.55-.15 1.15 0 1.2.83 2.03.82.83 2.02.83 1.2 0 2.03-.83.82-.83.82-2.03 0-.6-.15-1.15l.7-.7Q13 7 16.5 7q3.3 3.3 3.3 6.8 0 3.74-1.76 5.5T14.5 20.7q-.6 0-1.15-.15t-1.15-.15l-.7.7q.15.55.15 1.15 0 .6-.15 1.15t-.15 1.15z"/>
              </svg>
              <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-xl font-medium hover:text-[#D2A97F] transition-colors">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center">
              <div className="bg-[#D2A97F] rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-[#D2A97F] font-bold">Mohit Panchal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;