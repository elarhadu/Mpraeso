import { motion } from 'motion/react';
import { Briefcase, TrendingUp, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BusinessPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Business in Mpraeso"
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
              Business & Investment
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Local Businesses & Opportunities
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#d4a574]/20 text-[#8b6f47] px-4 py-2 rounded-full mb-4">
              Commerce & Growth
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Invest in Mpraeso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mpraeso offers a vibrant business environment with opportunities in retail, hospitality, agriculture, and services. Our strategic location in the Kwahu highlands and growing tourism sector create unique investment prospects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: 'Local Businesses', desc: 'Explore our market, shops, and enterprises' },
              { icon: TrendingUp, title: 'Investment Opportunities', desc: 'Growing sectors in tourism, agriculture, and services' },
              { icon: MapPin, title: 'Strategic Location', desc: 'Gateway to Kwahu with access to regional markets' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#faf8f5] rounded-xl p-8 border border-[#d4a574]/30 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="w-14 h-14 bg-[#d4a574] rounded-full flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
