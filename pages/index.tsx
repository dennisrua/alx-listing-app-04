import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ALX Listing App 03
          </h1>
          <p className="text-gray-600 mb-6">
            Booking Detail Page with User Input and Payment Processing
          </p>
          <Link 
            href="/booking"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 inline-block"
          >
            Go to Booking Page
          </Link>
        </div>
      </div>
    </div>
  );
}