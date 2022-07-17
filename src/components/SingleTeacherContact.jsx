import React from 'react'
import Img from '../assets/images/single-teacher/single.jpg'

const SingleTeacherContact = () => {
  return (
    <div className="col-md-5">
      <img src={Img} alt="" />
      <div className="single-teacher__form">
         <h4>Contact Me</h4>
         <input type="text" placeholder='Full Name' />
         <input type="email" placeholder='E-mail Address' />
         <textarea name="" placeholder='Write message' cols="30" rows="10"></textarea>
         <div className="single-teacher__btn">
            <a href="#">Send Message</a>
         </div>
      </div>
    </div>
  )
}

export default SingleTeacherContact