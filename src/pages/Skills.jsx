export default function Skills() {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-800 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-12">
          Mes compétences
        </h2>

        {/* Compétences principales */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
            Techniques maîtrisées
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base sm:text-lg font-medium">
            <li className="bg-white p-4 rounded-lg shadow text-center">HTML / CSS</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">JavaScript</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">React.js</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">Tailwind CSS</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">Laravel</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">Git / GitHub</li>
          </ul>
        </div>

        {/* Outils No-code */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
            Outils No-Code
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base sm:text-lg font-medium">
            <li className="bg-white p-4 rounded-lg shadow text-center">Bubble</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">Glide</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">Jotform</li>
          </ul>
        </div>

        {/* En cours d’apprentissage */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
            En cours d’apprentissage
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base sm:text-lg font-medium">
            <li className="bg-white p-4 rounded-lg shadow text-center">Docker</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">Sécurité Web (OWASP)</li>
            <li className="bg-white p-4 rounded-lg shadow text-center">CI/CD (GitHub Actions)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
