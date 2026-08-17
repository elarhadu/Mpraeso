import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Droplet, GraduationCap, Heart, Users, X } from 'lucide-react';

const projects = [
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

const generalDonation = {
  id: 0,
  title: 'General Donation',
  description: 'Support the overall development of the Mpraeso community.',
  icon: Heart,
  color: '#3a6b35',
};

type Project = typeof projects[0];

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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">Bank</p>
                <p className="font-semibold text-gray-900">GCB Bank</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">Account Number</p>
                <p className="font-semibold text-gray-900">1234567890</p>
              </div>
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
            For international transfers or further enquiries, contact us via the Connect page.
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

                  <div className="flex-1">
                    <h3 className="mb-2 text-sm font-bold leading-snug text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/55">
                      {project.description}
                    </p>
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
      </div>

      {activeProject && (
        <DonateModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
