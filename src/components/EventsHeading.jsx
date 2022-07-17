import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Bground from '../assets/images/single-events/events-heading-bg.jpg'

const EventsHeading = () => {
  return (
   <div className='page__classic-events'>
   <div style={{ 
       backgroundImage: `url(${Bground})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       padding: '100px 0px 0px 0px'
     }} className='classic-events__heading'>
     <div className='classic-events__container _container'>
       <div className='row'>
         <div className='col-md-12'>
           <h1 className='classic-events__title'>Events</h1>
           <span className='classic-events__text'>Salvia next level crucifix pickled heirloom synth</span>
             <ul className='classic-events__col'>
               <li className='classic-events__item'><a className='classic-events__link _orange' href='#'>Home</a></li>
               <li className='classic-events__item'><FontAwesomeIcon className='classic-events__icon' icon={faAngleRight} size="xs"/></li>
               <li className='classic-events__item'><a className='classic-events__link' href='#'>Event Details</a></li>
             </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default EventsHeading