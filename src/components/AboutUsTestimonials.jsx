import React from 'react'
import Img1 from '../assets/images/about-test/testimonial-1.png'
import Img2 from '../assets/images/about-test/testimonial-2.png'
import Slider from "react-slick";

const AboutUsTestimonials = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

  return (
    <section className="about-us__test test">
      <div className="test__container _container">
         <div className="row">
            <div className="col-md-12 col-md-offset-1">
            <Slider {...settings}>
            <div className="test__item">
                  <img src={Img1} alt="" />
                  <h3>John L. Smith</h3>
                  <span>Ceo Founder</span>
                  <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
               </div>
               <div className="test__item">
                  <img src={Img2} alt="" />
                  <h3>Caroll m. davis</h3>
                  <span>Web Designer</span>
                  <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
               </div>
            </Slider>
               
            </div>
         </div>
      </div>
    </section>
  )
}

export default AboutUsTestimonials