import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Rec1 from '../assets/images/classic-news/recent1.jpg'
import Rec2 from '../assets/images/classic-news/recent2.jpg'
import Rec3 from '../assets/images/classic-news/recent3.jpg'
import Inst1 from '../assets/images/classic-news/instagram1.jpg'
import Inst2 from '../assets/images/classic-news/instagram2.jpg'
import Inst3 from '../assets/images/classic-news/instagram3.jpg'
import Inst4 from '../assets/images/classic-news/instagram4.jpg'
import Inst5 from '../assets/images/classic-news/instagram5.jpg'
import Inst6 from '../assets/images/classic-news/instagram6.jpg'

const ClassicNewsSideBar = () => {
  return (
    <div className="col-md-4">
      <div className="classic-news__sidebar">
         <div className="classic-news__search">
            <input className='search-icon' type="text" placeholder='Search' />
         </div>
         <div className="classic-news__categories categories">
            <div className="categories__heading">
               <h4>Categories</h4>
            </div>
            <ul>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Design</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>International</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Learning</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Read</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Education</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Finance</a></li>
            </ul>
         </div>
         <div className="classic-news__recent recent">
            <div className="recent__heading">
               <h4>Recent News</h4>
            </div>
            <ul>
               <li>
                  <a href='#'><img src={Rec1} alt="" /></a>
                  <a href='#'><h5>Visiting Artists: Giles Bailey</h5></a>
                  <span>7 June 2022</span>
               </li>
               <li>
                  <a href='#'><img src={Rec2} alt="" /></a>
                  <a href='#'><h5>How Students use Rankings?</h5></a>
                  <span>12 June 2022</span>
               </li>
               <li>
                  <a href='#'><img src={Rec3} alt="" /></a>
                  <a href='#'><h5>University Finder: Compare</h5></a>
                  <span>18 June 2022</span>
               </li>
            </ul>
         </div>
         <div className="classic-news__tag tag">
           <div className="tag__heading">
            <h4>Tags</h4>
           </div>
           <ul>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Envanto</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">College</a></li>
            <li><a href="#">Teachers</a></li>
            <li><a href="#">Read</a></li>
            <li><a href="#">Excursions</a></li>
            <li><a href="#">Lessons</a></li>
            <li><a href="#">Web Development</a></li>
           </ul>
         </div>
         <div className="classic-news__tweets tweets">
            <div className="tweets__heading">
               <h4>Recents Tweets</h4>
            </div>
            <ul>
               <li>
                  <FontAwesomeIcon className='tweets__icon' icon={faTwitter} size="x"/>
                  <p>Tote bag post-ironic messenger bag bespoke cray wolf moon key ready.</p>
                  <a href="#">https://olark.recruiterbox.com/jobs/fk0h</a>
                  <span>21 minutes ago.</span>
               </li>
               <li>
                  <FontAwesomeIcon className='tweets__icon' icon={faTwitter} size="x"/>
                  <p>Tote bag post-ironic messenger bag bespoke cray wolf moon key ready.</p>
                  <a href="#">https://olark.recruiterbox.com/jobs/fk0h</a>
                  <span>21 minutes ago.</span>
               </li>
            </ul>
         </div>
         <div className="classic-news__instagram instagram">
            <div className="instagram__heading">
               <h4>Instagram</h4>
            </div>
            <div className="instagram__items">
               <div className="instagram__item">
                  <a href="#"><img src={Inst1} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst2} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst3} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst4} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst5} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst6} alt="" /></a>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ClassicNewsSideBar