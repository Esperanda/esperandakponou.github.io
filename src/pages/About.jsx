export default function About() {
  return (
    <section className="min-h-screen bg-white text-slate-800 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <img
            src="/ma%20photo.jpg"
            alt="Espéranda Kponou"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-blue-500"
          />
        </div>

        {/* Texte */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">À propos de moi</h2>

          <p>
            Je suis <strong>Espéranda Kponou</strong>, développeuse web et no-code, passionnée
            par la technologie et l’innovation. Mon objectif est clair : devenir
            une experte <strong>DevSecOps</strong> pour allier développement, automatisation et sécurité.
          </p>

          <p>
            Mon parcours m’a permis d’acquérir des compétences solides en
            développement front-end, en conception d’interfaces modernes et en outils no-code.
            Je suis aussi animée par la volonté de créer des solutions accessibles, fiables
            et sécurisées.
          </p>

          <p>
            Actuellement, je participe à des projets tels que <strong>10 000 Codeurs</strong>, où je développe
            mes compétences tout en contribuant à des initiatives à impact.
          </p>

          <a
           href="/pella%20kponou.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow transition"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>

      {/* Compétences */}
      <div className="mt-20 max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold text-center text-blue-600 mb-6">
          Compétences principales
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-base sm:text-lg font-medium text-slate-700">
          <li className="bg-gray-100 rounded-xl py-3 shadow">React.js</li>
          <li className="bg-gray-100 rounded-xl py-3 shadow">Tailwind CSS</li>
          <li className="bg-gray-100 rounded-xl py-3 shadow">No-Code (Bubble, Glide)</li>
          <li className="bg-gray-100 rounded-xl py-3 shadow">Sécurité web</li>
          <li className="bg-gray-100 rounded-xl py-3 shadow">Git & GitHub</li>
          <li className="bg-gray-100 rounded-xl py-3 shadow">Méthodes agiles</li>
        </ul>
      </div>
    </section>
  );
}
