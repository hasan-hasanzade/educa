import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAreaChart, faBriefcase, faCompass,faComments } from '@fortawesome/free-solid-svg-icons'
import Line from '../line-dec.png'

const Services = () => {
  return (
    <div className="page__services">
      <div className="services__container _container">
         <div className="row">
            <div className="col-md-12">
               <div className="services__header">
                  <h2>You Can Read Books</h2>
                  <img src={Line} alt="" />
                  <p>Plaid you probably haven't heard of them fashion axe meditation</p>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faAreaChart} size="xl"/>
               <h4>Structure <br /> entery requirements</h4>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faBriefcase} size="xl"/>
               <h4>Education <br /> graphic interior</h4>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faCompass} size="xl"/>
               <h4>Preparing <br /> the compass Exam</h4>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faComments} size="xl"/>
               <h4>Teacher <br /> talking to a group</h4>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <div className="services__btn">
                  <a href="#">Go to the books</a>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Services