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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* Greeting */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '200ms' }}
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
          style={{ transitionDelay: '400ms' }}
        >
          <span className="text-white">Kodanda Ravi</span>
          <br />
          <span className="text-gradient-shimmer">Kiran Putta</span>
        </h1>

        {/* Role Badge */}
        <div
          className={`mt-6 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">
              Data Platform Engineer • Lakehouse Architect
            </span>
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          I design and build scalable Lakehouse platforms using Medallion Architecture,
          distributed Spark pipelines, and production-grade streaming systems.
          Passionate about clean system design, governance, and reliable data infrastructure.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          {/* Primary */}
          <Button
            onClick={() => scrollToSection('experience')}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-8 py-5 rounded-lg font-medium transition-all duration-300"
          >
            Explore My Experience
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          {/* Secondary */}
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-5 rounded-lg font-medium transition-all duration-300"
          >
            View Engineering Projects
          </Button>

          {/* Outline */}
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white px-8 py-5 rounded-lg font-medium transition-all duration-300"
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Me
          </Button>
        </div>

        {/* Quick Stats */}
        <div
          className={`mt-14 grid grid-cols-3 gap-8 justify-items-center max-w-xl mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">3+</div>
            <div className="text-sm text-gray-500 mt-1">
              Years Building Data Systems
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-coral">Medallion</div>
            <div className="text-sm text-gray-500 mt-1">
              Lakehouse Architecture
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">Knight</div>
            <div className="text-sm text-gray-500 mt-1">
              LeetCode Rank
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: '1400ms' }}
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
