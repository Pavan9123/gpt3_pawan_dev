import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'
import features from  '../../assets/Feature Image.png'

const data = {
  title1: 'What is GPT-3',
  text1: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
  title2: 'Chatbots',
  text2: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
  title3: 'Knowledgebase',
  text3: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  title4: 'Education',
  text4: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
}

function Features() {
  return (
    <div className='gpt3__feature-container section__margin' id='possibility'>
      <div className='gpt3__featutre-content'>
        <div className='gpt3__fetaure-header'>
          <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
          <p><a href="#home">Request Early Access to Get Started</a></p>
        </div>
        <div className='gpt3__feature-features'>
          <Feature title={data.title1} text={data.text1}/>
          <Feature title={data.title2} text={data.text2}/>
          <Feature title={data.title3} text={data.text3}/>
          <Feature title={data.title4} text={data.text4}/>
        </div>
      </div>
      <div className='gpt3__feature__container2'>
        <div className='gpt3__feature__container2-img'>
          <img src={features} alt="feature" />
        </div>
        <div className='gpt3__feature__container2-content'>
          <h4><a href="#home">Request Early Access to Get Started</a></h4>
          <h3 className='gradient__text'>The possibilities are beyond your imagination</h3>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <h4><a href="#home">Request Early Access to Get Started</a></h4>
        </div>
      </div>
    </div>
  )
}

export default Features