import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Image as ImageIcon } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Kwahu hills landscape',
    category: 'Landscapes'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1709808532841-6e336c7da4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGZlc3RpdmFsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjcxNDgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Traditional festival celebration',
    category: 'Festivals'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1761666520005-3ffcf13e74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Community gathering',
    category: 'Community Life'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1734255026082-82fdc81991f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Local market scene',
    category: 'Markets'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1660675134062-7d3bbb340608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMHRyYWRpdGlvbmFsJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3MTQ4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Traditional ceremony',
    category: 'Culture'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1685260396904-6ea36832f694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Local architecture',
    category: 'Architecture'
  },
  // Additional local images
  {
    id: 7,
    src: '/gallery/img-380-de4fc896-a686-4d85-b2d9-4b21fb808aa4.png',
    alt: 'Cultural ceremony with traditional fly-whisk',
    category: 'Culture'
  },
  {
    id: 8,
    src: '/gallery/img-097-b088dadb-c670-4678-9d70-07ef11021658.png',
    alt: 'Woman in traditional black attire',
    category: 'Portraits'
  },
  {
    id: 9,
    src: '/gallery/img-363-e95a4e20-b147-4788-aecb-482cc8908e9b.png',
    alt: 'Traditional handshake at cultural event',
    category: 'Culture'
  },
  {
    id: 10,
    src: '/gallery/img-372-7b5512fc-3e48-4c5b-a40e-9a462cff0ef9.png',
    alt: 'Traditional dance performance in kente cloth',
    category: 'Festivals'
  },
  {
    id: 11,
    src: '/gallery/img-419-d3c45718-8296-4947-a0be-22e93f3e587a.png',
    alt: 'Mpraeso Ahenfie ceremony',
    category: 'Culture'
  },
  {
    id: 12,
    src: '/gallery/img-067-3a83339a-44b7-487e-97a5-98e44cd6e5cd.png',
    alt: 'Woman in traditional cloth',
    category: 'Portraits'
  },
  {
    id: 13,
    src: '/gallery/img-096-2e1e4514-2aab-470f-9245-8dc38892b59e.png',
    alt: 'Community members in traditional and formal attire',
    category: 'Community'
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#3a6b35]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4">
            Photo Gallery
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Capturing Mpraeso's Beauty
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore stunning visuals of our landscapes, festivals, and vibrant community life
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
        </motion.div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Large featured image */}
          <div className="md:col-span-2 lg:row-span-2 relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow">
            <ImageWithFallback
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block bg-[#d4a574] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {galleryImages[0].category}
                </div>
                <p className="text-white text-xl font-semibold">{galleryImages[0].alt}</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="text-white" size={24} />
            </div>
          </div>

          {/* Other images */}
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={image.id}
              className={`relative ${index === 0 ? 'h-[300px]' : 'h-[280px]'} overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block bg-[#d4a574] text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </div>
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="text-white" size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#3a6b35] to-[#2d5016] rounded-2xl p-12 text-center text-white shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#d4a574] rounded-full">
              <Camera size={32} className="text-gray-900" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Complete Gallery
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover hundreds more photos showcasing the beauty of Mpraeso, from scenic landscapes to cultural celebrations
          </p>
          <button className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg font-semibold">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}