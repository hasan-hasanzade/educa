import React from 'react'
import Logo from '../logo.png'
import Icon from '../email-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container _container">
         <div className="row">
            <div className="col-md-3">
               <div className="footer__header">
                  <img src={Logo} alt="" />
                  <div className="footer__line"></div>
                  <p>Viral megings photo booth farm tab McSweeney's Thundercats til typewrite PBR food truck Kickstarter mumb ennui Tumblr. Jean shorts hoodiele.</p>
                  <div className="footer__text-btn"><a href="">Read More <FontAwesomeIcon icon={faArrowRight} size="x"  className="ftext__btn"/></a></div>
               </div>
            </div>
            <div className="col-md-3">
               <div className="footer__header">
                  <h3>Featered Links</h3>
                  <div className="footer__line"></div>
                  <ul>
                     <li><a href="#">Graduation</a></li>
                     <li><a href="#">Admissions</a></li>
                     <li><a href="#">International</a></li>
                     <li><a href="#">FAQs</a></li>
                  </ul>
                  <ul className='footer__list'>
                     <li><a href="#">Courses</a></li>
                     <li><a href="#">About Us</a></li>
                     <li><a href="#">Bookstore</a></li>
                     <li><a href="#">Alumni</a></li>
                  </ul>
               </div>
            </div>
            <div className="col-md-3">
               <div className="footer__header">
                  <h3>University Address</h3>
                  <div className="footer__line"></div>
                  <ul className="footer__address">
                        <li>
                           <FontAwesomeIcon icon={faHome} className="footer__icon" size="x"/>
                           1107 Wood Street Saginaw, MI New York 48607
                        </li>
                        <li>
                           <FontAwesomeIcon icon={faPhone} className="footer__icon" size="x"/>
                           +12 (34) 214 280 2000</li>
                        <li>
                         <FontAwesomeIcon icon={faEnvelope} className="footer__icon" size="x"/>
                           support@educa.com
                        </li>
                     </ul>
               </div>
            </div>
            <div className="col-md-3">
               <div className="footer__header">
                  <h3>Newsletters</h3>
                  <div className="footer__line"></div>
                  <p>Subsrcibe to our newsletter for latest updates about our site for universe.</p>
                  <input type="email" className='email' placeholder='Email Address...' />
                  <div className="footer__email-btn">
                     <a href="#">Subscribe</a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <div className="footer__copyright copyright">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="copyright__text">
                           <p>@ Copyright 2022 Educa. All Rights Reserved</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="copyright__menu">
                           <ul>
                              <li>
                                 <a href="#">Home</a>
                              </li>
                              <li>
                                 <a href="#">Courses</a>
                              </li>
                              <li>
                                 <a href="#">Future Students</a>
                              </li>
                              <li>
                                 <a href="#">News</a>
                              </li>
                              <li>
                                 <a href="#">Pages</a>
                              </li>
                              <li>
                                 <a href="#">Contact</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer