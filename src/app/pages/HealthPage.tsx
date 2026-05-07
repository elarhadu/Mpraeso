import { motion } from 'motion/react';
import { Heart, Building2, Phone, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HealthPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1579154201260-6cf4a6c117b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Health Services in Mpraeso"
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
              Health & Social Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Hospitals, Clinics & Emergency Information
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0" />
              <h3 className="text-xl font-bold text-red-900">Emergency Contact</h3>
            </div>
            <p className="text-gray-700">National Ambulance: <strong>193</strong> | Police: <strong>191</strong> | Fire: <strong>192</strong></p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Mpraeso Health Center', desc: 'Primary healthcare facility serving the community' },
              { icon: Heart, title: 'Clinics', desc: 'Local clinics and health posts across sub-towns' },
              { icon: Phone, title: 'Social Services', desc: 'Support for vulnerable groups and community welfare' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#faf8f5] rounded-xl p-8 border border-[#3a6b35]/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="w-14 h-14 bg-[#3a6b35] rounded-full flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-white" />
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
