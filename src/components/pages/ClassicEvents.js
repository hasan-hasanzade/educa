import React from 'react'
import EventsHeading from '../EventsHeading'
import CoursesTopBar from '../CoursesTopBar'
import {ClassicEventsItems} from '../ClassicEventsItems'
import ClassicEventsCard from '../ClassicEventsCard'
import DownNav from '../DownNav'

const ClassicEvents = () => {
  return (
    <>
    <EventsHeading />
    <section className='classic-events__content'>
      <div className='classic-events__container _container'>
        <div className='row'>
          <div className='col-md-12'>
          <CoursesTopBar />
          </div>
        </div>
        <div className='row'>
          {ClassicEventsItems.map((item) => (
            <ClassicEventsCard key={item.id} adress={item.adress} image={item.image} title={item.title} date={item.date}/>
          ))}
        </div>
        <DownNav />
      </div>
    </section>
    </>
  )
}

export default ClassicEvents