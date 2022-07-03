import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
// import Bground from '../../assets/images/courses-grids/courses-gridbg.jpg'

const CoursesGrids = () => {
  return (
    <div className='.page__courses-grids'>
      <div className='.courses-grids__heading'>
        <div className='.courses-grids__container _container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>All Courses</h1>
              <span>Salvia next level crucifix pickled heirloom synth</span>
              <div className='.courses-grids__list'>
                <ul>
                  <li><a href='#'>Home</a></li>
                  <li><FontAwesomeIcon icon={faArrowRight} size="x"/></li>
                  <li><a href='#'>Courses Categories</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesGrids