import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <p>Soy un desarrollador web apasionado por crear soluciones creativas.</p>
      <p>
        Mira mis <Link to="/projects">proyectos</Link> o mi <Link to="/resume">currículum</Link>.
      </p>
    </div>
  );
}

export default Home;
