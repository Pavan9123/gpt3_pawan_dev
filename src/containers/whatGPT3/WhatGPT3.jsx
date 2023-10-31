import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'

const fetureData = {
  title1: 'What is GPT-3',
  text1: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
  title2: 'Chatbots',
  text2: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
  title3: 'Knowledgebase',
  text3: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  title4: 'Education',
  text4: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
}

function WhatGPT3() {
  return (
    <div className='gpt3__whtgpt3 section__margin' id='whgtp3'>
      <div className='gpt3__whtgpt3-feature'>
        <Feature title={fetureData.title1} text={fetureData.text1}/>
      </div>
      <div className='gpt3__whtgpt3-header'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p><a href="#blog">Explore The Library</a></p>
      </div>
      <div className='gpt3__whtgpt3-Features'>
        <Feature title={fetureData.title2} text={fetureData.text2}/>
        <Feature title={fetureData.title3} text={fetureData.text3}/>
        <Feature title={fetureData.title4} text={fetureData.text4}/>
        
      </div>

    </div>
  )
}

export default WhatGPT3