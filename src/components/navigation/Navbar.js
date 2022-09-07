
import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

  const navStyle = { //additional formatting for navbar
    paddingLeft: '10px',
    fontSize: 13
  }

  const MenuItems = [
    {
      title: 'Home',
      url: '/resume-website',
      cName: 'nav-link active'
    },
    {
      title: 'Projects',
      url: '/resume-website/projects',
      cName: 'nav-link'
    },
    {
      title: 'About Me',
      url: '/resume-website/about',
      cName: 'nav-link'
    },
  ]

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand" style={navStyle}><img width={20} height={20} src = {require('../../images/navIcon.png')}></img><strong> Michael Wu</strong> / Computer Science Graduate</span>
        <ul className="nav nav-pills">
          {MenuItems.map((item,index) => {
            return (
              <li key={index} className="nav-item"><Link className={item.cName} to = {item.url}>{item.title}</Link></li>
            )
          })}
        </ul>
      </nav>
    </div>
  );

}

export default Navbar