import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export default function Home() {
    
    let navigate = useNavigate();
    
    return(
        <>
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

            {/* how i get into software engineering */}
            <div>
                <center>
                <h1>How did I get into software engineering?</h1>
                </center>
            </div>
            {/* minecraft era */}
            <center><h2>Minecraft era</h2></center>
            <div className="brand">
            It's amazing how sometimes our passions can lead us down unexpected paths. For me, it was my love for playing Minecraft, at a very young age, that inadvertently sparked my interest in software engineering. I spent hours creating complex structures in the game using command blocks without even realizing that I was coding. It was through trial and error that I learned how to manipulate the game to create the desired effects, such as recreating popular mini-games and redstone contraptions. It wasn't until years later that I discovered that the skills I had developed while playing Minecraft were transferable to programming and software engineering. This realization was a game-changer for me, and it ultimately led you down the path to becoming a software engineer. My experiences just shows that you will never know where your passions might take you!
                <div>
                    <center>
                    <Button variant="primary" href='https://www.codewizardshq.com/how-minecraft-teaches-coding/'>
                        Learn more about Minecraft!
                    </Button>{' '}
                    </center>
                </div>
            </div>
            <center><h2>Post-Pandemic era</h2></center>
            <div className='brand'>
            Sometimes all it takes is a little bit of encouragement to discover our true potential. During the 2020 post-pandemic, it was my passion for technology that led me to teach myself how to code. I've spent countless hours poring over coding tutorials and practicing my skills. Along the way, I encountered my fair share of challenges, but my drive and determination to succeed kept me going. I once had a conversation with the valedictorian of my class who was taking AP computer science. I shared my passion for coding with him and he was amazed at my skills and progression. He even went so far as to say that I was more advanced than his classmates in the AP computer science class. His words of encouragement was just the motivation I needed to take my skills to the next level. From that day forward, I was even more determined to pursue a career in software engineering, and you never looked back.
            </div>
            {/* post pandemic era */}
        </>
    )
}


// <Link to={'/'}>Home</Link>
// <Link to={'/projects'}>Projects</Link>
// <Link to={'/about'}>About me</Link>
// <Link to={'/contact'}>Contact</Link>
// <Link to={'/resume'}>Resume</Link>