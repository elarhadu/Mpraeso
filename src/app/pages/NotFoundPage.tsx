import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative Pattern */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rotate-45"
                style={{
                  backgroundColor: i % 2 === 0 ? '#3a6b35' : '#d4a574'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-[#3a6b35] mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#3a6b35] hover:bg-[#2d5016] text-white px-8 py-4 rounded-lg transition-colors font-semibold"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#3a6b35] border-2 border-[#3a6b35] px-8 py-4 rounded-lg transition-colors font-semibold"
          >
            <Search size={20} />
            Contact Us
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 border-4 border-[#d4a574] rotate-45 opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
