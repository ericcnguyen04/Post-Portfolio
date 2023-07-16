// import Card from 'react-bootstrap/Card';
import ProjectCards from './ProjectCards'

export default function Projects() {
    return(
        <div className='background'>
            <div name='Project'>
            <div className='project '>
                <ProjectCards 
                    deploy={'https://ericcnguyen04.github.io/BirdTime/'}
                    img={'/content/birdtime.png'}
                    title={"CrazyTime"}
                    subtitle={"Collaborative Full Stack"}
                    text={"My very first project consists of HTML, CSS, and JS. This project was inspired by a popular 2014 game known as, Flappy Bird"}
                    github={"https://github.com/ericcnguyen04/PROJECT1"}
                />
                <ProjectCards 
                    deploy={'https://redface.herokuapp.com/'}
                    img={'/content/redface.png'}
                    title={"Redface"}
                    subtitle={"Collaborative Full Stack"}
                    text={"Developed a full-stack application involving social aspects of alcoholic beverages with features of CRUD using node.js, postgreSQL, and express. I was responsible for the front and backend while implementing APIs."}
                    github={'https://github.com/ericcnguyen04/Project-2'}
                />
                <ProjectCards 
                    deploy={'https://stellular-horse-44ede4.netlify.app/items'}
                    img={'/content/mernmav.png'}
                    title={"Mern Maveriks"}
                    subtitle={"Collaborative Full Stack"}
                    text={"My first group project consists the usage of MERN stack. I was the git manager for the back-end of our development"}
                    github={'https://github.com/nancyd333/project-3-client'}
                />
                <ProjectCards 
                    deploy={'https://ericcnguyen04.github.io/password-generator/'}
                    img={'/content/mernmav.png'}
                    title={"Mern Maveriks"}
                    subtitle={"Collaborative Full Stack"}
                    text={"My first group project consists the usage of MERN stack. I was the git manager for the back-end of our development"}
                    github={'https://github.com/nancyd333/project-3-client'}
                />


                {/* <Card style={{ width: '20vw' }}>
                    <Card.Body>
                        <Card.Title><h1>More Coming soon!</h1></Card.Title>
                    </Card.Body>
                </Card> */}
            </div>
            </div>        
        </div>
    )
}