// css
import '../../css/NavStyle.css'

export default function Navbar() {
  return (
    <>
      <div className='linkContainer'>  
          <a href="/" className='button'>Eric Nguyen</a>
          <a href="/about" className='button'>About me</a>
          <a href="/projects" className='button'>Projects</a>
          <a href="/contact" className='button'>Contact</a>
          <a href="/resume" className='button'>Resume</a>
      </div>
    </>
  )
}
