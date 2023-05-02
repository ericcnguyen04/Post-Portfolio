import Button from 'react-bootstrap/Button';

export default function About() {

    return(
        <div className='backgroundAbout'>  
            <div>
                <center>
                <h1 id='subtitles'>Background</h1>
                </center>
            </div>
            <div className='brand'>
            I'm proud to say that I come from a background that values hard work and perseverance. As a first-generation Vietnamese, I was raised to appreciate my cultural roots while also embracing the opportunities that come with living in a Western society. Through my experiences, I've become increasingly aware of the importance of being adaptable and flexible in order to achieve success. Taking a nontraditional path to education, I attended a coding bootcamp, which allowed me to pursue my passion for technology in a fast-paced and dynamic learning environment. Despite the challenges that came with this path, my ambition and drive to succeed have never faltered. Through my hard work and dedication, I've been able to carve out a successful career in tech, which I believe is a testament to the values instilled in me by my upbringing.            </div>
            {/* how i get into software engineering */}
            <div>
                <center>
                <h1 id='subtitles'>How did I get into software engineering?</h1>
                </center>
            </div>

            <div>
                {/* minecraft era */}
                <div>
                    <center><h2>Minecraft era</h2></center>
                    <div className="brand">
                    It's amazing how sometimes our passions can lead us down unexpected paths. For me, it was my love for playing Minecraft, at a very young age, that inadvertently sparked my interest in software engineering. I spent hours creating complex structures in the game using command blocks without even realizing that I was coding. It was through trial and error that I learned how to manipulate the game to create the desired effects, such as recreating popular mini-games and redstone contraptions. It wasn't until years later that I discovered that the skills I had developed while playing Minecraft were transferable to programming and software engineering. This realization was a game-changer for me, and it ultimately led you down the path to becoming a software engineer. My experiences just shows that you will never know where your passions might take you!
                        <div>
                            <center>
                            <Button variant="light" href='https://www.codewizardshq.com/how-minecraft-teaches-coding/'>
                                Learn more about Minecraft!
                            </Button>{' '}
                            </center>
                        </div>
                    </div>
                </div>
                {/* post pandemic era */}
                <div>
                    <center><h2>Post-Pandemic era</h2></center>
                    <div className='brand'>
                    Sometimes all it takes is a little bit of encouragement to discover our true potential. During the 2020 post-pandemic, it was my passion for technology that led me to teach myself how to code. I've spent countless hours poring over coding tutorials and practicing my skills. Along the way, I encountered my fair share of challenges, but my drive and determination to succeed kept me going. I once had a conversation with the valedictorian of my class who was taking AP computer science. I shared my passion for coding with him and he was amazed at my skills and progression. He even went so far as to say that I was more advanced than his classmates in the AP computer science class. His words of encouragement was just the motivation I needed to take my skills to the next level. From that day forward, I was even more determined to pursue a career in software engineering, and you never looked back.
                    </div>
                </div>
            </div>


            <center><h1 id='subtitles'>My Character</h1></center>
            <div className="about1">
                <video src='/content/video.mp4' width="324" height="576" className="vid" controls></video>
                    
                {/* my swim era */}
                <div className="swimDscpt">
                    During my time as captain of my swim team, I learned a lot about what it takes to be a strong and effective leader. I was responsible for motivating my team, setting goals, and making decisions that would ultimately impact our performance. This required me to be a good communicator and a good listener, able to understand the needs and concerns of my team members while also keeping our larger goals in mind. I learned how to be adaptable and flexible, to think on my feet and respond quickly to changing situations. Most importantly, I learned that leadership is about more than just giving orders - it's about building relationships, fostering trust, and creating a sense of unity and purpose within a team. These skills have stayed with me throughout my life, and I know they will continue to serve me well as I pursue my goals and dreams.
                </div>
            </div>
   
        </div>
    )
}