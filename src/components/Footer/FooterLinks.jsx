import React from 'react'

function FooterLinks({headling, links}) {
  return (
    <article className='footer__section__article'>
        <h1 className='footer__section__article__title'>{headling}</h1>
        <ul className='footer__section__article__list'>
            {links.map(link => (
                <li key={link} className='footer__section__article__list__item'>{link}</li>
            ))}
        </ul>
    </article>
  )
}

export default FooterLinks