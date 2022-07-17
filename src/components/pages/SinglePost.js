import React from 'react'
import SinglePostHeading from '../SinglePostHeading'
import SinglePostMain from '../SinglePostMain'
import ClassicNewsSideBar from '../ClassicNewsSideBar'

const SinglePost = () => {
  return (
    <>
    <SinglePostHeading />
    <section className="single-post__content">
      <div className="single-post__container _container">
         <div className="row">
          <SinglePostMain />
          <ClassicNewsSideBar />
         </div>
      </div>
    </section>
    </>
    
  )
}

export default SinglePost