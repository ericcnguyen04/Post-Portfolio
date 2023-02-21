import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar';
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

      </Routes>

    </Router>
  )
}

export default App;
