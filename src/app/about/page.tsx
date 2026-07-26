import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - The Flash Photofilms',
  description: 'Learn about The Flash Photofilms, a premier photography and videography service dedicated to capturing life\'s most precious moments with artistic excellence.',
};

const About = () => {
  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for perfection in every frame, delivering exceptional quality in each photograph."
    },
    {
      title: "Creativity",
      description: "We bring innovative perspectives and artistic vision to every project."
    },
    {
      title: "Authenticity",
      description: "We capture genuine emotions and authentic moments that tell your unique story."
    },
    {
      title: "Reliability",
      description: "We are committed to professionalism and punctuality, ensuring peace of mind."
    }
  ];

  const teamMembers = [
    {
      name: "Mohit Panchal",
      position: "Founder & Lead Photographer",
      bio: "With over 10 years of experience in wedding and event photography, Mohit brings a unique artistic vision to every shoot. His expertise lies in capturing candid moments and creating cinematic narratives."
    },
    {
      name: "Anjali Sharma",
      position: "Creative Director",
      bio: "Anjali specializes in visual storytelling and post-production. She ensures that every image reflects the couple's unique love story with attention to detail and artistic flair."
    },
    {
      name: "Rajesh Kumar",
      position: "Videography Specialist",
      bio: "Rajesh is our expert in cinematography and video editing. He creates compelling visual narratives that bring your special day to life in motion."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-gradient-to-br from-dark-maroon to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gold sm:text-5xl">
            About The Flash Photofilms
          </h1>
          <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
            Capturing life's most precious moments with artistic excellence and creative passion.
          </p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/about-us.jpg"
                  alt="The Flash Photofilms Team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-maroon to-transparent rounded-xl opacity-70"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-maroon mb-6">Our Story</h2>
              <p className="text-medium-gray mb-6">
                Founded in 2015, The Flash Photofilms began as a passion project driven by a love for storytelling through the lens. What started as a small team of enthusiasts has grown into one of the region's most respected photography and videography services.
              </p>
              <p className="text-medium-gray mb-6">
                Our journey has been marked by innovation, creativity, and an unwavering commitment to excellence. We've had the privilege of capturing thousands of precious moments, from intimate ceremonies to grand celebrations.
              </p>
              <p className="text-medium-gray">
                Today, we continue to push the boundaries of visual storytelling, incorporating the latest technology and artistic techniques to create timeless memories for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-maroon">Our Core Values</h2>
            <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-maroon mb-4">{value.title}</h3>
                <p className="text-medium-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-maroon">Meet Our Team</h2>
            <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
              Passionate professionals dedicated to capturing your story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-8">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
                  <h3 className="text-lg font-bold text-dark-maroon">Team Member {index + 1}</h3>
                  <p className="text-gold font-medium mb-4">{member.position}</p>
                  <p className="text-medium-gray">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-dark-maroon to-gold text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-gold">Happy Couples</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10+</div>
              <div className="text-gold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-gold">Photos Captured</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-gold">Locations Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark-maroon mb-8">Ready to Work With Us?</h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto mb-12">
            Experience the difference that passion, professionalism, and creativity can make for your special day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;