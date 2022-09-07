import './App.css';
import Navbar from './components/navigation/Navbar';
import { Route, Routes} from 'react-router-dom';
import './pages/About.js';
import './pages/HomePage.js';
import './pages/Projects.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import HomePage from './pages/HomePage.js';

function App() {
  return (
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
  );
}

export default App;
