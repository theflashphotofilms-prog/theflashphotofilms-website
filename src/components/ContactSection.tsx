import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#3A5A40] to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#D2A97F] mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-medium-gray max-w-2xl mx-auto mb-8">
          Contact us today to discuss your photography needs and schedule your session
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
          >
            Get in Touch
          </Link>
          <Link 
            href="/faq" 
            className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
          >
            Visit FAQ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;