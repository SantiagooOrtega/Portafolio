import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">Error 404</p>
        <h1 className="mt-4 font-display text-6xl font-bold md:text-8xl">Página no encontrada</h1>
        <p className="mx-auto mt-6 max-w-md text-muted">La página que buscas no existe o fue movida.</p>
        <Link href="/" className="mt-10 inline-block rounded-full bg-accent px-7 py-4 font-semibold text-bg transition-transform hover:scale-105">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
