import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNodeJs,faMdb, faPython, faAws, faStackExchange, faDropbox } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'Javascript',
    icon: faJs},
  {
    name: 'ReactJs',
    icon: faReact
  },
  {
    name: 'NodeJs',
    icon: faNodeJs
  },
  {
    name: 'ExpressJs',
    icon: faNodeJs
  },
  {
    name: 'MongoDB',
    icon: faMdb
  },
  {
    name: 'AWS',
    icon: faAws
  },
  {
    name: 'Redis',
    icon: faStackExchange
  },
  {
    name: 'Python',
    icon: faPython
  },
  {
    name: 'MySQL',
    icon: faDropbox
  },

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        What Skills I Have ?
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       In the dynamic world of creativity, my diverse skill set forms the foundation of impactful work. Fueled by innovation and commitment to excellence, I bring creativity, adaptability, and meticulous attention to detail. Whether designing visuals, developing websites, or managing projects, I approach each task with enthusiasm and expertise. Let's explore how my skills can elevate success.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

