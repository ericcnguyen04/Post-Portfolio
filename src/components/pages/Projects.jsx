import Card from 'react-bootstrap/Card';

export default function Projects() {
    return(
        <div className='background'>
            <div>
            <div className='project '>
                <Card style={{ width: '20vw' }}>
                    <Card.Body>
                        <Card.Title><h1>Crazy Time</h1></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><h2>My first project</h2></Card.Subtitle>
                        <Card.Text>
                            My very first project consists of HTML, CSS, and JS. This project was inspired by a popular 2014 game known as, Flappy Bird
                        </Card.Text>
                        <Card.Link href="https://ericcnguyen04.github.io/PROJECT1/">Try it out!</Card.Link>
                        <Card.Link href="https://github.com/ericcnguyen04/PROJECT1">My Github</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20vw' }}>
                    <Card.Body>
                        <Card.Title><h1>Redface</h1></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><h2>Full Stack</h2></Card.Subtitle>
                        <Card.Text>
                            My first <strong>group</strong> project consists the usage of MERN stack . This project was inspired by a popular 2014 game known as, Flappy Bird
                        </Card.Text>
                        <Card.Link href="https://redface.herokuapp.com/">Try it out!</Card.Link>
                        <Card.Link href="https://github.com/ericcnguyen04/Project-2">My Github</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20vw' }}>
                    <Card.Body>
                        <Card.Title><h1>Mern Maveriks</h1></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><h2>Collaborative Full Stack</h2></Card.Subtitle>
                        <Card.Text>
                            My first <strong>group</strong> project consists the usage of MERN stack . This project was inspired by a popular 2014 game known as, Flappy Bird
                        </Card.Text>
                        <Card.Link href="https://endearing-hummingbird-7ff714.netlify.app/items">Try it out!</Card.Link>
                        <Card.Link href="https://github.com/ericcnguyen04/project-3-server">My backend!</Card.Link>
                        <Card.Link href="https://github.com/ericcnguyen04/project-3-client">My frontend!</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20vw' }}>
                    <Card.Body>
                        <Card.Title><h1>More Coming soon!</h1></Card.Title>
                    </Card.Body>
                </Card>
            </div>
            </div>        
        </div>
    )
}