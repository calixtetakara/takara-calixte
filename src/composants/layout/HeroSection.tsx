import React from 'react';

interface HeroSectionProps {
  imageSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc = "/calixte.png" }) => {
  return (
    <main className="hero-main">
      <div className="hero-inner">

        {/* ── GAUCHE : texte ── */}
        <div className="hero-left">

          {/* Titres */}
          <div className="hero-titles">
            <h2 className="hero-title">
              <span className="hero-underline">Développeur</span> Web & Mobile
            </h2>
            <h2 className="hero-title">
              <span className="hero-underline">Graphiste</span> Designer
            </h2>
          </div>

          {/* Bio */}
          <p className="hero-bio">
            Je conçois des interfaces modernes et des visuels impactants
            qui donnent vie à vos idées digitales.
          </p>

          {/* Boutons */}
          <div className="hero-btns">
            <button
              className="btn-primary"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,215,0,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,215,0,0.1)')}
            >
              Voir mes projets <span className="btn-arrow">→</span>
            </button>
            <button
              className="btn-secondary"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,215,0,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              Me contacter
            </button>
          </div>
        </div>

        {/* ── DROITE : image + nom ── */}
        <div className="hero-right">

          <div className="hero-img-wrap">
            <div className="hero-img-glow" />
            <img
              src={imageSrc}
              alt="TAKARA Calixte"
              className="hero-img"
            />
          </div>

          <h3 className="hero-name">
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
          </h3>
        </div>
      </div>

      {/* ── Flèche scroll en bas ── */}
      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </main>
  );
};

export default HeroSection;