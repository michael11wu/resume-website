import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './pages/About.js';
import './pages/HomePage.js';
import './pages/Projects.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'> 
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
