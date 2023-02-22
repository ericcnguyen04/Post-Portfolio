import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

import './App.css'

function App() {
  return(
    <Router>
      <Navbar />
      
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />

        <Route 
          path="/projects"
          element={<Projects />}
        />
        
        <Route 
          path="/about"
          element={<About />}
        />

        <Route 
          path="/contact"
          element={<Contact />}
        />

        <Route 
          path="/resume"
          element={<Resume />}
        />

      </Routes>

    </Router>
  )
}

export default App;
