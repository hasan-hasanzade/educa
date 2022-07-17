import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons'

const OurTeamCard = ({key,image,name,career}) => {
  return (

    <div className="col-md-3">
      <div className="our-team__item" key={key}>
         <img src={image} alt="" />
         <div className="our-team__down">
            <a href=""><h4>{name}</h4></a>
            <span>{career}</span>
            <p>Ugh chambray lumbersexual food artisan meditation sartorial post ironic fans wes</p>
            <ul>
               <li><FontAwesomeIcon icon={faFacebookF} size="x"/></li>
               <li><FontAwesomeIcon icon={faInstagram} size="x"/></li>
               <li><FontAwesomeIcon icon={faTwitter} size="x"/></li>
               <li><FontAwesomeIcon icon={faTiktok} size="x"/></li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default OurTeamCard