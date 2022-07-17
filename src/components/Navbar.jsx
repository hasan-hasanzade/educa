import React from 'react'
import Logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEarthAmericas, faEnvelope, faBars, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState ,useRef} from 'react'
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom'
const Navbar = () => {


   const searchRef = useRef()
   const overlayRef = useRef()
   const [overlay, setOverlay] = useState(false);
   const [burger, setBurger] = useState(false);
   
   // const handleBurger = () => setBurger(!click)
   const handleClick = (e) => {
      if(overlayRef.current && (!e.target.classList.contains('overlay'))) {
         setOverlay(true)
         overlayRef.current.classList.add('active')
      }

      if(searchRef.current && e.target.classList.contains('closebtn')) {
         setOverlay(false)
         overlayRef.current.classList.remove('active')
      }

      if(searchRef.current &&  e.target.classList.contains('search-btn')) {
         setOverlay(false)
         overlayRef.current.classList.remove('active')
      }
   }

   const handleNavbar = () => {
      setBurger(!burger)
   }
      const closeMobileMenu = () => setBurger(false);

   

   return (
      <header className='header'>
         <div className="header__container _container">
           <div className="header__logo">
           <Link onClick={closeMobileMenu} to="/"><img src={Logo} alt="Educa" /></Link>
           </div> 
           
            <div className="header__menu menu">
            <div className="burger__btn">
               <div className={burger ? 'header__burger active' : 'header__burger'} onClick={handleNavbar}>
                  <span ></span>
               </div>
            </div>
               <div className="menu__info info">
                  <ul className="info__list">
                     <li className="info__item">
                        <span className="info__icon"><FontAwesomeIcon icon={faPhone} size="2xs"/></span>
                        <span className="info__text">+49 233 322 333</span>
                     </li>
                     <li className="info__item">
                        <span className="info__icon"><FontAwesomeIcon icon={faEnvelope} size="2xs"/></span>
                        <span className="info__text">your@website.com</span>
                     </li>
                     <li className="info__item">
                        <span className="info__icon"><FontAwesomeIcon icon={faEarthAmericas} size="2xs"/></span>
                        <select name="English">
                           <option value="-1">English</option>
                           <option value="">French</option>
                           <option value="">Russian</option>
                        </select>
                     </li>
                     
                     <a href="#" className="info__btn">Apply Now</a>
                     
                  </ul>
               </div>
               <nav className="menu__nav">
               <ul  className={burger ? 'menus active' : 'menus'}>
               {menuItems.map((menu, index) => {
                  return <MenuItems items={menu} key={index} burger={burger} setBurger={setBurger} />;
               })}   
               </ul>
                  <li class="menu__item">
                     <a href="#" class="search" onClick={handleClick}><FontAwesomeIcon icon={faSearch} size="xs"/>
                     <div id="myOverlay" className={overlay ? 'overlay active' : 'overlay'} ref={overlayRef}>
                     <span class="closebtn" ref={searchRef}>×</span>
                     <div class="overlay-content">
                        <form>
                           <input type="text" placeholder="Type keyword(s) here..." name="search"/>
                           <button type="button" className='search-btn'>Search</button>
                        </form>
                     </div>
                     </div></a>
                  </li>
               </nav>
            </div>
         </div>
      </header>
  )
}

export default Navbar