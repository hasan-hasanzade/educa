import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Pagination = () => {
  return (
   <div className='pagination'>
   <div className='row'>
     <div className='col-md-6 col-xs-6'>
       <div className='pagination__nav'>
         <ul>
           <li><a href='#'>1</a></li>
           <li><a href='#'>2</a></li>
           <li><a href='#'>3</a></li>
           <li><a href='#'>4</a></li>
         </ul>
       </div>
     </div>
     <div className='col-md-6 col-xs-6'>
       <div className='arrows'>
         <ul>
           <li><FontAwesomeIcon className='arrows__icon' icon={faArrowLeft} size="x"/></li>
           <li><FontAwesomeIcon className='arrows__icon' icon={faArrowRight} size="x"/></li>
         </ul>
       </div>
     </div>
   </div>
 </div>
  )
}

export default Pagination