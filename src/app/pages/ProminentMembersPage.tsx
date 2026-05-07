import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Search, UserRound } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import React from 'react';

const honDavisImage = new URL(
  "../../assests/Hon. Davis Ansah Opoku.jpeg",
  import.meta.url,
).href;

const featuredMember = {
  name: "Hon. Davis Ansah Opoku",
  title: "Member of Parliament, Mpraeso Constituency",
  image: honDavisImage,
  profileSections: [
    {
      heading: "Brief Profile",
      content:
        "Hon. Davis Ansah Opoku is the Member of Parliament for the Mpraeso Constituency. He currently serves as the Vice Chairman of the Public Accounts Committee of Parliament and is also a member of the Information and Communication Committee. He holds an LLB from the University of London and has pursued further studies in law, governance, and digital policy. His work in Parliament focuses on accountability in public administration, digital transformation, and policies that promote economic opportunity. Beyond his parliamentary responsibilities, he remains deeply committed to community development across the Kwahu area, particularly in education, youth empowerment, tourism development, and infrastructure improvement.",
    },
    {
      heading: "What makes Mpraeso unique",
      content:
        "Mpraeso holds a special place in the Kwahu area not only because of its beautiful location on the Kwahu Ridge but also because of the strength of its people and families. The town has produced generations of entrepreneurs, professionals, and community leaders whose influence extends across Ghana and beyond.",
    },
    {
      heading: "Why investors should consider Mpraeso",
      content:
        "Mpraeso presents strong opportunities for investment. The town has a long-standing culture of entrepreneurship and commerce, and investors find a community that understands business, values partnerships, and supports enterprise.",
    },
    {
      heading: "My vision for Mpraeso",
      content:
        "My vision is to see Mpraeso grow into a modern, vibrant town that preserves its cultural heritage while expanding economic opportunities.",
    },
    {
      heading: "Message to Mpraeso citizens in the diaspora",
      content:
        "To the many sons and daughters of Mpraeso living around the world, I encourage you to remain connected to home. Your skills, experience, and investments can play a vital role in shaping the future of Mpraeso.",
    },
  ],
};

const prominentMembers = [
  {
    name: "Nana Abra-Appiah",
    description: "Renowned Banker and Football Administrator",
  },
  {
    name: "Dr. Mrs. Beatrice Wiafe Addae",
    description: "Breast Cancer Specialist",
  },
  { name: "Mr. Adjare Danquah", description: "CEO of Metalex Group" },
  {
    name: "Emmanuel Agyei",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mrs. Justice Beatrice Agyeman-Dapaah",
    description: "Distinguished member of the judiciary",
  },
  {
    name: "Hon. Mike Sakyi Akyeampong",
    description:
      "Former Chairman of the World Fisheries at the United Nations and Former Deputy Agriculture Minister of Ghana",
  },
  {
    name: "Mr. Bediako Amoatohene",
    description: "CEO of East Cantonment Pharmacy",
  },
  {
    name: "S.E. Aniniagyei",
    description: "Former Ambassador of Ghana to the United Nations",
  },
  { name: "Nana Antwi Darkwa", description: "Ghanaian Business Mogul" },
  { name: "Richard Kwame Appiah", description: "Prominent businessman" },
  {
    name: "Mr. Asiedu-Sekyere",
    description: "CEO of Virtual Security Africa and Virtual Infosec Africa",
  },
  { name: "Nana Bamfo Awobeng", description: "Alias Ebitiyie" },
  {
    name: "Lawyer Kwaku Baah",
    description: "Legal professional and community leader",
  },
  { name: "Mr. Ernest Bediako", description: "CEO of Ernest Chemist" },
  {
    name: "Mr. Bediako Sarpong",
    description: "Pioneer Pharmaceuticals Sector Businessman",
  },
  { name: "Mr. Ofosu Bediako", description: "CEO of Bedita Pharmacy" },
  {
    name: "Nana Buansi",
    description: "Prominent member of the Mpraeso community",
  },
  { name: "Mr. Okyere Darko", description: "Community leader and businessman" },
  {
    name: "Mr. Alfred Kwadwo Dankwa",
    description: "CEO of Rocksters Roofing Limited",
  },
  {
    name: "Nana Wiafe Kogyan",
    description: "Famous Ghanaian Businessman and Timber Merchant",
  },
  {
    name: "Dr. D.A. Koranteng",
    description: "Former moderator of the Presbyterian Church",
  },
  { name: "Osei Kuffour", description: "Outstanding Ghanaian Architect" },
  { name: "J.K. Mensah", description: "Alias Asikafuohene" },
  {
    name: "Madam Suzzy Mensah",
    description: "Community leader and prominent member",
  },
  {
    name: "Nana Obenewaa",
    description: "CEO of Blackpark and Benkumhene of Mpraeso",
  },
  {
    name: "Prof. Ebenezer Owusu Odoro",
    description: "Former Deputy VC of the University of Ghana",
  },
  {
    name: "Kingsley Young Opare",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Oppong Sasu",
    description: "Former Director, Ghana Forestry Commission",
  },
  { name: "Justice Omari Sasu", description: "An Iconic Ghanaian Judge" },
  {
    name: "Lawyer George Sarpong",
    description: "Former Director of the Ghana School of Law",
  },
  {
    name: "Obaa Yaa",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Hon. Amankwah Yenoah",
    description: "National Treasurer of the New Patriotic Party",
  },
  {
    name: "Nana Bamfo Gyabeng",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Omari (Omari Books)",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Anane Twenebua",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Okuma Sekyere",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Seth Edison Okyere",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Obeng Dapaah",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. A.Y. Dankwa",
    description: "Prominent member of the Mpraeso community",
  },
];

