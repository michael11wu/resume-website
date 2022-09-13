import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectGlance from '../components/projects/ProjectGlance';

const Projects = (props) => {

  return (
    <div>
        <h1>Project Work!</h1>
        <h6>Click on each individual card for more details</h6>
        <ProjectGlance projectGlance = {props.projectGlanceInfo}/>
    </div>
  )
}

export default Projects;