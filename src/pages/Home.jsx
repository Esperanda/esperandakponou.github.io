import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white px-4 sm:px-6 lg:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Texte de gauche */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Bienvenue sur mon portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Salut, je suis <span className="text-blue-400">KPONOU Espéranda</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            Développeuse Web Full-Stack & passionnée de cybersécurité
          </h2>
          <p className="text-gray-300 sm:text-lg md:text-xl">
            J’aide les entreprises et porteurs de projets à bâtir des solutions web modernes,
            performantes et sécurisées. Allier code, design et sécurité est au cœur de ma mission.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full shadow transition"
            >
              Voir mes projets
            </Link>
            <a
              href="/pella%20kponou.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white hover:text-slate-900 font-medium py-3 px-6 rounded-full transition"
            >
              Télécharger mon CV
            </a>
            <Link
              to="/contact"
              className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-medium py-3 px-6 rounded-full transition"
            >
              Me contacter
            </Link>
          </div>
        </motion.div>

        {/* Image à droite */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img src="/image.jpg" alt="Illustraton de code" className="w-full max-w-md mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
