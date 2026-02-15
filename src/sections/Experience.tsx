import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'The Friedkin Group',
    role: 'Data Engineer',
    type: 'Contract via Apex - 2000 Inc',
    period: 'April 2025 - Present',
    location: 'Houston, TX',
    description: 'Architecting scalable data solutions on Databricks',
    achievements: [
      'Architected Medallion Architecture (Bronze/Silver/Gold) on Databricks integrating 7+ data sources',
      'Built configuration-driven framework using PySpark reducing pipeline development time',
      'Developed Lakeflow Declarative Pipelines for automated dependency management',
      'Created Databricks Asset Bundles for cross-environment deployments',
      'Designed dimensional data models with star/snowflake schemas for OLAP analytics',
      'Built Python connectors for Outlook API, Smartsheet, SQL Server, and SFTP',
      'Implemented Row-Level Security and Unity Catalog policies for RBAC',
    ],
    color: 'cyan',
  },
  {
    company: 'University of South Florida',
    role: 'Research Assistant',
    type: 'Full-time',
    period: 'August 2024 - December 2024',
    location: 'Tampa, FL',
    description: 'GPU acceleration research for data processing',
    achievements: [
      'Researched GPU acceleration of data processing pipelines using AWS P3 instances',
      'Engineered high-performance workflows with CUDA-based acceleration',
      'Implemented parallel computing techniques for molecular data processing',
      'Optimized GPU resource utilization and memory management',
    ],
    color: 'coral',
  },
  {
    company: 'Infosys',
    role: 'Specialist Programmer (Data Engineer)',
    type: 'Full-time',
    period: 'January 2021 - December 2022',
    location: 'Hyderabad, India',
    description: 'Built ETL pipelines for telecom data processing',
    achievements: [
      'Built scalable ETL pipelines in Databricks processing 300GB+ monthly CDRs and logs',
      'Implemented data audit logging framework using PySpark and Delta Lake',
      'Integrated AWS S3, Glue, and Lambda improving data availability by 40%',
      'Developed FastAPI RESTful endpoints reducing manual data pulls by 60%',
      'Implemented SCD and CDC techniques for 20+ downstream pipelines',
      'Built real-time streaming with Flink and Kafka reducing response time by 35%',
      'Enabled CI/CD for Databricks reducing release cycle time by 35%',
    ],
    color: 'cyan',
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
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-coral/5 to-transparent -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
          {/* Timeline Line (no nodes - clean vertical line only) */}
          <div
            className={`absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-[#ff6b35] to-cyan-500 transition-all duration-1500 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
            style={{ transformOrigin: 'top', transitionDelay: '200ms' }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className={`relative transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                  }`}
                  style={{ 
                    transitionDelay: `${300 + index * 200}ms`,
                    transitionTimingFunction: 'var(--ease-spring)'
                  }}
                >
                  <div className="pl-12">
                    {/* Content - left-aligned so wrapped lines start from the left */}
                      <div
                        className="group relative bg-[#0f0f16] rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer"
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      >
                        {/* Glow Effect */}
                        <div
                          className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                            exp.color === 'cyan'
                              ? 'bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/5'
                              : 'bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:to-[#ff6b35]/5'
                          }`}
                        />
                        {/* Header */}
                        <div className="relative">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                                exp.color === 'cyan'
                                  ? 'bg-cyan-500/20 border-cyan-500/30'
                                  : 'bg-[#ff6b35]/20 border-[#ff6b35]/30'
                              }`}
                            >
                              <Briefcase
                                className={exp.color === 'cyan' ? 'w-5 h-5 text-cyan-400' : 'w-5 h-5 text-[#ff8555]'}
                              />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                                {exp.company}
                              </h3>
                              <p className={exp.color === 'cyan' ? 'text-cyan-400 text-sm' : 'text-[#ff8555] text-sm'}>
                                {exp.role}
                              </p>
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-3">
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-400 mt-3 text-left">
                            {exp.description}
                          </p>

                          {/* Expand Button */}
                          <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                          </div>

                          {/* Achievements (Expandable) */}
                          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <ul className="space-y-2 list-none pl-0 text-left">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="flex items-start gap-2 text-gray-400 text-sm"
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                      exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-[#ff8555]'
                                    }`}
                                  />
                                  <span className="flex-1 min-w-0 text-left">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
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
