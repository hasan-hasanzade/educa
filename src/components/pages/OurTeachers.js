import React from 'react'
import OurTeamHeading from '../OurTeamHeading'
import OurTeamCard from '../OurTeamCard'
import { OurTeamItems } from '../OurTeamItems'
import DownNav from '../DownNav'

const OurTeachers = () => {
  return (
    <>
    <OurTeamHeading />
   <section className="our-team__content">
         <div className="our-team__container _container">
            <div className="row">
            {OurTeamItems.map((item) => (
            <OurTeamCard key={item.id} name={item.name} image={item.image} career={item.career}/>
          ))}
            </div>
            <DownNav />
         </div>
      </section>

    </>
   
  )
}

export default OurTeachers