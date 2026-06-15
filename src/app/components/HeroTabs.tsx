import { Link } from 'react-router';
import { motion } from 'motion/react';
import { HeartHandshake, TrendingUp, MessageCircle, Camera } from 'lucide-react';

const WHATSAPP_NUMBER = '+233200000000'; // Update this with the real number

export function HeroTabs({ onVideoOpen }: { onVideoOpen: () => void }) {
  const linkTabs = [
    {
      icon: HeartHandshake,
      label: 'Contribute to Ongoing Projects',
      description: 'Support community-driven development directly',
      href: '/community',
      bg: 'bg-[#3a6b35]',
      hover: 'hover:bg-[#2d5016]',
      iconBg: 'bg-white/15',
      dark: false,
    },
    {
      icon: TrendingUp,
      label: 'Explore Investment Opportunities',
      description: 'Discover high-potential sectors in Kwahu Mpraeso',
      href: '/investment-opportunities',
      bg: 'bg-[#d4a574]',
      hover: 'hover:bg-[#c89560]',
      iconBg: 'bg-white/20',
      dark: true,
    },
    {
      icon: MessageCircle,
      label: 'Connect',
      description: 'Reach the Mpraeso community leadership directly',
      href: `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`,
      external: true,
      bg: 'bg-[#25D366]',
      hover: 'hover:bg-[#1ebe57]',
      iconBg: 'bg-white/15',
      dark: false,
    },
  ];

  const tabInner = (icon: React.ElementType, label: string, description: string, dark: boolean, bg: string, hover: string, iconBg: string) => {
    const Icon = icon;
    return (
      <div className={`flex h-full items-center gap-4 rounded-2xl px-6 py-5 text-left transition-all duration-200 shadow-lg ${bg} ${hover}`}>
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon size={24} className={dark ? 'text-gray-900' : 'text-white'} />
        </div>
        <div>
          <p className={`font-bold leading-snug ${dark ? 'text-gray-900' : 'text-white'}`}>{label}</p>
          <p className={`mt-0.5 text-xs ${dark ? 'text-gray-800/70' : 'text-white/75'}`}>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative z-10 -mt-10 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {linkTabs.map((tab, i) => (
            <motion.div
              key={tab.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
            >
              {tab.external ? (
                <a href={tab.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {tabInner(tab.icon, tab.label, tab.description, tab.dark, tab.bg, tab.hover, tab.iconBg)}
                </a>
              ) : (
                <Link to={tab.href} className="block h-full">
                  {tabInner(tab.icon, tab.label, tab.description, tab.dark, tab.bg, tab.hover, tab.iconBg)}
                </Link>
              )}
            </motion.div>
          ))}

          {/* Video overview tab — button that opens the player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + linkTabs.length * 0.08 }}
          >
            <button onClick={onVideoOpen} className="block h-full w-full text-left">
              <div className="flex h-full items-center gap-4 rounded-2xl bg-black/70 px-6 py-5 shadow-lg ring-1 ring-white/15 transition-all duration-200 hover:bg-black/90 hover:ring-white/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Camera size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold leading-snug text-white">Video Overview</p>
                  <p className="mt-0.5 text-xs text-white/65">Aerial views of Kwahu Mpraeso</p>
                </div>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
