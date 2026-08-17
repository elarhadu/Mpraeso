import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { Star, Briefcase, Building2, GraduationCap, Heart, Landmark } from "lucide-react";

// Walk-of-Fame terrazzo palette
const TILE_CHARCOAL = "#2A2E33";
const STAR_CORAL = "#E19999";
const BRASS_GOLD = "#C9A76A";
const BRASS_GOLD_DARK = "#A68B5A";
const BRASS_INK = "#3E321E";

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

// Shared speckled-terrazzo texture, layered as a background-image so it works
// on both the tile and the star without relying on comma-separated Tailwind
// arbitrary values.
const tileTexture: React.CSSProperties = {
  backgroundColor: TILE_CHARCOAL,
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
  backgroundSize: "15px 15px, 20px 20px",
  backgroundPosition: "0 0, 10px 10px",
};

const starTexture: React.CSSProperties = {
  background: STAR_CORAL,
  clipPath:
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  border: `3px solid ${BRASS_GOLD}`,
  backgroundImage:
    "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
  backgroundSize: "8px 8px, 12px 12px",
};

function StarPlaque({ honoree, index }: { honoree: Honoree; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const CategoryIcon = categoryIcons[honoree.category];

  return (
    <motion.article
      className="group relative w-full max-w-[320px] cursor-pointer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Terrazzo tile */}
      <div
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-[1.03]"
        style={tileTexture}
      >
        {/* Star inlay — the emblem sits in the star's widest band; the
            name/title live in the caption below, since honoree names here
            run far longer than a typical Walk of Fame star can hold. */}
        <div className="relative flex h-[82%] w-[82%] items-center justify-center" style={starTexture}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.35)]" style={{ background: BRASS_GOLD, border: `2px solid ${BRASS_GOLD_DARK}` }}>
            <CategoryIcon size={22} strokeWidth={2.5} style={{ color: BRASS_INK }} />
          </div>
        </div>
      </div>

      {/* Caption plate beneath the tile */}
      <div className="mt-4 text-center">
        <h3 className="text-sm font-bold uppercase leading-tight tracking-[0.08em]" style={{ color: BRASS_GOLD }}>
          {honoree.name}
        </h3>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: `${BRASS_GOLD}99` }}>
          Inducted {honoree.yearInducted}
        </p>
        <p className="mt-1 text-[11px] font-medium text-white/55">{honoree.title}</p>

        <div className="mx-auto my-3 h-px w-10" style={{ background: `${BRASS_GOLD}59` }} />

        <p
          className={`text-[11px] italic leading-5 text-white/50 transition-all duration-300 ${
            expanded ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          "{honoree.citation}"
        </p>

        <p className="mt-3 text-[9px] uppercase tracking-widest transition-opacity" style={{ color: `${BRASS_GOLD}66` }}>
          {expanded ? "Tap to close" : "Tap to read"}
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
    <div className="min-h-screen" style={{ backgroundColor: TILE_CHARCOAL }}>
      {/* Hero — sidewalk-charcoal with gold treatment */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ backgroundColor: TILE_CHARCOAL }}>
        {/* Decorative star field */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <Star
              key={i}
              size={i % 3 === 0 ? 24 : i % 3 === 1 ? 14 : 8}
              fill={BRASS_GOLD}
              className="absolute opacity-10"
              style={{
                left: `${(i * 17 + 5) % 95}%`,
                top: `${(i * 13 + 8) % 85}%`,
                color: BRASS_GOLD,
              }}
            />
          ))}
        </div>

        {/* Gold sidewalk stripe */}
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(to right, transparent, ${BRASS_GOLD}, transparent)` }} />
        <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: `linear-gradient(to right, transparent, ${BRASS_GOLD}, transparent)` }} />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          {/* Large background star */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
            <Star size={400} fill={BRASS_GOLD} style={{ color: BRASS_GOLD }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em]" style={{ color: `${BRASS_GOLD}99` }}>
              Mpraeso · Walk of Excellence
            </p>

            <h1
              className="mb-6 text-6xl font-extrabold uppercase tracking-tight md:text-7xl lg:text-8xl"
              style={{ color: "#F5E0B0", textShadow: `0 0 60px ${BRASS_GOLD}4d` }}
            >
              Hall of Fame
            </h1>

            <div className="mx-auto mb-8 h-px w-40" style={{ background: `linear-gradient(to right, transparent, ${BRASS_GOLD}, transparent)` }} />

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Honouring the sons and daughters of Mpraeso whose extraordinary contributions have shaped and uplifted our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-y py-6" style={{ borderColor: `${BRASS_GOLD}26`, backgroundColor: "#24282d" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-none border px-5 py-2 text-xs font-bold uppercase tracking-widest transition"
                  style={
                    isActive
                      ? { borderColor: BRASS_GOLD, backgroundColor: BRASS_GOLD, color: TILE_CHARCOAL }
                      : { borderColor: `${BRASS_GOLD}40`, color: `${BRASS_GOLD}80` }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stars grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* "Sidewalk" label */}
          <p className="mb-12 text-center text-[10px] uppercase tracking-[0.5em]" style={{ color: `${BRASS_GOLD}4d` }}>
            ★ &nbsp; Walk of Excellence &nbsp; · &nbsp; Kwahu Mpraeso &nbsp; ★
          </p>

          <div className="grid justify-items-center gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((honoree, index) => (
              <StarPlaque key={honoree.name} honoree={honoree} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center" style={{ color: `${BRASS_GOLD}4d` }}>
              No honorees in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Bottom stripe */}
      <div className="h-1" style={{ background: `linear-gradient(to right, transparent, ${BRASS_GOLD}, transparent)` }} />
    </div>
  );
}
