import React from 'react'
import Img1 from '../assets/images/about-us/about-us-w1.jpg'
import Img2 from '../assets/images/about-us/about-us-w2.jpg'
import Img3 from '../assets/images/about-us/about-us-w3.jpg'
import Line from '../line-dec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faGlobe, faClock, faBook, faPencil, faCoffee } from '@fortawesome/free-solid-svg-icons'

const AboutUsWelcome = () => {
  return (
    <section className="about-us__content">
      <div className="about-us__container _container">
         <div className="row">
            <div className="col-md-5">
               <div className="about-us__images">
                  <div className="row">
                     <div className="col-md-12">
                       <a href=''><img src={Img1} /></a>
                     </div>
                     <div className="col-md-6 col-xs-6">
                        <a href=''><img src={Img2} /></a>
                     </div>
                     <div className="col-md-6 col-xs-6">
                        <a href=''><img src={Img3} /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-7">
               <div className="about-us__greeting greeting">
                  <div className="greeting__header">
                     <h2>Welcome to Educa</h2>
                     <img src={Line} />
                     <span>Twee Vice synth stumptown</span>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faGraduationCap} size="x"/></span>
                           <h3>Graduated Steps</h3>
                           <p>Cre thundercats vean odd future</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                          <span><FontAwesomeIcon className='greeting__icon' icon={faGlobe} size="x"/></span>
                           <h3>Global Interested</h3>
                           <p>Cre thundercats vean odd future</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faClock} size="x"/></span>
                           <h3>Circular Clock</h3>
                           <p>Cre thundercats vean odd future</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faBook} size="x"/></span>
                           <h3>Open Book</h3>
                           <p>Cre thundercats vean odd future</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faPencil} size="x"/></span>
                           <h3>Drawing Lessons</h3>
                           <p>Cre thundercats vean odd future</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faCoffee} size="x"/></span>
                           <h3>Coffee time</h3>
                           <p>Cre thundercats vean odd future</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default AboutUsWelcome