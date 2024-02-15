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
                Enthusiastically navigating the digital realm with a passion for crafting seamless, innovative solutions, I am a versatile FULL STACK SOFTWARE DEVELOPER proficient in the MERN stack and FLUTTER. With a rich tapestry of hands-on experience woven through impactful projects and successful internships, I bring a dynamic blend of technical prowess and creative PROBLEM-SOLVING to the forefront of every endeavor.
            </div>
            
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Full stack Developer(MERN)</div>
                    <div>Flutter</div>
                    <div>Frontend(Reactjs)</div>
                    <div>Backend</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
