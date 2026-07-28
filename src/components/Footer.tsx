'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-forest-green text-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-soft-gold/30 pb-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-serif font-bold">THE FLASH PHOTOFILMS</div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-soft-gold text-sm">Ahmedabad | Surat | Vadodara | Anand</p>
              <p className="text-cream text-xs mt-1">Luxury Wedding Photography</p>
              <p className="text-cream text-xs">Cinematic Wedding Films</p>
              <p className="text-cream text-xs">Destination Weddings</p>
              <p className="text-cream text-xs">Pre Wedding Films</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-soft-gold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-ivory hover:text-soft-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-ivory hover:text-soft-gold transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-ivory hover:text-soft-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/packages" className="text-ivory hover:text-soft-gold transition-colors">Collections</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-soft-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/packages" className="text-ivory hover:text-soft-gold transition-colors">Wedding Packages</Link></li>
              <li><Link href="/pre-wedding-packages" className="text-ivory hover:text-soft-gold transition-colors">Pre-Wedding</Link></li>
              <li><Link href="/engagement-babyshower-packages" className="text-ivory hover:text-soft-gold transition-colors">Engagement & Baby Shower</Link></li>
              <li><Link href="/other-services" className="text-ivory hover:text-soft-gold transition-colors">Other Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-soft-gold mb-4">Collections</h3>
            <ul className="space-y-2">
              <li><Link href="/films" className="text-ivory hover:text-soft-gold transition-colors">Cinematic Films</Link></li>
              <li><Link href="/portfolio" className="text-ivory hover:text-soft-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/feedback" className="text-ivory hover:text-soft-gold transition-colors">Reviews</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-soft-gold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-ivory hover:text-soft-gold transition-colors">Get in Touch</Link></li>
              <li><Link href="/faq" className="text-ivory hover:text-soft-gold transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="text-ivory hover:text-soft-gold transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="text-ivory hover:text-soft-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-soft-gold/30 text-center">
          <p className="text-cream text-sm">&copy; {new Date().getFullYear()} The Flash Photofilms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;