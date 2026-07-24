import Link from 'next/link';
import SEO from '@/components/SEO';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <SEO 
        title="Disclaimer | The Flash Photofilms" 
        description="Disclaimer for The Flash Photofilms website including terms about packages, services, availability, and liability."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-maroon sm:text-5xl">
            Disclaimer
          </h1>
          <p className="mt-6 text-xl text-medium-gray">
            Welcome to <span className="font-bold text-gold">The Flash Photofilms</span>.
          </p>
          <p className="mt-4 text-medium-gray">
            The information, package details, pricing, photographs, videos, reviews, and content displayed on this website are provided for general information purposes only. By using this website, you agree to the terms mentioned in this disclaimer.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">1. Package Information</h2>
              <p className="text-medium-gray">
                All package prices, inclusions, team size, albums, reels, films, and other services displayed on this website are subject to change without prior notice.
              </p>
              <p className="text-medium-gray mt-3">
                Customised packages may have different pricing and deliverables based on client requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">2. Availability of Services</h2>
              <p className="text-medium-gray">
                All bookings are subject to date availability and confirmation by The Flash Photofilms.
              </p>
              <p className="text-medium-gray mt-3">
                Displaying a package or service on this website does not guarantee availability for a specific date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">3. Portfolio & Sample Work</h2>
              <p className="text-medium-gray">
                Photographs, videos, albums, reels, and films displayed on this website are samples of previous work.
              </p>
              <p className="text-medium-gray mt-3">
                Actual deliverables may vary depending on:
              </p>
              <ul className="text-medium-gray mt-3 space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Event conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Venue restrictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Weather conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Client requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Time availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Technical limitations</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">4. Third-Party Platforms</h2>
              <p className="text-medium-gray">
                This website may contain links to third-party platforms such as:
              </p>
              <ul className="text-medium-gray mt-3 space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Instagram</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Google</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>YouTube</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Other social media platforms</span>
                </li>
              </ul>
              <p className="text-medium-gray mt-3">
                The Flash Photofilms is not responsible for the content, privacy practices, or policies of third-party websites and platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">5. Technical Issues</h2>
              <p className="text-medium-gray">
                While we strive to keep all information accurate and updated, The Flash Photofilms does not guarantee that the website will always be free from:
              </p>
              <ul className="text-medium-gray mt-3 space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Technical interruptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Server issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Network failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Temporary unavailability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Typographical errors</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">6. Limitation of Liability</h2>
              <p className="text-medium-gray">
                The Flash Photofilms shall not be held liable for any direct, indirect, incidental, or consequential damages arising from:
              </p>
              <ul className="text-medium-gray mt-3 space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Use of this website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Reliance on information provided on this website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Temporary website downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Technical errors or failures</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">7. Pricing & Custom Quotations</h2>
              <p className="text-medium-gray">
                Prices displayed on the website are standard package rates.
              </p>
              <p className="text-medium-gray mt-3">
                Final quotations may vary depending on:
              </p>
              <ul className="text-medium-gray mt-3 space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Event location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Travel requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Additional manpower</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Additional equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Extra editing requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Custom deliverables</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">8. Intellectual Property</h2>
              <p className="text-medium-gray">
                All photographs, videos, graphics, logos, branding elements, and website content are the property of The Flash Photofilms unless otherwise stated.
              </p>
              <p className="text-medium-gray mt-3">
                Unauthorised copying, downloading, reproduction, modification, or commercial use is strictly prohibited without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-maroon mb-4">9. Changes to Disclaimer</h2>
              <p className="text-medium-gray">
                The Flash Photofilms reserves the right to modify, update, or change this disclaimer at any time without prior notice.
              </p>
              <p className="text-medium-gray mt-3">
                Users are encouraged to review this page periodically.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-dark-maroon mb-4">Contact Information</h3>
            <div className="text-medium-gray">
              <p className="font-bold">The Flash Photofilms</p>
              <p>Owner: Mohit Panchal</p>
              <p>Mobile: <Link href="tel:+917984941331" className="text-gold hover:underline">+91 79849 41331</Link></p>
              <p className="mt-3">Address:</p>
              <p>202, Block-3, Ashwini Height,</p>
              <p>Near Golden Point, GIDC Ankleshwar,</p>
              <p>Bharuch – 393002, Gujarat, India</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-center text-medium-gray italic">
              Thank You For Visiting The Flash Photofilms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;