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
       With a strong foundation in full-stack development, I bring a versatile and practical skill set to the table. I specialize in building scalable web applications using the MERN stack, crafting efficient APIs, and solving complex problems through clean, modular code. Beyond development, I’m experienced in version control, cloud deployment, and real-time data handling. Whether it’s leading a project from scratch or optimizing existing systems, I approach every challenge with curiosity, precision, and a drive to build solutions that work — and last.
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

