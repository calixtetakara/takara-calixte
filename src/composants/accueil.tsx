// src/pages/Accueil.tsx
import React from 'react';
import Fond from './fond';
import Navbar from './layout/Navbar';

import HeroSection from '../composants/layout/HeroSection';
// autres sections si nécessaire

const Accueil: React.FC = () => {
  return (
    
      <div className="flex flex-col min-h-screen ">
        <Fond imageUrl="/background.jpg">
           <Navbar />
            <HeroSection />
         </Fond>
       
        {/* Le reste de votre contenu (HeroSection, etc.) */}

      </div>
    
  );
};

export default Accueil;