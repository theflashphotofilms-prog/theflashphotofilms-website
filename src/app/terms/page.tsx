import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Terms of Service - The Flash Photofilms" 
        description="Terms of service for The Flash Photofilms photography services and website usage."
        url="https://www.theflashphotofilms.com/terms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-maroon mb-4">Terms of Service</h1>
          <p className="text-xl text-medium-gray">
            Please read these terms carefully before using our services
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Acceptance of Terms</h2>
            <p className="text-medium-gray mb-4">
              By accessing or using The Flash Photofilms website and services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Photography Services Agreement</h2>
            <p className="text-medium-gray mb-4">
              All photography services are provided under separate agreement terms. 
              The booking agreement will specify details of the service, including coverage time, 
              deliverables, and payment schedule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Payment Terms</h2>
            <p className="text-medium-gray mb-4">
              Payment terms will be specified in the individual service agreement. 
              Typically, a deposit is required to secure the booking date, with the balance 
              due prior to the service date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Cancellation Policy</h2>
            <p className="text-medium-gray mb-4">
              Cancellations must be made at least 30 days prior to the event date for a full refund. 
              Cancellations made less than 30 days prior to the event may result in forfeiture of the deposit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Intellectual Property</h2>
            <p className="text-medium-gray mb-4">
              All photographs taken by The Flash Photofilms remain the intellectual property of 
              The Flash Photofilms. Clients are granted permission to use images for personal use only, 
              unless otherwise agreed upon in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-maroon mb-4">Limitation of Liability</h2>
            <p className="text-medium-gray">
              The Flash Photofilms shall not be liable for any damages arising from the use of 
              our photography services. This includes, but is not limited to, direct, indirect, 
              incidental, punitive, and consequential damages.
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

export default TermsPage;