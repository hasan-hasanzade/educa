import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'


const ClassicEventsCard = ({key,image,adress,date,title}) => {
  return (
    <div className="col-md-4">
      <div className="classic-events__item1" key={key}>
         <div className="classic-events__header">
            <img src={image} alt="" />
            <div className="classic-events__hover">
               <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faStar} size="x"/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faStar} size="x"/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faStar} size="x"/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faStar} size="x"/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faStar} size="x"/></a></li>
                  <li>5 stars</li>
                  <li> <a href="#"><FontAwesomeIcon icon={faThumbsUp} size="x"/></a>68</li>
               </ul>
            </div>
         </div>
         <div className="classic-events__down">
            <ul>
            <li><FontAwesomeIcon className='classic-events__icon' icon={faMapMarker} size="x"/>Johnny Lane <br /> Milwaukee WI 532</li>
            <li><FontAwesomeIcon className='classic-events__icon' icon={faClock} size="x"/>Nov 4 - Dec 11 <br />  Monday 8am - 12am</li>
            </ul>
            <div className="classic-events__date"><p>18 <span>Dec</span></p></div>
            <a href="#"><h4>{title}</h4></a>
            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
         </div>
      </div>
    </div>
  )
}

export default ClassicEventsCard