import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// css
import '../../css/NavStyle.css'

export default function ColorSchemesExample() {
  return (
    <>
      <div className='linkContainer'>  
          <a href="/" className='links'>Eric Nguyen</a>
          <a href="/about" className='links'>About me</a>
          <a href="/projects" className='links'>Projects</a>
          <a href="/contact" className='links'>Contact</a>
          <a href="/resume" className='links'>Resume</a>
      </div>
    </>
  )
}
