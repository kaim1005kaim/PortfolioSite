import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-blue-950 text-white/70">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          &copy; {currentYear} Kai Etori. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="#hero" 
            className="hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;