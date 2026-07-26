import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with our premium wedding photography services, featuring traditional and candid styles.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/packages"
    },
    {
      title: "Pre-Wedding Shoots",
      description: "Beautiful pre-wedding photos that celebrate your love story with artistic excellence.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      href: "/pre-wedding-packages"
    },
    {
      title: "Engagement & Baby Shower",
      description: "Special moments deserve special memories - capture them with our specialized photography.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      href: "/engagement-babyshower-packages"
    },
    {
      title: "Portrait Sessions",
      description: "Professional portrait photography for individuals, couples, and families.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Event Coverage",
      description: "Comprehensive photography and videography for corporate events, parties, and celebrations.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Commercial Photography",
      description: "Professional commercial photography for businesses, products, and brands.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Video Production",
      description: "Cinematic videography services for weddings, events, and promotional content.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      href: "/contact"
    },
    {
      title: "Drone Coverage",
      description: "Aerial photography and videography services for unique perspectives and stunning shots.",
      icon: (
        <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/contact"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-[#D2A97F] tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-4 text-4xl leading-10 font-bold text-[#D2A97F] sm:text-5xl">
            Photography & Videography Services
          </p>
          <p className="mt-4 text-xl text-medium-gray">
            Comprehensive solutions for all your special occasions and professional needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group"
            >
              <div className="bg-light-gray rounded-2xl p-8 h-full border border-gray-200 hover:border-[#D2A97F] transition-colors duration-300">
                <div className="bg-[#D2A97F]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D2A97F] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#D2A97F] text-center mb-4">{service.title}</h3>
                <p className="text-medium-gray text-center">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;