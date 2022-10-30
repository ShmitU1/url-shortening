import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarHamburger({logo}) {
  const [active, setActive] = useState(false)

  function showHideMenu() {
    setActive(!active)
  }

  return (
    <nav className='navbar__hamburger'>
      <div className='navbar__hamburger__left'>
        <figure className='navbar__hamburger__logo__container'>
          <img className='navbar__hamburger__logo' src={logo} alt="logo shortly" />
        </figure>
      </div>
      <GiHamburgerMenu onClick={showHideMenu}/>
      {active && 
        <div className='navbar__hamburger__menu'>
          <ul className='navbar__hamburger__list'>
            <li className='navbar__hamburger__list__item'>Features</li>
            <li className='navbar__hamburger__list__item'>Pricing</li>
            <li className='navbar__hamburger__list__item'>Resources</li>
          </ul>
          <div className='navbar__hamburger__bottom'>
                <p className='navbar__hamburger__login'>Login</p>
                <button className='navbar__hamburger__button'>Sign in</button>
          </div>
        </div>
      }
    </nav>
  )
}

export default NavbarHamburger