import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Internships() {
const [listInternship] = useState([
  {
    name: 'SDE Intern',
    des: 'As a Software Developer Intern, I specialized in backend development using Node.js, Express, and MongoDB. Notably, I developed multiple APIs for crucial features, showcasing my ability to create robust solutions. Additionally, I leveraged Flutter to build intuitive features on the frontend, demonstrating my versatility in contributing to both backend and frontend aspects of software development.',
    organisation: 'Stick',
    techStack: 'Flutter,Reactjs,Nodejs,Expressjs,MongoDB,Postman,...',
    url:'https://drive.google.com/file/d/18z6YXNhs2trSmLwGATFSRTGE1tFL7PqQ/view?usp=sharing',
    images: '/Stick-Certificate.jpeg'
  },
  {
    name: 'Software Application Developer Intern - VNIT',
    des: "I developed and launched two mobile apps for Nagpur's veterinary community. One, built with Flutter and Dart, featured offline functionality using TensorFlow Lite. The other, with its backend on Azure, offered real-time updates. Tailored to meet the distinct needs of veterinary professionals, students, cattle farmers, and gaushalas, these apps underscore my commitment to delivering specific and impactful solutions for the local veterinary community.",
    organisation: 'Visvesvaraya National Institute of Technology Nagpur',
    techStack: 'Flutter,Machine Learning,Flask,Azure,...',
    url:'https://drive.google.com/file/d/1Xv-920II9nJsQffDHCw4ki3EzER8BCai/view?usp=sharing',
    images: '/VNIT-LoR.jpeg'
  },
]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Yes, I Have Some Experience Too! 
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       Throughout my professional journey, I've made impactful contributions to diverse organizations, specializing in backend and frontend development, along with mobile app expertise. I've successfully crafted robust features, optimized system performance, and deployed innovative solutions. These experiences have honed my technical skills, demonstrating adaptability and a commitment to delivering effective solutions in the dynamic realm of software development.
       </div>
       <div className="list">
        {
          listInternship.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des} <a href={value.url} target='_blank' rel="noreferrer"> Recognisition of Intership from Oraganisation</a></div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Organisation</h4>
                        <div className="des">{value.organisation}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Tech Stack</h4>
                        <div className="des">{value.techStack}</div>
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
export default Internships;
