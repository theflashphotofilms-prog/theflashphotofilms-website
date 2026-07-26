import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SEO from '@/components/SEO';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Disclaimer | The Flash Photofilms" 
        description="Disclaimer for The Flash Photofilms photography and videography services. Read our terms, conditions, and limitations of liability."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#D2A97F] sm:text-5xl">
            Disclaimer
          </h1>
          <p className="mt-6 text-xl text-medium-gray max-w-3xl mx-auto">
            Important information about our services, terms, and limitations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-medium-gray mb-6 text-center">
              Welcome to <span className="font-bold text-[#D2A97F]">The Flash Photofilms</span>.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#D2A97F] mb-4">1. Package Information</h2>
                <p className="text-medium-gray mb-4">
                  All packages offered by The Flash Photofilms are subject to availability and must be booked in advance. Package inclusions are based on the specific plan selected at the time of booking. Any additional services requested during the event may incur extra charges.
                </p>
                <ul className="text-medium-gray space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Package prices are valid for the current season and subject to change without prior notice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Travel costs may apply for locations beyond 50 km from our base in Ankleshwar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>All equipment used is professional grade and maintained to industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Crew size and equipment may vary based on package selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Package upgrades can be made subject to availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Clients will receive a detailed contract outlining all services and terms</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D2A97F] mb-4">2. Availability of Services</h2>
                <p className="text-medium-gray mb-4">
                  The Flash Photofilms operates primarily in Gujarat, with a focus on Bharuch, Ankleshwar, Vadodara, Surat, and surrounding areas. Services outside this region are available but may include additional travel charges.
                </p>
                <ul className="text-medium-gray space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Booking calendar is managed on a first-come, first-served basis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Peak season dates may have limited availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Weather-dependent outdoor shoots are planned with backup options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Equipment failure contingencies are in place to ensure continuity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Specialized services may require advance planning and preparation</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D2A97F] mb-4">3. Portfolio & Sample Work</h2>
                <p className="text-medium-gray mb-4">
                  The portfolio and sample work displayed on our website and social media platforms are representations of our capabilities and style. Actual results may vary based on event specifics, lighting conditions, and other environmental factors.
                </p>
                <ul className="text-medium-gray space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Portfolio images are professionally edited and may not represent raw output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Style and approach may be customized based on client preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Seasonal variations can affect lighting and overall appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>We reserve the right to feature work in our portfolio unless otherwise agreed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Sample videos and photos are intended to showcase our range of services</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D2A97F] mb-4">4. Third-Party Platforms</h2>
                <p className="text-medium-gray mb-4">
                  The Flash Photofilms may use third-party platforms for various services including but not limited to online galleries, cloud storage, social media, and communication tools. While we strive to use reputable and secure services, we are not responsible for their privacy policies or data handling practices.
                </p>
                <ul className="text-medium-gray space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Data shared on third-party platforms is subject to their respective terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>We recommend reviewing privacy policies of external services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Security measures are implemented to protect client information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>We are not liable for data breaches on external platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Access to online galleries is password-protected and time-limited</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D2A97F] mb-4">5. Technical Issues</h2>
                <p className="text-medium-gray mb-4">
                  Despite using professional-grade equipment and following industry best practices, technical issues can occasionally occur. The Flash Photofilms takes every precaution to prevent such occurrences and maintains backup systems and procedures.
                </p>
                <ul className="text-medium-gray space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Backup equipment is brought to every event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Multiple memory cards and power sources are used as safeguards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>In case of unavoidable technical issues, partial refunds may be considered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Post-processing techniques are used to enhance and restore images when needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Equipment maintenance is performed regularly to prevent failures</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D2A97F] mb-4">6. Limitation of Liability</h2>
                <p className="text-medium-gray mb-4">
                  The Flash Photofilms provides services with professionalism and care, but certain limitations apply to our liability. It is important for clients to understand these terms before booking our services.
                </p>
                <ul className="text-medium-gray space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Liability is limited to the amount paid for services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>We are not responsible for factors beyond our control (weather, venue restrictions, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Personal property damage is not covered under our liability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>Client satisfaction is our priority, but artistic interpretation is subjective</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A97F] mr-2">•</span>
                    <span>All claims must be submitted within 30 days of service completion</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-medium-gray mb-6">
            For questions about this disclaimer or our services, feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/faq" 
              className="inline-block bg-transparent border-2 border-[#D2A97F] text-[#D2A97F] px-8 py-4 rounded-xl font-bold hover:bg-[#D2A97F] hover:text-[#3A5A40] transition-colors"
            >
              Visit FAQ
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </div>
  );
};

export default DisclaimerPage;