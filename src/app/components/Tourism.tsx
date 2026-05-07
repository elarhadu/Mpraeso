import { motion } from 'motion/react';
import { MapPin, Camera, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    id: 1,
    title: 'Kwahu Easter Festival',
    description: 'Experience the famous Easter celebrations with paragliding, cultural performances, and traditional festivities.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1660675134062-7d3bbb340608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMHRyYWRpdGlvbmFsJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3MTQ4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Kwahu Ridge & Hills',
    description: 'Explore breathtaking mountain landscapes, hiking trails, and panoramic views of the Eastern Region.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Traditional Palaces',
    description: 'Visit historic royal palaces and learn about the rich heritage of Kwahu traditional leadership.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1709808532841-6e336c7da4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGZlc3RpdmFsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjcxNDgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const attractions = [
  {
    id: 4,
    name: 'Obomeng Mountain',
    type: 'Natural Landmark',
    image: 'https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Odwira Festival Grounds',
    type: 'Cultural Site',
    image: 'https://images.unsplash.com/photo-1709808532841-6e336c7da4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGZlc3RpdmFsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjcxNDgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Local Craft Markets',
    type: 'Shopping & Culture',
    image: 'https://images.unsplash.com/photo-1734255026082-82fdc81991f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Tourism() {
  return (
    <section id="tourism" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3a6b35]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4">
            Tourism & Culture
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Experience Mpraeso
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the beauty, traditions, and vibrant festivals that make Mpraeso an unforgettable destination
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
        </div>

        {/* Main Highlights - Large Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 text-white mb-3">
                      <div className="p-2 bg-[#d4a574] rounded-lg">
                        <Icon size={24} className="text-gray-900" />
                      </div>
                      <h3 className="text-2xl font-bold">
                        {highlight.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-lg">
                    {highlight.description}
                  </p>
                  <button className="text-[#3a6b35] hover:text-[#2d5016] font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More Attractions - Image Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Attractions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                className="relative h-72 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ImageWithFallback
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-sm text-[#d4a574] mb-2">{attraction.type}</div>
                  <h4 className="text-xl font-bold">{attraction.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bold CTA Section */}
        <div className="relative rounded-2xl overflow-hidden mt-16">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761666520005-3ffcf13e74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Visit Mpraeso"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3a6b35]/95 to-[#2d5016]/90"></div>
          </div>
          
          <div className="relative py-20 px-8 text-center text-white">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Plan Your Visit to Mpraeso
            </h3>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90">
              Immerse yourself in our rich culture, explore stunning landscapes, and create unforgettable memories
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg font-semibold">
                <Camera size={24} />
                Visit Mpraeso
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 px-10 py-4 rounded-lg transition-all transform hover:scale-105 text-lg font-semibold">
                Download Travel Guide
              </button>
            </div>
          </div>
        </div>

        {/* Cultural Pattern Divider */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rotate-45"
                style={{
                  backgroundColor: i % 2 === 0 ? '#3a6b35' : '#d4a574'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}