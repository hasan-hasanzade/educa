import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faList, faSortDown} from '@fortawesome/free-solid-svg-icons'

const CoursesTopBar = () => {
  return (
   <div className='courses-grids__feautered feautered'>
   <div className='feautered__text'>
     <span>showing 1-9 of 40 courses</span>
   </div>
   <div className='feautered__right-side'>
     <div className='feautered__category'>
       <select>
         <option>Category <FontAwesomeIcon icon={faSortDown} size="xl"/></option>
         <option>Free</option>
         <option>Timing</option>
         <option>Mostly</option>
         <option>Latest</option>
       </select>
     </div>
     <div className='feautered__sort'>
       <select>
         <option>Sorted by</option>
         <option>Price</option>
         <option>Useless</option>
         <option>Important</option>
       </select>
     </div>
     <div className='feautered__icons'>
       <ul>
         <li><a href='#'><FontAwesomeIcon icon={faList} size="x"/></a></li>
         <li><a href='#'><FontAwesomeIcon icon={faTableCellsLarge} size="x"/></a></li>
       </ul>
     </div>
   </div>
 </div>
  )
}

export default CoursesTopBar