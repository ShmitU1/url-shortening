import React from 'react'
import Form from './Form/Form'
import CardSection from './CardSection/CardSection'

function MainSection() {
  return (
    <main className='main__container'>
      <Form />
      <article className='main__article'>
        <h1 className='main__article__title'>Advanced Statistics</h1>
        <p className='main__article__text'>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
      </article>
      <CardSection />
    </main>
  )
}

export default MainSection