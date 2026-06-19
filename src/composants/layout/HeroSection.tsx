import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface HeroSectionProps {
  imageSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc = "/calixte.png" }) => {
  // Configuration typée pour l'effet cascade (stagger) des textes à gauche
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai de 0.2s entre chaque élément enfant
      },
    },
  };

  // Configuration typée pour chaque ligne de texte et bouton
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <main className="hero-main">
      <div className="hero-inner">

        {/* ── GAUCHE : texte avec effet cascade ── */}
        <motion.div 
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Titres */}
          <div className="hero-titles">
            <motion.h2 className="hero-title" variants={itemVariants}>
              <span className="hero-underline">Développeur</span> Web & Mobile
            </motion.h2>
            <motion.h2 className="hero-title" variants={itemVariants}>
              <span className="hero-underline">Graphiste</span> Designer
            </motion.h2>
          </div>

          {/* Bio */}
          <motion.p className="hero-bio" variants={itemVariants}>
            Je conçois des interfaces modernes et des visuels impactants
            qui donnent vie à vos idées digitales.
          </motion.p>

          {/* Boutons reliés aux ancres de vos sections */}
          <motion.div className="hero-btns" variants={itemVariants}>
            <a
              href="#projets"
              className="btn-primary inline-flex items-center justify-center"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,215,0,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,215,0,0.1)')}
              style={{ textDecoration: 'none' }}
            >
              Voir mes projets <span className="btn-arrow" style={{ marginLeft: '8px' }}>→</span>
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,215,0,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              style={{ textDecoration: 'none' }}
            >
              Me contacter
            </a>
          </motion.div>
        </motion.div>

        {/* ── DROITE : image + nom (animation indépendante) ── */}
        <div className="hero-right">
          <motion.div 
            className="hero-img-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="hero-img-glow" />
            <img
              src={imageSrc}
              alt="TAKARA Calixte"
              className="hero-img"
            />
          </motion.div>

          <motion.h3 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            TAKARA Kondéabalo Calixte
            <svg
              className="hero-name-svg"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M0 6 Q50 0 100 4 Q150 8 200 3"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </motion.h3>
        </div>
      </div>

      {/* ── Flèche scroll en bas reliée à la première section ── */}
      <motion.a 
        href="#services"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ textDecoration: 'none', cursor: 'pointer' }}
      >
        <span className="hero-scroll-text">Scroll</span>
        <motion.div 
          className="hero-scroll-line"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.a>
    </main>
  );
};

export default HeroSection;
