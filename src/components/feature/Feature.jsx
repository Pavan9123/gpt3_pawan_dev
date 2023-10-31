import React from 'react'
import './feature.css'

const Feature = ({title,text}) => {
  return (
    <div className='gpt3__feature'>
      <div className='gpt3__feature-title'>
        <span></span>
        <h3>{title}</h3>
      </div>
      <div className='gpt3__feature-text'>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Feature