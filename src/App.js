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
      
      <Home />
      
      <Projects />

        
      <About />

      <Contact />

      <Resume />

    </Router>
  )
}

export default App;
