import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center bg-[var(--bg-secondary)]">
      <div className="w-full">
        <motion.h2 
          className="heading-secondary"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <motion.div 
            className="md:col-span-3 text-[var(--text-muted)] space-y-6 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <p>
              Hello! I'm <span className="text-[var(--color-accent)] font-medium">Nil Kachhadiya</span>. My journey into technology started with a deep curiosity about how things work on the internet, which naturally led me down the path of software development.
            </p>
            <p>
              I recently completed my <strong className="text-[var(--text-color)] font-medium">BCA at Sutex Bank College</strong> in Surat. During my time there, I built a strong foundation in computer science principles and discovered my passion for creating intuitive web applications.
            </p>
            <p>
              To put my academic knowledge into practice, I completed an enriching internship at <strong className="text-[var(--text-color)] font-medium">Mahek Market Research</strong>. This experience allowed me to tackle real-world problems, collaborate in a professional environment, and understand the impact of well-crafted digital solutions on business operations.
            </p>
            <p>
              Today, my main focus is on building accessible, inclusive, and highly performant digital experiences. When I'm not coding, I'm constantly learning new frameworks, refining my design skills, and staying up to date with the ever-evolving web ecosystem.
            </p>
          </motion.div>

          <motion.div 
            className="md:col-span-2 relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative z-10 w-full aspect-square rounded-2xl bg-[var(--bg-color)] border-2 border-[var(--border-color)] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 flex items-center justify-center">
                <div className="text-[var(--text-muted)] flex flex-col items-center p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <p className="font-mono text-sm opacity-70">"Always learning, always building."</p>
                </div>
            </div>
            <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-2xl transition-transform duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
