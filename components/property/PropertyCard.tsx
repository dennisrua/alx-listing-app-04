'use client';

import Image from 'next/image';
import Link from 'next/link';

type Property = {
  id: number | string;
  title: string;
  location: string;
  price: number;
  image: string;
};

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
      <div className="relative w-full h-48 rounded-md overflow-hidden mb 3">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold">{property.title}</h3>
      <p className="text-sm text-gray-600">{property.location}</p>

      <p className="text-md font-bold mt-2">${property.price} / night</p>

      <Link
        href={`/properties/${property.id}`}
        className="text-blue-600 mt-3 inline-block font-medium hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
