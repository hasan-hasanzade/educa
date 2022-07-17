import React from 'react'
import CountUp from 'react-countup';
import Line from '../line-dec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAreaChart, faBriefcase, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const AboutUsSkills = () => {
  return (
    <section className="about-us__skills skills">
      <div className="skills__container _container">
        <div className="row">
          <div className="col-md-12">
            <div className="skills__body">
              <div className="skills__item">
                <div className="skills__content">
                  <CountUp className='count__up' delay={4} end={1256} duration={5}/>
                  <img src={Line} />
                  <span>Great Costumer</span>
                  <div className="skills__hover">
                  <FontAwesomeIcon className='skills__icon' icon={faUser} size="xl"/>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="skills__content">
                  <CountUp className='count__up' delay={4} end={5000} duration={5}/>
                  <img src={Line} />
                  <span>Happy Clients</span>
                  <div className="skills__hover">
                  <FontAwesomeIcon className='skills__icon' icon={faThumbsUp} size="xl"/>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="skills__content">
                  <CountUp className='count__up' delay={4} end={6789} duration={5}/>
                  <img src={Line} />
                  <span>Completed Projects</span>
                  <div className="skills__hover">
                  <FontAwesomeIcon className='skills__icon' icon={faBriefcase} size="xl"/>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="skills__content">
                  <CountUp className='count__up' delay={4} end={4892} duration={5}/>
                  <img src={Line} />
                  <span>Year Of Experience</span>
                  <div className="skills__hover">
                  <FontAwesomeIcon className='skills__icon' icon={faAreaChart} size="xl"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="skills__heading">
            <h2>Our Skills</h2>
            <img src={Line} alt="" />
            <p>Twee Vice synth stumptown distillery aesthetic slow carb</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="skills__wrapper _first">
              <h4>Javascript</h4>
              <span>78%</span>
              <div className="skills__bar"></div>
              <div className="skills__fill"></div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="skills__wrapper _second">
              <h4>Webdesign</h4>
              <span>92%</span>
              <div className="skills__bar"></div>
              <div className="skills__fill"></div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="skills__wrapper _third">
              <h4>Illustrator</h4>
              <span>85%</span>
              <div className="skills__bar"></div>
              <div className="skills__fill"></div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="skills__wrapper _fourth">
              <h4>Photoshop</h4>
              <span>70%</span>
              <div className="skills__bar"></div>
              <div className="skills__fill"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSkills