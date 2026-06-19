import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiPhone, FiMail, FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Expertises', href: '#services' }, 
    { name: 'Mes Projets', href: '#projets' }, 
    { name: 'Parcours', href: '#artiste' },    
    { name: 'Contact', href: '#contact' }      
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Si l'utilisateur est tout en haut, on active l'Accueil d'office
      if (window.scrollY < 120) {
        setActiveSection('#');
        return;
      }

      const sections = ['services', 'projets', 'artiste', 'contact'];
      let currentSection = '#';

      // Parcourir les sections pour trouver celle qui occupe le tiers supérieur de l'écran
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Une section est considérée comme active si son sommet est proche du haut de l'écran
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = `#${id}`;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Déclenchement immédiat au chargement + écoute sur le défilement global
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav 
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/90 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.04)] px-6 flex items-center justify-between h-16 md:h-20 border border-gray-100/50"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-sm overflow-hidden border border-gray-50 transition-transform duration-300 hover:scale-105">
            <img
              src="/logo.png"
              alt="TAKARA Calixte"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Liens Desktop (Orange & Soulignés dynamiquement) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-medium text-sm lg:text-base transition-colors duration-300 py-2 group ${
                  isActive ? 'text-[#D35111]' : 'text-slate-800 hover:text-[#D35111]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D35111] transition-transform duration-300 origin-left rounded-full ${
                  isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            );
          })}
        </div>

        {/* Icônes de droite */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-slate-600 hover:text-[#D35111] hover:bg-slate-50 transition-all duration-300" 
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          
          <a 
            href="tel:+22893604712" 
            className="p-2.5 rounded-full text-slate-600 hover:text-[#D35111] hover:bg-slate-50 transition-all duration-300" 
            aria-label="Téléphone"
          >
            <FiPhone className="w-5 h-5" />
          </a>
          
          <a 
            href="mailto:calixtetakara5@gmail.com" 
            className="p-2.5 rounded-full text-slate-600 hover:text-[#D35111] hover:bg-slate-50 transition-all duration-300" 
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 rounded-full text-slate-700 hover:text-[#D35111] hover:bg-slate-50 transition-colors duration-300 focus:outline-none" 
            aria-label="Menu"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] px-6 py-6 md:hidden border border-gray-100"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-medium py-2 text-center text-lg w-full transition-colors ${
                      isActive ? 'text-[#D35111]' : 'text-slate-800 hover:text-[#D35111]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100 w-full text-slate-600">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D35111] transition-colors p-2" 
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+22893604712" 
                  className="hover:text-[#D35111] transition-colors p-2" 
                  aria-label="Téléphone"
                >
                  <FiPhone className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:calixtetakara5@gmail.com" 
                  className="hover:text-[#D35111] transition-colors p-2" 
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
