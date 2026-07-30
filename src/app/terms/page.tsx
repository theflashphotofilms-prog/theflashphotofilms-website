import Link from 'next/link';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import SEO from '../../components/SEO';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-forest-green py-16">
      <SEO 
        title="Terms of Service - The Flash Photofilms" 
        description="Terms of service for The Flash Photofilms photography services and website usage."
        url="https://www.theflashphotofilms.com/terms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ivory mb-4 font-serif">Terms & Conditions</h1>
          <p className="text-xl text-soft-gold">
            Please read these terms carefully before confirming your booking
          </p>
        </div>

        <div className="bg-ivory rounded-2xl shadow-lg p-8 space-y-8">
          <p className="text-cream text-lg font-medium">
            Thank you for choosing The Flash Photo Films. Please read the following terms and conditions carefully before confirming your booking.
          </p>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">1. Booking Confirmation & Payment Schedule</h2>
            <ul className="list-disc pl-6 space-y-2 text-cream">
              <li>A minimum of 30% advance payment is required to confirm the booking.</li>
              <li>Without advance payment, the booking will not be considered confirmed.</li>
              <li>50% payment must be completed after the wedding/event coverage is completed.</li>
              <li>Soft copies of photographs/videos will be provided after the required payment stage is completed.</li>
              <li>The remaining balance payment must be cleared on the day of album selection.</li>
            </ul>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">2. Advance Payment Policy</h2>
            <p className="text-cream">
              The advance amount paid for booking confirmation is non-refundable under any circumstances.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">3. Album Selection</h2>
            <p className="text-cream">
              Album selection must be completed within 30 to 45 days from the date of delivery/intimation. 
              If album selection is delayed beyond this period, album pricing will be applicable as per the prevailing market rates at that time.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">4. DJ Event Coverage</h2>
            <p className="text-cream">
              DJ event coverage is included only up to 12:00 AM (midnight). 
              Additional coverage beyond this time may incur extra charges.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">5. Dining Coverage</h2>
            <p className="text-cream">
              Photographs of guests while having lunch or dinner are generally not covered. 
              If such coverage is required, it must be specifically discussed and confirmed at the time of booking.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">6. Video Editing Duration</h2>
            <p className="text-cream">
              If the final edited video exceeds 3 hours in duration, additional editing and processing charges may apply.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">7. Data Collection & Storage</h2>
            <p className="text-cream">
              Clients are requested to collect/download their final data within 30 to 45 days of delivery notification. 
              After this period, if data is lost due to technical issues, hardware failure, storage limitations, or any unforeseen circumstances, 
              The Flash Photo Films shall not be held responsible.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">8. Professional Conduct</h2>
            <p className="text-cream">
              Clients, family members, relatives, and guests are expected to maintain respectful behavior with photographers, videographers, and team members. 
              Use of abusive language, misconduct, harassment, or inappropriate behavior will result in immediate cancellation of services. 
              In such cases, no refund of any payment made will be provided.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">9. Package Inclusions</h2>
            <p className="text-cream">
              Only the services and deliverables specifically mentioned in the selected package are included. 
              Any additional services, products, edits, coverage hours, albums, reels, prints, or other requirements outside the package scope will be charged separately.
            </p>
          </section>

          <section className="border-l-4 border-soft-gold pl-6 py-2">
            <h2 className="text-2xl font-bold text-forest-green mb-4 font-serif">10. Acceptance of Terms</h2>
            <p className="text-cream">
              By confirming a booking and paying the advance amount, the client agrees to all the above terms and conditions.
            </p>
          </section>

          <div className="bg-forest-green/10 rounded-xl p-6 mt-10 text-center">
            <h3 className="text-2xl font-bold text-forest-green mb-4 font-serif">Thank You</h3>
            <p className="text-cream text-lg">
              Thank you for placing your trust in The Flash Photo Films. We look forward to capturing your precious memories and making your special moments unforgettable.
            </p>
            <p className="text-soft-gold font-semibold mt-4">**Team The Flash Photo Films**</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-block bg-soft-gold text-forest-green px-8 py-4 rounded-xl font-bold hover:bg-forest-green hover:text-soft-gold transition-colors"
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