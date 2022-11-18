import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectGlance from '../components/projects/ProjectGlance';

const Projects = (props) => {

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Project Work</h1>
        <hr/>
        <h6 style={{textAlign: 'center'}}>Click on each individual card for more details</h6>
        <ProjectGlance projectGlance = {props.projectGlanceInfo}/>
    </div>
  )
}

export default Projects;