import React from 'react';
import '../styles/Style.css';
import { projects } from '../constants/constants';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>

      <div className='grid-container'>
        {projects.map((project, index) => {
          return (
            <div className='card' key={index}>

              <img src={project.image} alt={project.title}/>
              <h3 className='project-title' title>{project.title}</h3>

            </div>
          );
        })}

      </div>
    </div>
  );
}
  

export default Projects;
  