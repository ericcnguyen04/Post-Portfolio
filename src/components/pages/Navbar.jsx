import {Link} from 'react-scroll'


// css
import '../../css/NavStyle.css'

export default function Navbar() {
  return (
    <div>
      <ul className='hidden sm:flex text-color'>
                <li className='hover:underline underline-offset-4'>
                    <Link to="home" smooth={true} duration={500}>
                        home
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="about" smooth={true} duration={500}>
                        about
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="skills" smooth={true} duration={500}>
                        skills
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="work" smooth={true} duration={500}>
                        work
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="contact" smooth={true} duration={500}>
                        contact
                    </Link>
                </li>
            </ul>
    </div>
  )
}
{/* <ul>  
          <li className='hover:underline underline-offset-4'>
            <Link to='Projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li href="/about">About me</li>
          <li href="/contact">Contact</li>
          <li href="/resume">Resume</li>
      </ul> */}