export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Salut, je suis <span className="text-blue-400">KPONOU Espéranda</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl">
          Développeuse Web Full-Stack & passionnée de cybersécurité
        </h2>
        <p className="text-gray-300 sm:text-lg md:text-xl">
          Je conçois des interfaces modernes et performantes tout en cultivant
          une expertise en sécurité informatique. Mon objectif ? Allier design,
          performance et sécurité pour un web meilleur.
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="/pella kponou.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-slate-900 font-medium py-3 px-8 rounded-full transition"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  )
}
