import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Privacy Policy - The Flash Photofilms" 
        description="Privacy policy for The Flash Photofilms photography services and website usage."
        url="https://theflashphotofilms.in/privacy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Privacy Policy</h1>
          <p className="text-xl text-medium-gray">
            Information about how we collect, use, and protect your personal data
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Information We Collect</h2>
            <p className="text-medium-gray mb-4">
              We collect information you provide directly to us, such as when you book our services, 
              contact us through our website, or subscribe to our newsletter. This may include your 
              name, email address, phone number, and other contact information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">How We Use Your Information</h2>
            <p className="text-medium-gray mb-4">
              We use the information we collect to provide and improve our photography services, 
              communicate with you, process bookings, and send you relevant updates about our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Data Protection</h2>
            <p className="text-medium-gray mb-4">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Sharing Your Information</h2>
            <p className="text-medium-gray mb-4">
              We do not sell, trade, or rent your personal information to others. 
              We may share your information with trusted third parties who assist us in operating 
              our website or providing our services, provided they agree to maintain the confidentiality of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Your Rights</h2>
            <p className="text-medium-gray mb-4">
              You have the right to access, update, or delete your personal information at any time. 
              You may also opt out of receiving promotional communications from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Cookies</h2>
            <p className="text-medium-gray">
              Our website uses cookies to enhance your browsing experience and analyze website traffic. 
              You can choose to disable cookies through your browser settings, though this may affect 
              your use of our website.
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

export default PrivacyPage;