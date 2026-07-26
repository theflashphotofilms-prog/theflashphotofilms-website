import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Disclaimer - The Flash Photofilms" 
        description="Disclaimer and terms of use for The Flash Photofilms photography services and website."
        url="https://www.theflashphotofilms.com/disclaimer"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Disclaimer</h1>
          <p className="text-xl text-medium-gray">
            Important information about our photography services and website usage
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Photography Services</h2>
            <p className="text-medium-gray mb-4">
              All photographs captured by The Flash Photofilms remain the intellectual property of The Flash Photofilms. 
              Clients are granted permission to use images for personal use only, unless otherwise agreed upon in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Accuracy of Information</h2>
            <p className="text-medium-gray mb-4">
              While we strive to keep all information on our website accurate and up-to-date, 
              we make no representations or warranties of any kind about the completeness, accuracy, 
              reliability, or suitability of the information contained herein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Limitation of Liability</h2>
            <p className="text-medium-gray mb-4">
              The Flash Photofilms shall not be liable for any damages arising from the use of 
              our photography services or website content. This includes, but is not limited to, 
              direct, indirect, incidental, punitive, and consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">External Links</h2>
            <p className="text-medium-gray mb-4">
              Our website may contain links to external websites. We have no control over the nature, 
              content, and availability of those sites and are not responsible for any information, 
              products, or services provided by third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Changes to Services</h2>
            <p className="text-medium-gray mb-4">
              The Flash Photofilms reserves the right to modify, suspend, or discontinue any aspect 
              of our photography services at any time without prior notice. Prices and packages are 
              subject to change based on market conditions and other factors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Force Majeure</h2>
            <p className="text-medium-gray">
              In the event of circumstances beyond our control, such as natural disasters, pandemics, 
              government restrictions, or other unforeseeable events, The Flash Photofilms reserves the 
              right to reschedule or modify photography services as necessary.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-block bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-dark-maroon transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default DisclaimerPage;