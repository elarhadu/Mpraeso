import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { Star, Trophy } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Category =
  | "All"
  | "Community Development"
  | "Education"
  | "Healthcare"
  | "Business & Economy"
  | "Culture & Heritage"
  | "Philanthropy";

type Honoree = {
  name: string;
  title: string;
  category: Exclude<Category, "All">;
  yearInducted: number;
  citation: string;
  image?: string;
};

const honorees: Honoree[] = [
  {
    name: "Mr. Bediako Sarpong",
    title: "Pioneer Pharmaceutical Businessman",
    category: "Business & Economy",
    yearInducted: 2018,
    citation:
      "A trailblazer in Ghana's pharmaceutical sector, Mr. Bediako Sarpong helped establish the foundations of modern pharmacy practice and commerce in the Mpraeso community, inspiring generations of entrepreneurs to follow in his footsteps.",
  },
  {
    name: "Mr. Ernest Bediako",
    title: "CEO of Ernest Chemist",
    category: "Business & Economy",
    yearInducted: 2019,
    citation:
      "Mr. Ernest Bediako built Ernest Chemist into one of Ghana's recognised pharmacy brands, demonstrating that Mpraeso's sons can compete at the highest levels of national commerce while remaining deeply invested in the community.",
  },
  {
    name: "Mr. Ofosu Bediako",
    title: "CEO of Bedita Pharmacy",
    category: "Business & Economy",
    yearInducted: 2020,
    citation:
      "As the CEO of Bedita Pharmacy, Mr. Ofosu Bediako has continued the tradition of Mpraeso excellence in the pharmaceutical industry, expanding access to healthcare products and creating employment for many within the community.",
  },
  {
    name: "Mr. A.Y. Danquah",
    title: "Prominent Mpraeso Businessman",
    category: "Business & Economy",
    yearInducted: 2021,
    citation:
      "A distinguished figure in Mpraeso's commercial life, Mr. A.Y. Danquah's entrepreneurial achievements and longstanding contributions to local trade have made him an enduring symbol of the town's business heritage.",
  },
  {
    name: "Mr. Agyare Danquah",
    title: "CEO of Metelex Group",
    category: "Business & Economy",
    yearInducted: 2022,
    citation:
      "Mr. Agyare Danquah has grown the Metelex Group into a significant enterprise, channelling his success into investment and development initiatives that benefit Mpraeso and the broader Kwahu region.",
  },
  {
    name: "Mr. Alfred Kwadwo Danquah",
    title: "CEO of Rockstars Roofing Ltd",
    category: "Business & Economy",
    yearInducted: 2023,
    citation:
      "Through Rockstars Roofing Ltd, Mr. Alfred Kwadwo Danquah has built a reputable construction and roofing enterprise that contributes to housing and infrastructure development, reflecting Mpraeso's growing capacity in the built environment sector.",
  },
  {
    name: "Mrs. Justice Beatrice Agyeman-Bempang",
    title: "Distinguished Member of the Judiciary",
    category: "Community Development",
    yearInducted: 2024,
    citation:
      "Mrs. Justice Beatrice Agyeman-Bempang has served the cause of justice with distinction, standing as an inspiration to the women and young people of Mpraeso and demonstrating that the town's daughters can reach the highest echelons of public service.",
  },
];

const categories: Category[] = [
  "All",
  "Community Development",
  "Education",
  "Healthcare",
  "Business & Economy",
  "Culture & Heritage",
  "Philanthropy",
];

const categoryColors: Record<Exclude<Category, "All">, string> = {
  "Community Development": "bg-blue-50 text-blue-700 border-blue-200",
  Education: "bg-purple-50 text-purple-700 border-purple-200",
  Healthcare: "bg-rose-50 text-rose-700 border-rose-200",
  "Business & Economy": "bg-amber-50 text-amber-700 border-amber-200",
  "Culture & Heritage": "bg-orange-50 text-orange-700 border-orange-200",
  Philanthropy: "bg-teal-50 text-teal-700 border-teal-200",
};

function HonoreeCard({ honoree, index }: { honoree: Honoree; index: number }) {
  return (
    <motion.article
      className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      {/* Top accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#3a6b35] via-[#d4a574] to-[#3a6b35]" />

      <div className="flex flex-1 flex-col p-7">
        {/* Avatar / image */}
        <div className="mb-5 flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#d4a574]/40 bg-[#faf8f5]">
            {honoree.image ? (
              <ImageWithFallback
                src={honoree.image}
                alt={honoree.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-2xl font-bold text-[#3a6b35]/40">
                  {honoree.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold leading-snug text-gray-900">
              {honoree.name}
            </h3>
            <p className="text-sm text-gray-500">{honoree.title}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-5 flex flex-wrap gap-2">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[honoree.category]}`}
          >
            {honoree.category}
          </span>
          <span className="flex items-center gap-1 rounded-full border border-[#d4a574]/40 bg-[#d4a574]/10 px-3 py-1 text-xs font-semibold text-[#7a5a33]">
            <Star size={11} className="fill-[#d4a574] text-[#d4a574]" />
            Inducted {honoree.yearInducted}
          </span>
        </div>

        {/* Citation */}
        <p className="flex-1 text-sm leading-7 text-gray-600">
          "{honoree.citation}"
        </p>
      </div>
    </motion.article>
  );
}

export function HallOfFamePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? honorees
      : honorees.filter((h) => h.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a17] via-[#2d5016] to-[#3a6b35]" />

        {/* Decorative gold circles */}
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#d4a574]/10" />
        <div className="absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-[#d4a574]/10" />

        <motion.div
          className="relative flex min-h-[500px] items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4a574]/40 bg-[#d4a574]/20">
                <Trophy size={32} className="text-[#d4a574]" />
              </div>
            </div>

            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a574] backdrop-blur">
              Recognising Excellence & Service
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Hall of Fame
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/85 md:text-2xl">
              Honouring the sons and daughters of Mpraeso whose extraordinary
              contributions have shaped and uplifted our community.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#3a6b35]">
            A Legacy of Service
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Those Who Gave Back
          </h2>

          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-[#d4a574]" />

          <p className="text-xl leading-relaxed text-gray-600">
            The Mpraeso Hall of Fame celebrates individuals who have gone above
            and beyond to invest in the people, infrastructure, and culture of
            our beloved community. Their deeds stand as an enduring inspiration
            to all.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#3a6b35] text-white shadow"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#3a6b35]/30 hover:text-[#3a6b35]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Honorees grid */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            layout
          >
            {filtered.map((honoree, index) => (
              <HonoreeCard key={honoree.name} honoree={honoree} index={index} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-gray-400">
              No honorees in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
