import React from 'react';
import '../styles/Project.css';
import { projects } from '../constants/constants';

function ShowSource(props) {

  if (props.source == null) {
    return;
  }
  return (
    <div className='pts pbm'>
      <a className='external-link' href={props.source} target="_blank">View Source</a>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2 className='text-bone ptl pbl'>Projects</h2>

      <div className='grid-container'>
        {projects.map((project, index) => {
          return (
            <a className='card hoverable' key={index} href={project.visit} target="_blank">
              
              <h3 className='project-title pbs' title>{project.title}</h3>
              <img className='thumbnail pbs' src={project.image} alt={project.title}/>
              
              {ShowSource(project)}
            </a>
          );
        })}

      </div>
    </div>
  );
}
  

export default Projects;
  