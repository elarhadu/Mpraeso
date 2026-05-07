import { motion } from 'motion/react';
import { Building2, Droplet, GraduationCap, Heart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Community Water Project',
    description: 'Installing modern water infrastructure to provide clean drinking water to 10 communities.',
    icon: Droplet,
    status: 'In Progress',
    progress: 65,
    color: '#3a6b35'
  },
  {
    id: 2,
    title: 'Educational Support Initiative',
    description: 'Providing scholarships and learning materials to underprivileged students in local schools.',
    icon: GraduationCap,
    status: 'Ongoing',
    progress: 80,
    color: '#d4a574'
  },
  {
    id: 3,
    title: 'Market Infrastructure Development',
    description: 'Modernizing the central market with improved stalls, sanitation, and facilities.',
    icon: Building2,
    status: 'Planning',
    progress: 30,
    color: '#8b6f47'
  },
  {
    id: 4,
    title: 'Healthcare Outreach Program',
    description: 'Free health screenings and medical camps in remote communities every quarter.',
    icon: Heart,
    status: 'Active',
    progress: 90,
    color: '#3a6b35'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Projects
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
                className="bg-[#faf8f5] border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <Icon size={24} style={{ color: project.color }} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold" style={{ color: project.color }}>
                          {project.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${project.progress}%`,
                            backgroundColor: project.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#3a6b35] to-[#2d5016] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Support Our Community Projects
          </h3>
          <p className="mb-6 text-white/90">
            Your contribution can make a real difference in the lives of Mpraeso residents
          </p>
          <button className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-8 py-3 rounded-lg transition-colors">
            Make a Donation
          </button>
        </div>
      </div>
    </section>
  );
}
