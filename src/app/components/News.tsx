import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import healthImage from '../../assests/health.jpeg';
import diasporaEducationImage from '../../assests/diaspora_education_donation.png';
import openingSocialImage from '../../assests/opening_social.jpeg';

const newsItems = [
  {
    id: 1,
    title: 'Annual Akwasidae Festival Preparations Underway',
    excerpt: 'The traditional council announces plans for this year\'s grand Akwasidae festival celebration with enhanced cultural programs.',
    date: 'December 20, 2025',
    image: openingSocialImage,
    category: 'Culture'
  },
  {
    id: 2,
    title: 'New Community Health Center Opens in Mpraeso',
    excerpt: 'State-of-the-art healthcare facility begins operations to serve residents with improved medical services.',
    date: 'December 15, 2025',
    image: healthImage,
    category: 'Development'
  },
  {
    id: 3,
    title: 'Diaspora Community Funds New School Block',
    excerpt: 'Mpraeso diaspora association donates funds for construction of modern classroom facilities at local primary school.',
    date: 'December 10, 2025',
    image: diasporaEducationImage,
    category: 'Education'
  }
];

export function News() {
  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Announcements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#d4a574] text-gray-900 px-3 py-1 rounded text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {item.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#3a6b35] hover:text-[#2d5016] transition-colors text-sm"
                >
                  Read more <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border-2 border-[#3a6b35] text-[#3a6b35] hover:bg-[#3a6b35] hover:text-white px-8 py-3 rounded-lg transition-colors"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
}
