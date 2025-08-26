import React from "react";
import "../css/Projects.css";
import projects from "../data/Projects.js"

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>EcoIndia Projects</h1>
        <p>Discover the green initiatives transforming India — from clean energy to biodiversity.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* Optional: Add <Link> or <button> here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
