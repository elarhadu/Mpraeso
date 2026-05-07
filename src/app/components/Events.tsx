import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const upcomingEvents = [
  {
    id: 1,
    title: 'Odwira Festival 2026',
    date: 'March 15-22, 2026',
    time: 'All Day',
    location: 'Mpraeso Town Square',
    description: 'Annual harvest and purification festival celebrating our heritage with traditional ceremonies, drumming, dancing, and cultural displays.',
    color: '#3a6b35',
    image: 'https://images.unsplash.com/photo-1660675134062-7d3bbb340608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMHRyYWRpdGlvbmFsJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3MTQ4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: 2,
    title: 'Community Health Fair',
    date: 'January 18, 2026',
    time: '8:00 AM - 4:00 PM',
    location: 'Mpraeso Health Center',
    description: 'Free health screenings, vaccinations, and wellness consultations',
    color: '#d4a574',
    image: 'https://images.unsplash.com/photo-1761666520005-3ffcf13e74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 3,
    title: 'Youth Development Workshop',
    date: 'February 5, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Municipal Assembly Hall',
    description: 'Skills training and entrepreneurship development for young people',
    color: '#8b6f47',
    image: 'https://images.unsplash.com/photo-1734255026082-82fdc81991f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 4,
    title: 'Diaspora Homecoming',
    date: 'April 10-12, 2026',
    time: 'Weekend',
    location: 'Various Locations',
    description: 'Welcome celebration for members of the Mpraeso diaspora',
    color: '#3a6b35',
    image: 'https://images.unsplash.com/photo-1709808532841-6e336c7da4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGZlc3RpdmFsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjcxNDgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
];

export function Events() {
  const featuredEvent = upcomingEvents.find(e => e.featured);
  const otherEvents = upcomingEvents.filter(e => !e.featured);

  return (
    <section id="events" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d4a574]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4">
            Upcoming Events
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Festivals & Events
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join us for vibrant celebrations and community gatherings throughout the year
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
        </div>

        {/* Featured Event - Large Hero Card */}
        {featuredEvent && (
          <motion.div
            className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0">
              <ImageWithFallback
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
            </div>
            
            <div className="relative py-20 px-8 md:px-12 lg:px-16 text-white">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-[#d4a574] text-gray-900 px-4 py-2 rounded-full mb-6">
                  <Sparkles size={18} />
                  <span className="font-semibold">Featured Event</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {featuredEvent.title}
                </h3>
                
                <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  {featuredEvent.description}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-10 text-lg">
                  <div className="flex items-center gap-3">
                    <Calendar size={24} className="text-[#d4a574]" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={24} className="text-[#d4a574]" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={24} className="text-[#d4a574]" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
                
                <button className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg font-semibold">
                  Explore Our Culture
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Events Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {otherEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-[#faf8f5] rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: event.color, color: 'white' }}
                >
                  {event.date.split(',')[0]}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-xl">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: event.color }} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} style={{ color: event.color }} />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {event.description}
                </p>
                
                <button
                  className="text-sm px-4 py-2 rounded font-semibold transition-colors"
                  style={{
                    backgroundColor: `${event.color}15`,
                    color: event.color
                  }}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-[#3a6b35] hover:bg-[#2d5016] text-white px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
          >
            View Full Events Calendar
          </a>
        </div>
      </div>
    </section>
  );
}