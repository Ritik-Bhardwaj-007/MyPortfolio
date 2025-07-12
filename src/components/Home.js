import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                HEY I AM <span>Ritik Bhardwaj</span>
            </div>
            <div className="des">
                I'm a Full Stack Developer specializing in the MERN stack, with experience building scalable web applications and efficient backend systems. Through hands-on projects and real-world internships, I've developed RESTful APIs, optimized API performance, and implemented end-to-end features that solve real user problems. I focus on writing clean, maintainable code and delivering production-ready solutions.
            </div>
            
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/ritikProfilePic.jpeg" alt="" />
                <div className="info">
                    <div>Full stack Developer</div>
                    <div>(Backend Focused)</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
