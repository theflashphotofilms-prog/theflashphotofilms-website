import { FaCamera, FaVideo, FaUsers, FaBuilding, FaPortrait, FaLandmark, FaMusic, FaGlobeAsia } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCamera className="h-8 w-8 text-gold" />,
      title: "Wedding Photography",
      description: "Capturing your special day with artistic excellence and attention to detail.",
      features: ["Pre-wedding shoot", "Ceremony coverage", "Reception photography", "Candid moments"]
    },
    {
      icon: <FaVideo className="h-8 w-8 text-gold" />,
      title: "Wedding Videography",
      description: "Creating cinematic stories of your wedding day with high-quality video production.",
      features: ["Highlight reel", "Full ceremony", "Interviews", "Drone footage"]
    },
    {
      icon: <FaPortrait className="h-8 w-8 text-gold" />,
      title: "Portrait Sessions",
      description: "Professional portrait photography for individuals, couples, and families.",
      features: ["Studio sessions", "Outdoor shoots", "Professional retouching", "Multiple outfit changes"]
    },
    {
      icon: <FaUsers className="h-8 w-8 text-gold" />,
      title: "Event Coverage",
      description: "Comprehensive photography and videography for corporate events, parties, and celebrations.",
      features: ["Conference coverage", "Product launches", "Corporate portraits", "Event highlights"]
    },
    {
      icon: <FaBuilding className="h-8 w-8 text-gold" />,
      title: "Commercial Photography",
      description: "Professional product, architectural, and commercial photography services.",
      features: ["Product photography", "Architectural shots", "Brand imagery", "Marketing materials"]
    },
    {
      icon: <FaLandmark className="h-8 w-8 text-gold" />,
      title: "Destination Weddings",
      description: "Specialized services for destination weddings and exotic locations.",
      features: ["International coverage", "Local expertise", "Travel packages", "Cultural sensitivity"]
    },
    {
      icon: <FaMusic className="h-8 w-8 text-gold" />,
      title: "Music Events",
      description: "Dynamic coverage of concerts, music festivals, and live performances.",
      features: ["Live performance", "Backstage access", "Artist portraits", "Crowd atmosphere"]
    },
    {
      icon: <FaGlobeAsia className="h-8 w-8 text-gold" />,
      title: "Cultural Ceremonies",
      description: "Respectful and authentic documentation of cultural and religious ceremonies.",
      features: ["Traditional customs", "Multi-day coverage", "Cultural advisors", "Authentic representation"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-gold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-4 text-4xl leading-10 font-bold text-gold sm:text-5xl">
            Photography & Videography Services
          </p>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Professional, creative, and comprehensive coverage for all your special moments and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-light-gray rounded-2xl p-8 h-full border border-gray-200 hover:border-gold transition-colors duration-300"
            >
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gold text-center mb-4">{service.title}</h3>
              <p className="text-medium-gray text-center mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-medium-gray">
                    <span className="text-gold mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;