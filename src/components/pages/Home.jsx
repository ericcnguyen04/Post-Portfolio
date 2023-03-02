import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export default function Home() {
    
    let navigate = useNavigate();
    
    return(
        <div>
            <div>
                <center><h1>Eric Nguyen</h1></center>
            </div>

            <div className="brand">
                {/* brand statement */}
                I am an aspiring full-stack developer with visions of passion and ambition! As I grew up, I always loved witnessing the end product of my projects, which included my efforts with front and back end, and I felt nothing but joy. I will work with my peers and create a positive environment by being compatible and ensuring that there is no confusion! Previously, as an insurance agent, I have habits of taking the initiative and making sure that we are making progress to promote time management. Most importantly, my mindset is always on a growth mindset and open to critique while providing feedback.

                {/* redirect stating 'learn more about me */}
                <div>
                    <center>
                    <Button variant="primary" onClick={() => navigate('/about')}>
                        Learn more about me!</Button>{' '}
                    </center>
                </div>
            </div>
        </div>
    )
}


// <Link to={'/'}>Home</Link>
// <Link to={'/projects'}>Projects</Link>
// <Link to={'/about'}>About me</Link>
// <Link to={'/contact'}>Contact</Link>
// <Link to={'/resume'}>Resume</Link>