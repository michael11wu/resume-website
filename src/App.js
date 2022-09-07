import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'> 
          {/* <Routes>
            <Route path='/'>
            </Route>
          </Routes> */}
          
        </div>
      </div>
    </Router>
  );
}

export default App;
