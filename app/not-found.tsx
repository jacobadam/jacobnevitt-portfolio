import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full items-center px-6 lg:px-8 py-32">
      <div className="text-center">
        <p className="text-base font-semibold text-secondary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary-foreground">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-secondary-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="group relative flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 font-medium text-xs uppercase tracking-widest text-amber-500  transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
