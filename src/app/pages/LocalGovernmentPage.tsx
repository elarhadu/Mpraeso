import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import React from "react";
import { LocalGovernmentSection } from "../components/LocalGovernmentSection";

const honDavisImage = new URL(
  "../../assests/Hon. Davis Ansah Opoku.jpeg",
  import.meta.url,
).href;

const localGovernmentProfile = {
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

export function LocalGovernmentPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Local Government in Mpraeso"
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
              Public Leadership
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Local Government
            </h1>
            <p className="text-xl leading-relaxed text-white/85 md:text-2xl">
              Parliamentary leadership and public service for Mpraeso.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.article
            className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-200"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid items-start lg:grid-cols-[380px_1fr]">
              <div className="relative h-[420px] lg:h-[420px]">
                <ImageWithFallback
                  src={localGovernmentProfile.image}
                  alt={localGovernmentProfile.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent lg:hidden" />

                <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                  <p className="text-sm font-semibold text-[#d4a574]">
                    Local Government Profile
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    {localGovernmentProfile.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="hidden lg:block">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#3a6b35]">
                    Local Government Profile
                  </p>
                  <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                    {localGovernmentProfile.name}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-[#7a5a33]">
                    {localGovernmentProfile.title}
                  </p>
                </div>

                <div className="mt-8 divide-y divide-gray-200">
                  {localGovernmentProfile.profileSections.map((section, index) => (
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
        </div>
      </section>
      <LocalGovernmentSection />
    </div>
  );
}
