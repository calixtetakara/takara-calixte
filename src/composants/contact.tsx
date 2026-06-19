import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Utilisation stricte de react-icons/fi
import { FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

export default function Contact() {
  // State du formulaire
  const [form, setForm] = useState({
    nom: "",
    email: "",
    objet: "",
    message: ""
  });

  // State pour savoir si le formulaire a été envoyé
  const [envoye, setEnvoye] = useState(false);

  // Fonction d'envoi
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.nom && form.email && form.objet && form.message) {
      setEnvoye(true);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative w-full bg-white py-28 px-6 md:px-12 overflow-hidden border-t border-gray-50"
    >
      {/* ── TEXTE GÉANT EN ARRIÈRE-PLAN ── */}
      <div 
        className="absolute top-10 left-1/4 right-0 text-center text-[10vw] font-bold text-gray-100/80 select-none pointer-events-none whitespace-nowrap antialiased"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Discutons
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ===== COLONNE GAUCHE : COORDONNÉES & RESEAUX CONFIGURÉS ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag supérieur */}
            <p 
              className="text-xs font-bold uppercase tracking-widest text-[#D35111] font-mono mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact • Opportunités
            </p>

            {/* Titre principal */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-12 antialiased"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Un projet en tête ?<br />
              <span className="text-[#D35111]">Créons-le ensemble.</span>
            </h2>

            {/* BARRE DE SEPARATION */}
            <div className="flex items-center gap-4 mb-6">
              <h3 
                className="text-xs font-medium tracking-widest text-slate-900 whitespace-nowrap uppercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Disponibilités
              </h3>
              <div className="w-8 h-[1px] bg-[#D35111]" />
            </div>

            {/* Texte de contexte */}
            <p 
              className="text-slate-500 text-sm md:text-base leading-relaxed antialiased mb-10"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ouvert aux opportunités de stages, d'alternances ou de collaborations sur vos projets 
              de développement web, mobile et design graphique. Réponse garantie sous 24 heures.
            </p>

            {/* BARRE DE SEPARATION RESEAUX */}
            <div className="flex items-center gap-4 mb-6">
              <h3 
                className="text-xs font-medium tracking-widest text-slate-900 uppercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Réseaux Professionnels
              </h3>
              <div className="w-8 h-[1px] bg-[#D35111]" />
            </div>

            {/* Icônes des réseaux avec vos liens réels */}
            <div className="flex gap-4">
              {/* LinkedIn de Calixte */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-[#D35111] hover:border-[#D35111] transition-all duration-300 bg-transparent cursor-pointer"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>

              {/* GitHub officiel de Calixte */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-[#D35111] hover:border-[#D35111] transition-all duration-300 bg-transparent cursor-pointer"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ===== COLONNE DROITE : FORMULAIRE ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-slate-50/60 border border-gray-50 p-8 md:p-10 rounded-[24px]"
            >
              {envoye ? (
                <div className="text-center py-16">
                  <h3 
                    className="text-2xl font-bold text-[#D35111] mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Merci !
                  </h3>
                  <p 
                    className="text-sm text-slate-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Votre message a été envoyé avec succès.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  
                  {/* Ligne 1 — Nom + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="border-b border-gray-200 focus-within:border-[#D35111] transition-colors duration-300">
                      <input
                        type="text"
                        required
                        placeholder="Votre Nom"
                        value={form.nom}
                        onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        className="w-full bg-transparent border-none outline-none text-sm text-slate-800 py-3 placeholder:text-gray-400"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                    </div>

                    <div className="border-b border-gray-200 focus-within:border-[#D35111] transition-colors duration-300">
                      <input
                        type="email"
                        required
                        placeholder="Email de contact"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-none outline-none text-sm text-slate-800 py-3 placeholder:text-slate-400"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Champ Objet */}
                  <div className="border-b border-gray-200 focus-within:border-[#D35111] transition-colors duration-300">
                    <input
                      type="text"
                      required
                      placeholder="Objet de la demande"
                      value={form.objet}
                      onChange={(e) => setForm({ ...form, objet: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-sm text-slate-800 py-3 placeholder:text-gray-400"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>

                  {/* Champ Message */}
                  <div className="border-b border-gray-200 focus-within:border-[#D35111] transition-colors duration-300">
                    <textarea
                      required
                      placeholder="Votre Message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-none outline-none resize-none text-sm text-slate-800 py-3 placeholder:text-gray-400"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>

                  {/* Bouton Envoi Remplissage Eau */}
                  <div className="flex">
                    <button
                      type="submit"
                      className="relative inline-flex items-center gap-2 font-bold text-xs tracking-widest bg-slate-900 text-white px-10 h-12 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_10px_20px_rgba(211,81,17,0.2)] cursor-pointer border-none group"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-[#D35111] transition-transform duration-500 ease-out transform scale-y-0 origin-bottom group-hover:scale-y-100" />
                      
                      <span className="relative z-10 inline-flex items-center gap-2">
                        ENVOYER LE MESSAGE
                        <FiSend className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </button>
                  </div>

                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>  
  );
}