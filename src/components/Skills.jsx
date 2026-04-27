import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'Python', level: 70 },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL / PostgreSQL', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <motion.h2 
        className="heading-secondary"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[var(--color-accent)]">{category.title}</h3>
            <div className="space-y-6">
              {category.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-sm text-[var(--text-muted)]">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--border-color)] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[var(--color-accent)] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
