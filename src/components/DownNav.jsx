import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const DownNav = () => {
  return (
   <div className='row'>
   <div className='col-md-6 col-xs-6'>
   <div className='courses-grids__nav'>
     <ul>
       <li><a className='courses-grids__num' href='#'>1</a></li>
       <li><a className='courses-grids__num' href='#'>2</a></li>
       <li><a className='courses-grids__num _selected' href='#'>3</a></li>
       <li><a className='courses-grids__num' href='#'>4</a></li>
     </ul>
   </div>
   </div>
   <div className='col-md-6 col-xs-6'>
     <div className='courses-grids__arrows'>
       <ul>
         <li><FontAwesomeIcon icon={faArrowLeft} size="x"/></li>
         <li><FontAwesomeIcon icon={faArrowRight} size="x"/></li>
       </ul>
     </div>
   </div>
 </div>
  )
}

export default DownNav