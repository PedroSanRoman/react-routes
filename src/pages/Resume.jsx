import { studies, experiences } from '../data/resume.js';

function Resume() {
  return (
    <div>
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiences.map(exp => (
          <li key={exp.id}>
            <strong>{exp.title}</strong> - {exp.company} ({exp.date})
          </li>
        ))}
      </ul>

      <h2>Formación Académica</h2>
      <ul>
        {studies.map(study => (
          <li key={study.id}>
            <strong>{study.title}</strong> - {study.institution} ({study.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
