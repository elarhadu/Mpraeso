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
    color: '#7a5a33',
  },
];

type Project = typeof projects[0];

function DonateModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
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
            Transfer to any of the accounts below and use the reference provided so we can track your contribution to this project.
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
              <p className="font-semibold text-gray-900">024 XXX XXXX &mdash; Mpraeso Dev Fund</p>
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
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ongoing Community Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Building a better future through sustainable development and community-driven initiatives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="bg-[#faf8f5] border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <Icon size={24} style={{ color: project.color }} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-5">{project.description}</p>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                      style={{ backgroundColor: project.color }}
                    >
                      Donate to this project
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#3a6b35] to-[#2d5016] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Support Our Community Projects</h3>
          <p className="mb-6 text-white/90">
            Your contribution can make a real difference in the lives of Mpraeso residents
          </p>
          <button
            onClick={() => setActiveProject(projects[0])}
            className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Make a Donation
          </button>
        </div>
      </div>

      {activeProject && (
        <DonateModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
