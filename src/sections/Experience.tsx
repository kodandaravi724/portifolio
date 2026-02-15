import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'The Friedkin Group',
    role: 'Data Engineer (Contract)',
    type: 'Engaged via Apex-2000 Inc',
    period: 'April 2025 - Present',
    location: 'Houston, TX',
    description:
      'Designing and operationalizing enterprise Lakehouse architecture on Databricks.',
    achievements: [
      'Architected Medallion (Bronze/Silver/Gold) Lakehouse integrating 7+ heterogeneous enterprise systems',
      'Designed metadata-driven ingestion framework using PySpark and spec tables to standardize data onboarding',
      'Built Lakeflow Declarative Pipelines enabling automated dependency management and production-grade orchestration',
      'Developed Databricks Asset Bundles (DABs) to standardize Dev → QA → Prod promotions',
      'Designed dimensional models (star & snowflake schemas) supporting high-performance OLAP analytics',
      'Implemented Unity Catalog governance with dynamic Row-Level Security (RLS)',
      'Automated column-level lineage extraction using SQL parsing techniques for impact analysis',
    ],
  },
  {
    company: 'University of South Florida',
    role: 'Research Assistant',
    type: 'Full-time',
    period: 'August 2024 - December 2024',
    location: 'Tampa, FL',
    description:
      'Researched GPU acceleration strategies for high-performance data processing.',
    achievements: [
      'Engineered GPU-accelerated data workflows using AWS P3 instances',
      'Applied CUDA-based parallel computing techniques for molecular data processing',
      'Optimized GPU memory management and throughput performance',
      'Evaluated scalable GPU utilization strategies in cloud environments',
    ],
  },
  {
    company: 'Infosys',
    role: 'Specialist Programmer (Data Engineer)',
    type: 'Full-time',
    period: 'January 2021 - December 2022',
    location: 'Hyderabad, India',
    description:
      'Engineered distributed Spark and streaming systems for telecom-scale data processing.',
    achievements: [
      'Designed scalable ETL pipelines in Databricks processing 300GB+ telecom datasets monthly',
      'Implemented structured audit logging framework using PySpark and Delta Lake for data observability',
      'Built near real-time streaming ingestion with Kafka and Flink reducing incident response time by 35%',
      'Integrated AWS S3, Glue, and Lambda improving analytics data availability by 40%',
      'Developed FastAPI services enabling secure programmatic data access',
      'Implemented Slowly Changing Dimensions (SCD) and Change Data Capture (CDC) strategies',
      'Enabled CI/CD for Databricks pipelines reducing release cycle time by 35%',
    ],
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
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
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            &lt;Professional Journey /&gt;
          </span>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className={`absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-[#ff6b35] to-cyan-500 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
            style={{ transformOrigin: 'top', transitionDelay: '200ms' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={exp.company}
                  className={`relative pl-12 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  <div
                    className="group relative bg-[#0f0f16] rounded-xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer"
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-cyan-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-xl group-hover:text-cyan-400 transition-colors">
                          {exp.company}
                        </h3>

                        <p className="text-cyan-400 text-sm mt-1">
                          {exp.role}
                        </p>

                        {/* Contractor / Employment Type */}
                        <p className="text-gray-500 text-xs mt-1">
                          {exp.type}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mt-5">
                      {exp.description}
                    </p>

                    {/* Toggle */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-cyan-400">
                      <span>{isExpanded ? 'Hide Contributions' : 'View Contributions'}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>

                    {/* Achievements */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded
                          ? 'max-h-[700px] opacity-100 mt-6'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-3 text-sm text-gray-400">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
