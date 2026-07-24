const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-xl text-medium-gray">
            Last updated: July 25, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-dark-maroon mb-6">Acceptance of Terms</h2>
          <p className="text-medium-gray mb-6">
            By accessing and using The Flash Photofilms website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-dark-maroon mb-6">Description of Service</h2>
          <p className="text-medium-gray mb-6">
            The Flash Photofilms provides professional photography and videography services. Our services include, but are not limited to, wedding photography, portrait sessions, event coverage, and video production.
          </p>

          <h2 className="text-2xl font-bold text-dark-maroon mb-6">Intellectual Property</h2>
          <p className="text-medium-gray mb-6">
            All photographs and videos produced by The Flash Photofilms remain the intellectual property of The Flash Photofilms unless otherwise agreed upon in writing. Clients receive a license for personal use of the delivered images.
          </p>

          <h2 className="text-2xl font-bold text-dark-maroon mb-6">Limitation of Liability</h2>
          <p className="text-medium-gray mb-6">
            The Flash Photofilms shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-bold text-dark-maroon mb-6">Modifications to Service</h2>
          <p className="text-medium-gray mb-6">
            The Flash Photofilms reserves the right to modify or discontinue, temporarily or permanently, the service or any part thereof with or without notice.
          </p>

          <h2 className="text-2xl font-bold text-dark-maroon mb-6">Contact Information</h2>
          <p className="text-medium-gray">
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="not-italic text-medium-gray mt-2">
            The Flash Photofilms<br />
            202, Block-3, Ashwini Height,<br />
            Near Golden Point, GIDC Ankleshwar<br />
            Bharuch – 393002, Gujarat, India<br />
            Phone: +91 79849 41331<br />
            Email: info@theflashphotofilms.com
          </address>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;