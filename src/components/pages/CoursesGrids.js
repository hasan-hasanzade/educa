import React from 'react'

import CoursesHeading from '../CoursesHeading'
import myData from '../../coursesdata.json'
import CoursesGridItems from '../CoursesGridItems'
import CoursesTopBar from '../CoursesTopBar'
import DownNav from '../DownNav'

const CoursesGrids = () => {
  return (
    <>
    <CoursesHeading />
    <section className='courses-grids__content'>
        <div className='courses-grids__container _container'>
          <div className='row'>
            <div className='col-md-12'>
              <CoursesTopBar />
            </div>
          </div>
          <div className='row'>
            {myData.map((item) => (
              <CoursesGridItems key={item.id} name={item.name} image={item.image} price={item.price} imgTeacher={item.imgTeacher} text={item.text}/>
            ))}
           </div>
          <DownNav />
        </div>
    </section>
    </>
  )
}

export default CoursesGrids