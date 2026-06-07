import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Camera } from 'lucide-react';

export function Hero() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden bg-black">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Scenic view of Mpraeso hills"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Large blended wordmark */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center pt-16 md:pt-20">
        <h1 className="select-none text-[11vw] font-extrabold uppercase leading-none tracking-tighter text-white/15 mix-blend-overlay">
          MPRAESO
        </h1>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="w-full max-w-7xl">
          <motion.div
            className="mx-auto max-w-3xl translate-y-12 text-center text-white md:translate-y-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/85 md:text-base">
              The Heart of Kwahu, Eastern Region of Ghana
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Invest in the Future of Mpraeso
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm text-white/75 md:text-base">
              Kwahu Mpraeso is the commercial hub of the Kwahu Ridge — a boiling pot of investment and development in the Eastern Region.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {isHomePage ? (
                <>
                  <a
                    href="#tourism"
                    className="inline-flex items-center gap-2 rounded-full bg-[#3a6b35] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2d5016]"
                  >
                    <Camera size={18} />
                    Visit Mpraeso
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 rounded-full bg-[#d4a574] px-8 py-3 text-sm font-semibold text-gray-900 transition-all hover:scale-105 hover:bg-[#c89560]"
                  >
                    <MapPin size={18} />
                    Investment Opportunities
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to="/tourism"
                    className="inline-flex items-center gap-2 rounded-full bg-[#3a6b35] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2d5016]"
                  >
                    <Camera size={18} />
                    Visit Mpraeso
                  </Link>
                  <Link
                    to="/business"
                    className="inline-flex items-center gap-2 rounded-full bg-[#d4a574] px-8 py-3 text-sm font-semibold text-gray-900 transition-all hover:scale-105 hover:bg-[#c89560]"
                  >
                    <MapPin size={18} />
                    Investment Opportunities
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}