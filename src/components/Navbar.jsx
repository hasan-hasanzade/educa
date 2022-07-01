import React from 'react'
import Logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEarthAmericas, faEnvelope, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom'


const Header = () => {

   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);

   return (
      <header className='header'>
         <div className="header__container _container">
           <div className="header__logo">
           <Link className='header__log' to="/"><img src={Logo} alt="Educa" /></Link>
           </div>
            <div className="header__menu menu">
               <div className="menu__info info">
                  <ul className="info__list">
                     <li className="info__item">
                        <span className="info__icon"><FontAwesomeIcon icon={faPhone} size="2xs"/></span>
                        <a href="#" className="info__link">+49 233 322 333</a>
                     </li>
                     <li className="info__item">
                        <span className="info__icon"><FontAwesomeIcon icon={faEnvelope} size="2xs"/></span>
                        <a href="#" className="info__link">your@website.com</a>
                     </li>
                     <li className="info__item">
                        
                        <div class="dropdownlang">
                        <span className="info__icon"><FontAwesomeIcon icon={faEarthAmericas} size="2xs"/></span>
                           <a class="dropbtn">English</a>
                           <div class="dropdown-content">
                              <a href="#">English</a>
                              <a href="#">French</a>
                              <a href="#">Azeri</a>
                           </div>
                        </div>
                     </li>
                     
                     <a href="#" className="info__btn">Apply Now</a>
                     
                  </ul>
               </div>
               <nav className="menu__nav">
               <ul className="menus">
               {menuItems.map((menu, index) => {
                  const depthLevel = 0;
                  return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
               })}
               </ul>
                  <li class="menu__item">
                     <a href="#" class="search" onClick={handleClick}><FontAwesomeIcon icon={faSearch} size="xs"/>
                     <div id="myOverlay" className={click ? 'overlay active' : 'overlay'}>
                     <span class="closebtn">×</span>
                     <div class="overlay-content">
                        <form>
                           <input type="text" placeholder="Type keyword(s) here..." name="search"/>
                           <button type="button">Search</button>
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

export default Header