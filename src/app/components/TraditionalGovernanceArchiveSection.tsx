import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ChevronUp, Crown, Search, ShieldCheck } from 'lucide-react';

type GovernanceRole = {
  id: string;
  title: string;
  localTitle?: string;
  category: string;
  description?: string;
  responsibilities: string[];
};

const governanceRoles: GovernanceRole[] = [
  {
    id: "nseneafohene",
    title: "Nseneafohene",
    category: "Spiritual & Ceremonial",
    responsibilities: [
      "His Assistants are called “Nseneafo”. The singular form is “Esen”.",
      "Their main duty is to ensure silence at the Palace when the Chief or an Elder is speaking.",
      "When the Chief’s Linguist is pouring libation, the “Esen” punctuates it with encomiums.",
      "They are sent with the Whisker to summon people to the Palace.",
      "The “Nseneafohene” is the Elder who sprinkles or smears white clay “hyire” on a newly-enstooled Chief."
    ]
  },
  {
    id: "afoasoafohene",
    title: "Afoasoafohene",
    category: "Spiritual & Ceremonial",
    responsibilities: [
      "He is the custodian of all the traditional swords in the Palace.",
      "If the Chief sits in state, he ensures that the Chief is flanked and protected by the Sword Bearers called “Afoasoafo”.",
      "He selects the appropriate swords for newly installed Chiefs to swear with and does same to Elders swearing before the Chief during funerals, enstoolments or wars."
    ]
  },
  {
    id: "nkonguasoafohene",
    title: "Nkonguasoafohene",
    category: "Spiritual & Ceremonial",
    responsibilities: [
      "He is the custodian of all the stools in the Chief’s Palace.",
      "He ensures that his Assistants, “Nkonguasoafo”, wash the stools in the Palace on every eve of “Akwasidae” called “Memeneda Dapaa”.",
      "During the swearing-in of a new Chief, he decorates him before the stool room and ushers him into the room.",
      "He ensures regular supply of food and drinks to the stools on sacred days."
    ]
  },
  {
    id: "asoamefohene",
    title: "Asoamefohene",
    category: "Spiritual & Ceremonial",
    responsibilities: [
      "He supervises the “Nhenkwaa” who carry the Chief or Queen Mother in the palanquin (“Seko”) during festivals or durbars.",
      "He decorates and prepares the “Seko” and palanquin for occasions."
    ]
  },
  {
    id: "osoodoforhene",
    title: "Osoodoforhene",
    category: "Spiritual & Ceremonial",
    responsibilities: [
      "As the Chief’s chefs, they prepare the Chief’s food and lay his dining table.",
      "They also prepare food for stools and departed Chiefs and Elders (“Nananom”)."
    ]
  },
  {
    id: "akyeamehene",
    title: "Akyeamehene",
    localTitle: "Chief Linguist",
    category: "Governance & Administration",
    responsibilities: [
      "A very important position in the Palace.",
      "The Chief may appoint an orator or speech expert as Linguist.",
      "The title of “Akyeamehene” belongs to a particular family line."
    ]
  },
  {
    id: "dabehene",
    title: "Dabehene",
    localTitle: "Protocol Chief",
    category: "Governance & Administration",
    responsibilities: [
      "In charge of the Chief’s clothing, ornaments and regalia.",
      "Selects appropriate attire for durbars and public gatherings.",
      "Regulates the Chief’s lifestyle and financial matters.",
      "Represents the Chief in some marriage ceremonies.",
      "Village Heads and Sub-Chiefs often use him to seek redress of grievances."
    ]
  },
  {
    id: "verempehene",
    title: "Verempehene / Mmrantehene",
    localTitle: "Youth Chief",
    category: "Development & Community",
    responsibilities: [
      "Leader of the youth in the Palace.",
      "Mobilises townsfolk for communal labour.",
      "Acts as a conduit between the people and the Chief."
    ]
  },
  {
    id: "ankobeahene",
    title: "Ankobeahene",
    category: "Royal & Family Affairs",
    responsibilities: [
      "Palace Elder usually resident in town.",
      "Receives strangers and visitors seeking audience with the Chief.",
      "Leads visitors to see the Linguist."
    ]
  },
  {
    id: "adehyeehene",
    title: "Adehyeehene",
    localTitle: "Head of Royals",
    category: "Royal & Family Affairs",
    responsibilities: [
      "Represents the Royal Family at the Palace.",
      "Plays a role in proposing replacements when a stool becomes vacant.",
      "Acts as counsellor and ensures proper upbringing of royal youth."
    ]
  },
  {
    id: "gyaasehene",
    title: "Gyaasehene",
    category: "Governance & Administration",
    responsibilities: [
      "Responsible for integrating groups at the Palace.",
      "Coordinates the roles of Palace groupings.",
      "Oversees properties possessed by heads of Palace groups.",
      "Resolves petty disputes among Palace caucuses."
    ]
  },
  {
    id: "akwamuhene",
    title: "Akwamuhene",
    category: "Military & Security",
    responsibilities: [
      "Ensures cordial interaction among Palace Elders.",
      "During war, serves as Army Commander."
    ]
  },
  {
    id: "kurontihene",
    title: "Kurontihene",
    category: "Military & Security",
    responsibilities: [
      "A newly enstooled Chief must swear to the Kurontihene.",
      "Before a Chief is destooled, he must be tried before the Kurontihene.",
      "In times of war, the Kurontihene leads the warriors as Army General."
    ]
  },
  {
    id: "akwansrafohene",
    title: "Akwansrafohene",
    category: "Military & Security",
    responsibilities: [
      "Foreruns journeys to ensure the Chief’s safety.",
      "Patrols highways and reports suspicious characters.",
      "In wartime, scouts enemy locations and battle gear."
    ]
  },
  {
    id: "twafohene",
    title: "Twafohene",
    category: "Military & Security",
    responsibilities: [
      "Blazes the trail for warriors during war.",
      "Cuts war paths and leads attacks.",
      "Usually a skilled hunter familiar with the terrain."
    ]
  },
  {
    id: "adontenhene",
    title: "Adontenhene",
    category: "Military & Security",
    responsibilities: [
      "Leads the brave forefront warriors.",
      "In some Akan states, next in hierarchy to the Omanhene.",
      "Sits in the Chief’s stead when absent."
    ]
  },
  {
    id: "benkumhene",
    title: "Benkumhene",
    category: "Military & Security",
    responsibilities: [
      "Head of Chiefs in the Left Wing division.",
      "Leads the Benkum division during war."
    ]
  },
  {
    id: "nifahene",
    title: "Nifahene",
    category: "Military & Security",
    responsibilities: [
      "Equal in rank to the Benkumhene.",
      "Heads towns in the Right Wing division."
    ]
  },
  {
    id: "kyidomhene",
    title: "Kyidomhene",
    category: "Military & Security",
    responsibilities: [
      "Acts as the rearguard during war.",
      "Reinforces weakened battalions.",
      "Always positioned at the rear during public processions."
    ]
  },
  {
    id: "dwantoafohene",
    title: "Dwantoafohene",
    category: "Governance & Administration",
    responsibilities: [
      "Does not occupy a black stool in the Palace.",
      "Must be respected, intelligent and morally upright.",
      "Pleads forgiveness on behalf of offenders.",
      "Helps determine fines and pacification costs."
    ]
  },
  {
    id: "ahenemmahene",
    title: "Ahenemmahene",
    category: "Royal & Family Affairs",
    responsibilities: [
      "Reserved for persons whose fathers were once Chiefs.",
      "Must be present during hand-over ceremonies.",
      "Sits at the feet of the Chief during durbars."
    ]
  },
  {
    id: "nkosuohene",
    title: "Nkosuohene",
    localTitle: "Development Chief",
    category: "Development & Community",
    responsibilities: [
      "A relatively modern chieftaincy role.",
      "Recognises persons of exemplary behaviour and generosity.",
      "Encourages development initiatives in the town.",
      "Can sponsor schools, clinics, markets, boreholes and parks.",
      "Supports needy children and youth employment.",
      "Should be a role model of high moral character.",
      "The Nkosuohene is not as restricted by traditional laws as Sub-Chiefs.",
      "Can abdicate the position voluntarily without the same rites required of Sub-Chiefs."
    ]
  },
  {
    id: "banmuhene",
    title: "Banmuhene",
    category: "Spiritual & Ceremonial",
    responsibilities: [
      "Oversees the Royal Mausoleum (“Banmu”).",
      "Ensures strict privacy and protection of the mausoleum.",
      "Supervises burial customs for Chiefs and Royals."
    ]
  },
  {
    id: "sanaahene",
    title: "Sanaahene",
    localTitle: "State Treasurer",
    category: "Governance & Administration",
    responsibilities: [
      "Custodian of state finances.",
      "Ensures money remains available in state coffers.",
      "Releases funds for the Chief’s travel and emergency expenses."
    ]
  },
  {
    id: "apagyahene",
    title: "Apagyahene",
    localTitle: "Chief Counsellor",
    category: "Governance & Administration",
    responsibilities: [
      "First to express opinion before the Chief and Elders.",
      "Decides pacification items and fines after judgments.",
      "Seen as a wise and thoughtful person."
    ]
  },
  {
    id: "nsumankwaafohene",
    title: "Nsumankwaafohene",
    localTitle: "Fetish Chief",
    category: "Spiritual & Ceremonial",
    responsibilities: [
      "In charge of gods, shrines and deities.",
      "Believed to possess spiritual powers.",
      "Fortifies warriors spiritually during war."
    ]
  },
  {
    id: "mmawerehene",
    title: "Mmawerehene",
    category: "Military & Security",
    responsibilities: [
      "Leader of Palace Guards.",
      "Ensures the Chief’s protection while in state."
    ]
  }
];

