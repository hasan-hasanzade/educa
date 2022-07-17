import React from 'react'
import Line from '../line-dec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter, faTiktok, faSkype} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SingleTeacherDesc = () => {
  return (
    <div className="col-md-7">
      <div className="single-teacher__desc">
         <div className="single-teacher__header">
            <h3>Rebecca Larson</h3>
            <span>Math Teacher</span>
            <img src={Line} />
         </div>
         <div className="single-teacher__icons">
            <ul>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon' icon={faFacebookF} size="x"/></a></li>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon'icon={faInstagram} size="x"/></a></li>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon' icon={faTwitter} size="x"/></a></li>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon' icon={faTiktok} size="x"/></a></li>
            </ul>
         </div>
         <div className="single-teacher__text">
            <p>Vinyl keffiyeh gluten-free, health goth stumptown chambray typewriter ugh. McSweeney gastropub cardigan, banjo Thundercats bitters health goth tofu freegan. Pop-up Pinter 90's farm-to-table locavore seitan McSweeney's.</p>
            <h4>Biography</h4>
            <p><em>Food truck four loko swag, try-hard Williamsburg you probably haven heard of them pork belly bitters.</em><br /><br />Vinyl keffiyeh gluten-free, health goth stumptown chambray typewriter ugh. McSweeney gastropub cardigan, banjo Thundercats bitters health goth tofu freegan. Pop-up Pinter 90's farm-to-table locavore seitan McSweeney's <br /><br />Thundercats Shoreditch polaroid biodiesel put a bird on it. McSweeney's stumptown blog vinyl, pop-up crucifix Tumblr messenger bag hella fap disrupt meh. Cred butcher gluten-free twee Pinterest tofu banh mi, mustache typewriter chia.</p>
            <ul>
               <li><FontAwesomeIcon className='single-teacher__contact' icon={faPhone} size="x"/>910-213-7890</li>
               <li><FontAwesomeIcon className='single-teacher__contact' icon={faEnvelope} size="x"/>samuel@delossantos.com</li>
               <li><FontAwesomeIcon className='single-teacher__contact' icon={faSkype} size="x"/>samueldelossantos1</li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default SingleTeacherDesc