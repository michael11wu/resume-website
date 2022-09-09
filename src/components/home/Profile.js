import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import Socials from './Socials';

const Profile = () => {
  return (
    <div className='info'>

      <div className='bio'>
        <img width={100} height={100} alt='profile picture' src = {require('../../images/profile.jfif')}></img>
        <h5>Michael Wu</h5>
        <hr></hr>
        <p>Computer Science</p>
        <Socials/>
      </div>
      
    </div>
  )
}

export default Profile;