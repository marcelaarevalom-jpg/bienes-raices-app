import { supabase } from '@/lib/supabase';
import { Property } from '@/lib/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PropiedadDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: property, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !property) {
    notFound();
  }

  const p = property as Property;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/propiedades" className="text-blue-600 hover:underline">
        &larr; Volver a propiedades
      </Link>

      {p.image_url && (
        <img
          src={p.image_url}
          alt={p.title}
          className="w-full h-72 object-cover rounded-lg mt-4"
        />
      )}

      <h1 className="text-3xl font-bold mt-6 text-slate-800">{p.title}</h1>
      <p className="text-slate-500 mb-4">{p.location}</p>
      <p className="text-2xl text-blue-600 font-bold mb-4">
        ${p.price.toLocaleString()}
      </p>

      <div className="flex gap-3 mb-6 flex-wrap">
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
          {p.property_type}
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
          {p.status}
        </span>
        {p.bedrooms !== null && (
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
            {p.bedrooms} habitaciones
          </span>
        )}
        {p.bathrooms !== null && (
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
            {p.bathrooms} baños
          </span>
        )}
        {p.area_m2 !== null && (
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
            {p.area_m2} m²
          </span>
        )}
      </div>

      <p className="text-slate-700 leading-relaxed">{p.description}</p>
    </main>
  );
}