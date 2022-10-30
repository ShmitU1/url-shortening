import React, {useState, useRef} from 'react'
import axios from 'axios'
import FormShortLinks from './FormShortLinks';

function Form() {
  const userInput = useRef(null);
  const [data, setData] = useState([])
  const [warnings, setWarnings] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if(userInput.current.value === '') {
      setWarnings('Please enter a link')
    } else {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${userInput.current.value}`)
        .then(res => {
          setData(prev => [...prev, res.data.result])
          setWarnings('')
        })
        .catch(err => {
          if(err.response.status === 400) {
            setWarnings('Please enter a valid link')
          } else {
            console.log(err)
          }
        })
    }
    }

  return (
    <>
      <form className='main__form' onSubmit={handleSubmit}>
          <input ref={userInput} className='main__form__input' type='text' placeholder='Shorten a link here...'/>
          {warnings && <p className='main__form__warning'>{warnings}</p>}<br />
          <button type='submit' className='main__form__button'>Shorten It!</button>
      </form>
      {data && <FormShortLinks data={data}/>}
    </>
  )
}

export default Form