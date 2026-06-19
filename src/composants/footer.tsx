import { motion } from "framer-motion";
import React from "react";
import { FiLinkedin, FiGithub, FiArrowUp, FiMail } from "react-icons/fi";

export default function Footer(): React.JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const anneeActuelle = new Date().getFullYear();

  return (
    <footer 
      className="w-full border-t border-gray-100 py-16 px-6 md:px-12 relative overflow-hidden bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      
      {/* Voile blanc transparent pour tamiser doucement l'image d'arrière-plan */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] z-0" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
        
        {/* ── PARTIE GAUCHE : IDENTITÉ ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-1"
        >
          <p 
            className="text-sm font-medium text-slate-900 antialiased"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © {anneeActuelle} • Conçu avec rigueur et passion.
          </p>
          <p 
            className="text-xs text-slate-700 font-mono uppercase tracking-wider font-medium"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Architecture Logicielle & Design Graphique
          </p>
        </motion.div>

        {/* ── PARTIE CENTRALE : RÉSEAUX AVEC VOS LIENS CONFIGURÉS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-6"
        >
          {/* Email — configuré avec calixtetakara5@gmail.com */}
          <a
            href="mailto:calixtetakara5@gmail.com"
            className="text-slate-700 hover:text-[#D35111] transition-colors duration-300 p-2 rounded-full hover:bg-white hover:shadow-sm"
            title="Envoyer un email"
          >
            <FiMail className="w-5 h-5" />
          </a>

          {/* LinkedIn — configuré avec votre lien complet */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-[#D35111] transition-colors duration-300 p-2 rounded-full hover:bg-white hover:shadow-sm"
            title="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>

          {/* GitHub — configuré avec votre compte calixtetakara */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-[#D35111] transition-colors duration-300 p-2 rounded-full hover:bg-white hover:shadow-sm"
            title="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        </motion.div>

        {/* ── PARTIE DROITE : BOUTON REMONTER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={scrollToTop}
            className="relative w-12 h-12 inline-flex items-center justify-center bg-slate-900 text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_10px_20px_rgba(211,81,17,0.2)] cursor-pointer border-none group"
            title="Remonter en haut"
          >
            <span className="absolute inset-0 w-full h-full bg-[#D35111] transition-transform duration-500 ease-out transform scale-y-0 origin-bottom group-hover:scale-y-100" />
            <span className="relative z-10">
              <FiArrowUp className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </motion.div>

      </div>
    </footer>
  );
}
