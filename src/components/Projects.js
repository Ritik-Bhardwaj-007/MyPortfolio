import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'UniCom',
    des: 'Allows users to create channels and have conversations with other user in realtime, users can send photos and a status indicator that shows weather a user is online or offline',
    mission: 'Front-end Developer, Handling Media and Communication',
    language: 'HTML5, CSS3, React JS, Firebase, Redux,...',
    url:'https://uni-com.vercel.app',
    images: '/project1.PNG'
  },
  {
    name: 'Project Real-time chating in website',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3, React JS, SockerIO,...',
    url:'',
    images: '/project2.PNG'
  },
  {
    name: 'Project Real-time chating in website',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3, React JS, SockerIO,...',
    url:'',
    images: '/project2.PNG'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Some of My Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       Discover my creative journey through diverse projects. Each one tells a story of passion, innovation, and commitment to excellence. Let these projects speak for the impactful outcomes we can achieve together.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}. <a href={value.url}> Project Link </a></div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
