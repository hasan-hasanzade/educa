import React from 'react'
import Line from '../line-dec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faEarthAsia, faClock, faBook } from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {
  return (
    <section className='page__welcome welcome'>
      <div className="welcome__container _container">
         <div className="row">
            <div className="col-md-8">
               <div className="welcome__heading">
                  <h1 className='welcome__title'>Welcome to Educa</h1>
                  <span className='welcome__subtitle'>Twee Vice synth stumptown</span>
                  <img src={Line} alt="line decor" />
                  <p className='welcome__text'>Twee Vice synth stumptown, distillery aesthetic slow-carb Intelligentsia bitters taxidermy <br />
                  McSweeney's, flexitarian actually iPhone mlkshk brunch.</p>
               </div>
               <div className="row">
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faGraduationCap} size="x"/></div>
                        <h3>Graduated steps</h3>
                        <div className="line"></div>
                        <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faEarthAsia} size="x"/></div>
                        <h3>Global Interested</h3>
                        <div className="line"></div>
                        <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faClock} size="x"/></div>
                        <h3>Circular Clock</h3>
                        <div className="line"></div>
                        <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faBook} size="x"/></div>
                        <h3>Open Book</h3>
                        <div className="line"></div>
                        <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="request__information">
                  <div className="widget__heading">
                     <h3>Request information</h3>
                  </div>
                  <div className="search__form">
                     <input type="text" placeholder='Full Name' />
                     <input type="text" placeholder='E-mail Address' />
                     <div className="select">
                        <select name="" id="">
                           <option value="-1">Campus of Interests</option>
                           <option value="">Nearby</option>
                           <option value="">High Classes</option>
                           <option value="">Short Time</option>
                           <option value="">Long Time</option>
                        </select>
                     </div>
                     <div className="select">
                        <select name="" id="">
                           <option value="-1">Program of Interests</option>
                           <option value="">Wroking Process</option>
                           <option value="">Archivements</option>
                           <option value="">Social</option>
                           <option value="">Profits</option>
                        </select>
                     </div>
                     <div className="request__btn">
                        <a href="">Submit Request</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Welcome