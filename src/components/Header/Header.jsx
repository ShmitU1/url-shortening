import React from 'react'
import Navbar from '../NavBar/Navbar'
import workingImg from '../../assets/images/illustration-working.svg'

function Header() {
  return (
    <header className='header'>
        <Navbar />
        <section className='header__section'>
          <figure className='header__img__container'>
            <img className='header__img' src={workingImg} alt="" />
          </figure>
          <article className='header__article'>
            <h1 className='header__article__title'>More than just shorter links</h1>
            <p className='header__article__text'>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
            <button id='form' className='header__article__button'>Get Started</button>
          </article>
        </section>
    </header>
  )
}

export default Header