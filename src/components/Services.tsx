const Services = () => {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our professional wedding photography services.',
      icon: '📸',
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portrait sessions for individuals, families, and corporate headshots.',
      icon: '👤',
    },
    {
      title: 'Event Coverage',
      description: 'Comprehensive event coverage for corporate events, parties, and celebrations.',
      icon: '🎬',
    },
    {
      title: 'Video Production',
      description: 'High-quality video production services to bring your vision to life.',
      icon: '🎥',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-gold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-4 text-4xl leading-10 font-bold text-dark-maroon sm:text-5xl">
            Premium Photography & Videography Services
          </p>
          <p className="mt-6 max-w-2xl text-xl text-medium-gray lg:mx-auto">
            We offer a wide range of professional photography and videography services tailored to your unique needs.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white overflow-hidden rounded-xl border border-gray-100"
              >
                <div className="p-8">
                  <div className="text-5xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-dark-maroon text-center mb-4">{service.title}</h3>
                  <p className="text-medium-gray text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;