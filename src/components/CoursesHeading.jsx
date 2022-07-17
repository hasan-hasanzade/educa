import React from 'react'
import Bground from '../assets/images/courses-grids/courses-gridbg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const CoursesHeading = () => {
  return (
   <div className='page__courses-grids'>
   <div style={{ 
       backgroundImage: `url(${Bground})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       padding: '100px 0px 0px 0px'
     }} className='courses-grids__heading'>
     <div className='courses-grids__container _container'>
       <div className='row'>
         <div className='col-md-12'>
           <h1 className='courses-grids__title'>All Courses</h1>
           <span className='courses-grids__text'>Salvia next level crucifix pickled heirloom synth</span>
             <ul className='courses-grids__col'>
               <li className='courses-grids__item'><a className='courses-grids__link _orange' href='#'>Home</a></li>
               <li className='courses-grids__item'><FontAwesomeIcon className='courses-grids__icon' icon={faAngleRight} size="xs"/></li>
               <li className='courses-grids__item'><a className='courses-grids__link' href='#'>Courses Categories</a></li>
             </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default CoursesHeading