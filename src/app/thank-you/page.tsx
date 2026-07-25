import Link from 'next/link';
import SEO from '@/components/SEO';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#3A5A40] py-16 flex items-center">
      <SEO 
        title="Thank You | The Flash Photofilms" 
        description="Thank you for contacting The Flash Photofilms. We have received your inquiry and will contact you shortly."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl mb-6">
            Thank You For Contacting The Flash Photofilms
          </h1>
          <p className="text-xl text-[#D2A97F] max-w-2xl mx-auto">
            We have received your inquiry and will contact you shortly.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Link 
            href="/" 
            className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
          >
            Back To Home
          </Link>
          <a 
            href="https://wa.me/7984941331" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;