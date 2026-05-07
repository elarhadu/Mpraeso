import { motion } from 'motion/react';
import { Globe, Users, Heart, ArrowRight } from 'lucide-react';

export function Diaspora() {
  return (
    <section id="diaspora" className="py-16 md:py-24 bg-gradient-to-br from-[#3a6b35] to-[#2d5016] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diaspora Engagement
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
            Stay connected with your roots, contribute to community development, and maintain the bond with home
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { Icon: Globe, title: 'Stay Connected', desc: 'Receive regular updates, news, and cultural content from home' },
            { Icon: Heart, title: 'Give Back', desc: 'Support community projects and make a lasting impact' },
            { Icon: Users, title: 'Network', desc: 'Connect with fellow Mpraeso citizens around the world' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4a574] rounded-full mb-4">
                <item.Icon size={32} className="text-gray-900" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Join the Mpraeso Diaspora Network
            </h3>
            <p className="text-white/90 mb-8">
              Whether you're in Accra, London, New York, or anywhere in the world, you're part of our community. Register to receive updates, participate in virtual events, and stay connected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                Register Now <ArrowRight size={20} />
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Pattern */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? '#d4a574' : 'rgba(255,255,255,0.3)'
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