function FeaturedProfile() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.article
      className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-200"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid items-start lg:grid-cols-[380px_1fr]">
        <div className="relative h-[420px] lg:h-[420px]">
          <ImageWithFallback
            src={featuredMember.image}
            alt={featuredMember.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent lg:hidden" />

          <div className="absolute bottom-6 left-6 right-6 lg:hidden">
            <p className="text-sm font-semibold text-[#d4a574]">
              Featured Profile
            </p>
            <h3 className="text-3xl font-bold text-white">
              {featuredMember.name}
            </h3>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <div className="hidden lg:block">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#3a6b35]">
              Featured Profile
            </p>
            <h3 className="text-4xl font-bold tracking-tight text-gray-900">
              {featuredMember.name}
            </h3>
            <p className="mt-2 text-lg font-medium text-[#7a5a33]">
              {featuredMember.title}
            </p>
          </div>

          <div className="mt-8 divide-y divide-gray-200">
            {featuredMember.profileSections.map((section, index) => (
              <div key={section.heading} className="py-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-bold text-gray-900">
                    {section.heading}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#3a6b35] transition ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <motion.p
                    className="mt-3 text-base leading-8 text-gray-700"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {section.content}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProminentMembersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = prominentMembers.filter((member) =>
    `${member.name} ${member.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Prominent Members of Mpraeso"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
        </div>

        <motion.div
          className="relative flex min-h-[520px] items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a574] backdrop-blur">
              Distinguished Citizens
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Prominent Members
            </h1>

            <p className="text-xl leading-relaxed text-white/85 md:text-2xl">
              Business leaders, academics, public servants, and community icons
              connected to Mpraeso.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto mb-14 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#3a6b35]">
              Our Distinguished Citizens
            </span>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Leaders Who Shape Our Community
            </h2>

            <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-[#d4a574]" />

            <p className="text-xl leading-relaxed text-gray-600">
              Mpraeso takes pride in its sons and daughters who have excelled in
              business, academia, public service, and community leadership.
            </p>
          </motion.div>

          <FeaturedProfile />

          <div className="mt-20">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#3a6b35]">
                  Directory
                </p>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                  Other Prominent Members
                </h3>
              </div>

              <div className="relative w-full md:max-w-sm">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#3a6b35] focus:ring-4 focus:ring-[#3a6b35]/10"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.02, 0.2),
                  }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3a6b35]/10 text-[#3a6b35]">
                      <UserRound size={22} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {member.name}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="mt-10 rounded-2xl bg-white p-8 text-center text-gray-600 ring-1 ring-gray-200">
                No members found for “{searchTerm}”.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
