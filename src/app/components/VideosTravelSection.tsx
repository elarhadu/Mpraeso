import { motion } from 'motion/react';
import { MapPin, Car, Plane, Bike } from 'lucide-react';
import dayViewVideo from '../../assests/mpraeso_view_day.mp4';
import nightVideo from '../../assests/mpraeso_view_night.mp4';

const travelRoutes = [
  {
    Icon: Car,
    heading: 'By Road',
    detail: 'Approximately 2.5 hours drive from Accra via the Accra-Kumasi highway. Regular bus services run from Accra (Neoplan/VIP stations) and Kumasi.',
  },
  {
    Icon: Plane,
    heading: 'By Air',
    detail: 'Fly into Kotoka International Airport in Accra. Private charter services are available during the Easter season direct to the Kwahu area.',
  },
  {
    Icon: Bike,
    heading: 'Local Transport',
    detail: 'Taxis and motorbikes (okada) are readily available within Mpraeso and all surrounding sub-towns for last-mile travel.',
  },
];

export function VideosTravelSection() {
  return (
    <section className="bg-[#0d0d0d] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#d4a574]">
            See & Reach Mpraeso
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Videos & Getting Here</h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#d4a574]" />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Videos */}
          <div className="space-y-4">
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d4a574]/70">Day View</p>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-52 w-full rounded-xl object-cover"
                src={`${dayViewVideo}#t=7`}
              />
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d4a574]/70">Night View</p>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-52 w-full rounded-xl object-cover"
                src={`${nightVideo}#t=7`}
              />
            </motion.div>
          </div>

          {/* Getting to Mpraeso */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a574]/20">
                <MapPin size={20} className="text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Getting to Mpraeso</h3>
            </div>

            <div className="space-y-6">
              {travelRoutes.map(({ Icon, heading, detail }) => (
                <div key={heading} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                    <Icon size={18} className="text-[#d4a574]" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{heading}</h4>
                    <p className="text-sm leading-6 text-white/60">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
