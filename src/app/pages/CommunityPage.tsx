import { motion } from 'motion/react';
import { Projects } from '../components/Projects';
import { Churches } from '../components/Churches';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Heart, HandHeart } from 'lucide-react';

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
              Our Community
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Building together, growing together, thriving together
            </p>
          </div>
        </motion.div>
      </section>

      {/* Community Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Community Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { Icon: Users, title: 'Unity', desc: 'We stand together as one community, supporting each other across all sub-towns and generations.' },
              { Icon: Heart, title: 'Compassion', desc: 'We care for the vulnerable, support those in need, and create opportunities for all to thrive.' },
              { Icon: HandHeart, title: 'Service', desc: 'We serve our community through development projects, faith-based initiatives, and civic engagement.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg ${
                  index === 0 || index === 2 ? 'bg-gradient-to-br from-[#3a6b35] to-[#2d5016]' : 'bg-gradient-to-br from-[#d4a574] to-[#c89560]'
                }`}>
                  <item.Icon size={36} className={index === 1 ? 'text-gray-900' : 'text-white'} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Churches Section */}
      <Churches />

      {/* Community Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#3a6b35] to-[#2d5016] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Together We Make a Difference
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Through collaborative projects, faith-based initiatives, and community engagement, Mpraeso continues to grow and prosper. Join us in building a brighter future.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-[#d4a574] mb-2">15+</div>
                <div className="text-white/80">Active Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d4a574] mb-2">25</div>
                <div className="text-white/80">Churches United</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d4a574] mb-2">10</div>
                <div className="text-white/80">Sub-Towns</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d4a574] mb-2">100%</div>
                <div className="text-white/80">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
