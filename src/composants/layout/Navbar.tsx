import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Accueil', 'Compétences', 'Parcours', 'Mes Projets'];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/90 backdrop-blur-md rounded-full shadow-md px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo dans un rond (agrandi) */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-md overflow-hidden">
            <img
              src="/logo.png"        // remplacez par le chemin de votre logo
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-900 hover:text-red-500 font-medium text-lg transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Nouveaux icônes : LinkedIn, Contact (personne), Email */}
        <div className="hidden md:flex items-center space-x-4">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kondéabalo-calixte-takara-589b46347" className="text-gray-600 hover:text-blue-700 transition" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.202 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Contact (icône utilisateur) */}
          <a href="#" className="text-gray-600 hover:text-red-500 transition" aria-label="Contact">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
          {/* Email */}
          <a href="#" className="text-gray-600 hover:text-red-500 transition" aria-label="Email">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-500" aria-label="Menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu mobile (contenu centré) */}
      {isOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 md:hidden">
          <div className="flex flex-col items-center space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-800 hover:text-red-500 font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            {/* Icônes sociales sur mobile (LinkedIn, Contact, Email) */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200 w-full">
              <a href="#" className="text-gray-600 hover:text-blue-700 transition" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.202 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition" aria-label="Contact">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;