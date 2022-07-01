import React from 'react'
import Presentation from '../Presentation';
import Welcome from '../Welcome'
import Courses from '../Courses';
import Testimonials from '../Testimonials';
import Services from '../Services';
import Teachers from '../Teachers';

const Home = () => {
  return (
    <div className='wrapper'>
    <main className='page'>
    <Presentation />
    <Welcome />
    <Courses />
    <Testimonials />
    <Services />
    <Teachers />
    </main>
    </div>
  )
}

export default Home