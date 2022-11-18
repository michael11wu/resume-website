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
import battleboats from './images/battleboats.jpg';
import vote from './images/election.jpg';
import textrain from './images/textrain.jpg';
import trade from './images/trade.jpg';
import transit from './images/transit.jpg';

function App() {

  //Project info
  const projectGlance = [
    {
      img: raytracer,
      area: 'C/C++',
      name: 'Ray Tracer',
      details: 'The ray tracer was built to demonstrate my knowledge of computer graphics and the calculations necessary to produce a realistic image. It took in an input file which was parsed for details of all the objects in the scene. Rays were then shot out to the viewing window and check with intersection with objects. Phongs Illumination Model was used for calculating the RGB value of each object. Additional features included depth cueing and light attentation.'
    },
    {
      img: vote,
      area: 'Java',
      name: 'Voting System Simulator',
      details: 'My group went through the whole Software Development Life Cycle for this project. We wrote an SRS and SDD for this voting system. We then designed how we wanted to connect the classes within our system using UML diagrams. From there, we were able to start writing the code for the Voting System and making changes to our system as needed. After finish developing the system, we tested to make sure it functioned as needed. Maintenance was done to keep it running efficiently. We practiced Waterfall and Agile methodologies throughtout this project.'
    },
    {
      img: battleboats,
      area: 'Java',
      name: 'Battleboats Game',
      details: 'The Battleboats Game will randomly place boats in a grid so that they will not overlap or go out of bounds. There are many different sizes of boats and boards. The game will display a layout of the board to the user and the user will guess the coordinates of where the boats are. They have special abilities and the key is to use the least amount of guesses to sink all the ships.'
    },
    {
      img: textrain,
      area: 'Java',
      name: 'Text Rain',
      details: 'Text Rain was built on Processing, a software sketchbook. The program has a thershold for pixel values that will stop the text from falling and that threshold can be changed. The texts will not fall through pixels darker than the threshold and will act like they are sitting upon that object. Text collision is also active so as the letters are randomly falling, they will not overlap.'
    },
    {
      img: trade,
      area: 'Python',
      name: 'Trading Bot',
      details: 'The trading bot was built using the Alpaca Trading API and the alpaca-py python sdk for the API. The trading bot allows users to specify how long they want the bot to run and how long each moving minute average is. It will buy or sell a share of the stock of choosing based on the algorithm. After the algorithm is finished running, it will plot the moving average and closing prices over the course of the time run. '
    },
    {
      img: transit,
      area: 'Java',
      name: 'Visual Transit Simulator',
      details: 'The Visual Transit Simulator simulates buses and trains traveling on their specific lines throughout campus picking up passengers along the way. We utilized design patterns to implement new features to improve the functionality of the software. For example, we used a decorator pattern to decorate the vehicles with colors, and a factory pattern to decide what type of train or bus we would deploy. We also wrote unit tests to ensure our software was functioning as wanted. '
    },
  ]

  //Education Info
  const education = 
    {
      school: 'University of Minnesota Twin-Cities (May 2022)',
      degree: 'Bachelor of Science in Computer Science',
      gpa: '3.6/4.0',
      awards: "CSE Dean's List (2020, 2021)",
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
    // {
    //   title: 'About Me',
    //   url: '/about',
    //   cName: 'nav-link'
    // }
  ];

  //Experience info
  const experiences = [
    {
      jobtitle: 'Database Reports Intern',
      imgUrl: transform,
      company: 'Minnesota Transform',
      time: 'Jan 2022 - Present',
      description: ["Responsible for utilizing SQL and Ruby to upgrade functionality to Ojibwe People’s Dictionary website that enhances user experience resulting in better tools for the user to find what they need",
      "Documented and communicated my work and the steps needed for employees in the future to follow why and what I did in upgrading functionality",
      "Ran SQL reports on large datasets to retrieve important information that allowed my manager to understand where and what information was stored in the backend",]
    },
    {
      jobtitle: 'Student Manager',
      imgUrl: umn,
      company: 'University of Minnesota Track and Field Teams',
      time: 'Dec 2019 - Jun 2022',
      description: ['Recorded races and documented data for the coaches to better adjust the practices to fit the need of each student-athlete',
        'Built relationships with teammates and practiced team culture that resulted in a better work environment'
      ]
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
            {/* <Route path='/about' element={<About/>} /> */}
            <Route path='/projects' element={<Projects projectGlanceInfo = {projectGlance}/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
