import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
  return (
    <section className="contact-info__content">
      <div className="contact-info__container _container">
         <div className="row">
            <div className="col-md-12">
               <div className="contact-info__items">
                  <div className="contact-info__item">
                     <FontAwesomeIcon className='contact__info__icon' icon={faMapMarker} size="x"/>
                     <h4>Address Info</h4>
                     <p>Bloomfield Way Stockton, Springs ME 04981</p>
                  </div>
                  <div className="contact-info__item">
                     <FontAwesomeIcon className='contact__info__icon' icon={faEnvelope} size="x"/>
                     <h4>Email Info</h4>
                     <p>educa@university.com</p>
                  </div>
                  <div className="contact-info__item _border">
                     <FontAwesomeIcon className='contact__info__icon' icon={faPhone} size="x"/>
                     <h4>Phone Number</h4>
                     <p>+1 (23) 207 0567 2120</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default ContactInfo