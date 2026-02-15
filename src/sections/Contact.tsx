import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kodandaravikiran.p@gmail.com',
    href: 'mailto:kodandaravikiran.p@gmail.com',
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(656) 203-7861',
    href: 'tel:+16562037861',
    color: 'coral',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Houston, TX',
    href: null,
    color: 'cyan',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kodanda-ravi-kiran/',
    color: 'cyan',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/kodandaravi724',
    color: 'coral',
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-coral/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            &lt;Get In Touch /&gt;
          </span>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p 
            className={`mt-4 text-gray-400 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about data engineering and distributed systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div 
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-spring)' }}
          >
            <div className="bg-[#0f0f16] rounded-xl p-6 lg:p-8 border border-gray-800">
              <h3 className="text-white font-semibold text-xl mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-6 rounded-lg font-medium transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500 hover:bg-green-500'
                      : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 glow-cyan'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2">
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.label}
                    className={`group transition-all duration-800 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                    }`}
                    style={{ 
                      transitionDelay: `${400 + index * 100}ms`,
                      transitionTimingFunction: 'var(--ease-spring)'
                    }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-[#0f0f16] rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group-hover:translate-x-2"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-${info.color}-500/20 flex items-center justify-center border border-${info.color}-500/30`}>
                          <Icon className={`w-5 h-5 text-${info.color}-400`} />
                        </div>
                        <div>
                          <div className="text-gray-500 text-sm">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-[#0f0f16] rounded-xl border border-gray-800">
                        <div className={`w-12 h-12 rounded-lg bg-${info.color}-500/20 flex items-center justify-center border border-${info.color}-500/30`}>
                          <Icon className={`w-5 h-5 text-${info.color}-400`} />
                        </div>
                        <div>
                          <div className="text-gray-500 text-sm">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div 
              className={`transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <h4 className="text-white font-semibold mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 px-4 py-3 bg-[#0f0f16] rounded-xl border border-gray-800 hover:border-${social.color}-500/30 transition-all duration-300 hover:translate-y-[-2px]`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-${social.color}-500/20 flex items-center justify-center border border-${social.color}-500/30`}>
                        <Icon className={`w-5 h-5 text-${social.color}-400`} />
                      </div>
                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {social.label}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div 
              className={`transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-coral/10 rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-medium">Available for Work</span>
                </div>
                <p className="text-gray-400 text-sm">
                  I'm currently open to new opportunities in Data Engineering, 
                  Big Data, and Cloud Architecture roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
