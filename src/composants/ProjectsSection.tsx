import { motion } from "framer-motion";
import React from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

// Structure TypeScript stricte pour un projet
interface Projet {
  id: number;
  titre: string;
  description: string;
  image: string;
  lienGithub: string;
  lienLive?: string;
}

interface ProjectCardProps {
  projet: Projet;
  index: number;
}

function ProjectCard({ projet, index }: ProjectCardProps) {
  return (
    <motion.div
      // Déclenchement de l'animation d'apparition uniquement au scroll
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1], // Transition fluide haut de gamme
        delay: index * 0.08 // Effet de cascade très léger
      }}
      className="flex flex-col justify-between h-full group"
    >
      <div>
        {/* Zone Image avec bordure fine grise et effet Zoom */}
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
          <img
            src={projet.image}
            alt={projet.titre}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        {/* Textes - Titre en gras et couleur sombre élégante */}
        <div className="pt-5 pb-3">
          <h3
            className="text-xl font-bold text-slate-950 tracking-tight mb-2 antialiased"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {projet.titre}
          </h3>
          <p
            className="text-gray-500 text-xs md:text-sm leading-relaxed antialiased font-light max-w-[95%]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {projet.description}
          </p>
        </div>
      </div>

      {/* ── ZONE ACTIONS AUX EXTRÉMITÉS DE LA CARTE ── */}
      <div 
        className="flex items-center justify-between pt-4 border-t border-gray-50 w-full"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Gauche : GitHub (Survol Noir Ardoise pur) */}
        <motion.a
          whileHover={{ y: -1 }}
          href={projet.lienGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-semibold tracking-wide border-b border-transparent pb-0.5 hover:text-slate-950 hover:border-slate-950 transition-colors duration-300"
        >
          <FiGithub className="text-xs" />
          <span>Repository GitHub</span>
        </motion.a>

        {/* Droite : Voir le projet en direct (Survol Orange Brûlé de votre marque) */}
        {projet.lienLive && (
          <motion.a
            whileHover={{ y: -1 }}
            href={projet.lienLive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-semibold tracking-wide border-b border-transparent pb-0.5 hover:text-[#D35111] hover:border-[#D35111] transition-colors duration-300"
          >
            <span>Voir le projet</span>
            <FiExternalLink className="text-xs" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection(): React.JSX.Element {
  // Liste ordonnée de vos 6 projets principaux
  const mesProjets: Projet[] = [
    {
      id: 1,
      titre: "Application Mobile de Vente",
      description: "Conception complète d'une interface d'achat fluide et optimisée avec gestion du panier et de l'authentification native.",
      image: "/cabinet.jpg",
      lienGithub: "https://github.com...",
      lienLive: "https://mon-app-demo.com",
    },
    {
      id: 2,
      titre: "Affiches Événementielles - Festival",
      description: "Série d'affiches publicitaires et de flyers modernes imprimés pour un festival culturel international.",
      image: "/Service copie.jpg",
      lienGithub: "https://github.com...",
      lienLive: "https://behance.net...",
    },
    {
      id: 3,
      titre: "Plateforme Web E-Commerce",
      description: "Architecture web moderne et responsive, connectée à des APIs sécurisées pour une gestion fluide des produits.",
      image: "/projet-web.jpg",
      lienGithub: "https://github.com...",
      lienLive: "https://mon-site-ecommerce.com",
    },
    {
      id: 4,
      titre: "Identité Visuelle & Logos Corporatifs",
      description: "Création complète de logos et déclinaison de chartes graphiques pour des entreprises du secteur technologique.",
      image: "/projet-design2.jpg",
      lienGithub: "https://github.com...",
      lienLive: "https://behance.net...",
    },
    {
      id: 5,
      titre: "Projet Web 3 - Portfolio",
      description: "Intégration d'un site vitrine haut de gamme avec animations complexes pour un studio de création digital.",
      image: "/projet-vitrine.jpg",
      lienGithub: "https://github.com...",
      lienLive: "https://mon-portfolio.com",
    },
    {
      id: 6,
      titre: "Flyers & Brochures Corporatives",
      description: "Mise en page et création graphique de livrets commerciaux imprimés pour une agence événementielle.",
      image: "/projet-flyer.jpg",
      lienGithub: "https://github.com...",
      lienLive: "https://behance.net...",
    },
  ];

  return (
    // AJOUT DE L'ID PROJETS POUR LA NAVIGATION DEPUIS LA NAVBAR
    <section id="projets" className="w-full bg-white py-28 px-6 md:px-12 relative border-t border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* ── EN-TÊTE DE LA SECTION ANIMÉ AU SCROLL ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mb-20 flex flex-col items-center"
        >
          <span
            className="text-[10px] font-bold uppercase tracking-widest text-[#D35111] font-mono"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Portfolio
          </span>
          {/* Titre configuré en font-bold */}
          <h2
            className="text-3xl font-bold text-[#5A6D7E] tracking-tight mt-2 antialiased"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Sélection de projets récents.
          </h2>
          <div className="w-8 h-[1px] bg-gray-200 mt-5" />
        </motion.div>

        {/* ── GRILLE DE 6 CARTES SANS BOUTON DE FILTRAGE ── */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 w-full">
            {mesProjets.map((projet, index) => (
              <ProjectCard key={projet.id} projet={projet} index={index} />
            ))}
          </div>
        </div>

        {/* ── REDIRECTIONS DE BAS DE PAGE FINILISÉES ET REPAREES ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 border-t border-gray-100 pt-12 flex flex-col items-center text-center w-full max-w-2xl"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="text-xs text-gray-400 font-medium tracking-wide mb-6">
            Découvrez l'ensemble de mes travaux sur mes espaces professionnels
          </span>
          
          <div className="flex gap-6 flex-wrap justify-center">
            {/* Bouton Graphisme (Behance / Drive) */}
            <a
              href="https://behance.net" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-slate-950 px-6 py-3 rounded-full text-xs font-bold text-slate-900 transition-all duration-300 shadow-sm group"
            >
              <span>Plus de designs (Print/Flyers)</span>
              <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* Bouton Code (GitHub) */}
            <a
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 border border-transparent hover:bg-[#D35111] px-6 py-3 rounded-full text-xs font-bold text-white transition-all duration-300 shadow-md group"
            >
              <span>Voir tous mes repositories</span>
              <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
