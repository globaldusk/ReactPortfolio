import React from 'react';
import '../styles/Project.css';
import { projects } from '../constants/constants';

function ShowSource(props) {

  if (props.source == null) {
    return;
  }
  return (
    <div className='pts pbs'>
      <a className='external-link' href={props.source} target="_blank">View Source</a>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2 className='text-bone ptl'>Projects</h2>

      <div className='grid-container'>
        {projects.map((project, index) => {
          return (
            <a className='card hoverable' key={index} href={project.visit} target="_blank">

              <img className='thumbnail' src={project.image} alt={project.title}/>
              <h3 className='project-title' title>{project.title}</h3>
              {ShowSource(project)}
            </a>
          );
        })}

      </div>
    </div>
  );
}
  

export default Projects;
  