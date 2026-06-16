import { motion } from 'motion/react';
import { Projects } from '../components/Projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761666520005-3ffcf13e74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mpraeso Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <motion.div
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contribute to Ongoing Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Every donation, big or small, helps build a better Mpraeso
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <Projects />

    </div>
  );
}
