import { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/projects/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load projects.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      {loading && <p className="status-text">Loading projects...</p>}
      {error && <p className="status-text error">{error}</p>}
      {!loading && projects.length === 0 && (
        <p className="status-text">No projects available.</p>
      )}

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
              {project.tech_stack.split(",").map((tech, i) => (
                <span key={i}>{tech.trim()}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github_url} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {project.demo_url ? (
                <a href={project.demo_url} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : (
                <span className="demo-disabled">CLI Project</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;