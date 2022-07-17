import React from 'react'
import Line from '../line-dec.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import myData from '../coursesdata.json'
import Coursescard from './Coursescard';



const Courses = () => {
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
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 841,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        
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
                <Coursescard  name={item.name} image={item.image} price={item.price} imgTeacher={item.imgTeacher} text={item.text}/>
            ))}
           </Slider> 
         </div>
      </div>
    </section>
  )
}

export default Courses