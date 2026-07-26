'use client';

import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const AboutPage = () => {
  const values = [
    {
      title: "Passion",
      description: "We approach every project with genuine enthusiasm and dedication to capture authentic emotions and moments."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in our work, paying attention to every detail to deliver exceptional results."
    },
    {
      title: "Integrity",
      description: "We believe in transparent communication, fair practices, and delivering on our promises to our clients."
    }
  ];

  const teamMembers = [
    { name: "Mohit Panchal", role: "Founder & Lead Photographer" },
    { name: "Creative Team", role: "Supporting Photographers & Videographers" },
  ];

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="About The Flash Photofilms | Professional Photography Team" 
        description="Learn about The Flash Photofilms, our mission, values, and talented team of photographers dedicated to capturing life's precious moments."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            About The Flash Photofilms
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Discover our story, mission, and the passionate team behind every captured moment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#D2A97F] mb-6">Our Story</h2>
              <p className="text-medium-gray mb-4">
                Founded with a vision to redefine photography and videography services, The Flash Photofilms has grown from a passionate hobby into a full-fledged professional service provider. Our journey began with a simple idea: to capture life's most precious moments in the most artistic and memorable way.
              </p>
              <p className="text-medium-gray mb-4">
                Over the years, we've evolved our skills, upgraded our equipment, and expanded our services while maintaining our core commitment to excellence and customer satisfaction. Today, we're proud to serve clients across Gujarat, bringing their stories to life through our lens.
              </p>
              <p className="text-medium-gray">
                Our team combines technical expertise with artistic vision, ensuring every project receives personalized attention and creative flair. We believe that great photography goes beyond taking pictures—it's about preserving emotions, telling stories, and creating heirlooms that families treasure for generations.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder-about.jpg"
                  alt="The Flash Photofilms Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#D2A97F] text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#D2A97F]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-[#D2A97F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#D2A97F] mb-4">{value.title}</h3>
                <p className="text-medium-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#D2A97F] text-center mb-6">Meet Our Team</h2>
          <p className="text-medium-gray text-center max-w-2xl mx-auto mb-12">
            Our talented professionals bring diverse skills and perspectives to every project, working together to deliver exceptional results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-[#D2A97F]">Team Member {index + 1}</h3>
                  <p className="text-medium-gray">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#D2A97F] mb-8">Ready to Work With Us?</h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto mb-8">
            Let's discuss your photography needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default AboutPage;