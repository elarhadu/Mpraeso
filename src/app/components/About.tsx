import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  const stats = [
    { value: '50+', label: 'Communities' },
    { value: '5', label: 'Major Festivals' },
    { value: '100+', label: 'Years of History' },
    { value: '1000s', label: 'In Diaspora' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center rounded-full bg-[#3a6b35]/10 px-4 py-2 text-sm font-semibold text-[#3a6b35] mb-5">
                Development
              </span>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                The Heart of Kwahu South
              </h2>

              <div className="w-20 h-1 bg-[#d4a574] mb-8 rounded-full"></div>

              <div className="space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  Mpraeso is the administrative capital of the Kwahu South Municipal District
                  in the Eastern Region of Ghana. Set within the scenic Kwahu hills, our
                  community is known for its breathtaking landscapes, rich cultural heritage,
                  and deep sense of unity.
                </p>

                <p>
                  Kwahu Mpraeso is a growing commercial and administrative centre offering strong opportunities for investment in education, healthcare, commerce, and infrastructure.
                </p>

                <p>
                  Whether you are a resident, investor, or member of our diaspora, Mpraeso
                  welcomes you with warmth, pride, and the true spirit of Ghanaian enterprise.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#d4a574]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#3a6b35]/20 rounded-full blur-2xl"></div>

              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">
                <div className="rounded-2xl bg-gradient-to-br from-[#3a6b35] to-[#244820] p-8 text-white mb-6">
                  <p className="text-sm uppercase tracking-widest text-white/70 mb-3">
                    Community Legacy
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    A proud heritage shaped by people, culture, and progress.
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-[#faf8f5] p-5 text-center border border-[#eadfD2]"
                    >
                      <div className="text-3xl font-bold text-[#3a6b35]">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}