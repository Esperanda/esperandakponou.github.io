
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold">Mon Portfolio</div>
      <div className="space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/skills">Compétences</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
