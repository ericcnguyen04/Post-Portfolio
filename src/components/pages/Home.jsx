import HomeContent from './HomeContent'
import '../../App.css'

import {useEffect, useRef, useState} from 'react';



export default function Home() {

    const ref = useRef(null);
  
  
    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return(
        <div>
            
            <div className="context">
                <div>
                    <h1>Eric Nguyen</h1>
                </div>
                <div className='contextBio'>
                    <h3>an aspiring full-stack developer with promising contributions to create an impact</h3>
                    {/* <h3>an aspiring full-stack developer with visions of passion and ambition! As I grew up, I always loved witnessing the end product of my projects, which included my efforts with front and back end, and I felt nothing but joy. I will work with my peers and create a positive environment by being compatible and ensuring that there is no confusion! Previously, as an insurance agent, I have habits of taking the initiative and making sure that we are making progress to promote time management. Most importantly, my mindset is always on a growth mindset and open to critique while providing feedback.</h3> */}
                </div>
                <div className='navContainer'>
                    <button>boom</button>
                    <button>boom</button>
                    <button>boom</button>
                </div>
            </div>


            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    )
}

