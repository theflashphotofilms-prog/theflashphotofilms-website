const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon mb-6">Privacy Policy</h1>
          <p className="text-xl text-medium-gray">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Information We Collect</h2>
            <p className="text-medium-gray mb-6">
              We collect information you provide directly to us, such as when you contact us through our website, sign up for our newsletter, or communicate with us via email or phone.
            </p>

            <h2 className="text-2xl font-bold text-dark-maroon mb-4 mt-10">How We Use Your Information</h2>
            <p className="text-medium-gray mb-6">
              We use the information we collect to provide, maintain, and improve our photography and videography services, communicate with you, and send you updates about our services.
            </p>

            <h2 className="text-2xl font-bold text-dark-maroon mb-4 mt-10">Information Sharing and Disclosure</h2>
            <p className="text-medium-gray mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our clients, provided they agree to maintain the confidentiality of your information.
            </p>

            <h2 className="text-2xl font-bold text-dark-maroon mb-4 mt-10">Data Security</h2>
            <p className="text-medium-gray mb-6">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>

            <h2 className="text-2xl font-bold text-dark-maroon mb-4 mt-10">Your Rights</h2>
            <p className="text-medium-gray mb-6">
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold text-dark-maroon mb-4 mt-10">Contact Us</h2>
            <p className="text-medium-gray">
              If you have any questions about this privacy policy, please contact us at info@flashphotofilms.com or call (123) 456-7890.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;