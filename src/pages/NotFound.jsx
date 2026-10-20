import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-5 py-20 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
          404 · Page not found
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#173B35] md:text-5xl">
          This page is off the map.
        </h1>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
          The link may be outdated, or the page may have moved. Head back to the
          homepage to find your way around.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#173B35] px-7 py-3 font-semibold text-white transition hover:bg-[#24564B]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
