import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="section-padding w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[var(--color-accent)] font-mono mb-4">Hi there, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Nil Kachhadiya.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-muted)] mb-6">
            I build things for the web.
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-xl mb-10 leading-relaxed">
            I'm a passionate web developer focused on crafting clean, user-centric, and accessible digital experiences. I enjoy turning complex problems into elegant, modern solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 rounded-full border-4 border-[var(--color-accent)]/20 p-2 overflow-hidden bg-[var(--bg-secondary)] flex items-center justify-center">
            {/* Placeholder for Photo */}
            <div className="text-[var(--text-muted)] flex flex-col items-center">
               <svg xmlns="http://www.w3.org/.svg" className="w-32 h-32 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
               <span className="text-sm mt-4 tracking-widest uppercase">Photo Placeholder</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
