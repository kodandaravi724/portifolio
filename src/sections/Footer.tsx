import { Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Large Name */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            <span className="text-gradient-shimmer">Kodanda Ravi Kiran Putta</span>
          </h2>
          
          {/* Role */}
          <p className="mt-2 text-gray-400 text-lg">Data Engineer</p>

          {/* Quick Links */}
          <nav className="mt-8 flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />


        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 hover:text-cyan-300 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
