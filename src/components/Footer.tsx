import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '+91 79849 41331'; // Updated with actual business number
  const address = '202, Block-3, Ashwini Height, Near Golden Point, GIDC Ankleshwar, Bharuch – 393002, Gujarat, India'; // Updated with actual address

  return (
    <footer className="bg-dark-maroon text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">The Flash Photofilms</h3>
            <p className="text-medium-gray mb-4">
              Professional wedding, event, and commercial photography & videography services by Mohit Panchal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medium-gray hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.844c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medium-gray hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href={`https://wa.me/${phoneNumber.replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medium-gray hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-medium-gray hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-medium-gray hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-medium-gray hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/packages" className="text-medium-gray hover:text-gold transition-colors">Wedding Packages</Link></li>
              <li><Link href="/pre-wedding-packages" className="text-medium-gray hover:text-gold transition-colors">Pre-Wedding Packages</Link></li>
              <li><Link href="/engagement-babyshower-packages" className="text-medium-gray hover:text-gold transition-colors">Engagement & Baby Shower Packages</Link></li>
              <li><Link href="/other-services" className="text-medium-gray hover:text-gold transition-colors">Other Services</Link></li>
              <li><Link href="/faq" className="text-medium-gray hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/portfolio" className="text-medium-gray hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/feedback" className="text-medium-gray hover:text-gold transition-colors">Reviews</Link></li>
              <li><Link href="/disclaimer" className="text-medium-gray hover:text-gold transition-colors">Disclaimer</Link></li>
              <li><Link href="/contact" className="text-medium-gray hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#wedding" className="text-medium-gray hover:text-gold transition-colors">Wedding Photography</Link></li>
              <li><Link href="/services#portrait" className="text-medium-gray hover:text-gold transition-colors">Portrait Sessions</Link></li>
              <li><Link href="/services#events" className="text-medium-gray hover:text-gold transition-colors">Event Coverage</Link></li>
              <li><Link href="/services#commercial" className="text-medium-gray hover:text-gold transition-colors">Commercial Photography</Link></li>
              <li><Link href="/services#video" className="text-medium-gray hover:text-gold transition-colors">Video Production</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-medium-gray">{phoneNumber}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-medium-gray">{process.env.CONTACT_EMAIL || 'info@theflashphotofilms.com'}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-medium-gray">{address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-gold mt-12 pt-8 text-center">
          <p className="text-medium-gray">
            &copy; {currentYear} The Flash Photofilms. All rights reserved. | Crafted with passion by{' '}
            <span className="text-gold font-medium">Mohit Panchal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;