import { motion } from 'motion/react';
import heroBgVideo from '../../assests/mpraeso_view_day.mp4';

export function Hero() {
  return (
    <>
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden bg-black">
      {/* Hero Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={`${heroBgVideo}#t=7`}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Large blended wordmark */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center pt-16 md:pt-20">
        <h1 className="select-none text-[11vw] font-extrabold uppercase leading-none tracking-tighter text-white/15 mix-blend-overlay">
          KWAHU MPRAESO
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

          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}