// src/pages/Accueil.tsx
import React from 'react';
import Fond from './fond';
import Navbar from './layout/Navbar';

import HeroSection from '../composants/layout/HeroSection';
// autres sections si nécessaire

const Accueil: React.FC = () => {
  return (
    <Fond imageUrl="/background.jpg">
      <div className="flex flex-col min-h-screen ">
        <Navbar />
         <HeroSection />
         
        {/* Le reste de votre contenu (HeroSection, etc.) */}

      </div>
    </Fond>
  );
};

export default Accueil;