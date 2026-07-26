import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SEO from '@/components/SEO';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Terms of Service | The Flash Photofilms" 
        description="Terms of service for The Flash Photofilms photography and videography services. Read our policies, agreements, and terms for using our services."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-xl text-medium-gray">
            Please read these terms carefully before using our photography and videography services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-medium-gray mb-6">
              Welcome to The Flash Photofilms. These terms and conditions outline the rules and regulations for the use of our photography and videography services.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-6">Acceptance of Terms</h2>
            <p className="text-medium-gray mb-6">
              By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-6">Description of Service</h2>
            <p className="text-medium-gray mb-6">
              The Flash Photofilms provides professional photography and videography services for weddings, events, portraits, commercial projects, and other special occasions. Our services include, but are not limited to, capturing photographs, creating videos, post-production editing, and delivering final products as specified in individual service agreements.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-6">Intellectual Property</h2>
            <p className="text-medium-gray mb-6">
              All photographs, videos, and digital files produced by The Flash Photofilms remain the intellectual property of The Flash Photofilms unless otherwise agreed upon in writing. Clients are granted a license to use the delivered content for personal use only. Commercial use requires explicit written permission from The Flash Photofilms.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-6">Limitation of Liability</h2>
            <p className="text-medium-gray mb-6">
              The Flash Photofilms shall not be held liable for any damages, losses, or claims arising from the use of our services. We make every effort to deliver high-quality work, but weather conditions, venue restrictions, and other uncontrollable factors may impact the final deliverables. Our liability is limited to the amount paid for services.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-6">Modifications to Service</h2>
            <p className="text-medium-gray mb-6">
              We reserve the right to modify our services, pricing, and terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-6">Contact Information</h2>
            <p className="text-medium-gray mb-6">
              If you have any questions about these Terms of Service, please contact us using the information provided on our Contact page.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-medium-gray mb-6">
            For questions about our terms of service or services, feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/privacy" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default TermsOfServicePage;