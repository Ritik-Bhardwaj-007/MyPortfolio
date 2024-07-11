import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'UniCom',
    des: 'Allows users to create channels and have conversations with other user in realtime, users can send photos and a status indicator that shows weather a user is online or offline',
    mission: 'Front-end Development, Authenticating users, Handling Media and Communication',
    language: 'HTML, CSS, Javascript, React JS, Firebase, Redux,...',
    url:'https://unicom-eab8.onrender.com/',
    images: '/project1.PNG'
  },
  {
    name: 'LetsBlog',
    des: 'Allows users to create Articles/Blog with different text formatting options and users can also upload image related to the Blog, users can also edit and delete their blogs post in any manner they want, users can see and read the Blogs of other users.',
    mission: 'Front-end Development, Handling CRUD operations, Authenticating users, Text formatting options, Handling media ',
    language: 'HTML, CSS, Javascript, React JS, AppWrite, Redux,...',
    url:'https://hey-letsblog.netlify.app/',
    images: '/project4.PNG'
  },
  {
    name: 'SocioPedia -a MERN Social Media Application',
    des: 'This application incorporates functionalities such as post uploading, liking other posts, and creating new connections with other users, similar to other social media applications.Crafted a fully responsive user interface React JS, ensuring seamless adaptability on diverse devices and resolutions.Developed the Backend using Node JS, Express JS and MongoDB for efficient server-side operations and data management.',
    mission: 'Back-end Development,Front-end Development, system analysis and design',
    language: 'HTML, CSS, Javascript, React JS, Nodejs, ExpressJs, MongoDB,...',
    url:'https://github.com/Ritik-Bhardwaj-007/SocialPedia',
    images: '/project2.jpeg'
  },
  {
    name: 'CRA- A complaint management App for IIITN students',
    des: 'Developed an complaint management application which is used to manage all the complaints related to hostel, It can manage data of 10000+ students living in college hostel.Created using Flutter and Google Firebase for back-end.',
    mission: 'Front-end Development,Mobile Development, system analysis and design',
    language: 'Flutter,Firebase,...',
    url:'https://github.com/Ritik-Bhardwaj-007/Cra_complaint_app_flutter/tree/main/cra_app-main',
    images: '/project3.jpg'
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
                <div className="des">{value.des}. <a href={value.url} target='_blank' rel="noreferrer"> Project Link </a></div>
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
