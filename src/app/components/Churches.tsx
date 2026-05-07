import { motion } from 'motion/react';
import { Church } from 'lucide-react';

const churches = [
  { id: 1, name: 'CHRIST APOSTOLIC CHURCH' },
  { id: 2, name: 'KINGS CHRISTIAN MINISTRY' },
  { id: 3, name: 'EVANGELICAL PRESBYTERIAN' },
  { id: 4, name: 'THE CHURCH OF PENTECOST-CENTRAL' },
  { id: 5, name: 'ANTIOCH HEALING CHURCH' },
  { id: 6, name: 'CHRIST PRESBY' },
  { id: 7, name: 'TRINITY PRESBY' },
  { id: 8, name: 'THE CHURCH OF PENTECOST-BETHEL' },
  { id: 9, name: 'APOSTOLIC CHURCH GHANA-CENTRAL' },
  { id: 10, name: 'WORLD BIBLE CHAPEL INTERNATIONAL' },
  { id: 11, name: 'JESUS POWER TERBANACLE CHURCH' },
  { id: 12, name: 'ALL NATIONS CHRISTIAN CENTRE' },
  { id: 13, name: 'KWAHU FIRST BAPTIST CHURCH' },
  { id: 14, name: 'MUZAMA DISCO CHRISTO CHURCH' },
  { id: 15, name: 'ROYAL HOUSE OF JUDAH' },
  { id: 16, name: 'ROYAL CHAPEL INTERNATIONAL' },
  { id: 17, name: 'METHODIST CHURCH GHANA-BETHEL' },
  { id: 18, name: "ST. PAUL'S ROMAN CATHOLIC CHURCH" },
  { id: 19, name: 'GLORIOUS CHURCH' },
  { id: 20, name: 'EMMANUEL HOUSE OF PRAYER' },
  { id: 21, name: 'ASSEMBLIES OF GOD' },
  { id: 22, name: 'VOICE OF CHRIST' },
  { id: 23, name: 'GHANA BELIEVERS CHURCH' },
  { id: 24, name: 'ALPHA AND OMEGA CHURCH' },
  { id: 25, name: 'BETHEL LIGHT HEALING CHURCH' },
];

export function Churches() {
  return (
    <section id="churches" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#d4a574]/20 text-[#8b6f47] px-4 py-2 rounded-full mb-4">
            Faith & Spirituality
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mpraeso Local Council of Churches
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Our community is blessed with diverse Christian denominations united in faith, service, and the spiritual well-being of Mpraeso
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto"></div>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#3a6b35] rotate-45"></div>
            <div className="w-12 h-12 border-4 border-[#d4a574] rotate-45"></div>
            <div className="w-3 h-3 bg-[#3a6b35] rotate-45"></div>
          </div>
        </div>

        {/* Churches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {churches.map((church, index) => (
            <motion.div
              key={church.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#d4a574] hover:shadow-lg transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#3a6b35] to-[#2d5016] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1">
                    <Church size={18} className="text-[#d4a574] flex-shrink-0 mt-1" />
                    <h3 className="font-semibold text-gray-900 leading-tight break-words">
                      {church.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unity Message */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#3a6b35] to-[#2d5016] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <div className="flex justify-center mb-6">
              <Church size={48} className="text-[#d4a574]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Unity in Faith, Strength in Community
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              The Mpraeso Local Council of Churches brings together 25 denominations working collaboratively for spiritual growth, community development, and social welfare.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#d4a574] mb-1">25</div>
                <div className="text-sm text-white/80">Churches</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#d4a574] mb-1">One</div>
                <div className="text-sm text-white/80">Mission</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#d4a574] mb-1">United</div>
                <div className="text-sm text-white/80">In Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Pattern Divider */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rotate-45"
                style={{
                  backgroundColor: i % 2 === 0 ? '#3a6b35' : '#d4a574'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
