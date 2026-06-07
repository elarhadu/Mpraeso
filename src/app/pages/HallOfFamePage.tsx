import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { Star, Briefcase, Building2, GraduationCap, Heart, Landmark } from "lucide-react";

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
  "Business & Economy",
  "Community Development",
  "Education",
  "Healthcare",
  "Culture & Heritage",
  "Philanthropy",
];

const categoryIcons: Record<Exclude<Category, "All">, React.ElementType> = {
  "Business & Economy": Briefcase,
  "Community Development": Building2,
  "Education": GraduationCap,
  "Healthcare": Heart,
  "Philanthropy": Heart,
  "Culture & Heritage": Landmark,
};

function StarPlaque({ honoree, index }: { honoree: Honoree; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const CategoryIcon = categoryIcons[honoree.category];

  return (
    <motion.article
      className="group relative cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Outer brass frame */}
      <div className="relative overflow-hidden border-[3px] border-[#c9a227] shadow-[0_0_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(201,162,39,0.25),0_0_40px_rgba(0,0,0,0.8)] group-hover:border-[#e8c040]">
        {/* Inner brass inset line */}
        <div className="absolute inset-[6px] border border-[#c9a227]/40 pointer-events-none z-10" />

        {/* Background — deep coral/crimson like the Walk of Fame */}
        <div className="relative bg-[#8b1a1a] px-6 pb-8 pt-10 text-center">
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-black/20 pointer-events-none" />

          {/* Star with category icon inset */}
          <div className="relative mx-auto mb-5 inline-flex">
            <Star
              size={80}
              className="text-[#c9a227] drop-shadow-[0_2px_12px_rgba(201,162,39,0.5)]"
              fill="#c9a227"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <CategoryIcon
                size={22}
                className="text-[#8b1a1a]"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Induction year */}
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9a227]/60">
            Inducted {honoree.yearInducted}
          </p>

          {/* Name */}
          <h3 className="mb-2 text-base font-extrabold uppercase leading-tight tracking-[0.12em] text-[#f5e09e]">
            {honoree.name}
          </h3>

          {/* Title */}
          <p className="text-[11px] font-medium text-[#c9a227]/75">
            {honoree.title}
          </p>

          {/* Divider */}
          <div className="mx-auto my-5 h-px w-12 bg-[#c9a227]/35" />

          {/* Citation — shown on expand */}
          <p
            className={`text-[11px] leading-5 text-white/55 italic transition-all duration-300 ${
              expanded ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"
            }`}
          >
            "{honoree.citation}"
          </p>

          {/* Tap hint */}
          <p className="mt-4 text-[9px] uppercase tracking-widest text-[#c9a227]/40 transition-opacity group-hover:text-[#c9a227]/70">
            {expanded ? "Tap to close" : "Tap to read"}
          </p>
        </div>
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
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero — sidewalk-dark with gold treatment */}
      <section className="relative overflow-hidden bg-[#0d0d0d] py-28 md:py-36">
        {/* Decorative star field */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <Star
              key={i}
              size={i % 3 === 0 ? 24 : i % 3 === 1 ? 14 : 8}
              fill="#c9a227"
              className="absolute opacity-10"
              style={{
                left: `${(i * 17 + 5) % 95}%`,
                top: `${(i * 13 + 8) % 85}%`,
              }}
            />
          ))}
        </div>

        {/* Gold sidewalk stripe */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          {/* Large background star */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
            <Star size={400} fill="#c9a227" className="text-[#c9a227]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#c9a227]/60">
              Mpraeso · Walk of Excellence
            </p>

            <h1 className="mb-6 text-6xl font-extrabold uppercase tracking-tight text-[#f5e09e] md:text-7xl lg:text-8xl"
              style={{ textShadow: "0 0 60px rgba(201,162,39,0.3)" }}
            >
              Hall of Fame
            </h1>

            <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Honouring the sons and daughters of Mpraeso whose extraordinary contributions have shaped and uplifted our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-y border-[#c9a227]/15 bg-[#111111] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-none border px-5 py-2 text-xs font-bold uppercase tracking-widest transition ${
                  activeCategory === cat
                    ? "border-[#c9a227] bg-[#c9a227] text-[#0d0d0d]"
                    : "border-[#c9a227]/25 text-[#c9a227]/50 hover:border-[#c9a227]/70 hover:text-[#c9a227]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stars grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* "Sidewalk" label */}
          <p className="mb-12 text-center text-[10px] uppercase tracking-[0.5em] text-[#c9a227]/30">
            ★ &nbsp; Walk of Excellence &nbsp; · &nbsp; Kwahu Mpraeso &nbsp; ★
          </p>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            layout
          >
            {filtered.map((honoree, index) => (
              <StarPlaque key={honoree.name} honoree={honoree} index={index} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-[#c9a227]/30">
              No honorees in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Bottom stripe */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
    </div>
  );
}
