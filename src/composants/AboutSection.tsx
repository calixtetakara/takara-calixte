import { motion } from "framer-motion";
import React from "react";
// Import des icônes requises
import { FiExternalLink, FiUser } from "react-icons/fi";

export default function Artiste(): React.JSX.Element {
  const parcours = [
    {
      annee: "Prés.",
      titre: "Licence Pro — Architecture Logiciel (L2)",
      sous: "Université de Kara"
    },
    {
      annee: "2024",
      titre: "Baccalauréat Scientifique (Série D)",
      sous: "Collège Saint Augustin Kara"
    },
    {
      annee: "2021",
      titre: "Brevet d'Études du Premier Cycle (BEPC)",
      sous: "CEG Pagouda Ville"
    },
  ];

  return (
    <section 
      id="artiste" 
      className="relative w-full bg-white py-28 px-6 md:px-12 overflow-hidden border-t border-gray-50"
    >
      {/* ── TEXTE GÉANT EN ARRIÈRE-PLAN ── */}
      <div 
        className="absolute top-10 left-1/4 right-0 text-center text-[10vw] font-bold text-gray-100/80 select-none pointer-events-none whitespace-nowrap antialiased"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Mon Parcours
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* ── COLONNE GAUCHE : PHOTO + CITATION FLOTTANTE ── */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:col-span-5 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[420px] lg:max-w-none aspect-[3/4] rounded-[24px] overflow-visible group">
            <div className="w-full h-full rounded-[24px] overflow-hidden shadow-sm">
              <img
                src="/My.jpg"
                alt="Développeur et Graphiste"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-6 md:p-8 rounded-[24px] max-w-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 ">
              <p 
                className="italic text-slate-600 text-xs md:text-sm leading-relaxed mb-4 antialiased"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                "Incarner l'espoir de l'écosystème numérique contemporain."
              </p>
              <div className="w-10 h-[2px] bg-[#D35111] rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* ── COLONNE DROITE : CONTENU TEXTE OPTIMISÉ ── */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:col-span-7 flex flex-col pt-6 lg:pt-0"
        >
          {/* Conteneur centré pour le bloc supérieur */}
          <div className="w-full flex flex-col items-center justify-center text-center mb-6">
            <span 
              className="text-xs font-bold uppercase tracking-widest text-[#D35111] font-mono mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              DEPUIS 2021 • PAGOUDA
            </span>

            <h2 
              className="text-3xl md:text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight antialiased text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              L'excellence au service de <br />
              <span className="text-[#D35111]">la technologie</span>
            </h2>
          </div>

          {/* Corps de texte corrigé (sans le mot navigue) */}
          <div 
            className="text-slate-500 text-sm md:text-base leading-relaxed antialiased space-y-4 mb-10 text-left w-full"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <p>
              Originaire du Togo (Région de la Kara), j'allie la rigueur du code à la sensibilité du design. 
              Étudiant en développement web, mobile et graphiste, je dédie mon parcours à l'excellence numérique.
            </p>
            <p>
              Pour moi, le développement est un art de la structure : je code pour concevoir des solutions fluides, 
              robustes et évolutives. Ma maîtrise du design me permet de penser l’expérience utilisateur globale pour 
              bâtir des applications aussi esthétiques qu'intuitives.
            </p>
          </div>

          {/* Séparateur Parcours Académique */}
          <div className="flex items-center gap-4 mb-8 w-full">
            <h3 
              className="text-xs font-medium tracking-widest text-slate-900 whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              PARCOURS ACADÉMIQUE
            </h3>
            <div className="flex-1 h-[1px] bg-gray-100" />
          </div>

          {/* Liste du parcours */}
          <div className="space-y-6 w-full text-left mb-12">
            {parcours.map((etape, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="px-3 min-w-[3.2rem] h-12 rounded-full bg-[#D35111]/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#D35111] group-hover:text-white">
                  <span 
                    className="text-[10px] font-bold text-[#D35111] font-mono group-hover:text-white transition-colors duration-300 uppercase tracking-tight text-center"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {etape.annee}
                  </span>
                </div>
                
                <div className="pt-1">
                  <p 
                    className="text-base md:text-lg font-medium text-slate-900 mb-1 antialiased group-hover:text-[#D35111] transition-colors duration-300"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {etape.titre}
                  </p>
                  <p 
                    className="text-xs font-medium tracking-wide text-slate-400 uppercase font-mono"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {etape.sous}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── BLOC DES CERTIFICATIONS TECHNIQUE ── */}
          <div className="w-full pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <h4 
                  className="text-sm font-medium text-slate-900"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Certifications & Validations
                </h4>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 font-mono tracking-tight uppercase">
                  <FiUser className="w-2.5 h-2.5" />
                  Calixte
                </span>
              </div>
              <p 
                className="text-xs text-slate-400"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Consulter mes accréditations techniques (Cisco, Future Intern, etc.)
              </p>
            </div>
            
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full bg-slate-900 text-white text-xs font-medium transition-all duration-300 hover:bg-[#D35111] hover:shadow-[0_10px_20px_rgba(211,81,17,0.15)] shrink-0 group/btn"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Voir les justificatifs
              <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
