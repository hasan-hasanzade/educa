import React from 'react'
import Img from '../assets/images/single-post/single.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Img1 from '../assets/images/single-post/man1.jpeg'
import Img2 from '../assets/images/single-post/man2.jpeg'
import Img3 from '../assets/images/single-post/woman1.jpg'
import Img4 from '../assets/images/single-post/woman2.jpg'


const SinglePostMain = () => {

  return (
   <div className="col-md-8">
   <div className="single-post__main main">
      <div className="main__item">
         <img src={Img} alt="" />
         <ul>
            <li>Posted: <em>23 June 2022</em></li>
            <li>By: <em>Admin</em></li>
            <li>Comments: <em>2</em></li>
         </ul>
         <a href="#"><h4>New University Finder: Compare</h4></a>
         <p>Church-key ugh sriracha slow-carb, +1 you probably haven't heard of them put a bird on it single-origin coffee. Pork belly irony chia, fann pack taxidermy Intelligentsia Pitchfork cliche tote bag stumptown authentic umami asymetrical. Bitters Distillery mixtape 90's Portland Brooklyn. Sriracha selfies gluten-free, wolf 8-bit blog Pinterest occupy Marfa seitan narwhal taxidermy sustainable DIY bespoke. Farm-to-table Odd Future raw denim leggings, Pitchfork actually cray health goth Pinterest hella Intelligentsia. Narwhal pug kogi, 3 wolf moon seitan chambray normcore swag VHS farm-to-table occupy High Life Schlitz. Skateboard Pinterest Vice Shoreditch gentrify fanny pack. Meggings street art fingerstache Neutra Kickstarter. Ennui small batch migas occupy, plaid typewriter jean shorts paleo. <br /><br />Sriracha meditation Pitchfork, literally ugh whatever fap actually tote bag gentrify. Next level sartorial single-origin coffee, banjo drinking vinegar Godard meditation McSweeney's beard occupy hella American Apparel letterpress. <br /><br />Vice pour-over banjo keffiyeh. Raw denim Kickstarter 8-bit Odd Future street art Carles. Synth cold-pressed master cleanse, next level aesthetic Helvetica Austin banh mi squid pickled. Actually fanny pack slow-carb stumptown pug, blog street art Schlitz Carles. Chambray kitsch biodiesel, cred Schlitz banjo readymade mumblecore.</p>
         <div className="main__embied">
            <em>Church key ugh sriracha slow-carb, you probably haven't heard of them put bird single origin coffee ork belly irony chia.</em>
         </div>
         <p>Authentic bespoke you probably haven't heard of them, Odd Future Pinterest jean shorts ugh Banksy kitsch shabby chic flannel PBR keffiyeh scenester. Migas cornhole cronut sriracha banh mi Pinterest Helvetica. Pickled taxidermy pop-up fashion axe, kale chips skateboard Blue Bottle. Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap cronut raw denim. Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast. Banjo tofu dreamcatcher 90's letterpress vinyl meggings, health goth readymade McSweeney's raw denim.</p>
         <div className="main__tags-share">
            <div className="main__tags">
            <FontAwesomeIcon className='main__tag-icon' icon={faTag} size="x"/>
            <p>Tags:</p>
            <span>
               <a href="#">School</a>,
               <a href="#">Students</a>,
               <a href="#">Classrooms</a>
            </span>
            </div>
            <div className="main__share">
               <div className="main__btn">
                  <a href="#">
                     Share
                     <FontAwesomeIcon className='main__btn-icon' icon={faShareAlt} size="x"/>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="single-post__comments comments">
      <div className="comments__heading">
         <h3>Comments</h3>
      </div>
      <div className="comments__item">
         <img src={Img1} alt="" />
         <h4>John Smith</h4>
         <span>1 hour ago</span>
         <div className="comments__btn">
            <a href="#">Reply</a>
         </div>
         <p>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</p>
      </div>
      <div className="comments__item _reply">
         <img src={Img3} alt="" />
         <h4>Anna Botsman</h4>
         <span>45 min ago</span>
         <div className="comments__btn">
            <a href="#">Reply</a>
         </div>
         <p>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</p>
      </div>
      <div className="comments__item _reply">
         <img src={Img2} alt="" />
         <h4>Sam Smith</h4>
         <span>35 min ago</span>
         <div className="comments__btn">
            <a href="#">Reply</a>
         </div>
         <p>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</p>
      </div>
      <div className="comments__item">
         <img src={Img4} alt="" />
         <h4>Jenifer Alison</h4>
         <span>12 min ago</span>
         <div className="comments__btn">
            <a href="#">Reply</a>
         </div>
         <p>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</p>
      </div>
   </div>
   <div className="single-post__send send">
      <div className="send__heading">
         <h3>Leave a comment</h3>
      </div>
      <div className="send__comment">
   
         <div className="row">
            <div className="col-md-6">
               <input type="text" placeholder='Full Name' name='name' />
            </div>
            <div className="col-md-6">
            <input type="text" placeholder='Email Address' name='email' />
            </div>
            <div className="col-md-12">
               <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
         </div>
        
         <div className="send__btn">
            <a href="#">Submit Comment</a>
         </div>
      </div>
   </div>
 </div>

  )
}

export default SinglePostMain