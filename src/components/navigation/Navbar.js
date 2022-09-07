
import React from "react";



const Navbar = () => {

  const navStyle = { //additional formatting for navbar
    paddingLeft: '10px',
    fontSize: 13
  }

  const MenuItems = [
    {
      title: 'Home',
      url: '/',
      cName: 'nav-link active'
    },
    {
      title: 'Projects',
      url: '/projects',
      cName: 'nav-link'
    },
    {
      title: 'About Me',
      url: '/about',
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
              <li key={index} className="nav-item"><a className={item.cName} href = {item.url}>{item.title}</a></li>
            )
          })}
        </ul>
      </nav>
    </div>
  );

}

export default Navbar