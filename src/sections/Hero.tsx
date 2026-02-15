import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-20 left-10 text-xs md:text-sm text-cyan-500/20 font-mono float-animation transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <pre>{`spark.read
  .format("delta")
  .load("/data")`}</pre>
        </div>
        <div 
          className={`absolute top-40 right-10 text-xs md:text-sm text-coral/20 font-mono float-animation animation-delay-200 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <pre>{`df.groupBy("col")
  .agg(sum("val"))`}</pre>
        </div>
        <div 
          className={`absolute bottom-40 left-20 text-xs md:text-sm text-cyan-500/20 font-mono float-animation animation-delay-400 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <pre>{`kafka.consumer()
  .subscribe("topic")`}</pre>
        </div>
        <div 
          className={`absolute bottom-20 right-20 text-xs md:text-sm text-coral/20 font-mono float-animation animation-delay-300 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >
          <pre>{`pipeline = DLT
  .readStream()
  .table()`}</pre>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Greeting */}
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider">
            Hello, I'm
          </span>
        </div>

        {/* Name */}
        <h1 
          className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <span className="text-white">Kodanda Ravi</span>
          <br />
          <span className="text-gradient-shimmer">Kiran Putta</span>
        </h1>

        {/* Role */}
        <div 
          className={`mt-4 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Data Engineer</span>
          </span>
        </div>

        {/* Tagline */}
        <p 
          className={`mt-6 text-lg text-gray-400 max-w-xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          Building scalable data pipelines and distributed systems that power 
          data-driven decisions
        </p>

        {/* CTA Buttons */}
        <div 
          className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 py-6 rounded-lg font-medium group glow-cyan transition-all duration-300"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white px-6 py-6 rounded-lg font-medium transition-all duration-300"
          >
            <Mail className="mr-2 w-4 h-4" />
            Get In Touch
          </Button>
        </div>

        {/* Quick Stats */}
        <div 
          className={`mt-12 grid grid-cols-3 gap-6 justify-items-center max-w-md mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1300ms' }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">3+</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-coral">300GB+</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Monthly Data</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">40%</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Performance Gain</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: '1500ms' }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs font-mono">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
