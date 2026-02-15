import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Database, Server, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Metadata-Driven Lakehouse Platform',
    description:
      'Designed and implemented a production-grade Medallion (Bronze/Silver/Gold) Lakehouse architecture with metadata-driven ingestion, governance, and automated lineage.',
    tech: [
      'Databricks',
      'PySpark',
      'Delta Lake',
      'Unity Catalog',
      'SQLGlot',
      'AWS S3'
    ],
    metrics: [
      { label: 'Architecture', value: 'Medallion' },
      { label: 'Deployment', value: 'CI/CD' },
    ],
    highlights: [
      'Built configuration-driven ingestion framework using metadata spec tables',
      'Implemented automated column-level lineage extraction',
      'Designed star & snowflake schemas for OLAP workloads',
      'Enforced dynamic Row-Level Security (RLS)',
      'Standardized Dev → QA → Prod deployments',
    ],
    github: 'https://github.com/kodandaravi724',
    icon: Database,
  },
  {
    title: 'Real-Time Streaming Data Pipeline',
    description:
      'Engineered distributed streaming architecture processing high-throughput data with sub-second latency using Spark Streaming and Kafka.',
    tech: ['Scala', 'Spark Streaming', 'Kafka', 'Cassandra'],
    metrics: [
      { label: 'Latency', value: '200ms' },
      { label: 'Model', value: 'Streaming' },
    ],
    highlights: [
      'Designed sliding-window streaming model achieving 200ms end-to-end latency',
      'Optimized Kafka partitioning and consumer parallelism',
      'Implemented checkpointing for fault tolerance',
      'Reduced dependency on batch processing',
    ],
    github: 'https://github.com/kodandaravi724',
    icon: Zap,
  },
  {
    title: 'PostgreSQL Buffer Manager (LRU vs ClockSweep)',
    description:
      'Replaced PostgreSQL’s ClockSweep buffer replacement algorithm with a true LRU implementation to improve cache efficiency.',
    tech: ['C', 'PostgreSQL', 'Buffer Pool', 'Database Internals'],
    metrics: [
      { label: 'Cache Hit', value: '+25%' },
      { label: 'Policy', value: 'LRU' },
    ],
    highlights: [
      'Analyzed PostgreSQL buffer manager internals and ClockSweep logic',
      'Implemented true LRU page replacement strategy',
      'Improved cache hit rate by 25%',
      'Optimized memory eviction and page tracking',
    ],
    github: 'https://github.com/kodandaravi724',
    icon: Database,
  },
  {
    title: 'Distributed Task Execution System',
    description:
      'Built a scalable master-worker distributed task execution engine using Go, gRPC, and concurrent primitives.',
    tech: ['Go', 'gRPC', 'Protocol Buffers', 'Concurrency'],
    metrics: [
      { label: 'Execution', value: '+50%' },
      { label: 'Network', value: '-30%' },
    ],
    highlights: [
      'Designed concurrent master-worker coordination model',
      'Reduced task execution time by 50% via parallel processing',
      'Minimized network overhead using Protocol Buffers',
      'Implemented fault-tolerant task reassignment strategy',
    ],
    github: 'https://github.com/kodandaravi724',
    icon: Server,
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            &lt;Selected Engineering Work /&gt;
          </span>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Data Platform & <span className="gradient-text">Distributed Systems</span>
          </h2>

          <p
            className={`mt-4 text-gray-400 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Scalable architectures, database internals, and distributed system design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className={`transition-all duration-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="bg-[#0f0f16] rounded-xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 h-full">

                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-white font-semibold text-xl mb-3 hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-6 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-cyan-400 font-bold text-lg">
                          {metric.value}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6 text-sm text-gray-400">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                    <ExternalLink className="w-3 h-3" />
                  </a>

                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
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
              Explore Full GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
