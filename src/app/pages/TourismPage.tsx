import { motion } from 'motion/react';
import { Tourism } from '../components/Tourism';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, MapPin, Palmtree, Mountain, Star } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Paragliding Adventures',
    description: 'Soar above the Kwahu hills during Easter and experience breathtaking aerial views of the landscape.',
    icon: Palmtree,
  },
  {
    id: 2,
    title: 'Cultural Immersion',
    description: 'Participate in traditional festivals, visit royal palaces, and learn about Kwahu heritage.',
    icon: Star,
  },
  {
    id: 3,
    title: 'Nature Trails',
    description: 'Explore hiking paths through lush hills, waterfalls, and scenic viewpoints.',
    icon: Mountain,
  },
];

export function TourismPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660675134062-7d3bbb340608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMHRyYWRpdGlvbmFsJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3MTQ4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tourism in Mpraeso"
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
            <div className="inline-block bg-[#d4a574] text-gray-900 px-6 py-2 rounded-full mb-6 font-semibold">
              Discover Mpraeso
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tourism & Culture
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Attractions, festivals & landmarks in the heart of Ghana's Kwahu highlands
            </p>
          </div>
        </motion.div>
      </section>

      {/* Unique Experiences */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unique Experiences Await
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div key={exp.id} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3a6b35] to-[#2d5016] rounded-full mb-6 shadow-lg">
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tourism Component */}
      <Tourism />

      {/* Best Time to Visit */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Plan Your Visit
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#3a6b35] to-[#2d5016] rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={32} className="text-[#d4a574]" />
                  <h3 className="text-2xl font-bold">Easter Season</h3>
                </div>
                <p className="text-white/90 leading-relaxed mb-4">
                  March - April is the peak season with the famous Kwahu Easter celebrations. Experience paragliding, cultural performances, and vibrant street festivals.
                </p>
                <div className="text-[#d4a574] font-semibold">High Season • Most Festive</div>
              </div>

              <div className="bg-gradient-to-br from-[#d4a574] to-[#c89560] rounded-xl p-8 text-gray-900">
                <div className="flex items-center gap-3 mb-4">
                  <Mountain size={32} className="text-[#3a6b35]" />
                  <h3 className="text-2xl font-bold">Off-Peak Season</h3>
                </div>
                <p className="leading-relaxed mb-4">
                  May - February offers quieter exploration, perfect for hiking, cultural immersion, and enjoying the pleasant highland climate.
                </p>
                <div className="text-[#3a6b35] font-semibold">Moderate Season • Peaceful</div>
              </div>
            </div>

            {/* Getting There */}
            <div className="mt-12 bg-[#faf8f5] rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={32} className="text-[#3a6b35]" />
                <h3 className="text-2xl font-bold text-gray-900">Getting to Mpraeso</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">By Road</h4>
                  <p>Approximately 2.5 hours drive from Accra via the Accra-Kumasi highway. Regular bus services available from major terminals.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">By Air</h4>
                  <p>Nearest airport is Kotoka International Airport in Accra. Private charter services available during Easter season.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Local Transport</h4>
                  <p>Taxis and motorbikes readily available within Mpraeso and surrounding sub-towns.</p>
                </div>
              </div>
            </div>

            {/* Visitor Tips */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visitor Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3a6b35] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Book Accommodation Early</h4>
                    <p className="text-gray-600">Especially during Easter season - hotels fill up quickly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3a6b35] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Respect Local Customs</h4>
                    <p className="text-gray-600">Dress modestly when visiting traditional sites and palaces.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3a6b35] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bring Comfortable Shoes</h4>
                    <p className="text-gray-600">Perfect for exploring hills, trails, and festival grounds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3a6b35] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Try Local Cuisine</h4>
                    <p className="text-gray-600">Don't miss fufu, banku, and fresh palm wine.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
