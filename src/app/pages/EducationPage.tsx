import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, School } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function EducationPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Education in Mpraeso"
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
              Education
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Schools, Scholarships & Learning Initiatives
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
            <div className="inline-block bg-[#3a6b35]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4">
              Learning & Growth
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Investing in Our Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Education is a cornerstone of Mpraeso's development. Our community is committed to providing quality education, scholarships for deserving students, and learning initiatives that empower the next generation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: School, title: 'Primary Schools', desc: 'Quality basic education across our sub-towns' },
              { icon: GraduationCap, title: 'Secondary Schools', desc: 'Preparing students for higher education' },
              { icon: Award, title: 'Scholarships', desc: 'Supporting bright students from our community' },
              { icon: BookOpen, title: 'Learning Initiatives', desc: 'Literacy programs and skills development' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#faf8f5] rounded-xl p-6 border border-[#3a6b35]/20 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#3a6b35] rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
