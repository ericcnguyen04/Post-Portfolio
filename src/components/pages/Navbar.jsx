import {Link} from 'react-scroll'


// css
import '../../css/NavStyle.css'

export default function Navbar() {
  return (
    <div>
      <ul>  
          <li href="/projects">
            <Link to='Projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li href="/about">About me</li>
          <li href="/contact">Contact</li>
          <li href="/resume">Resume</li>
      </ul>
    </div>
  )
}
