'use client';

import Image from 'next/image';

type Property = {
  id: number | string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
};

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>

      <p className="text-lg">{property.description}</p>

      <p class-as="text-2xl font-semibold mt-4">${property.price} / night</p>
    </div>
  );
}
