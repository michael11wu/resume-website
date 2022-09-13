import './App.css';
import Navbar from './components/navigation/Navbar';
import { Route, Routes} from 'react-router-dom';
import './pages/About.js';
import './pages/HomePage.js';
import './pages/Projects.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import HomePage from './pages/HomePage.js';

import transform from './images/transform.png';
import depot from './images/depot.jfif';
import umn from './images/umn.png';

import raytracer from './images/raytracer.jpg';

function App() {

  //Project info
  const projectGlance = [
    {
      img: raytracer,
      area: 'Graphics',
      name: 'Ray Tracer',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      img: umn,
      area: 'Graphicsfdfad',
      name: 'Ray Tradfacer',
      details: 'Lorem ipsum dolor sit amet, consecitation ullamco laboris nisi ut aliquip ex ea commodo consete velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui'
    },
    {
      img: depot,
      area: 'Graphicsfdfad',
      name: 'Ray Tradfacer',
      details: 'Lorem ipsum dolor sit amet, consecitation ullamco laboris nisi ut aliquip ex ea commodo consete velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui'
    }
  ]

  //Education Info
  const education = 
    {
      school: 'University of Minnesota Twin-Cities (May 2022)',
      degree: 'Bachelor of Science in Computer Science',
      gpa: '3.6/4.0',
      awards: "CSE Dean's List (2020,2021)",
      coursework: 'Software Engineering, Program Development, Data Structures and Algorithms, OS, UI/UX, Databases, Internet Programming'
    };

  //Navbar info
  const navItems = [
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
    }
  ];

  //Experience info
  const experiences = [
    {
      jobtitle: 'Database Reports Intern',
      imgUrl: transform,
      company: 'Minnesota Transform',
      time: 'Jan 2022 - Present',
      description: ["Write reports on a large dataset using MySQL Workbench to track and organize the relational database more efficiently.",
      "Maintain a website by debugging and editing the Ruby On Rails code to create a better user experience and a better user interface while adding useful functionality. Tested the new code on a development website in order to ensure it functioned as needed.",
      "Develop thorough and detailed documentation for running reports and setting up the work environment.",]
    },
    {
      jobtitle: 'Student Manager',
      imgUrl: umn,
      company: 'University of Minnesota Track and Field Teams',
      time: 'Dec 2019 - Jun 2022',
      description: ['Unloaded trucks then moved items to salesfloor.','Ensure the store is stocked and ready for business the next day.', 'Moved excess items to storage above items for later use.']
    },
    {
      jobtitle: 'Freight/Receiving',
      imgUrl: depot,
      company: 'Home Depot',
      time: 'Jun 2020 - Aug 2020',
      description: ['Unloaded trucks then moved items to salesfloor.','Ensure the store is stocked and ready for business the next day.', 'Moved excess items to storage above items for later use.']
    }
  ];

  return (
      <div className="App">
        <Navbar navItems={navItems}/>
        <div className='content'> 
          <Routes>
            <Route path='/' element={<HomePage experienceInfo = {experiences} educationInfo = {education} />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects projectGlanceInfo = {projectGlance}/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
