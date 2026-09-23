'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold text-red-600 mb-2">Algo salió mal</h2>
      <p className="text-slate-600 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Intentar de nuevo
      </button>
    </main>
  );
}