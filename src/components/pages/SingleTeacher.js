import React from 'react'
import SingleTeacherContact from '../SingleTeacherContact'
import SingleTeacherDesc from '../SingleTeacherDesc'
import SingleTeacherHeading from '../SingleTeacherHeading'

const SingleTeacher = () => {
  return (
    <>
    <SingleTeacherHeading/>
    <section className='single-teacher__content'>
      <div className='single-teacher__container _container'>
        <div className='row'>
          <div className='col-md-10 align-self-center'>
            <div className='single-teacher__body'>
              <div className='row'>
                <SingleTeacherContact />
                <SingleTeacherDesc />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default SingleTeacher