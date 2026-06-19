import { motion } from "framer-motion";
import React from "react";

interface Outil {
  nom: string;
  icone: React.ReactNode;
}

interface BandeauDefilantProps {
  outils: Outil[];
}

export default function BandeauDefilant({ outils }: BandeauDefilantProps): React.JSX.Element {
  // Liste doublée pour assurer la continuité parfaite à -50%
  const outilsDupliques = [...outils, ...outils];

  return (
    /* bg-white applique le fond blanc, border-black/10 crée une fine bordure sombre */
    <div className=" w-full overflow-hidden whitespace-nowrap bg-white py-4  border-y border-black/10">
      <motion.div
        className="flex flex-row w-max gap-16 items-center"
        animate={{ x: [0, "-50%"] }}
        transition={{
          ease: "linear",
          duration: 45,
          repeat: Infinity,
        }}
      >
        {outilsDupliques.map((outil, index) => (
          <div key={index} className="flex flex-row items-center gap-4 shrink-0 select-none">
            <div className="text-3xl flex items-center justify-center">
              {outil.icone}
            </div>
            {/* text-black passe l'écriture du nom de l'outil en noir intense */}
            <span className="text-xl font-medium tracking-wider text-black font-sans antialiased" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {outil.nom}
            </span>
            {/* Le point séparateur passe en noir semi-transparent (bg-black/20) */}
            <div className="w-1.5 h-1.5 rounded-full bg-black/20 ml-12" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
