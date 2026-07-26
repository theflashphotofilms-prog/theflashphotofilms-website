import Link from 'next/link';

const ContactSection = () => {
  const phoneNumber = "+91 79849 41331";

  return (
    <section className="py-20 bg-gradient-to-r from-dark-maroon to-black text-white">
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
            className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-dark-maroon transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/packages"
            className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors ml-4"
          >
            View Packages
          </Link>
        </div>
        <p className="mt-6 text-medium-gray">
          Have questions? Call us at {phoneNumber}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;