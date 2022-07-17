import React from 'react'
import ClassicNewsCard from '../ClassicNewsCard'
import { ClassicNewsItems } from '../ClassicNewsItems'
import ClassicNewsHeading from '../ClassicNewsHeading'
import ClassicNewsSideBar from '../ClassicNewsSideBar'

const ClassicNews = () => {
  return (
    <>
     <ClassicNewsHeading/>
    <section className='classic-news__content'>
      <div className='classic-news__container _container'>
        <div className='row'>
          <div className='col-md-8'>
            {ClassicNewsItems.map((item) => (
                <ClassicNewsCard key={item.id} posted={item.posted} image={item.image} title={item.title} by={item.by} comments={item.comments}/>
            ))}
          </div>
          <ClassicNewsSideBar />
        </div>
      </div>
    </section>
    </>
   
  )
}

export default ClassicNews