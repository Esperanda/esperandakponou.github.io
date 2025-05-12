export default function Projects() {
  return (
    <section className="min-h-screen bg-white text-slate-800 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-10">
          Mes projets
        </h2>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700">
          Voici quelques projets sur lesquels j’ai travaillé, intégrant développement web,
          outils no-code et gestion de données. Chaque réalisation reflète mon engagement
          pour des solutions accessibles, modernes et sécurisées.
        </p>

        {/* Liste des projets */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="RCC_app (No-code)"
            description="Application de vente en ligne conçue avec des outils no-code pour faciliter la gestion de produits et commandes."
            status="Réalisé"
          />
          <ProjectCard
            title="Bakalavr degree"
            description="Projet de soutenance : plateforme web pour guider les bacheliers vers les universités privées du Bénin."
            status="Réalisé"
          />
          <ProjectCard
            title="Forum 10 000 Codeurs – Adjarra"
            description="Responsable de la communication pour l’organisation du 3ᵉ Forum 10 000 Codeurs à Adjarra : coordination de la diffusion des informations clés, création de supports de communication, gestion des canaux numériques et interactions avec les participants.."
            status="En cours"
          />
          <ProjectCard
            title="Pella'House"
            description="Projet personnel en cours : site web de location et gestion immobilière, avec React.js et Laravel."
            status="En cours"
          />
          <ProjectCard
            title="Mon Portfolio"
            description="Application personnelle pour présenter mes compétences, projets et vision DevSecOps."
            status="En ligne"
          />
          <ProjectCard
            title="Chance'sfashion"
            description="Application conçue pour aider un styliste à gérer ses commandes, clients et modèles sur mesure. Réalisée avec une approche no-code et responsive."
            status="En cours"
          />
        </div>

        {/* Message de clôture */}
        <p className="text-center text-sm sm:text-base mt-16 text-gray-500">
          De nouveaux projets seront ajoutés prochainement, dont des travaux axés sur la sécurité web et DevSecOps.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, status }) {
  return (
    <div className="bg-slate-50 border border-gray-200 p-5 sm:p-6 rounded-xl shadow hover:shadow-md transition duration-300 ease-in-out h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4">{description}</p>
      </div>
      <span className="inline-block self-start text-xs sm:text-sm text-white bg-blue-500 px-3 py-1 rounded-full">
        {status}
      </span>
    </div>
  );
}
