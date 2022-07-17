import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const CoursesGridItems = ({key,name,image,price,imgTeacher,text}) => {
  return (
   <div className='col-md-4'>
      <div className="courses-grid__wrapper" key={key}>
   <div className="courses-grid__item">
      <a href=""><img src={image} alt="" /></a>
      <div className="courses-grid__down">
         <img src={imgTeacher} alt="" />
         <h4>{name}</h4>
         <div className="courses-grid__price">
            <span>{price}</span>
            <div className="base"></div>
         </div>
         <a href=""><h3>{text}</h3></a>
         <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
         <div className="courses-grid__btn">
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

export default CoursesGridItems