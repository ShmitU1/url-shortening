import React from 'react'
import Cards from './Cards'
import Brand from '../../../assets/images/icon-brand-recognition.svg'
import Detailed from '../../../assets/images/icon-detailed-records.svg'
import Fully from '../../../assets/images/icon-fully-customizable.svg'

function CardSection() {
  return (
    <section className='main__cardsection'>
        <Cards 
            key={1} 
            icons={Brand}
            headling={'Brand Recognition'}
            paragrathText={'Boost your brand recognition with eachqhtrbfdb click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'}
        />
        <Cards 
            key={2} 
            icons={Detailed}
            headling={'Detailed Records'}
            paragrathText={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}
        />
        <Cards 
            key={3} 
            icons={Fully}
            headling={'Fully Customizable'}
            paragrathText={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
        />
    </section>
  )
}

export default CardSection