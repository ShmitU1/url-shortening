import React from 'react'
import FooterLinks from './FooterLinks'
import FooterIcons from './FooterIcons'
import LogoWhite from '../../assets/images/logo-white.svg'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer'>
        <figure className='footer___logo__container'>
            <img src={LogoWhite} alt="logo shortly" />
        </figure>
        <section className='footer__section'>
            <FooterLinks headling='Features' links={['Link Shortening', 'Branded Links', 'Analytics']} />
            <FooterLinks headling='Resources' links={['Blog', 'Developers', 'Support']} />
            <FooterLinks headling='Company' links={['About', 'Our Team', 'Careers', 'Contact']} />
        </section>
        <div className='footer__icons'>
          {/* <FooterIcons 
          icons={[<AiFillFacebook/>, <AiOutlineTwitter />, <AiOutlineInstagram />, <BsPinterest />]}
          links={['https://www.facebook.com/', 'https://twitter.com/', 'https://www.instagram.com/', 'https://pl.pinterest.com/']}
          /> */}
          <FooterIcons icon={<AiFillFacebook/>} link={'https://www.facebook.com/'}/>
          <FooterIcons icon={<AiOutlineTwitter />} link={'https://twitter.com/'}/>
          <FooterIcons icon={<AiOutlineInstagram />} link={'https://www.instagram.com/'}/>
          <FooterIcons icon={<BsPinterest />} link={'https://pl.pinterest.com/'}/>
        </div>
    </footer>
  )
}

export default Footer