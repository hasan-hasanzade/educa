import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const CoursesListItems = ({key,name,image,price,imgTeacher,text}) => {
  return (
   <div className='.col-md-12'>
      <div className="courses-list__wrapper" key={key}>
         <div className="courses-list__item">
            <a href=""><img src={image} alt="" /></a>
            <div className="courses-list__down">
               <img src={imgTeacher} alt="" />
               <h4>{name}</h4>
               <div className="courses-list__price">
                  <span>{price}</span>
                  <div className="base"></div>
               </div>
               <a href=""><h3>{text}</h3></a>
               <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
               <div className="courses-list__btn">
                  <a href="">
                     view more <FontAwesomeIcon icon={faArrowRight} size="x"/>
                  </a>
               </div>
            </div>
         </div>
         </div>
   </div>
   

   
  )
}

export default CoursesListItems