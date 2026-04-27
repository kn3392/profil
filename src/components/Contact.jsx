import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });
      
      const result = await response.json();
      
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.log(error);
      setStatus('Something went wrong! Please try again later.');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-[var(--bg-secondary)]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-lg text-[var(--text-muted)] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          className="bg-[var(--bg-color)] p-8 md:p-10 rounded-2xl border border-[var(--border-color)] shadow-lg text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 
              IMPORTANT: To receive emails at kachhadiyanil1092005@gmail.com:
              1. Go to https://web3forms.com/
              2. Enter kachhadiyanil1092005@gmail.com and click "Create Access Key"
              3. Check your email for the key and paste it below, replacing "YOUR_ACCESS_KEY_HERE"
            */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Nil Kachhadiya"
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="nil@example.com"
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder="Hello..."
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all resize-none"
              ></textarea>
            </div>
            
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            <button type="submit" className="w-full btn-primary">
              Say Hello
            </button>
            
            {status && (
              <p className={`text-center font-medium mt-4 ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
