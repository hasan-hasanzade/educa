import React from 'react'
import Bground from '../assets/images/classic-news/news-heading-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ContactHeading = () => {
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
           <h1 className='courses-grids__title'>Contact us</h1>
           <span className='courses-grids__text'>Salvia next level crucifix pickled heirloom synth</span>
             <ul className='contact__col'>
               <li className='courses-grids__item'><a className='courses-grids__link _orange' href='#'>Home</a></li>
               <li className='courses-grids__item'><FontAwesomeIcon className='courses-grids__icon' icon={faAngleRight} size="xs"/></li>
               <li className='courses-grids__item '><a className='courses-grids__link' href='#'>Contact Us</a></li>
             </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default ContactHeading