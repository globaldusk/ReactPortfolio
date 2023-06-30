import React from 'react';
import '../styles/Project.css';
import { projects } from '../constants/constants';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>

      <div className='grid-container'>
        {projects.map((project, index) => {
          return (
            <a className='card hoverable' key={index} href={project.visit} target="_blank">

              <img className='thumbnail' src={project.image} alt={project.title}/>
              <h3 className='project-title pbs' title>{project.title}</h3>
              <div>
                <a className='external-link pbs' target="_blank">Source</a>
              </div>
            </a>
          );
        })}

      </div>
    </div>
  );
}
  

export default Projects;
  