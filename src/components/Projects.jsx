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
              <p className='card-info pbm'>{project.description}</p>
              <div className='tag-list mbm'>
                {project.tags.map((t, i) => {
                  return <div className="tag" key={i}>{t}</div>;
                })}
              </div>
              {ShowSource(project)}
            </a>
          );
        })}

      </div>
    </div>
  );
}
  

export default Projects;
  