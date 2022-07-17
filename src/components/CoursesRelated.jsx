import React from 'react'
import Image1 from '.././assets/images/single-post/man1.jpeg'
import Image2 from '.././assets/images/single-post/man2.jpeg'
import Image3 from '.././assets/images/single-post/woman1.jpg'

const CoursesRelated = () => {
  return (
    <div className="single-course__related related">
      <div className="related__heading">
         <h4>Related Courses</h4>
      </div>
      <ul>
         <li>
            <a href='#'><img src={Image1} alt="" /></a>
            <span>John Smith</span>
            <a href="#"><h5>History of Art Architecture</h5></a>
            <p>Price:<em>$39.99</em></p>
         </li>
         <li>
            <a href='#'><img src={Image2} alt="" /></a>
            <span>Sam Clarkson</span>
            <a href="#"><h5>Fashion Buying Managment</h5></a>
            <p>Price:<em>$29.99</em></p>
         </li>
         <li>
         <a href='#'><img src={Image3} alt="" /></a>
            <span>Anna Dobson</span>
            <a href="#"><h5>Electronic Engineering</h5></a>
            <p>Price:<em>$89.99</em></p>
         </li>
      </ul>
    </div>
  )
}

export default CoursesRelated