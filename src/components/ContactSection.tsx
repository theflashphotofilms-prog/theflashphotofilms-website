import Link from 'next/link';

const ContactSection = () => {
  const phoneNumber = '+91 79849 41331';

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-dark-maroon mb-4">
            Ready to Capture Your Story?
          </h2>
          <p className="text-medium-gray text-lg mb-8 max-w-2xl mx-auto">
            Contact The Flash Photofilms today to discuss your photography needs and schedule your session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
              className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
            >
              Call Now: {phoneNumber}
            </a>
            <Link 
              href="/contact" 
              className="inline-block bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;