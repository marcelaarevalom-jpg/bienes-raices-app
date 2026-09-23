export type PropertyType = 'Casa' | 'Apartamento' | 'Terreno' | 'Local';
export type PropertyStatus = 'Disponible' | 'Reservada' | 'Vendida';

export interface Property {
  id: number;
  title: string;
  description: string | null;
  price: number;
  location: string;
  property_type: PropertyType;
  bedrooms: number | null;
  bathrooms: number | null;
  area_m2: number | null;
  status: PropertyStatus;
  image_url: string | null;
  created_at: string;
}