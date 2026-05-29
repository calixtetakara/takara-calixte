// src/pages/Accueil.tsx
import React from 'react';
import Fond from './fond';
import Navbar from './layout/Navbar';
// autres sections si nécessaire

const Accueil: React.FC = () => {
  return (
    <Fond imageUrl="/background.jpg">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Le reste de votre contenu (HeroSection, etc.) */}
        <main className="flex-1 flex items-center justify-center">
          <div className="text-white text-center">
            <h2>Contenu principal</h2>
          </div>
        </main>
      </div>
    </Fond>
  );
};

export default Accueil;