import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-light-gray flex items-center">
      <SEO 
        title="Thank You - The Flash Photofilms" 
        description="Thank you for contacting The Flash Photofilms. We appreciate your interest in our photography services."
        url="https://www.theflashphotofilms.com/thank-you"
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gold/10 mb-6">
            <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-dark-maroon mb-4">Thank You!</h1>
          <p className="text-xl text-medium-gray mb-6">
            Your message has been sent successfully. We appreciate your interest in our photography services.
          </p>
          <p className="text-medium-gray mb-8">
            One of our representatives will contact you within 24 hours to discuss your photography needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/" 
              className="bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
            >
              Back to Home
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-dark-maroon text-dark-maroon px-8 py-4 rounded-xl font-bold hover:bg-dark-maroon hover:text-white transition-colors"
            >
              Contact Again
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default ThankYouPage;