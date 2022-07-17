import React from 'react'

const ClassicNewsCard = ({key,image,by,comments,title,posted}) => {
  return (
      <div className="classic-news__wrapper">
         <div className="classic-news__item" key={key}>
            <a href=""><img src={image} alt="" /></a>
            <ul>
               <li>Posted: <em>{posted}</em></li>
               <li>By: <em>{by}</em></li>
               <li>Comments: <em>{comments}</em></li>
            </ul>
            <a href=""><h4>{title}</h4></a>
            <p>Church-key ugh sriracha slow-carb, +1 you probably haven't heard of them put a bird on it single-origin coffee. Pork belly irony chia, fann pack taxidermy Intelligentsia Pitchfork cliche tote bag stumptown authentic umami asymetrical. Bitters rof party fanny pack, street art you probably haven't heard of them Echo Park disrupt.</p>
            <div className="classic-news__buttons">
               <div className="classic-news__btnsub">
                  <a href="">Continue Reading</a>
               </div>
               <div className="classic-news__btnshare">
                  <a href='#'>Share</a>
               </div>
            </div>
         </div>
      </div>
  )
}

export default ClassicNewsCard