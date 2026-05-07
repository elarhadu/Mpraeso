import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mountain, PartyPopper, Landmark } from 'lucide-react';

const showcaseItems = [
  {
    id: 1,
    title: 'Scenic Landscapes',
    description: 'Breathtaking views of the Kwahu hills',
    image: 'https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Mountain,
  },
  {
    id: 2,
    title: 'Vibrant Festivals',
    description: 'Rich cultural celebrations',
    image: 'https://images.unsplash.com/photo-1709808532841-6e336c7da4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGZlc3RpdmFsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjcxNDgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: PartyPopper,
  },
  {
    id: 3,
    title: 'Historic Sites',
    description: 'Traditional heritage landmarks',
    image: 'https://images.unsplash.com/photo-1685260396904-6ea36832f694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Landmark,
  },
];

export function VisualShowcase() {
  return (
    <section className="py-0 bg-white">
      <div className="grid md:grid-cols-3">
        {showcaseItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              className="relative h-[300px] md:h-[350px] overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-[#3a6b35]/90 group-hover:via-[#3a6b35]/60 transition-all duration-500"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                <div className="p-4 bg-[#d4a574] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">
                  {item.title}
                </h3>
                <p className="text-white/90 group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
