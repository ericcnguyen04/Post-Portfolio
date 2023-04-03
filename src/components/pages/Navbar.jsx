// css
import '../../css/NavStyle.css'

export default function Navbar() {
  return (
    <>
      <div className='linkContainer'>  
          <a href="/about" className='links'>About me</a>
          <a href="/projects" className='links'>Projects</a>
          <a href="/contact" className='links'>Contact</a>
          <a href="/resume" className='links'>Resume</a>
      </div>
    </>
  )
}
