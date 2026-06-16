import { motion } from "motion/react";
import { GraduationCap, Wheat, Factory, Building2, Hammer } from "lucide-react";

const sectors = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Tertiary Education",
    tagline: "Invest in the minds of tomorrow",
    color: "#86efac",
    description:
      "Mpraeso is positioned to become an educational hub in the Eastern Region. Land has been allocated by the Paramount Chief for a university campus, and there is an urgent need for private investment to establish hostels, lecture facilities, research centres, and student services infrastructure.",
    opportunities: [
      "University campus development & facilities",
      "Student accommodation (hostels & housing estates)",
      "Research and innovation centres",
      "Vocational and technical training institutes",
      "E-learning and EdTech ventures",
    ],
  },
  {
    id: 2,
    icon: Wheat,
    title: "Commercial Farming & Agro-Processing",
    tagline: "Feed the region, grow your returns",
    color: "#fcd34d",
    description:
      "The Kwahu highlands offer fertile land, reliable rainfall, and proximity to major Ghanaian markets. Mpraeso is an ideal base for large-scale commercial farming and value-added agro-processing, tapping into Ghana's growing demand for locally processed foods and agricultural exports.",
    opportunities: [
      "Large-scale crop cultivation (cassava, yam, maize, vegetables)",
      "Poultry and livestock farming",
      "Fruit processing and juice manufacturing",
      "Cold storage and food logistics facilities",
      "Organic produce for export markets",
    ],
  },
  {
    id: 3,
    icon: Factory,
    title: "Modernised Earthenware Production",
    tagline: "Scale a centuries-old craft into a global product",
    color: "#fdba74",
    description:
      "Kwahu has a deep-rooted tradition of earthenware and pottery craftsmanship. With modern investment in equipment, design, and distribution, this sector presents a unique opportunity to scale traditional craft into premium domestic and export-grade products, creating employment while preserving cultural heritage.",
    opportunities: [
      "Modern pottery and ceramics manufacturing plants",
      "Design studios for premium artisan products",
      "Export distribution and packaging facilities",
      "Cultural tourism integration (craft trails, workshops)",
      "Training academies for skilled artisans",
    ],
  },
  {
    id: 4,
    icon: Building2,
    title: "Real Estate Development",
    tagline: "Build where growth is happening",
    color: "#a5f3fc",
    description:
      "As Mpraeso's economy grows and its diaspora population seeks quality homes, demand for residential and commercial real estate is rising significantly. The town's natural beauty and highland climate make it particularly attractive for premium developments, holiday homes, and hospitality infrastructure.",
    opportunities: [
      "Residential estates and gated communities",
      "Holiday homes and short-stay apartments",
      "Hotels, lodges, and hospitality developments",
      "Commercial plazas and office parks",
      "Mixed-use urban development projects",
    ],
  },
  {
    id: 5,
    icon: Hammer,
    title: "Manufacturing Factories",
    tagline: "Power the industrial growth of Eastern Ghana",
    color: "#86efac",
    description:
      "Mpraeso's strategic location on the Kwahu Ridge, with road access to Accra, Kumasi, and surrounding regions, makes it an attractive location for light and medium manufacturing. Available land and a skilled workforce create the right conditions for industrial investment.",
    opportunities: [
      "Light manufacturing (textiles, packaging, plastics)",
      "Building materials production (blocks, roofing, timber)",
      "Food and beverage manufacturing",
      "Pharmaceutical production and distribution",
      "Renewable energy equipment assembly",
    ],
  },
];

export function InvestmentPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-gradient-to-br from-[#1a3a17] via-[#2d5016] to-[#3a6b35]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#d4a574]/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#d4a574]/8" />

        <motion.div
          className="relative flex min-h-[520px] items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a574] backdrop-blur">
              Investment Opportunities
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Invest in Kwahu Mpraeso
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/85 md:text-2xl">
              The commercial heart of the Kwahu Ridge is open for business. Discover
              five high-potential sectors where your capital can grow — and where
              Mpraeso's community will thrive alongside you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#3a6b35]">
            Why Mpraeso?
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            A Town Built for Growth
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-[#d4a574]" />
          <p className="text-xl leading-relaxed text-gray-600">
            Mpraeso sits at the heart of the Kwahu Ridge — one of Ghana's most commercially
            active highlands. With strong diaspora ties, committed traditional leadership, a
            growing population, and exceptional natural resources, the conditions for
            long-term, sustainable investment have never been more favourable.
          </p>
        </div>
      </section>

      {/* Sectors — glass cards on dark background */}
      <section className="bg-[#0d1a0d] py-20 md:py-28">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">

          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#d4a574]">
              Sectors
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Five High-Potential Investment Sectors
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:shadow-[0px_0px_24px_2px_#fab57040] min-h-[520px]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  {/* Decorative gold circle */}
                  <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#fab570]/[0.12]" />
                  {/* Decorative vertical line */}
                  <div className="pointer-events-none absolute right-6 top-0 h-10 w-px bg-white/15" />

                  <div className="relative flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${sector.color}18` }}
                    >
                      <Icon size={22} style={{ color: sector.color }} />
                    </div>

                    {/* Sector label + title */}
                    <p
                      className="mb-1 text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: sector.color }}
                    >
                      Sector {sector.id}
                    </p>
                    <h3 className="mb-1 text-base font-bold leading-snug text-white">
                      {sector.title}
                    </h3>
                    <p className="mb-4 text-xs italic text-white/45">{sector.tagline}</p>

                    {/* Description */}
                    <p className="mb-5 flex-1 text-xs leading-relaxed text-white/55">
                      {sector.description}
                    </p>

                    {/* Opportunities */}
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/30">
                        Opportunities
                      </p>
                      <ul className="space-y-2">
                        {sector.opportunities.map((opp) => (
                          <li key={opp} className="flex items-start gap-2 text-xs text-white/60">
                            <span
                              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: sector.color }}
                            />
                            {opp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 pt-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#1a3a17] to-[#3a6b35] p-12 text-center text-white shadow-xl">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Invest?</h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/85">
              We welcome investors from across Ghana and the global Mpraeso diaspora. Reach out
              to discuss land availability, partnership structures, and how the traditional
              authority can support your investment.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4a574] px-8 py-4 text-base font-bold text-gray-900 transition hover:bg-[#c89560]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
