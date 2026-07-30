import Link from 'next/link';

const ContactSection = () => {
  const phoneNumber = "+91 79849 41331";

  return (
    <section className="py-20 bg-gradient-to-r from-forest-green to-black text-ivory">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ivory sm:text-4xl">
          Ready to capture your special moments?
        </h2>
        <p className="mt-4 text-xl text-soft-gold max-w-3xl mx-auto">
          Book your event with us today to secure your date
        </p>
        <div className="mt-10">
          <Link
            href="/booking"
            className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-forest-green transition-colors"
          >
            Book Now
          </Link>
          <Link
            href="/packages"
            className="inline-block bg-transparent border-2 border-soft-gold text-soft-gold px-8 py-4 rounded-xl font-bold hover:bg-soft-gold hover:text-forest-green transition-colors ml-4"
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