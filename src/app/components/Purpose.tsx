import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Landmark, Megaphone, Sprout, Users } from 'lucide-react';

const pillars = [
  {
    Icon: Users,
    title: 'Connect',
    desc: 'Bringing together residents, citizens across Ghana and our diaspora — with news, events and ways to take part.',
    links: [
      { name: 'News & Events', href: '/news-events' },
      { name: 'Diaspora', href: '/diaspora' },
    ],
  },
  {
    Icon: Landmark,
    title: 'Preserve',
    desc: 'Keeping our history, traditional leadership, festivals and the stories of those who built our town.',
    links: [
      { name: 'Traditional Authority', href: '/traditional-authority' },
      { name: 'Governance Archive', href: '/governance-archive' },
    ],
  },
  {
    Icon: Megaphone,
    title: 'Promote',
    desc: 'Showcasing our attractions, businesses, schools and young people to visitors and the world.',
    links: [
      { name: 'Tourism', href: '/tourism' },
      { name: 'Business', href: '/business' },
    ],
  },
  {
    Icon: Sprout,
    title: 'Develop',
    desc: 'Mobilising people, investment and resources for projects — and showing how they progress.',
    links: [
      { name: 'Ongoing Projects', href: '/community' },
      { name: 'Invest', href: '/investment-opportunities' },
    ],
  },
];

export function Purpose() {
  return (
    <section className="bg-[#faf8f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#3a6b35]">
            Why This Website Exists
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            A digital home for Mpraeso
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#d4a574]" />
          <p className="mt-8 text-lg leading-relaxed text-gray-600 md:text-xl">
            We are building a vibrant digital home for our hometown — one that celebrates our
            history and culture, connects our people at home and abroad, showcases our
            achievements, supports our young people and businesses, attracts investment and
            tourism, and brings people together to contribute to the sustainable development of
            our community.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, title, desc, links }, index) => (
            <motion.div
              key={title}
              className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-gray-200 transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3a6b35]">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">{desc}</p>
              <div className="space-y-2 border-t border-gray-100 pt-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between text-sm font-semibold text-[#3a6b35] transition-colors hover:text-[#8b6f47]"
                  >
                    {link.name}
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <blockquote className="rounded-3xl bg-[#3a6b35] p-8 text-white md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#d4a574]">
              For our sons and daughters, wherever you are
            </p>
            <p className="text-xl leading-relaxed md:text-2xl">
              “This is home. I want to know what is happening there, I want to be part of it, and
              I want to help.”
            </p>
          </blockquote>
          <blockquote className="rounded-3xl bg-[#142413] p-8 text-white md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#d4a574]">
              For those who have never visited
            </p>
            <p className="text-xl leading-relaxed md:text-2xl">
              “I want to learn more about this place — and perhaps visit or invest there.”
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
