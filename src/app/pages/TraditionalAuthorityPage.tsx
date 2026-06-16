import { useRef, useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import mpraesoHeneImage from "../../assests/mpraesohene.jpeg";
import adontengheneImage from "../../assests/adontenghene.jpeg";
import nifaheneImage from "../../assests/nifahene.jpeg";
import nkosuoheneImage from "../../assests/Nkosuohene.jpg";
import chiefGatheringImage from "../../assests/chief_gathering.jpeg";

type ChiefProfile = {
  name: string;
  title: string;
  image: string;
  enstooled?: string;
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
      "Nana Ampadu Daaduam III is the Paramount Chief of Mpraeso. A consummate lawyer and economist in private life, he has brought a lot of development to the Mpraeso community since his ascension to the Mpraeso throne in 1993. His education spanned from the Atibbie Methodist school, Achimota Secondary School in Accra, University of Hull for his Law Degree and the London School of Economics for his Masters Degree.",
    details: [
      "In 1964, he graduated with a First Class Law Degree from the University of Hull becoming the first student in the history of the university to graduate with a First Class in Law. This prompted the President of Ghana at the time, Dr. Kwame Nkrumah to send a delegation to represent him at Nana's graduation ceremony in the UK and the BBC, recognising his achievement as a student also did a feature interview on him in 1964. Till date, there is a plague in the University of Hull recognising his academic credentials while he schooled there. In 1967, he was called to the bar in the UK.",
      "Upon returning to Ghana in 1967, he had his law pupillage, worked for a couple of Law Chambers and then set-up his own Law Practice Firm in 1972. Apart from law practice, he has engaged in numerous ventures in private life including entrepreneurship and politics which saw him contesting for the Parliamentary seats of Mpraeso  and Nkawkaw between 1979 and 1992.",
      "On the 23rd of October 1993, he was enstooled as the Paramount Chief of Mpraeso and has over the past 33 years dedicated himself to the service of the Mpraeso people as their Paramount chief.",
      "His reign has seen to the resolution of the numerous chieftaincy disputes that plagued the town before his enstoolment as well as both infrastructural and cultural development of the Mpraeso community. Due to his dedication to the educational development of his people, he has spent his years on the throne pushing for educational infrastructure in Mpraeso. In this regard, apart from dedicating lands for a Technical and Vocational Education and Training (TVET) institute at Mpraeso, he has also allocated numerous plots of land for the construction of a University in Mpraeso. Indeed, one of his main aspirations currently is to see the completion of a university education facility in Mpraeso. Nana Ampadu Daadium III has also built a modern kindergarten for the children of Mpraeso to ensure that they get the strong academic foundation needed for their future educational exploits.",
      "He has also seen to it that Mpraeso has access to necessary social amenities including but not limited to a Fire Station which the town lacked before his enstoolment.",
      "Above all things, Nana sees the peaceful coexistence of the Mpraeso people despite individual differences as one of his crowning achievements. He is eternally proud of the Mpraeso people and respects their industriousness.",
      "A firm believer in the abilities of women and the inclusion of women in critical traditional leadership, he broke the mold and for the first time in the history of Mpraeso elevated two females onto the Adonteng and the Benkum stools of Mpraeso. A decision he says he is very proud of.",
      "His vision for the future of Mpraeso is for the Mpraeso people to, through their hard work and industriousness continue to ascend to the commanding heights of national and international socio-economic developments. He also wishes to see Mpraeso become the bastion of cultural tourism in Ghana.",
    ],
  },
  {
    name: "Nana Welbeck Abra-Appiah",
    title: "Krontihene of Mpraeso",
    image: "",
    enstooled: "February 2017",
    focus: "Development-driven leadership, youth empowerment, and education",
    summary:
      "Nana Welbeck Abra-Appiah is a respected Ghanaian economist, corporate executive, sports administrator, and traditional leader who serves as the Krontihene of Mpraeso in the Kwahu Traditional Area. He was formally enstooled in February 2017 under the stool name Nana Abra-Appiah.",
    details: [
      "Born into the royal lineage of Kwahu, Nana Welbeck Abra-Appiah combines traditional leadership with a successful professional career spanning banking, finance, and public service. He has earned recognition as an accomplished economist and banker, occupying several leadership positions within Ghana's financial services industry including serving as the Board Chair of Consolidated Bank, Ghana.",
      "His enstoolment in February 2017 marked a significant transition from his extensive corporate and sports administration career into active traditional leadership. As Krontihene, he has played an important role in supporting the development agenda of the Kwahu Traditional Area, promoting community cohesion, youth empowerment, education, and socio-economic advancement within Mpraeso and the wider Kwahu enclave.",
      "Before assuming his traditional role, Nana Welbeck Abra-Appiah was one of Ghana's most recognised football administrators. He served as Chairman of the Ghana Premier League Board (PLB) for approximately a decade, overseeing important reforms and developments in Ghanaian football. He also served on committees associated with the management of the Black Stars and earned respect across the Ghana Football Association and the broader sporting community.",
      "As Krontihene, he continues to advocate for development-driven traditional leadership, consistently emphasising the importance of education, entrepreneurship, youth participation, and strategic partnerships in advancing the welfare of the people of Kwahu. His unique combination of traditional authority, corporate experience, and public service has positioned him as a bridge between customary institutions and modern development initiatives.",
    ],
  },
  {
    name: "Nana Krobea Asante",
    title: "Adontenhene of Mpraeso",
    image: adontengheneImage,
    enstooled: "20 September 2020",
    focus: "Protection, elder welfare, and enterprise development",
    summary:
      "Nana Krobea Asante, is the Adontenhene of Mpraeso. She is the first female to occupy the Adonteng stool which has historically been occupied by males. In private life, she is one of Ghana's most respected and industrious restaurateurs which has gained her both international and local recognitions including awards from the Ghana National Chamber of Commerce, and the World Culinary Awards among others.",
    details: [
      "She was enstooled as the Adontenghene of Mpraeso on the 20th of September, 2020 and has for the past almost six years played her role as a traditional with the same level of hard work, dedication and commitment to service that brought her success in private life.",
      "For her, chieftaincy is not merely ceremonial but rooted in the warrior ethos of the Adonten position. Historically, the occupant of  Adonten stool is a warrior whose primary duty is to ensure the safety of the chief and the community in times of war and serves as the first line of defense. Tt is this sense of defence associated with her stool that undergirds how she carries on her duty as the Adontenghene.",
      "Her leadership philosophy is grounded in humility, honesty, hard work, and fearlessness. She sees herself as a bridge between two lineages: her matrilineal side (Mpraeso, Asona clan) provides her with people and kinship, while her patrilineal side (Oyoko clan) provides wealth and blessings. This dual inheritance, she believes, has shaped her ability to lead with both strength and community focus.",
      "Her excellent stewardship since her enstoolment further cemented the resolve of the Mpraeso hene and his elders to bring women into their fold as traditional leader a resolve which ultimately led to the enstoolment of another industrious female as the Benkumhene of Mpraeso.",
      "Her vision for her role extends beyond tradition. She plans to establish an old people's home at Esubone, a proposal approved by the chief, and driven by her observation that the elderly are often abandoned or accused of witchcraft. She also advocates for business development in Kwahu, and sits on the 'All Business Advocacy' team, which welcomes investors to Mpraeso. Her leadership is thus a blend of ancestral duty, personal integrity, and forward-looking community service.",
      "Ultimately, Nana Krobea Asante defines her role as a protector, a unifier, and a servant leader who remains unshaken by adversity, guided by God, and committed to uplifting both the aged and the next generation.",
    ],
  },
  {
    name: "Chief Inspector Emmanuel Kwabena Obeng-Tetteh",
    title: "Nifahene of Mpraeso",
    image: nifaheneImage,
    enstooled: "18 January 2025",
    focus: "Coordination, administration, and institutional continuity",
    summary:
      "Chief Inspector Emmanuel Kwabena Obeng-Tetteh is the Nifahene of the Mpraeso community. A high achieving police officer, he currently works as a Public Prosecutor for the Ghana Police Service.",
    details: [
      "Having been enstooled as the Nifahene on the 18th of January 2025, he has immersed himself into the traditional leadership of Mpraeso and has since been an active member of the place. He is the first person to be enstooled as the Nifahene of Mpraeso and he intends to carve a great legacy worthy of emulation for subsequent occupants of the stool.",
      "He sees his role as the Nifahene to be akin to the Chief of Staff in the palace and hence he is at the centre of coordinating his fellow chiefs and elders to ensure that there is a smooth and efficient administration of traditional authority in Mpraeso.",
    ],
  },
  {
    name: "Nana Obenewaa",
    title: "Benkumhene of Mpraeso",
    image: "/gallery/img-067-3a83339a-44b7-487e-97a5-98e44cd6e5cd.png",
    enstooled: "7 April 2025",
    focus: "Dispute resolution, inclusive governance, and education",
    summary:
      "Nana Obenewaa brings an inclusive and development-focused perspective to traditional leadership in Mpraeso. She is the second female chief enstooled by Nana Ampadu Daaduam III, a historic step cementing women's place in the traditional council.",
    details: [
      "Her enstoolment as Benkumhene followed the trailblazing example set by Nana Krobea Asante (Adontenhene), further affirming the Paramount Chief's commitment to female representation in traditional leadership.",
      "Advocates culturally grounded dispute resolution and social trust within the community.",
      "Supports participatory decision-making and inclusive governance at the traditional level.",
      "Believes education is central to long-term development and actively promotes it within her role.",
    ],
  },
  {
    name: "Nana Kofi Bediako Amoafo-Hene",
    title: "Nkosuohene (Development Chief) of Kwahu-Mpraeso",
    image: nkosuoheneImage,
    focus: "Community empowerment, philanthropy, and development",
    summary:
      "Nana Kofi Bediako Amoafo-Hene is an astute businessman in the pharmaceutical industry in Ghana and the CEO of East Cantonments Pharmacy Limited (ECPL). He is also the Development Chief \"Nkosuohene\" of Kwahu-Mpraeso, with a vision to empower the community and propel its growth. He is renowned for his philanthropic spirit and value for human development and dignity.",
    details: [
      "Through East Cantonments Pharmacy Ltd, Nana Kofi Bediako Amoafo-Hene has consistently demonstrated a commitment to social responsibility, channelling the enterprise's resources and reach into meaningful contributions that uplift the Mpraeso community and beyond.",
      "As Nkosuohene, his role is rooted in spearheading development — bridging the gap between the community's traditional foundations and the modern socio-economic opportunities that can transform lives. His vision is to empower the people of Kwahu-Mpraeso and propel the community's growth across all fronts.",
      "Educational Background: Kwame Nkrumah University of Science & Technology (KNUST), 1985 – 1989 — BSc Civil Engineering.",
      "Mpraeso Secondary School, 1977 – 1984 — General Certificate of Education (GCE) Advanced Level.",
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
            {chief.enstooled && (
              <span className="rounded-full bg-[#3a6b35]/10 px-4 py-2 text-sm font-semibold text-[#3a6b35]">
                Enstooled: {chief.enstooled}
              </span>
            )}

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
            src={chiefGatheringImage}
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
              The chief of Mpraeso sitting in State
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
