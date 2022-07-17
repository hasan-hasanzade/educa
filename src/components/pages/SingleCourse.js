import React from 'react'
import CoursesHeading from '../CoursesHeading'
import SingleCourseDesc from '../SingleCourseDesc';
import SingleCourseTopics from '../SingleCourseTopics';
import SingleCourseAccordion from '../SingleCourseAccordion';
import CourseInfo from '../CourseInfo';
import CoursesRelated from '../CoursesRelated';
import Img from '../../assets/images/single-post/man2.jpeg'
import Img2 from '../../assets/images/single-courses/abstract01.jpg'


const SingleCourse = () => {

  return (
    <>
    <CoursesHeading/>
    <section className='single-course__content'>
      <div className='single-course__container _container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='single-course__body'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='single-course__item'>
                    <div className='single-course__heading'>
                      <h3>How to become a Powerful Speaker ?</h3>
                      <p>Plaid you probably haven't heard of them fashion axe meditation</p>
                      <img src={Img} />
                      <h4>Allan Johnson</h4>
                      <div className='single-course__price'>
                        <span>$25.99</span>
                        <div className='base'></div>
                      </div>
                    </div>
                    <img src={Img2} alt=''></img>
                    <SingleCourseDesc/>
                    <SingleCourseTopics/>
                    <SingleCourseAccordion/>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <CourseInfo/>
            <CoursesRelated/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleCourse