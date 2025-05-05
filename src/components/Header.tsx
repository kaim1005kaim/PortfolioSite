import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-white text-xl font-light tracking-wider">
          KAIETORI
        </a>

        <button 
          className="text-white/70 hover:text-white transition-colors focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Full screen menu */}
      <div 
        className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col items-center space-y-8">
          <a href="#hero" className="text-white/70 hover:text-white transition-colors text-4xl tracking-wider" onClick={toggleMenu}>
            HOME
          </a>
          <a href="#portfolio" className="text-white/70 hover:text-white transition-colors text-4xl tracking-wider" onClick={toggleMenu}>
            PORTFOLIO
          </a>
          <a href="#blog" className="text-white/70 hover:text-white transition-colors text-4xl tracking-wider" onClick={toggleMenu}>
            BLOG
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;