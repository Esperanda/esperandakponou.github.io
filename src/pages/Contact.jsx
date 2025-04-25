export default function Contact() {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-800 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">
          Me contacter
        </h2>

        <p className="text-base sm:text-lg text-center mb-8">
          N'hésitez pas à me contacter pour toute collaboration, projet freelance, ou opportunité liée au développement web, no-code ou à la cybersécurité.
        </p>

        {/* Coordonnées */}
        <div className="space-y-5 mb-12">
          <ContactItem
            label="Email"
            value="esperandadorego@gmail.com"
            icon="📧"
            link="mailto:esperandadorego@gmail.com"
          />
          <ContactItem
            label="Téléphone"
            value="+229 01 42 82 62 99"
            icon="📞"
            link="tel:+2290142826299"
          />
          <ContactItem
            label="GitHub"
            value="github.com/esperandakponou"
            icon="💻"
            link="https://github.com/Esperanda"
          />
          <ContactItem
            label="LinkedIn"
            value="linkedin.com/in/esperandakponou"
            icon="🔗"
            link="https://linkedin.com/in/esperandakponou"
          />
          <ContactItem
            label="Télécharger mon CV"
            value="pellakponou.pdf"
            icon="📄"
            link="/pella%20kponou.pdf"
          />
        </div>

        {/* Formulaire de contact */}
        <form
          action="https://formspree.io/f/xyzwyrny" // Remplacer par ton propre lien
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Votre message"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-10">
          Je vous répondrai dans les plus brefs délais.
        </p>
      </div>
    </section>
  );
}

function ContactItem({ label, value, icon, link }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm sm:text-base">
      <div className="flex items-center gap-2">
        <span className="text-lg sm:text-xl">{icon}</span>
        <span className="font-semibold">{label} :</span>
      </div>
      <a
        href={link}
        className="text-blue-600 hover:underline break-words sm:ml-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {value}
      </a>
    </div>
  );
}
