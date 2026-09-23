# Bienes Raíces App

Catálogo de propiedades en venta construido con Next.js (App Router) y Supabase.

## Tecnologías

- Next.js 16 (App Router, Server Components)
- Supabase (PostgreSQL + Row Level Security)
- Tailwind CSS
- Desplegado en Vercel

## Arquitectura

- `lib/supabase.ts` — cliente de Supabase
- `lib/types.ts` — tipos e interfaces de TypeScript
- `app/propiedades/page.tsx` — listado de propiedades (Server Component)
- `app/propiedades/[id]/page.tsx` — ruta dinámica de detalle
- `app/propiedades/loading.tsx` — estado de carga
- `app/propiedades/error.tsx` — manejo de errores

## Base de datos

Tabla `properties` en Supabase con RLS activado: política de lectura pública (`select`) para el rol `anon`, sin políticas de escritura (insert/update/delete bloqueados por defecto).

## Instalación

\`\`\`
git clone https://github.com/marcelaarevalom-jpg/bienes-raices-app.git
cd bienes-raices-app
npm install
\`\`\`

Crea un archivo `.env.local` con:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
\`\`\`

\`\`\`
npm run dev
\`\`\`

## Demo en vivo

https://bienes-raices-app-phi.vercel.app/propiedades