import React from 'react';
import Accueil from './composants/accueil';
import BandeauDefilant from './composants/BandeauDefilant';


// Importations corrigées et regroupées proprement par packs officiels
import { FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiPhotoshop } from 'react-icons/di';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiSpringboot, 
  SiExpress, 
  SiCanva, 
  SiGithub 
} from 'react-icons/si';

import ServicesSection from './composants/ServicesSection';
import ProjectsSection from './composants/ProjectsSection';  
import Artiste from './composants/AboutSection';
import ContactSection from './composants/contact';
import Footer from './composants/footer';

export default function App(): React.JSX.Element {
  // Liste des outils transmise au bandeau avec ajustement des couleurs pour le fond blanc
  const mesOutils = [
    // ─── COLLABORATION ───
    { nom: "GITHUB", icone: <SiGithub style={{ color: "#000000" }} /> }, // Modifié en noir pour être visible sur fond blanc
    { nom: "GIT", icone: <FaGitAlt style={{ color: "#F05032" }} /> },

    // ─── FRONT-END ───
    { nom: "REACT", icone: <FaReact style={{ color: "#61DAFB" }} /> },
    { nom: "TYPESCRIPT", icone: <SiTypescript style={{ color: "#3178C6" }} /> },
    { nom: "TAILWIND CSS", icone: <SiTailwindcss style={{ color: "#06B6D4" }} /> },

    // ─── BACK-END ───
    { nom: "SPRING BOOT", icone: <SiSpringboot style={{ color: "#6DB33F" }} /> },
    { nom: "NODE.JS", icone: <FaNodeJs style={{ color: "#339933" }} /> },
    { nom: "EXPRESS.JS", icone: <SiExpress style={{ color: "#000000" }} /> }, // Modifié en noir pour être visible sur fond blanc

    // ─── BASES DE DONNÉES ───
    { nom: "POSTGRESQL", icone: <SiPostgresql style={{ color: "#4169E1" }} /> },
    { nom: "MONGODB", icone: <SiMongodb style={{ color: "#47A248" }} /> },

    // ─── UTILS & DESIGN ───
    { nom: "PHOTOSHOP", icone: <DiPhotoshop style={{ color: "#31A8FF" }} /> },
    { nom: "CANVA", icone: <SiCanva style={{ color: "#00C4CC" }} /> },
  ];

  return (
    <div style={styles.appContainer}>
      {/* 1. Votre section d'accueil principale */}
      <Accueil />

      {/* 2. Le bandeau défilant blanc juste en dessous */}
      <BandeauDefilant outils={mesOutils} />
      <ServicesSection/>
      <ProjectsSection/>
      <Artiste/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  appContainer: {
    backgroundColor: '#0f172a', // Fond bleu-nuit sombre du site
    color: '#ffffff',
    minHeight: '100vh',
    overflowX: 'hidden', // Empêche tout bug de défilement horizontal
  }
};
