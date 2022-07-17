import React from 'react'
import CoursesTopBar from '../CoursesTopBar'
import myData from '../../coursesdata.json'
import CoursesHeading from '../CoursesHeading'
import CoursesListItems from '../CoursesListItems'
import DownNav from '../DownNav'


const CoursesList = () => {
  return (
    <>
      <CoursesHeading/>
      <section className='courses-list__content'>
        <div className='courses__container _container'>
        <div className='row'>
            <div className='col-md-12'>
              <CoursesTopBar />
            </div>
        </div>
        <div className='row'>
              <div className='col-md-8'>
                {myData.map((item) => (
                    <CoursesListItems key={item.id} name={item.name} image={item.image} price={item.price} imgTeacher={item.imgTeacher} text={item.text}/>
                  ))}
              </div>
             
            <div className='col-md-4'>
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
        <DownNav />
        </div>
      </section>
    </>
  )
}

export default CoursesList