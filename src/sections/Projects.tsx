import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Sparkles, Database, Server, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Real-Time Molecular Query Processing',
    description: 'Built a high-performance real-time pipeline for processing molecular data with sub-second latency using Spark Streaming and Kafka.',
    tech: ['Scala', 'Spark', 'Kafka', 'Cassandra'],
    icon: Sparkles,
    color: 'cyan',
    metrics: [
      { label: 'Latency', value: '200ms' },
      { label: 'Improvement', value: '35%' },
    ],
    highlights: [
      'Achieved 200ms processing latency with sliding windows',
      '35% improvement over batch processing',
      'Optimized Kafka ingestion with partition tuning',
      'Implemented checkpointing for fault tolerance',
    ],
    github: 'https://github.com/kodandaravi724',
  },
  {
    title: 'LRU Page Replacement Algorithm',
    description: 'Implemented LRU caching mechanism in PostgreSQL\'s buffer pool, replacing the clock buffer replacement policy for better performance.',
    tech: ['C', 'PostgreSQL', 'Caching'],
    icon: Database,
    color: 'coral',
    metrics: [
      { label: 'Cache Hit Rate', value: '+25%' },
      { label: 'Performance', value: 'Improved' },
    ],
    highlights: [
      'Replaced clock buffer replacement policy',
      '25% improvement in cache hit rates',
      'Efficient memory management',
      'Optimized buffer pool operations',
    ],
    github: 'https://github.com/kodandaravi724',
  },
  {
    title: 'Distributed Task Management System',
    description: 'Designed and implemented a distributed task management system with master-worker architecture using Go and gRPC.',
    tech: ['Go', 'gRPC', 'Protocol Buffers', 'Channels'],
    icon: Server,
    color: 'cyan',
    metrics: [
      { label: 'Speed Gain', value: '50%' },
      { label: 'Network', value: '-30%' },
    ],
    highlights: [
      '50% faster task execution vs single-threaded',
      '30% reduced network overhead with gRPC',
      'Secure low-latency communication',
      'Scalable master-worker architecture',
    ],
    github: 'https://github.com/kodandaravi724',
  },
  {
    title: 'XV6 OS Kernel Development',
    description: 'Enhanced the XV6 operating system with advanced scheduling algorithms and filesystem improvements.',
    tech: ['C', 'XV6 OS', 'UNIX', 'File System'],
    icon: Cpu,
    color: 'coral',
    metrics: [
      { label: 'File Size', value: '16K blocks' },
      { label: 'Scheduling', value: 'Optimized' },
    ],
    highlights: [
      'Implemented lottery and stride scheduling',
      'Expanded max file size from 140 to 16,523 blocks',
      'Developed lazy page allocation',
      'Implemented extent-based inode',
    ],
    github: 'https://github.com/kodandaravi724',
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            &lt;Featured Work /&gt;
          </span>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Academic <span className="gradient-text">Projects</span>
          </h2>
          <p 
            className={`mt-4 text-gray-400 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A showcase of my technical projects demonstrating expertise in 
            distributed systems, data processing, and system-level programming
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isCyan = project.color === 'cyan';
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className={`group relative transition-all duration-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 150}ms`,
                  transitionTimingFunction: 'var(--ease-spring)'
                }}
              >
                <div className="relative bg-[#0f0f16] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 h-full card-3d">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/0 to-${project.color}-500/0 group-hover:from-${project.color}-500/5 group-hover:to-${project.color}-500/5 transition-all duration-500`} />
                  
                  {/* Header */}
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-${project.color}-500/20 flex items-center justify-center border border-${project.color}-500/30`}>
                        <Icon className={`w-6 h-6 text-${project.color}-400`} />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-xl group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-4 mb-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="bg-gray-800/50 rounded-lg px-3 py-2">
                          <div className={`text-${project.color}-400 font-bold text-lg`}>
                            {metric.value}
                          </div>
                          <div className="text-gray-500 text-xs">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${project.color}-400 mt-1.5 flex-shrink-0`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isCyan
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                              : 'bg-coral/10 text-coral border border-coral/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-coral transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View More on GitHub */}
        <div 
          className={`mt-12 text-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <Button
            asChild
            variant="outline"
            className="border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white px-6 py-5 rounded-lg font-medium transition-all duration-300"
          >
            <a
              href="https://github.com/kodandaravi724"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
