import React from 'react';
import Profile from '../components/home/Profile';
import Experience from '../components/home/Experience';
import Education from '../components/home/Education';

import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';
import '../components/UI/Card.css'

const HomePage = () => {
  return (
    <div>
      <div className='intro'>
        <Profile/>
      </div>
      <br></br>
      <h5 className='header'>Education</h5>
      <div>
        <Education/>
      </div>
      <br></br>
      <h5 className='header'>Work Experience</h5>
      <div>
        <Experience/>
      </div>
      
    </div>
  )
}

export default HomePage;