const introNote =
  "“There is a saying that, ‘A bird’s size is made up by its feathers’. Indeed, the longevity of a Chief’s reign depends on the effectiveness of his Stool Elders called ‘Atenankongua’ and their Servants known as ‘Nhenkwaa’.";

const introNhenkwaa =
  "‘Nhenkwaa’: These are the least of the Servants in the Palace. They can assume different identities depending on where they work in the Palace and the Elders under whom they work.";

const introClosing =
  "The various ‘Atenankongua’ usually have ‘hene’ attached to their titles.";

export function TraditionalGovernanceArchiveSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openRoleId, setOpenRoleId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const categorySet = new Set(governanceRoles.map((role) => role.category));
    return ['All', ...Array.from(categorySet)];
  }, []);

  const filteredRoles = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return governanceRoles.filter((role) => {
      const matchesCategory = selectedCategory === 'All' || role.category === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        role.title.toLowerCase().includes(normalizedSearch) ||
        role.localTitle?.toLowerCase().includes(normalizedSearch) ||
        role.category.toLowerCase().includes(normalizedSearch) ||
        role.responsibilities.some((responsibility) =>
          responsibility.toLowerCase().includes(normalizedSearch)
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleToggleRole = (roleId: string) => {
    setOpenRoleId((currentOpenRoleId) => (currentOpenRoleId === roleId ? null : roleId));
  };

  return (
    <section id="governance-archive" className="scroll-mt-28 bg-[#faf8f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#3a6b35]/10 px-4 py-2 text-sm font-medium text-[#3a6b35]">
            <ShieldCheck size={16} />
            Palace Structure & Chieftaincy Roles
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Traditional Governance Archive
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            A structured guide to the palace roles, responsibilities, and traditional offices that
            support the Chief’s Palace and preserve Mpraeso’s cultural governance.
          </p>
        </motion.div>

        <motion.article
          className="mt-14 rounded-3xl border border-[#d4a574]/25 bg-white p-7 shadow-[0_10px_28px_-16px_rgba(58,107,53,0.45)] md:p-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900">The Workings of the Chief’s Palace</h3>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700">
            <p>{introNote}</p>
            <p>{introNhenkwaa}</p>
            <p>{introClosing}</p>
          </div>
        </motion.article>

        <div className="mt-12 rounded-3xl border border-[#3a6b35]/10 bg-white p-5 shadow-[0_12px_30px_-18px_rgba(58,107,53,0.45)] md:p-7">
          <div className="flex flex-col gap-6">
            <label htmlFor="governance-role-search" className="relative block">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3a6b35]"
              />
              <input
                id="governance-role-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by role title, category, local title, or responsibility..."
                className="w-full rounded-2xl border border-[#d4a574]/40 bg-[#faf8f5] py-3.5 pl-11 pr-4 text-gray-900 outline-none transition focus:border-[#3a6b35] focus:ring-2 focus:ring-[#3a6b35]/20"
              />
            </label>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={isActive}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#3a6b35] text-white shadow-md shadow-[#3a6b35]/20'
                        : 'bg-[#faf8f5] text-gray-700 hover:bg-[#d4a574]/20'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {filteredRoles.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-[#d4a574]/60 bg-white p-10 text-center text-gray-600">
            No roles found. Try a different search or category.
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredRoles.map((role, index) => {
              const isOpen = openRoleId === role.id;
              const contentId = `role-content-${role.id}`;

              return (
                <motion.article
                  key={role.id}
                  className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 shadow-[0_12px_26px_-20px_rgba(58,107,53,0.6)]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                >
                  <span className="inline-flex rounded-full bg-[#d4a574]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3a6b35]">
                    {role.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{role.title}</h3>
                  {role.localTitle ? (
                    <p className="mt-1 text-sm font-medium text-[#3a6b35]">{role.localTitle}</p>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => handleToggleRole(role.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#3a6b35]/20 bg-[#faf8f5] px-4 py-2.5 text-sm font-medium text-[#3a6b35] transition hover:bg-[#3a6b35]/10"
                  >
                    {isOpen ? 'Hide responsibilities' : 'View responsibilities'}
                    {isOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={contentId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-3 border-t border-[#d4a574]/25 pt-4 text-sm leading-relaxed text-gray-700">
                          {role.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="flex items-start gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a574]" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        )}

        <motion.aside
          className="mt-14 rounded-3xl border border-[#d4a574]/40 bg-gradient-to-r from-[#3a6b35] to-[#315a2d] p-8 text-white shadow-[0_18px_32px_-24px_rgba(58,107,53,0.8)] md:p-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-3">
            <Crown className="text-[#d4a574]" size={22} />
            <h3 className="text-2xl font-semibold">Baasonfo / Kingmakers</h3>
          </div>
          <p className="mt-4 max-w-3xl text-white/90">
            These traditional offices are referred to as Baasonfo or King Makers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'Kurontihene',
              'Akwamuhene',
              'Gyaasehene',
              'Werempehene',
              'Banmuhene',
              'Kyidomhene',
              'Akyeamehene'
            ].map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
