import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/about'}>About me</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/resume'}>Resume</Link>
        </div>
    )
}