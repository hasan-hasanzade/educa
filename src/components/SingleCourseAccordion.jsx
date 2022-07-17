import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faSortDown, faSortU} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { AccordionData } from './AccordionData'
import { motion } from 'framer-motion'

const SingleCourseAccordion = () => {
   const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
   <>
   {AccordionData.map((item, index) => {
      return (
        <>
        <div className="single-course__accordion">
        <div className="accordion__title" onClick={() => toggle(index)} key={index}>
        <span className="accordion__play-icon"><FontAwesomeIcon icon={faPlayCircle} size="x"/></span>
        <span className='accordion__name'>{item.name}</span>
        <h4>{item.title}<span className='accordion__open-icon'><FontAwesomeIcon icon={faSortDown} size="x"/></span></h4>
     </div>
          {clicked === index ? (
             <motion.div
             animate={{ y: 10 }}
             transition={{ type: "spring", duration: 0.8, bounce:0 }}
           >
            <div className="accordion__drop ">
            <p>{item.opened}</p>
            </div>
           </motion.div>
            
          ) : null}
      </div>
      </>  
      );
    })}
   </>
  )
}

export default SingleCourseAccordion