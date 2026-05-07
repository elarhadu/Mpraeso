import { useRef, useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import mpraesoHeneImage from "../../assests/mpraesohene.jpeg";
import adontengheneImage from "../../assests/adontenghene.jpeg";
import nifaheneImage from "../../assests/nifahene.jpeg";

type ChiefProfile = {
  name: string;
  title: string;
  image: string;
  enstooled: string;
  focus: string;
  summary: string;
  details: string[];
};

const chiefProfiles: ChiefProfile[] = [
  {
    name: "Nana Ampadu Daaduam III",
    title: "Mpraeso Hene (Paramount Chief)",
    image: mpraesoHeneImage,
    enstooled: "23 October 1993",
    focus: "Unity, education, and long-term development",
    summary:
      "Nana Ampadu Daaduam III is the Paramount Chief of Mpraeso and has guided the traditional area with a development-centered vision since 1993.",
    details: [
      "Studied at Achimota Secondary School and later earned a First Class Law degree from the University of Hull in 1964.",
      "Completed advanced studies at the London School of Economics and was called to the Bar in the UK in 1967.",
      "Has prioritized peaceful dispute resolution and social harmony across the traditional area.",
      "Championed educational and infrastructure development including TVET and kindergarten expansion.",
    ],
  },
  {
    name: "Nana Krobea Asante",
    title: "Adontenhene of Mpraeso",
    image: adontengheneImage,
    enstooled: "20 September 2020",
    focus: "Protection, elder welfare, and enterprise development",
    summary:
      "Nana Krobea Asante is the first woman to occupy the Adonteng stool in Mpraeso, bringing entrepreneurial leadership and community advocacy.",
    details: [
      "Interprets the Adonten role through its warrior tradition of courage and vigilance.",
      "Promotes economic empowerment and inclusive leadership.",
      "Advocates for stronger representation of women in traditional leadership.",
      "Supports elder welfare and local business development initiatives.",
    ],
  },
  {
    name: "Chief Inspector Emmanuel Kwabena Obeng-Tetteh",
    title: "Nifahene of Mpraeso",
    image: nifaheneImage,
    enstooled: "18 January 2025",
    focus: "Coordination, administration, and institutional continuity",
    summary:
      "As the first Nifahene of Mpraeso, he focuses on palace coordination, institutional structure, and efficient governance.",
    details: [
      "Serves professionally as a Public Prosecutor with the Ghana Police Service.",
      "Emphasizes discipline, structure, and accountability in leadership.",
      "Focused on creating systems future Nifahene can build upon.",
      "Strengthens communication and coordination among chiefs and elders.",
    ],
  },
  {
    name: "Nana Adwoa Obenewaa",
    title: "Benkumhene of Mpraeso",
    image: "/gallery/img-067-3a83339a-44b7-487e-97a5-98e44cd6e5cd.png",
    enstooled: "7 April 2025",
    focus: "Dispute resolution, inclusive governance, and education",
    summary:
      "Nana Adwoa Obenewaa brings an inclusive and development-focused perspective to traditional leadership in Mpraeso.",
    details: [
      "Advocates culturally grounded dispute resolution and social trust.",
      "Supports participatory decision-making within the community.",
      "Believes education is central to long-term development.",
      "Promotes community-centered leadership and inclusive governance.",
    ],
  },
];

function ChiefCard({ chief, index }: { chief: ChiefProfile; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="grid items-start lg:grid-cols-[360px_1fr]">
        {/* Image */}
        <div className="relative h-[320px] overflow-hidden lg:h-[420px]">
          <ImageWithFallback
            src={chief.image}
            alt={chief.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent lg:hidden" />

          <div className="absolute bottom-5 left-5 right-5 lg:hidden">
            <p className="text-sm font-semibold text-[#d4a574]">
              {chief.title}
            </p>

            <h3 className="text-2xl font-bold text-white">{chief.name}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-10">
          <div className="hidden lg:block">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#3a6b35]">
              {chief.title}
            </p>

            <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
              {chief.name}
            </h3>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#3a6b35]/10 px-4 py-2 text-sm font-semibold text-[#3a6b35]">
              Enstooled: {chief.enstooled}
            </span>

            <span className="rounded-full bg-[#d4a574]/20 px-4 py-2 text-sm font-semibold text-[#7a5a33]">
              {chief.focus}
            </span>
          </div>

          {/* Summary */}
          <p className="mb-6 max-w-3xl text-lg leading-8 text-gray-700">
            {chief.summary}
          </p>

          {/* Expand Button */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 rounded-full bg-[#3a6b35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2d5016]"
          >
            {open ? "Hide full profile" : "Read full profile"}

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Expandable Details */}
          {open && (
            <motion.div
              className="mt-8 border-t border-gray-200 pt-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-4">
                {chief.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 text-base leading-8 text-gray-600"
                  >
                    <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#d4a574]" />

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function TraditionalAuthorityPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollProfiles = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.clientWidth * 0.9;
    sliderRef.current.scrollBy({
      left: direction === 'right' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660675134062-7d3bbb340608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMHRyYWRpdGlvbmFsJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3MTQ4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Traditional Authority"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <motion.div
          className="relative flex min-h-[500px] items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a574] backdrop-blur">
              Chieftaincy & Heritage
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Traditional Authority
            </h1>

            <p className="text-xl leading-relaxed text-white/85 md:text-2xl">
              Omanhene and the Chiefs of Mpraeso
            </p>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#3a6b35]">
            Traditional Leadership
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Custodians of Culture & Community
          </h2>

          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-[#d4a574]" />

          <p className="text-xl leading-relaxed text-gray-600">
            The traditional authority of Mpraeso preserves centuries of heritage
            while guiding development, unity, and cultural identity for future
            generations.
          </p>
        </div>
      </section>

      {/* Chiefs */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollProfiles('left')}
              className="rounded-full border border-[#3a6b35]/20 bg-white px-4 py-2 text-sm font-semibold text-[#3a6b35] transition hover:bg-[#3a6b35]/5"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => scrollProfiles('right')}
              className="rounded-full border border-[#3a6b35]/20 bg-white px-4 py-2 text-sm font-semibold text-[#3a6b35] transition hover:bg-[#3a6b35]/5"
            >
              Next
            </button>
          </div>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {chiefProfiles.map((chief, index) => (
              <div key={chief.name} className="w-[92%] shrink-0 snap-start md:w-[78%] lg:w-[70%]">
                <ChiefCard chief={chief} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
