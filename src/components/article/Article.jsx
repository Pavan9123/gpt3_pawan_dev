import React from 'react';
import './article.css';


const Article = ({source , date}) => {
  return (
    <div className='gpt3__article-container'>
      <div className='gpt3__article-img'>
          <img src={source} alt="blog"/>
      </div>
      <div className='gpt3__article-content'>
        <div className='gpt3__article-text'>
          <span>{date}</span>
          <br />
          <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article