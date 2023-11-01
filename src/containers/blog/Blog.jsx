import React from 'react'
import './blog.css'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'
import Article from '../../components/article/Article'

function Blog() {
  let today = new Date();

  // Get the month, day, and year
  let month = today.getMonth() + 1; // January is 0, so we add 1
  let day = today.getDate();
  let year = today.getFullYear();
  let formattedDate = `${month}/${day}/${year}`;
  return (
    <div className='gpt3__blog-container section__margin' id='blog'>
      <div className='gpt3__article-header'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog__content'>
        <div className='gpt3__blog__content-section1'>
          <Article source={blog1} date={formattedDate}/>
        </div>
        <div className='gpt3__blog__content-section2'>
          <Article source={blog2} date={formattedDate}/>
          <Article source={blog3} date={formattedDate}/>
          <Article source={blog4} date={formattedDate}/>
          <Article source={blog5} date={formattedDate}/>
        </div>
      </div>
      
    </div>
  )
}

export default Blog