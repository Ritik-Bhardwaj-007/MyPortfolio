import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Internships() {
const [listInternship] = useState([
  {
    name: 'SDE I',
    des: "Promoted to full-time role after successful internship performance and critical contributions to backend architecture and performance optimization.",
    organisation: 'EMOHA Elder Care',
    techStack: 'Nodejs, Expressjs, SQL, Sequalize, Redis,...',
    url:'',
    images: '/EmohaLogo.png'
  },
  {
    name: 'Software Engineer Intern',
    des: "Led the bi-directional integration of Cflow with Emoha’s WMS, automating real-time lead synchronization, mirroring status updates across systems, and triggering process-driven actions such as consent form generation based on lead progression.",
    organisation: 'EMOHA Elder Care',
    techStack: 'Nodejs, Expressjs, SQL, Sequalize, Redis,...',
    url:'https://drive.google.com/file/d/1PP4cOYzNoaEJfVXndBwUIv-Xff27MqMa/view',
    images: '/EmohaLogo.png'
  },
  {
    name: 'Internship - VNIT',
    des: "I developed and launched two mobile apps for Nagpur's veterinary community. One, built with Flutter and Dart, featured offline functionality using TensorFlow Lite. The other, with its backend on Azure, offered real-time updates. Tailored to meet the distinct needs of veterinary professionals, students, cattle farmers, and gaushalas, these apps underscore my commitment to delivering specific and impactful solutions for the local veterinary community.",
    organisation: 'Visvesvaraya National Institute of Technology Nagpur',
    techStack: 'Flutter,Machine Learning,Flask,Azure,...',
    url:'https://drive.google.com/file/d/1Xv-920II9nJsQffDHCw4ki3EzER8BCai/view?usp=sharing',
    images: '/VNIT-LoR.jpeg'
  },
  {
    name: 'SDE Intern',
    des: 'As a Software Developer Intern, I specialized in backend development using Node.js, Express, and MongoDB. Notably, I developed multiple APIs for crucial features, showcasing my ability to create robust solutions. Additionally, I leveraged Flutter to build intuitive features on the frontend, demonstrating my versatility in contributing to both backend and frontend aspects of software development.',
    organisation: 'Stick',
    techStack: 'Flutter,Reactjs,Nodejs,Expressjs,MongoDB,...',
    url:'https://drive.google.com/file/d/18z6YXNhs2trSmLwGATFSRTGE1tFL7PqQ/view?usp=sharing',
    images: '/Stick-Certificate.jpeg'
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
       Over the course of my journey, I’ve contributed to impactful projects and real-world products across startups and internships. From building and optimizing RESTful APIs to integrating scalable backend systems and delivering full-stack features, I’ve worked on solutions that improved performance, reliability, and user experience. These hands-on experiences have sharpened my problem-solving skills and deepened my understanding of building efficient, production-grade software.
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
                <div className="des">{value.des}{value.name!=='SDE I' && <a href={value.url} target='_blank' rel="noreferrer"> Recognisition of Intership from Oraganisation</a>}</div>
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
