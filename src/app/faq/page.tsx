import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | The Flash Photofilms',
  description: 'Find answers to frequently asked questions about our wedding photography and cinematography services in Ahmedabad.',
  openGraph: {
    title: 'Frequently Asked Questions | The Flash Photofilms',
    description: 'Find answers to frequently asked questions about our wedding photography and cinematography services in Ahmedabad.',
    url: 'https://theflashphotofilms.in/faq',
    siteName: 'The Flash Photofilms',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Flash Photofilms - FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | The Flash Photofilms',
    description: 'Find answers to frequently asked questions about our wedding photography and cinematography services in Ahmedabad.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://theflashphotofilms.in/faq',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "How can I book The Flash Photofilms for my event?",
      answer: "You can contact us through our Contact Form, WhatsApp, or direct phone call. Your booking will be confirmed only after the required advance payment is received."
    },
    {
      question: "How much advance payment is required for booking?",
      answer: "A 30% advance payment is required to confirm your booking date."
    },
    {
      question: "Is the advance payment refundable?",
      answer: "No. The advance payment is non-refundable under any circumstances."
    },
    {
      question: "Do you provide customised photography packages?",
      answer: "Yes. We offer customised packages based on your event requirements, location, coverage duration, and deliverables."
    },
    {
      question: "Do you cover events outside Ankleshwar and Bharuch?",
      answer: "Yes. We provide services across Gujarat and destination wedding locations across India. Travel and accommodation expenses may apply depending on the event location."
    },
    {
      question: "Is travel cost included in the package price?",
      answer: "No. Travel, accommodation, and logistics expenses are not included in standard package pricing unless specifically mentioned."
    },
    {
      question: "How many days are included in wedding packages?",
      answer: "All standard wedding packages are designed according to the selected package. Additional days or functions will incur extra charges."
    },
    {
      question: "How many days are included in pre-wedding packages?",
      answer: "Our standard pre-wedding packages include a 2-day shoot. Additional shoot days will be charged separately."
    },
    {
      question: "Do you provide drone photography and videography?",
      answer: "Yes. Drone coverage is available in selected packages and can also be added as an extra service."
    },
    {
      question: "Do you provide candid photography?",
      answer: "Yes. Candid photography is one of our specialties. We focus on capturing genuine emotions, natural expressions, and real moments throughout your celebration."
    },
    {
      question: "Will we receive all photos?",
      answer: "Yes. All packages include edited soft-copy photos as mentioned in the package details."
    },
    {
      question: "When will we receive our photos and videos?",
      answer: "Delivery timelines vary depending on project size and season. Clients typically receive their edited work within the committed timeline discussed during booking."
    },
    {
      question: "When should album selection be completed?",
      answer: "Album selection should be completed within 30 to 45 days. Delays beyond this period may result in revised album pricing based on current market rates."
    },
    {
      question: "Do you provide raw photos and videos?",
      answer: "Photos and videos are delivered according to the package inclusions. Raw files are generally not provided unless agreed upon separately."
    },
    {
      question: "Can we request extra reels, videos, albums, or photographers?",
      answer: "Yes. Additional reels, cinematic films, albums, drone coverage, photographers, videographers, LED screens, and other services can be added at an extra cost."
    },
    {
      question: "Do you cover DJ events and dance performances?",
      answer: "Yes. DJ coverage is included up to 12:00 AM (midnight). Additional coverage may require extra charges."
    },
    {
      question: "Do you take photos during lunch and dinner?",
      answer: "By default, lunch and dinner coverage is not included. If required, please inform us during the booking process."
    },
    {
      question: "Can family members suggest poses or photography ideas during the event?",
      answer: "Absolutely. We welcome creative suggestions from couples and family members while maintaining the overall flow and quality of coverage."
    },
    {
      question: "What happens if weather conditions affect an outdoor shoot?",
      answer: "In case of unfavorable weather, we will work with you to adjust the schedule, location, or shoot plan to achieve the best possible results."
    },
    {
      question: "Can we reschedule our event date?",
      answer: "Date changes depend on availability. Please contact us as early as possible to discuss rescheduling options."
    },
    {
      question: "How can we share references or ideas for our shoot?",
      answer: "You can share inspiration photos, Instagram reels, Pinterest boards, mood boards, or specific concepts with our team before the event."
    },
    {
      question: "Do you provide same-day edits?",
      answer: "Yes. Same-day editing services are available in selected premium packages or can be added separately."
    },
    {
      question: "Why should we choose The Flash Photofilms?",
      answer: "We combine creativity, cinematic storytelling, professional equipment, premium albums, drone coverage, and personalised service to create memories that last a lifetime."
    }
  ];

  return (
    <div className="min-h-screen bg-forest-green text-ivory">
      {/* Hero Section */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-forest-green"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-soft-gold max-w-3xl mx-auto">
            Everything you need to know about our photography and cinematography services
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="luxury-card bg-ivory text-forest-green rounded-xl p-6 border border-soft-gold/30">
                <h3 className="text-xl font-bold text-soft-gold mb-3">{faq.question}</h3>
                <p className="text-cream">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-soft-gold mb-10 max-w-2xl mx-auto">
            Don't hesitate to reach out to us for any additional inquiries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact"
              className="btn-primary bg-soft-gold text-forest-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              href="/booking"
              className="btn-secondary border-2 border-soft-gold text-soft-gold bg-transparent px-10 py-5 rounded-xl font-bold text-lg hover:bg-soft-gold hover:text-forest-green transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}