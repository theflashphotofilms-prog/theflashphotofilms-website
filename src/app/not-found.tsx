import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="text-6xl font-bold text-dark-maroon mb-6">404</h1>
        <h2 className="text-3xl font-bold text-dark-maroon mb-6">Page Not Found</h2>
        <p className="text-xl text-medium-gray mb-10">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-dark-maroon transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}