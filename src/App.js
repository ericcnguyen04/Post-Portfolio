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
          path="/Post-Portfolio/"
          element={<Home />}
        />

        <Route 
          path="/Post-Portfolio/projects"
          element={<Projects />}
        />
        
        <Route 
          path="/Post-Portfolio/about"
          element={<About />}
        />

        <Route 
          path="/Post-Portfolio/contact"
          element={<Contact />}
        />

        <Route 
          path="/Post-Portfolio/resume"
          element={<Resume />}
        />

      </Routes>

    </Router>
  )
}

export default App;
