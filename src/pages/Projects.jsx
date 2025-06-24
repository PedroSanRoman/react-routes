import projects from '../data/projects';

function Projects() {
  return (
    <div>
      <h2>Mis Proyectos</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} width="200" />
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
