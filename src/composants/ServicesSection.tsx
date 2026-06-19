import { motion } from "framer-motion";
import React from "react";
import { FiLayers, FiSmartphone, FiGlobe, FiArrowRight } from "react-icons/fi";

interface ServiceProps {
  icone: React.ReactNode;
  titre: string;
  description: string;
  hoverColor: string;
  iconeColor: string;
  delay: number;
}

function ServiceCard({ icone, titre, description, hoverColor, iconeColor, delay }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-white border border-gray-100 rounded-[32px] p-8 min-h-[220px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-gray-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] group w-full"
    >
      <div className={`absolute -right-12 -bottom-12 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${hoverColor}`} />
      
      <div className="relative flex justify-between items-start">
        <div className={`transition-transform duration-300 text-2xl ${iconeColor}`}>
          {icone}
        </div>
        <FiArrowRight className="text-gray-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300 w-5 h-5" />
      </div>

      <div className="relative mt-6">
        <h3 
          className="text-xl font-bold text-slate-900 tracking-tight mb-2 antialiased"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {titre}
        </h3>
        <p 
          className="text-slate-500 text-xs md:text-sm leading-relaxed antialiased max-w-[90%]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection(): React.JSX.Element {
  return (
    // AJOUT DE L'ID CORRECT ICI POUR LA NAVBAR ET LE SCROLL SPY
    <section id="services" className="w-full bg-white py-28 px-6 md:px-12 relative border-t border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        
        {/* ── PARTIE GAUCHE (Titre centré avec votre message et la police Poppins) ── */}
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:sticky lg:top-28 lg:h-fit">
          <span 
            className="text-xs font-bold uppercase tracking-widest text-[#D35111] font-mono mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Expertises
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-2 antialiased"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Trois facettes.<br />
            <span className="text-[#D35111]">Un impact unique.</span>
          </h2>
          <div className="w-12 h-1 bg-slate-900 mt-6 rounded-full" />
        </div>

        {/* ── PARTIE DROITE (Grille avec la 3ème carte centrée) ── */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Graphic Design */}
          <ServiceCard
            icone={<FiLayers className="w-6 h-6 " />}
            titre="Graphic Design"
            description="Création d'identités visuelles fortes, de logos, d'affiches publicitaires, de flyers et de supports print sur-mesure."
            hoverColor="bg-emerald-500/10"
            iconeColor="text-emerald-500"
            delay={0.1}
          />

          {/* 2. Développement Mobile */}
          <ServiceCard
            icone={<FiSmartphone className="w-6 h-6" />}
            titre="Développement Mobile"
            description="Conception d'applications mobiles fluides et performantes, axées sur l'ergonomie native."
            hoverColor="bg-amber-500/10"
            iconeColor="text-amber-500"
            delay={0.2}
          />

          {/* 3. Développement Web */}
          <div className="md:col-span-1 md:col-start-1 md:translate-x-1/2 flex justify-center w-full">
            <ServiceCard
              icone={<FiGlobe className="w-6 h-6" />}
              titre="Développement Web"
              description="Ingénierie de plateformes sur-mesure, robustes et optimisées pour répondre à des architectures modernes."
              hoverColor="bg-indigo-500/10"
              iconeColor="text-indigo-500"
              delay={0.3}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
