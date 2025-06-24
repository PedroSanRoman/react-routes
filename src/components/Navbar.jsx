import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/resume">Currículum</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
