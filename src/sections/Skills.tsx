import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud, Server } from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming & Systems',
    icon: Code2,
    description:
      'Strong foundations in backend engineering and distributed system development.',
    technologies: ['Python', 'Scala', 'SQL', 'Go', 'Java', 'C/C++'],
  },
  {
    name: 'Data Engineering & Streaming',
    icon: Database,
    description:
      'Designing batch and real-time data pipelines for scalable, production-grade systems.',
    technologies: [
      'Spark (SQL & Streaming)',
      'PySpark',
      'Kafka',
      'Airflow',
      'Apache Flink',
      'Hadoop',
    ],
  },
  {
    name: 'Cloud & Lakehouse',
    icon: Cloud,
    description:
      'Building Medallion Lakehouse architectures with governance and performance in mind.',
    technologies: [
      'Databricks',
      'Delta Lake',
      'AWS (S3, EMR, Glue)',
      'Snowflake',
      'PostgreSQL',
      'Unity Catalog',
    ],
  },
  {
    name: 'Platform & DevOps',
    icon: Server,
    description:
      'Standardizing deployments, CI/CD workflows, and production data infrastructure.',
    technologies: [
      'Git',
      'Docker',
      'FastAPI',
      'CI/CD',
      'pytest',
      'Databricks Asset Bundles',
    ],
  },
];

const Skills = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            &lt;Core Capabilities /&gt;
          </span>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Engineering <span className="gradient-text">Expertise</span>
          </h2>

          <p
            className={`mt-4 text-gray-400 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Focused on building scalable Lakehouse platforms, distributed pipelines,
            and production-ready data systems.
          </p>
        </div>

        {/* Capability Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="relative bg-[#0f0f16] rounded-xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 h-full">

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-xl">
                    {category.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-400 text-sm hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div
          className={`mt-14 text-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-gray-500 text-sm mb-4">
            Additional Experience
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Hive',
              'HBase',
              'Oracle',
              'MySQL',
              'Lambda',
              'Glue',
              'EMR',
              'Redshift',
              'gRPC',
              'Protocol Buffers',
              'CUDA',
              'Lakeflow',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full bg-gray-800/40 border border-gray-700 text-gray-500 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
