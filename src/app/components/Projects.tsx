import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { Building2, Droplet, FileText, GraduationCap, Heart, Users, X } from 'lucide-react';
import { mailtoLink } from '../lib/contact';

// The transparency fields are optional: each one appears on the card only once the
// traditional council / development committee has supplied a confirmed figure.
type Project = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  status?: 'Proposed' | 'Underway' | 'Completed';
  budget?: string; // e.g. 'GH₵ 250,000'
  raised?: string;
  fundingSource?: string;
  lastUpdate?: string; // e.g. 'Foundation laid — August 2026'
};

const STATUS_STYLES: Record<NonNullable<Project['status']>, string> = {
  Proposed: 'bg-white/10 text-white/70',
  Underway: 'bg-[#d4a574]/20 text-[#d4a574]',
  Completed: 'bg-[#3a6b35]/40 text-[#9fd49a]',
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Community Water Project',
    description: 'Installing modern water infrastructure to provide clean drinking water to 10 communities.',
    icon: Droplet,
    color: '#3a6b35',
  },
  {
    id: 2,
    title: 'Educational Support Initiative',
    description: 'Providing scholarships and learning materials to underprivileged students in local schools.',
    icon: GraduationCap,
    color: '#d4a574',
  },
  {
    id: 3,
    title: 'Market Infrastructure Development',
    description: 'Modernizing the central market with improved stalls, sanitation, and facilities.',
    icon: Building2,
    color: '#8b6f47',
  },
  {
    id: 4,
    title: 'Healthcare Outreach Program',
    description: 'Free health screenings and medical camps in remote communities every quarter.',
    icon: Heart,
    color: '#3a6b35',
  },
  {
    id: 5,
    title: 'Women Empowerment Programme',
    description: 'Skills training, micro-financing, and market access support for women entrepreneurs across Mpraeso and its sub-towns.',
    icon: Users,
    color: '#d4a574',
  },
];

const generalDonation: Project = {
  id: 0,
  title: 'General Donation',
  description: 'Support the overall development of the Mpraeso community.',
  icon: Heart,
  color: '#3a6b35',
};

function DonateModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <div
            className="mb-5 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: `${project.color}18`, color: project.color }}
          >
            Donate
          </div>

          <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
          <p className="mb-6 text-sm text-gray-500">
            Transfer to any of the accounts below and use the reference provided so we can track your contribution.
          </p>

          <div className="space-y-4 rounded-2xl bg-[#faf8f5] p-5 text-sm">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">Account Name</p>
              <p className="font-semibold text-gray-900">Mpraeso Community Development Fund</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">Bank Transfer</p>
              <p className="text-gray-700">
                Bank details are shared on request.{' '}
                <a
                  href={mailtoLink(`Bank details for donation: ${project.title}`)}
                  className="font-semibold text-[#3a6b35] underline"
                >
                  Request them by email
                </a>
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">Payment Reference</p>
              <p
                className="rounded-lg px-3 py-2 font-bold"
                style={{ backgroundColor: `${project.color}15`, color: project.color }}
              >
                {project.title}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">Mobile Money (MoMo)</p>
              <p className="font-semibold text-gray-900">+233 24 333 3902 &mdash; Mpraeso Dev Fund</p>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-gray-400">
            Every contribution is recorded against its project. Ask us for a report at any time.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#0d1a0d]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#d4a574]">
            Community Development
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ongoing Projects
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:shadow-[0px_0px_24px_2px_#fab57040] cursor-default min-h-[380px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {/* Decorative gold circle */}
                <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#fab570]/[0.15]" />
                {/* Decorative vertical line */}
                <div className="pointer-events-none absolute right-6 top-0 h-10 w-px bg-white/20" />

                <div className="relative flex flex-col h-full">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${project.color}30` }}
                  >
                    <Icon size={22} style={{ color: project.color }} />
                  </div>

                  {project.status && (
                    <span
                      className={`mb-3 inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${STATUS_STYLES[project.status]}`}
                    >
                      {project.status}
                    </span>
                  )}

                  <div className="flex-1">
                    <h3 className="mb-2 text-sm font-bold leading-snug text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/55">
                      {project.description}
                    </p>

                    {(project.budget || project.raised || project.fundingSource || project.lastUpdate) && (
                      <dl className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-xs">
                        {[
                          ['Budget', project.budget],
                          ['Raised', project.raised],
                          ['Funded by', project.fundingSource],
                          ['Latest', project.lastUpdate],
                        ]
                          .filter(([, value]) => value)
                          .map(([label, value]) => (
                            <div key={label} className="flex justify-between gap-3">
                              <dt className="text-white/40">{label}</dt>
                              <dd className="text-right font-semibold text-white/80">{value}</dd>
                            </div>
                          ))}
                      </dl>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="mt-4 w-full rounded-xl border border-white/15 py-2 text-xs font-semibold text-white/80 transition hover:border-[#d4a574]/60 hover:text-[#d4a574]"
                  >
                    Donate to this project
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* General donation banner */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#d4a574]/30 bg-[#d4a574]/[0.08] px-6 py-5 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div>
            <p className="font-bold text-white">Make a General Donation</p>
            <p className="text-xs text-white/55 mt-0.5">Your contribution supports all community projects</p>
          </div>
          <button
            onClick={() => setActiveProject(generalDonation)}
            className="shrink-0 rounded-full bg-[#d4a574] px-6 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-[#c89560]"
          >
            Donate Now
          </button>
        </motion.div>

        {/* Accountability */}
        <motion.div
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex items-start gap-3">
            <FileText size={20} className="mt-0.5 shrink-0 text-[#d4a574]" />
            <div>
              <p className="font-bold text-white">How your contributions are accounted for</p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                Donations are recorded against the project you choose. Project costs, funding
                sources and progress will be published here as each project advances, and any
                contributor may request a report.
              </p>
            </div>
          </div>
          <a
            href={mailtoLink('Project report request', 'I would like a report on the following project:\n')}
            className="shrink-0 rounded-full border border-[#d4a574]/60 px-6 py-2.5 text-center text-sm font-bold text-[#d4a574] transition hover:bg-[#d4a574] hover:text-gray-900"
          >
            Request a Project Report
          </a>
        </motion.div>
      </div>

      {activeProject && (
        <DonateModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
