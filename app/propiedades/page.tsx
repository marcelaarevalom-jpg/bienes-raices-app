import { supabase } from '@/lib/supabase';
import { Property } from '@/lib/types';
import Link from 'next/link';

export default async function PropiedadesPage() {
  const { data: properties, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('No se pudieron cargar las propiedades');
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">
        Propiedades disponibles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(properties as Property[]).map((property) => (
          <Link
            key={property.id}
            href={`/propiedades/${property.id}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            {property.image_url && (
              <img
                src={property.image_url}
                alt={property.title}
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg text-slate-800">
                {property.title}
              </h2>
              <p className="text-sm text-slate-500 mb-2">{property.location}</p>
              <p className="text-blue-600 font-bold">
                ${property.price.toLocaleString()}
              </p>
              <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                {property.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}