import { motion } from 'motion/react';
import { Diaspora } from '../components/Diaspora';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function DiasporaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1734255026082-82fdc81991f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mpraeso Diaspora"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <motion.div
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Diaspora Corner
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Engagement, contributions & news from Mpraeso sons and daughters
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Diaspora Component */}
      <Diaspora />
    </div>
  );
}
