import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCamera, FaVideo, FaLightbulb, FaGraduationCap, FaMusic, FaBaby, FaRing, FaBirthdayCake } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Other Services - The Flash Photofilms',
  description: 'Explore our diverse range of photography and videography services beyond weddings. From corporate events to family portraits, we capture every moment with excellence.',
};

const OtherServices = () => {
  const services = [
    {
      title: "Corporate Events",
      description: "Professional photography for conferences, seminars, product launches, and business gatherings.",
      icon: <FaCamera className="text-4xl text-gold" />,
      features: ["Conference Coverage", "Product Launches", "Team Building Events", "Annual Meetings"]
    },
    {
      title: "Fashion Photography",
      description: "Creative and artistic fashion shoots for portfolios, campaigns, and personal branding.",
      icon: <FaLightbulb className="text-4xl text-gold" />,
      features: ["Portfolio Creation", "Campaign Shoots", "Personal Branding", "Editorial Work"]
    },
    {
      title: "Educational Institution",
      description: "Specialized photography services for schools, colleges, and educational events.",
      icon: <FaGraduationCap className="text-4xl text-gold" />,
      features: ["School Events", "Graduations", "Portraits", "Campus Life"]
    },
    {
      title: "Music Events",
      description: "Dynamic coverage of concerts, music festivals, and live performances.",
      icon: <FaMusic className="text-4xl text-gold" />,
      features: ["Concerts", "Music Festivals", "Artist Portraits", "Behind the Scenes"]
    },
    {
      title: "Family Portraits",
      description: "Timeless family photographs capturing precious moments and connections.",
      icon: <FaRing className="text-4xl text-gold" />,
      features: ["Family Sessions", "Outdoor Shoots", "Studio Portraits", "Seasonal Themes"]
    },
    {
      title: "Pet Photography",
      description: "Heartwarming images of your beloved pets in their natural environment.",
      icon: <FaBaby className="text-4xl text-gold" />,
      features: ["Indoor Sessions", "Outdoor Adventures", "Pet Portraits", "Family Pet Photos"]
    }
  ];

  const faqItems = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 months in advance for popular dates, especially for weekend events."
    },
    {
      question: "What is included in the other services packages?",
      answer: "Packages typically include professional photography/videography, high-resolution digital files, online gallery access, and customized deliverables based on your specific needs."
    },
    {
      question: "Do you travel for events?",
      answer: "Yes, we offer services nationwide. Travel fees may apply for locations beyond 50km from our base in Ankleshwar."
    },
    {
      question: "How long does it take to receive the final deliverables?",
      answer: "Photo delivery typically takes 2-4 weeks, while video editing may take 4-6 weeks depending on the complexity of the project."
    },
    {
      question: "Can I request specific shots or themes?",
      answer: "Absolutely! We encourage clients to share their ideas, preferences, and shot lists to ensure we capture everything that matters to you."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-gradient-to-br from-dark-maroon to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gold sm:text-5xl">
            Other Services
          </h1>
          <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
            Explore our diverse range of photography and videography services beyond weddings. From corporate events to family portraits, we capture every moment with excellence.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-maroon sm:text-4xl">Our Specialized Services</h2>
            <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
              Each service is tailored to meet the unique needs of different occasions and subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-gold transition-colors duration-300">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center text-dark-maroon mb-4">{service.title}</h3>
                  <p className="text-medium-gray text-center mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-medium-gray">
                        <span className="text-gold mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-maroon sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
              A seamless journey from concept to final deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Consultation", desc: "Understanding your needs and vision" },
              { step: 2, title: "Planning", desc: "Detailed planning and logistics" },
              { step: 3, title: "Execution", desc: "Professional service delivery" },
              { step: 4, title: "Delivery", desc: "High-quality deliverables" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dark-maroon text-gold rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark-maroon mb-2">{item.title}</h3>
                <p className="text-medium-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-maroon sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
              Everything you need to know about our other services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <div key={index} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-dark-maroon">{faq.question}</h3>
                  <p className="mt-2 text-medium-gray">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-maroon to-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to capture your special moments?
          </h2>
          <p className="mt-4 text-xl text-gold max-w-3xl mx-auto">
            Contact us today to discuss your photography needs
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-dark-maroon px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-white transition-colors duration-300 mr-4 mb-4"
            >
              Get in Touch
            </Link>
            <Link
              href="/packages"
              className="inline-block bg-transparent text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-dark-maroon transition-colors duration-300"
            >
              View Packages
            </Link>
          </div>
          <p className="mt-6 text-medium-gray">
            Have questions? Call us at +91 79849 41331
          </p>
        </div>
      </section>
    </div>
  );
};

export default OtherServices;