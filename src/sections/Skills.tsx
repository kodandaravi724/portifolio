import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Server
} from 'lucide-react';

/** Map numeric level to a proficiency label (no percentages) */
function getProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Proficient';
  return 'Familiar';
}

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: Code2,
    color: 'cyan',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Scala', level: 90 },
      { name: 'SQL', level: 95 },
      { name: 'Go', level: 75 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 70 },
    ],
  },
  {
    name: 'Data Engineering',
    icon: Database,
    color: 'coral',
    skills: [
      { name: 'Spark (SQL, Streaming)', level: 95 },
      { name: 'PySpark', level: 95 },
      { name: 'Kafka', level: 90 },
      { name: 'Airflow', level: 85 },
      { name: 'Apache Flink', level: 80 },
      { name: 'Hadoop (HDFS, YARN)', level: 75 },
    ],
  },
  {
    name: 'Cloud & Databases',
    icon: Cloud,
    color: 'cyan',
    skills: [
      { name: 'AWS (Databricks, S3)', level: 90 },
      { name: 'Snowflake', level: 85 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Delta Lake', level: 85 },
      { name: 'Cassandra', level: 70 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    name: 'Tools & Frameworks',
    icon: Server,
    color: 'coral',
    skills: [
      { name: 'Databricks', level: 95 },
      { name: 'FastAPI', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'pytest', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills progressively
          skillCategories.forEach((category, catIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set(prev).add(`${category.name}-${skill.name}`));
              }, 500 + catIndex * 200 + skillIndex * 100);
            });
          });
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
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            &lt;Technical Expertise /&gt;
          </span>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p 
            className={`mt-4 text-gray-400 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A comprehensive toolkit for building scalable data pipelines, 
            distributed systems, and cloud-native solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`group relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${300 + categoryIndex * 150}ms`,
                transitionTimingFunction: 'var(--ease-spring)'
              }}
            >
              <div className="relative bg-[#0f0f16] rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 h-full">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    category.color === 'cyan'
                      ? 'bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/5'
                      : 'bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:to-[#ff6b35]/5'
                  }`}
                />
                
                {/* Category Header */}
                <div className="relative flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                      category.color === 'cyan'
                        ? 'bg-cyan-500/20 border-cyan-500/30'
                        : 'bg-[#ff6b35]/20 border-[#ff6b35]/30'
                    }`}
                  >
                    <category.icon
                      className={category.color === 'cyan' ? 'w-5 h-5 text-cyan-400' : 'w-5 h-5 text-[#ff8555]'}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                </div>

                {/* Skills List */}
                <div className="relative space-y-4">
                  {category.skills.map((skill) => {
                    const isAnimated = animatedSkills.has(`${category.name}-${skill.name}`);
                    const isCyan = category.color === 'cyan';
                    
                    return (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className={`text-sm font-medium ${
                              category.color === 'cyan' ? 'text-cyan-400' : 'text-[#ff8555]'
                            }`}
                          >
                            {isAnimated ? getProficiencyLabel(skill.level) : '—'}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${
                              isCyan 
                                ? 'bg-gradient-to-r from-cyan-500 to-cyan-400' 
                                : 'bg-gradient-to-r from-coral to-orange-400'
                            }`}
                            style={{ 
                              width: isAnimated ? `${skill.level}%` : '0%',
                              boxShadow: isAnimated 
                                ? `0 0 10px ${isCyan ? 'rgba(0, 212, 255, 0.5)' : 'rgba(255, 107, 53, 0.5)'}` 
                                : 'none'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div 
          className={`mt-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-500 text-sm mr-2">Also experienced with:</span>
            {[
              'Hive', 'HBase', 'Oracle', 'MySQL', 'Lambda', 'Glue', 'EMR', 
              'Redshift', 'gRPC', 'Protocol Buffers', 'CUDA', 'Lakeflow'
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                style={{ animationDelay: `${900 + index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
