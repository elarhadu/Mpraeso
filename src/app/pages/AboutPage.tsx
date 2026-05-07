import { motion } from "motion/react";
import React from 'react';
import {
  MapPin,
  Users,
  Heart,
  Award,
  BookOpen,
  Globe,
  Crown,
  ArrowRight,
} from "lucide-react";
import { SubTowns } from "../components/SubTowns";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const pillars = [
    {
      icon: BookOpen,
      title: "History",
      desc: "A proud settlement within the Kwahu traditional area, rooted in Akan heritage and generations of community leadership.",
    },
    {
      icon: Globe,
      title: "Geography",
      desc: "Beautifully positioned on the Kwahu Plateau, with scenic hills, cool weather, and panoramic views.",
    },
    {
      icon: Heart,
      title: "Culture",
      desc: "Home to rich traditions, festivals, hospitality, and the famous Kwahu Easter celebrations.",
    },
    {
      icon: Crown,
      title: "Leadership",
      desc: "Guided by traditional authority and local governance working together for community progress.",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Strategic Location",
      desc: "Mpraeso serves as a gateway to the Kwahu highlands and a key administrative centre in the Eastern Region.",
    },
    {
      icon: Users,
      title: "United People",
      desc: "Our sub-towns share common values of hospitality, hard work, respect, and community pride.",
    },
    {
      icon: Heart,
      title: "Living Culture",
      desc: "Festivals, customs, music, and storytelling continue to shape the identity of Mpraeso today.",
    },
    {
      icon: Award,
      title: "Growing Development",
      desc: "Education, healthcare, commerce, and infrastructure continue to drive progress across the municipality.",
    },
  ];

  const stats = [
    { value: "10", label: "Sub-Towns" },
    { value: "25", label: "Churches" },
    { value: "100+", label: "Years of History" },
    { value: "1000s", label: "Diaspora Members" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#142413]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mpraeso Landscape"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142413] via-[#142413]/85 to-[#142413]/45" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a574] backdrop-blur">
              History • Culture • Leadership • Community
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              About Mpraeso
            </h1>

            <p className="max-w-2xl text-xl leading-relaxed text-white/85 md:text-2xl">
              A historic Kwahu community shaped by heritage, unity, natural
              beauty, and a shared commitment to progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative bg-[#faf8f5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#3a6b35]">
                Our Community
              </span>

              <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                The heart of Kwahu South
              </h2>

              <div className="mb-8 h-1 w-24 rounded-full bg-[#d4a574]" />

              <div className="space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  Mpraeso is the administrative capital of the Kwahu South
                  Municipal District in the Eastern Region of Ghana. Set within
                  the scenic Kwahu hills, the community is known for
                  breathtaking landscapes, cultural heritage, and a strong sense
                  of unity.
                </p>

                <p>
                  The town serves as a centre for traditional governance,
                  education, commerce, and cultural activity. Mpraeso proudly
                  preserves its traditions while embracing modern growth and
                  development.
                </p>

                <p>
                  Its elevated position on the Kwahu Plateau gives the town
                  beautiful views, a pleasant climate, and growing appeal as a
                  destination, especially during the famous Easter celebrations.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-gray-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-[#3a6b35] to-[#223f20] p-8 text-white">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4a574]">
                  Mpraeso at a Glance
                </p>

                <h3 className="mb-8 text-3xl font-bold">
                  A proud community with deep roots and a forward-looking
                  spirit.
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/10 p-5 backdrop-blur"
                    >
                      <div className="text-4xl font-bold text-[#d4a574]">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-white/80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#3a6b35]">
              What Defines Us
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Built on heritage, place, culture, and leadership
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => (
              <motion.div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3a6b35]/10 text-[#3a6b35] transition group-hover:bg-[#3a6b35] group-hover:text-white">
                  <item.icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-[#faf8f5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4a574]/20 text-[#8b6f47]">
                    <item.icon size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <motion.div
            className="rounded-3xl bg-[#3a6b35] p-8 text-white md:p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a574]">
              Our Vision
            </span>
            <p className="text-xl leading-relaxed">
              To be a model municipal capital that blends cultural heritage with
              modern development, providing a quality life for residents while
              preserving traditions for future generations.
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-[#faf8f5] p-8 ring-1 ring-gray-200 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-[#d4a574]/20 px-4 py-2 text-sm font-semibold text-[#8b6f47]">
              Our Mission
            </span>
            <p className="text-xl leading-relaxed text-gray-700">
              To foster unity, promote sustainable development, preserve
              cultural identity, and create opportunities through education,
              commerce, and good governance.
            </p>
          </motion.div>
        </div>
      </section>

      <SubTowns />

      {/* CTA */}
      <section className="bg-[#142413] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="mb-6 text-4xl font-bold tracking-tight">
            Experience Mpraeso Hospitality
          </h3>

          <p className="mb-8 text-xl leading-relaxed text-white/80">
            Whether you are a resident, visitor, or member of our diaspora,
            Mpraeso welcomes you with warmth, pride, and the true spirit of
            Ghana.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#d4a574] px-6 py-3 font-semibold text-gray-900">
            Discover the Community
            <ArrowRight size={18} />
          </div>
        </div>
      </section>
    </div>
  );
}
