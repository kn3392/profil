import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-color)] py-8 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/kn3392" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Twitter">
            <FiTwitter size={24} />
          </a>
        </div>
        <p className="font-mono text-sm text-[var(--text-muted)]">
          Designed & Built by Nil Kachhadiya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
