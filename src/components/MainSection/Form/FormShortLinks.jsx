import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


function FormShortLinks({data}) {
  return (
    <>
        {data && data.map((item, index) => (
        <div key={index} className='main__form__shortlinks'>
            <p className='main__form__shortlinks__orginal'>{item.original_link}</p>
            <div className='main__form__shortlinks__right'>
                <p className='main__form__shortlinks__full'>{item.full_short_link}</p>
                <CopyToClipboard text={item.full_short_link}>
                  <button className='main__form__shortlinks__button'>Copy</button>
                </CopyToClipboard>
            </div>
        </div>
        ))}
    </>
  )
}

export default FormShortLinks