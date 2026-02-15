import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Trophy } from 'lucide-react';

const educationData = [
  {
    school: 'University of South Florida',
    degree: "Master's, Computer Science",
    gpa: '3.9/4.0',
    period: 'Jan 2023 - Dec 2024',
    location: 'Tampa, FL',
    icon: Award,
    status: 'Completed',
  },
  {
    school: 'Gayatri Vidya Parishad College of Engineering',
    degree: "Bachelor's, Computer Science",
    gpa: '3.7/4.0',
    period: 'Aug 2016 - Sep 2020',
    location: 'India',
    icon: GraduationCap,
    status: 'Completed',
  },
];

const About = () => {
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
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span 
            className={`inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            &lt;About Me /&gt;
          </span>

          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Building Scalable{' '}
            <span className="gradient-text">Lakehouse Platforms</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN */}
          <div 
            className={`space-y-6 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >

            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a Data Engineer specializing in building scalable Lakehouse 
              architectures on Databricks. I design and implement Medallion 
              (Bronze/Silver/Gold) data platforms that transform raw enterprise 
              data into governed, analytics-ready systems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              At The Friedkin Group, I architect distributed pipelines using 
              Lakeflow Declarative Pipelines, integrate 7+ heterogeneous enterprise systems, 
              and standardize deployments across environments using Databricks 
              Asset Bundles. My focus is on building platform-level solutions — 
              not just pipelines.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I develop metadata-driven ingestion frameworks, design dimensional 
              models for high-performance OLAP analytics, enforce Row-Level 
              Security using Unity Catalog, and automate column-level lineage 
              using SQL parsing techniques to improve system observability.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Previously at Infosys, I engineered distributed Spark pipelines 
              processing 300GB+ of telecom data monthly, built streaming systems 
              with Kafka and Flink, and enabled CI/CD for data workflows in 
              cloud-native environments.
            </p>

            {/* KEY HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-4 pt-4">

              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800">
                <div className="text-cyan-400 text-2xl font-bold">300GB+</div>
                <div className="text-gray-500 text-sm">Monthly Data Processing</div>
              </div>

              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800">
                <div className="text-coral text-2xl font-bold">Medallion</div>
                <div className="text-gray-500 text-sm">Lakehouse Architecture</div>
              </div>

              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800">
                <div className="text-cyan-400 text-2xl font-bold">Lakeflow</div>
                <div className="text-gray-500 text-sm">Declarative Pipelines</div>
              </div>

              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800">
                <div className="text-coral text-2xl font-bold">Unity</div>
                <div className="text-gray-500 text-sm">Catalog & RLS Governance</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - EDUCATION */}
          <div className="space-y-6">

            <h3 
              className={`text-xl font-semibold text-white mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Education
            </h3>

            {educationData.map((edu, index) => (
              <div
                key={edu.school}
                className={`group relative transition-all duration-800 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{ 
                  transitionDelay: `${400 + index * 200}ms`
                }}
              >
                <div className="relative bg-[#0f0f16] rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500">

                  <div className="relative flex items-start gap-4">

                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center border border-cyan-500/30">
                      <edu.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <div className="flex-1 min-w-0">

                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                          {edu.school}
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
                          {edu.status}
                        </span>
                      </div>

                      <p className="text-gray-400 mt-1">{edu.degree}</p>

                      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 border border-coral/30">
                        <Award className="w-4 h-4 text-coral" />
                        <span className="text-coral font-medium text-sm">
                          GPA: {edu.gpa}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Small LeetCode Card (Reduced Emphasis) */}
            <a
              href="https://leetcode.com/u/UCJTBKG5qL/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0f0f16] rounded-xl p-4 border border-gray-800 hover:border-yellow-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    LeetCode Knight
                  </h4>
                  <p className="text-gray-500 text-xs">
                    Strong DSA & analytical foundations
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
