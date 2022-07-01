import React from 'react'
import Line from '../line-dec.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import myData from '../coursesdata.json'
import SingleCourseAnvar from './Coursescard';
// import { coursesData } from '../coursesdata';
// import Course1 from '../assets/images/courses/course-1.jpg'
// import Teacher1 from '../assets/images/courses/teacher-1.jpg'
// import Course2 from '../assets/images/courses/course-2.jpg'



const CoursesAnvar = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 7000,
      swipeToSlide: true,
      
      
      
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <section className="page__courses">
      <div className="courses__container _container">
         <div className="row">
            <div className="courses__header">
               <h2 className="courses__title">Popular Courses</h2>
               <img src={Line} alt="line decor" />
               <p className="courses__text">Twee Vice synth stumptown distillery aesthetic slow carb</p>
            </div>
         </div>
         <div className="row">
           <Slider {...settings}>
            {myData.map((item) => (
                <SingleCourseAnvar key={item.id} name={item.name} image={item.image} price={item.price} imgTeacher={item.imgTeacher} text={item.text}/>
            ))}
           
           
           
            </Slider> 
         </div>
      </div>
    </section>
  )
}

export default CoursesAnvar