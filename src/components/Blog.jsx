import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      date: 'October 15, 2025',
      title: 'Building Scalable APIs with Node.js',
      preview: 'A look into my journey of moving from monolithic Express apps to microservices, and the lessons learned along the way.',
      link: '#'
    },
    {
      date: 'September 02, 2025',
      title: 'The Guide to CSS Variables in React',
      preview: 'How to combine the power of modern CSS Custom Properties with React state to build truly dynamic, themeable applications.',
      link: '#'
    },
    {
      date: 'August 18, 2025',
      title: 'Accessibility: More Than Just Alt Tags',
      preview: 'Accessibility should be baked in from the start. Here are 5 quick wins you can implement today to make your UI more inclusive.',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <motion.h2 
        className="heading-secondary"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Thoughts & Articles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article 
            key={post.title}
            className="card flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="font-mono text-sm text-[var(--color-accent)] mb-3">{post.date}</span>
            <h3 className="text-xl font-bold mb-3 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
              {post.title}
            </h3>
            <p className="text-[var(--text-muted)] text-sm mb-6 flex-grow">
              {post.preview}
            </p>
            <a href={post.link} className="text-sm font-bold text-[var(--color-accent)] inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
              Read Article <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
