import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SingleCourseTopics = () => {
  return (
    <div className="single-course__topics">
      <h4>Topics Included</h4>
      <div className="row">
         <div className="col-md-4">
            <ul>
               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Ennui pickled asymmetrical
               </li>

               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Kitsch keffiyeh crucifix ennui
               </li>

               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Kitsch keffiyeh crucifix ennui
               </li>

               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Truck skateboard selvage bear
               </li>
            </ul>
         </div>
         <div className="col-md-4">
         <ul>
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="xs"/>
               Fitsch keffiyeh crucifix ennui
               </li>
               
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Ennui pickled asymmetrical
               </li>

               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Quinoa dreamcatcher food
               </li>

               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Truck skateboard selvage bear
               </li>
            </ul>
         </div>
         <div className="col-md-4">
         <ul>
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Ennui pickled asymmetrical
               </li>
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Truck skateboard selvage bear
               </li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default SingleCourseTopics