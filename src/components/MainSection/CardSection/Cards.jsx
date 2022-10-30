import React from 'react'

function Cards({icons, headling, paragrathText}) {

  return (
    <article className='main__cardsection__article'>
        <figure className='main__cardsection__image__container'>
            <img className='main__cardsection__image' src={icons} alt="icon" />
        </figure>
        <h1 className='main__cardsection__article__title'>{headling}</h1>
        <p className='main__cardsection__article__text'>{paragrathText}</p>
    </article>
  )
}

export default Cards