import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

type Action = { label: string; href: string };

export function ContributeBanner({
  eyebrow = 'Get Involved',
  title,
  text,
  actions,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  actions: Action[];
}) {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[#1a3a17] to-[#3a6b35] p-8 text-white shadow-xl md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#d4a574]">
            {eyebrow}
          </span>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">{title}</h3>
          <p className="mb-8 max-w-3xl leading-relaxed text-white/85">{text}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action, index) => {
              const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                index === 0
                  ? 'bg-[#d4a574] text-gray-900 hover:bg-[#c89560]'
                  : 'border border-white/30 text-white hover:bg-white/10'
              }`;
              const content = (
                <>
                  {action.label}
                  <ArrowRight size={16} />
                </>
              );
              if (action.href.startsWith('/')) {
                return (
                  <Link key={action.label} to={action.href} className={className}>
                    {content}
                  </Link>
                );
              }
              return (
                <a
                  key={action.label}
                  href={action.href}
                  {...(action.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={className}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
