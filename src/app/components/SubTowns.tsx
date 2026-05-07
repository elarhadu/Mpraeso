import { MapPin } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const subTowns = [
  { id: 1, name: 'Nkawanda No 1 (95)' },
  { id: 2, name: 'Nkawanda No 2 (96)' },
  { id: 3, name: 'Abetinsu' },
  { id: 4, name: 'Asuoso' },
  { id: 5, name: 'Asuboni No 3' },
  { id: 6, name: 'Amanfrom' },
  { id: 7, name: 'Kwasi Atwikrom' },
  { id: 8, name: 'Kwahu Jejete' },
  { id: 9, name: 'Oframase' },
  { id: 10, name: 'Kwahu Nsabaa (Camp)' },
];

export function SubTowns() {
  return (
    <section id="subtowns" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-block bg-[#3a6b35]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4">
            Our Communities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mpraeso Sub-Towns
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Mpraeso is made up of diverse communities, each contributing to our rich cultural tapestry and collective strength
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
        </AnimatedSection>

        {/* Decorative Pattern */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rotate-45"
                style={{
                  backgroundColor: i % 2 === 0 ? '#3a6b35' : '#d4a574'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Sub-towns Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {subTowns.map((town, index) => (
            <div
              key={town.id}
              className="bg-gradient-to-br from-[#faf8f5] to-white border-2 border-[#3a6b35]/20 rounded-lg p-5 hover:border-[#3a6b35] hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#3a6b35] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-[#d4a574] flex-shrink-0" />
                    <h3 className="font-semibold text-gray-900 break-words">
                      {town.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3a6b35]">10</div>
            <div className="text-sm text-gray-600 mt-1">Sub-Towns</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3a6b35]">United</div>
            <div className="text-sm text-gray-600 mt-1">In Purpose</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3a6b35]">One</div>
            <div className="text-sm text-gray-600 mt-1">Community</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3a6b35]">Strong</div>
            <div className="text-sm text-gray-600 mt-1">Together</div>
          </div>
        </div>

        {/* Cultural Accent */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 border-4 border-[#d4a574] rotate-45 opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
