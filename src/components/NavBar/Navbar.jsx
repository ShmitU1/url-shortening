import React from 'react'
import Logo from '../../assets/images/logo.svg'
import Navbarhamburger from '../NavBar/NavbarHamburger'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar__left'>
                <figure className='navbar__logo__container'>
                    <img className='navbar__logo' src={Logo} alt="logo shortly"/>
                </figure>
                <ul className='navbar__list'>
                    <li className='navbar__list__item'>Features</li>
                    <li className='navbar__list__item'>Pricing</li>
                    <li className='navbar__list__item'>Resources</li>
                </ul>
            </div>
            <div className='navbar__right'>
                <p className='navbar__right__login'>Login</p>
                <button className='navbar__right__button'>Sign in</button>
            </div>
        </nav>
        <Navbarhamburger logo={Logo}/>
    </>
  )
}

export default Navbar