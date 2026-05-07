import { motion } from 'motion/react';
import { Gallery } from '../components/Gallery';

export function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-[#3a6b35] to-[#2d5016]">
        <motion.div
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Photos and videos capturing Mpraeso's beauty and culture
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Gallery Component */}
      <Gallery />
    </div>
  );
}
