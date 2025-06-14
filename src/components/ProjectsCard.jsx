// src/components/ProjectCard.js
import React from 'react';
import './ProjectsCard.scss';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div onClick={() => onClick(project)} className="project-card">
      <img className="project-card__image" src={`/img/${project.id}/${project.image}`} alt={`${project.title} 썸네일`} />
      <div className="project-card__content">
        <p className="project-card__category">{project.category}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
