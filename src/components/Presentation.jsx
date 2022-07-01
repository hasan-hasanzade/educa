import React from 'react'
import Carousel1 from '../slidebg-1.jpg'
import Carousel2 from '../slidebg-2.jpg'
import MovingText from 'react-moving-text'

const Presentation = () => {
  return (
    <section className="page__presentation presentation">
      <div className="presentation__container _container">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Carousel1} class="d-block w-100" alt="..." />
      <div class="carousel-caption text-left">
         <MovingText
            type="fadeInFromTop"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <div className='presentation__fline'> Are you ready to study?</div>
            <div className='presentation__scline'>We have the</div> 
           
         </MovingText>
         <MovingText
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none">
            <div className="presentation__text">Nunc eget tempor neque. Aenean non ex sed nibh euismod ornare. 
            <div className='presentation__sctext'>Nam congue nisi purus, sed luctus risus.</div> 
            <div className='presentation__btn'><a href='#'>Buy Now</a></div>
            </div>
            
            
         </MovingText>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Carousel2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block ">
         <MovingText
         type="fadeInFromTop"
         duration="1000ms"
         delay="0s"
         direction="normal"
         timing="ease"
         iteration="1"
         fillMode="none">
         </MovingText>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </section>
  )
}

export default Presentation