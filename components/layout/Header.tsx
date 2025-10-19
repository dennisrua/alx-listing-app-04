import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-green-600">
            ALX Listing App
          </Link>
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link href="/booking" className="text-gray-600 hover:text-green-600">
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}