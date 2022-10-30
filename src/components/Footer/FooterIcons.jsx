import React from 'react'

function FooterIcons({icon, link}) {
  return (
    <>
        <a href={link} target="_blank" rel="noreferrer">{icon}</a>
    </>
  )
}

export default FooterIcons