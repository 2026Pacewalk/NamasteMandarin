import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <section className="bg-nm-red star-bg min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center px-6">
        <p className="font-display text-7xl lg:text-8xl text-white font-bold mb-4">404</p>
        <h1 className="font-display text-2xl lg:text-3xl text-white font-semibold mb-3">
          Page Not Found
        </h1>
        <p className="text-white/75 text-base mb-8 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-nm-red font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
