import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Code2, Trophy, Target, Brain } from 'lucide-react';

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
      {/* Background Elements */}
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
            style={{ transitionDelay: '100ms' }}
          >
            Passionate About{' '}
            <span className="gradient-text">Data Engineering</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Text */}
          <div 
            className={`space-y-6 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-cyan-400 font-medium">Data Engineer</span> with expertise 
              in building scalable data pipelines and distributed systems. I recently completed my 
              Master's in Computer Science at the University of South Florida with a{' '}
              <span className="text-coral font-medium">3.9 GPA</span>.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              My experience spans across big data technologies including Spark, Kafka, Databricks, 
              and cloud platforms. I've successfully optimized data processing workflows, achieving 
              up to <span className="text-cyan-400">40% performance improvements</span> and reducing 
              incident response times by <span className="text-coral">35%</span>.
            </p>

            {/* Problem Solving & DSA Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-coral/10 rounded-xl p-5 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <Trophy className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LeetCode Knight</h4>
                  <p className="text-gray-400 text-sm">Problem Solving Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                I'm passionate about <span className="text-cyan-400">Data Structures and Algorithms</span>. 
                Regularly solving complex problems on LeetCode has strengthened my analytical thinking 
                and ability to design efficient solutions for real-world challenges.
              </p>
              <a
                href="https://leetcode.com/u/UCJTBKG5qL/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e1e2e] border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm text-gray-300 hover:text-cyan-400"
              >
                <Code2 className="w-4 h-4" />
                View My LeetCode Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I'm passionate about solving complex data challenges and building systems that can 
              handle massive scale while maintaining reliability and performance. My work has 
              processed over <span className="text-cyan-400 font-medium">300GB of data monthly</span> 
              {' '}for telecom and enterprise clients.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <div className="text-cyan-400 text-xl font-bold">DSA</div>
                </div>
                <div className="text-gray-500 text-sm">Advanced Problem Solving</div>
              </div>
              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800 hover:border-coral/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-coral" />
                  <div className="text-coral text-xl font-bold">3.9</div>
                </div>
                <div className="text-gray-500 text-sm">Master's GPA</div>
              </div>
              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800 hover:border-cyan-500/30 transition-colors">
                <div className="text-cyan-400 text-2xl font-bold">7+</div>
                <div className="text-gray-500 text-sm">Data Sources Integrated</div>
              </div>
              <div className="bg-[#12121a] rounded-lg p-4 border border-gray-800 hover:border-coral/30 transition-colors">
                <div className="text-coral text-2xl font-bold">35%</div>
                <div className="text-gray-500 text-sm">Response Time Reduction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Education Cards */}
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
                  transitionDelay: `${400 + index * 200}ms`,
                  transitionTimingFunction: 'var(--ease-spring)'
                }}
              >
                <div className="relative bg-[#0f0f16] rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 card-3d">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-coral/0 group-hover:from-cyan-500/5 group-hover:to-coral/5 transition-all duration-500" />
                  
                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center border border-cyan-500/30">
                      <edu.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    {/* Content */}
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
                      
                      {/* GPA Badge */}
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 border border-coral/30">
                        <Award className="w-4 h-4 text-coral" />
                        <span className="text-coral font-medium text-sm">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* LeetCode Stats Card */}
            <div 
              className={`group relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ 
                transitionDelay: '800ms',
                transitionTimingFunction: 'var(--ease-spring)'
              }}
            >
              <a
                href="https://leetcode.com/u/UCJTBKG5qL/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-gradient-to-br from-[#1e1e2e] to-[#0f0f16] rounded-xl p-6 border border-gray-800 hover:border-yellow-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center border border-yellow-500/30">
                    <Trophy className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                      LeetCode Knight
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Problem solving enthusiast with strong DSA fundamentals
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-yellow-400 text-sm">
                      <span>View Profile</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
