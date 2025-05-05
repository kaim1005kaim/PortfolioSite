import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Orb from './Orb';

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - (scrollPosition / 700);
      setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 w-full h-full">
        <Orb hue={240} hoverIntensity={0.3} rotateOnHover={true} />
      </div>

      {/* Content */}
      <div 
        className="container relative z-10 mx-auto px-6"
        style={{ opacity: scrollOpacity }}
      >
        <div className="max-w-4xl">
          <div className="mb-24">
            <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-tight leading-tight text-white">
              KAIETORI
            </h1>
            <p className="text-xl text-white/70">
              クリエイティブディレクター
            </p>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity"
        style={{ opacity: scrollOpacity }}
      >
        <button 
          onClick={scrollToAbout}
          aria-label="Scroll down"
          className="text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
};

export default Hero;