import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react';

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

import './App.css'

function App() {

  const ref = useRef(null);
  
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return(
    <Router className='appMainPage'>
      {/* <Navbar /> */}
      
      <Home />
      
      <Projects />

        
      <About />


      <Resume />

      <Contact />
    </Router>
  )
}

export default App;
