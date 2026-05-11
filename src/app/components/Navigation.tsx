import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

type NavLink = {
  name: string;
  href: string;
};

type NavGroup = {
  name: string;
  links: NavLink[];
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const location = useLocation();

  const primaryLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const groupedLinks: NavGroup[] = [
    {
      name: 'Leadership',
      links: [
        { name: 'Traditional Authority', href: '/traditional-authority' },
        { name: 'Local Government', href: '/local-government' },
        { name: 'Governance Archive', href: '/governance-archive' },
        { name: 'Prominent Members', href: '/prominent-members' },
        { name: 'Community', href: '/community' },
        { name: 'Diaspora', href: '/diaspora' },
      ],
    },
    {
      name: 'Development',
      links: [
        { name: 'Tourism', href: '/tourism' },
        { name: 'Education', href: '/education' },
        { name: 'Health', href: '/health' },
        { name: 'Business', href: '/business' },
      ],
    },
    {
      name: 'Media',
      links: [
        { name: 'News & Events', href: '/news-events' },
        { name: 'Gallery', href: '/gallery' },
      ],
    },
  ];

  const isActive = (href: string) => {
    const routePath = href.split('#')[0];
    if (routePath === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(routePath);
  };

  const isGroupActive = (links: NavLink[]) => links.some((link) => isActive(link.href));

  return (
    <motion.nav
      className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/35 bg-white/55 px-4 shadow-[0_12px_30px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Title */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a6b35]">
              <div className="h-6 w-6 rounded-sm border-2 border-[#d4a574]"></div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Mpraeso Community</div>
              <div className="text-xs text-gray-600">Eastern Region, Ghana</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/40 bg-white/40 px-2 py-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#3a6b35]/10 text-[#3a6b35]'
                    : 'text-gray-700 hover:bg-white/70 hover:text-[#3a6b35]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {groupedLinks.map((group) => (
              <div key={group.name} className="group relative">
                <button
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isGroupActive(group.links)
                      ? 'bg-[#3a6b35]/10 text-[#3a6b35]'
                      : 'text-gray-700 group-hover:bg-white/70 group-hover:text-[#3a6b35]'
                  }`}
                  type="button"
                >
                  {group.name}
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-white/40 bg-white/85 p-2 shadow-xl backdrop-blur-xl">
                    {group.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`block rounded-xl px-3 py-2 text-sm transition-colors ${
                          isActive(link.href)
                            ? 'bg-[#3a6b35]/10 font-semibold text-[#3a6b35]'
                            : 'text-gray-700 hover:bg-white hover:text-[#3a6b35]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 text-gray-700 transition-colors hover:bg-white/75 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/40 py-4 lg:hidden">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-3 px-2 rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-[#3a6b35] bg-[#3a6b35]/5 font-semibold'
                    : 'text-gray-700 hover:bg-white/70 hover:text-[#3a6b35]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {groupedLinks.map((group) => (
              <div key={group.name} className="mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobileGroup((current) => (current === group.name ? null : group.name))
                  }
                  className={`flex w-full items-center justify-between rounded-md px-2 py-3 text-left text-sm font-medium transition-colors ${
                    isGroupActive(group.links)
                      ? 'bg-[#3a6b35]/5 text-[#3a6b35]'
                      : 'text-gray-700 hover:bg-white/70 hover:text-[#3a6b35]'
                  }`}
                >
                  {group.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openMobileGroup === group.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openMobileGroup === group.name && (
                  <div className="mt-1 space-y-1 rounded-xl bg-white/40 p-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`block rounded-md px-2 py-2 text-sm transition-colors ${
                          isActive(link.href)
                            ? 'bg-[#3a6b35]/10 font-semibold text-[#3a6b35]'
                            : 'text-gray-700 hover:bg-white/80 hover:text-[#3a6b35]'
                        }`}
                        onClick={() => {
                          setOpenMobileGroup(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}