
import React, {useState} from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";



const Navbar = (props) => {

  const navStyle = { //additional formatting for navbar
    paddingLeft: '10px',
    fontSize: 13
  }

  return (
    <div>
      <nav className="navbar navbar-dark">
        <span className="navbar-brand" style={navStyle}><img className="icon" width={20} height={20} alt='computers science' src = {require('../../images/navIcon.png')}></img><strong> Michael Wu</strong> / Computer Science Graduate</span>
        <ul className="nav">
          {props.navItems.map((item,index) => {
            return (
              <li key={index} className="nav-item"><NavLink className={item.cName} to = {item.url}>{item.title}</NavLink></li>
            )
          })}
        </ul>
      </nav>
    </div>
  );

}

export default Navbar