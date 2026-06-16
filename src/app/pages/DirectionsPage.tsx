import { motion } from 'motion/react';
import { VideosTravelSection } from '../components/VideosTravelSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import signboardImage from '../../assests/signboard.jpeg';

export function DirectionsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <section className="relative min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={signboardImage}
            alt="Directions to Kwahu Mpraeso"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        </div>

        <motion.div
          className="relative flex min-h-[400px] items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a574] backdrop-blur">
              Travel & Directions
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Getting to Kwahu Mpraeso
            </h1>
            <p className="text-xl leading-relaxed text-white/85 md:text-2xl">
              Plan your journey to the heart of the Kwahu Ridge, Eastern Region of Ghana.
            </p>
          </div>
        </motion.div>
      </section>

      <VideosTravelSection />
    </div>
  );
}
