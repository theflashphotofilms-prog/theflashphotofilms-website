import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SEO from '@/components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Privacy Policy | The Flash Photofilms" 
        description="Privacy policy for The Flash Photofilms photography and videography services. Learn how we collect, use, and protect your personal information."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#D2A97F] mb-6">Privacy Policy</h1>
          <p className="text-xl text-medium-gray">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-medium-gray mb-6">
              At The Flash Photofilms, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our photography and videography services.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-4 mt-10">Information We Collect</h2>
            <p className="text-medium-gray mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="text-medium-gray list-disc pl-6 mb-6 space-y-2">
              <li>Contact us through our website, email, or phone</li>
              <li>Book photography or videography services</li>
              <li>Subscribe to our newsletter or promotional offers</li>
              <li>Share feedback or reviews about our services</li>
              <li>Interact with us on social media platforms</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-4 mt-10">How We Use Your Information</h2>
            <p className="text-medium-gray mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-medium-gray list-disc pl-6 mb-6 space-y-2">
              <li>Provide and improve our photography and videography services</li>
              <li>Process bookings and payments</li>
              <li>Communicate with you about your bookings and services</li>
              <li>Send you updates about our services and special offers</li>
              <li>Respond to your inquiries and feedback</li>
              <li>Personalize your experience with our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-4 mt-10">Information Sharing and Disclosure</h2>
            <p className="text-medium-gray mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our business, conducting business, or serving our customers, provided they agree to maintain the confidentiality of your information.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-4 mt-10">Data Security</h2>
            <p className="text-medium-gray mb-4">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-4 mt-10">Your Rights</h2>
            <p className="text-medium-gray mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="text-medium-gray list-disc pl-6 mb-6 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to erasure of your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D2A97F] mb-4 mt-10">Contact Us</h2>
            <p className="text-medium-gray mb-4">
              If you have any questions about this Privacy Policy or concerns about how your information is handled, please contact us using the information provided on our Contact page.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-medium-gray mb-6">
            For questions about our privacy policy or services, feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/terms" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default PrivacyPolicyPage;