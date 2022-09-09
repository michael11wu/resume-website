
import React, {useState} from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";



const Navbar = () => {

  const navStyle = { //additional formatting for navbar
    paddingLeft: '10px',
    fontSize: 13
  }

  const [items, setItems] = useState([
    {
      title: 'Home',
      url: '/',
      cName: 'nav-link'
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
  ]);

  const navTabHandler = (event) => {
    //setItems(event.target.classList.toggle('active'));
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" style={navStyle}><img width={20} height={20} alt='computers science' src = {require('../../images/navIcon.png')}></img><strong> Michael Wu</strong> / Computer Science Graduate</span>
        <ul className="nav nav-pills">
          {items.map((item,index) => {
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