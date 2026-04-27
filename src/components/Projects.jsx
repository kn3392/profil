import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projectList = [
    {
      title: 'E-Commerce Dashboard API',
      problem: 'Store owners lacked a unified platform to track multi-channel inventory and visualize sales data.',
      solution: 'Built a robust Node.js/Express REST API with secure authentication, role-based access, and optimized MongoDB queries to serve a unified dashboard frontend.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      github: 'https://github.com/kn3392',
      demo: '#'
    },
    {
      title: 'Real-time Collaboration Tool',
      problem: 'Remote teams needed a lightweight, low-latency whiteboard and document sharing space without heavy subscriptions.',
      solution: 'Developed a React frontend paired with a WebSocket-enabled backend to ensure real-time state synchronization across multiple connected clients.',
      tech: ['React', 'Socket.io', 'Tailwind CSS', 'Redux'],
      github: 'https://github.com/kn3392',
      demo: '#'
    },
    {
      title: 'Market Research Data Visualizer',
      problem: 'Analysts spent hours manually formatting survey data into spreadsheets for client presentations.',
      solution: 'Created an automated tool during my internship that ingests raw CSV data and generates interactive, customizable charts exported as PDFs.',
      tech: ['JavaScript', 'Chart.js', 'HTML/CSS', 'Python'],
      github: 'https://github.com/kn3392',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[var(--bg-secondary)]">
      <motion.h2 
        className="heading-secondary"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-16">
        {projectList.map((project, index) => (
          <motion.div 
            key={project.title}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            {/* Project Image/Preview Placeholder */}
            <div className={`lg:col-span-7 relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="w-full aspect-video bg-[var(--bg-color)] rounded-xl border border-[var(--border-color)] overflow-hidden flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                 <div className="text-[var(--text-muted)] flex flex-col items-center opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-mono text-sm tracking-wider">Project UI Preview</span>
                 </div>
              </div>
              <div className="absolute inset-0 bg-[var(--color-accent)]/20 rounded-xl transition-transform duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
            </div>

            {/* Project Details */}
            <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              
              <div className="bg-[var(--bg-color)] p-6 rounded-xl border border-[var(--border-color)] shadow-sm mb-4 relative z-20">
                <p className="text-sm text-[var(--text-muted)] mb-3">
                  <strong className="text-[var(--text-color)]">Problem:</strong> {project.problem}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  <strong className="text-[var(--text-color)]">Solution:</strong> {project.solution}
                </p>
              </div>

              <ul className={`flex flex-wrap gap-4 font-mono text-sm text-[var(--color-accent)] mb-6 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                {project.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className={`flex gap-4 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="GitHub Repository">
                  <FiGithub size={22} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Live Demo">
                  <FiExternalLink size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
