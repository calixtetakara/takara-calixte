import React from 'react';

interface FondProps {
  /** Chemin public vers l’image (par défaut "/background.jpg") */
  imageUrl?: string;
  /** Contenu à afficher par‑dessus */
  children: React.ReactNode;
  /** Hauteur du conteneur (ex: "min-h-screen", "h-96", etc.) */
  height?: string;
  /** Opacité de l’overlay noir (0 à 1) pour améliorer la lisibilité */
  overlayOpacity?: number;
}

const Fond: React.FC<FondProps> = ({
  imageUrl = "/background.jpg",
  children,
  height = "min-h-screen",
  overlayOpacity = 0.3,
}) => {
  return (
    <div
      className={`${height} bg-cover bg-center bg-no-repeat relative`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay assombrissant */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>
      {/* Contenu au-dessus */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Fond;